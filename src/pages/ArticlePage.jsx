import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import ArticleGallery from '../components/ArticleGallery';
import ArticleCard from '../components/ArticleCard';
import { getArticleBySlug, getArticles } from '../data/materials';
import { getAssetUrl } from '../utils/assets';
import { formatLongDate } from '../utils/date';
import {
  fetchArticleReactions,
  readSelectedReaction,
  readLocalReactions,
  toggleArticleReaction,
  toggleLocalReaction,
  writeSelectedReaction
} from '../utils/reactions';

const articleLabels = {
  by: {
    category: 'РУБРЫКА',
    author: 'Аўтар',
    readAlso: 'Чытай таксама',
    allArticles: 'Усе матэрыялы'
  },
  ru: {
    category: 'РУБРИКА',
    author: 'Автор',
    readAlso: 'Читайте также',
    allArticles: 'Все материалы'
  },
  en: {
    category: 'CATEGORY',
    author: 'Author',
    readAlso: 'Read also',
    allArticles: 'All articles'
  },
  pl: {
    category: 'KATEGORIA',
    author: 'Autor',
    readAlso: 'Czytaj także',
    allArticles: 'Wszystkie artykuły'
  },
  zh: {
    category: '分類',
    author: '作者',
    readAlso: '延伸閱讀',
    allArticles: '所有文章'
  }
};

function getImageFrameStyle(src) {
  return {
    '--article-image': `url("${getAssetUrl(src)}")`
  };
}

function ArticleImage({ src, alt, imageClassName, frameClassName }) {
  const [isNarrow, setIsNarrow] = useState(false);
  const resolvedSrc = getAssetUrl(src);

  return (
    <div
      className={`article-image-frame ${frameClassName} ${isNarrow ? 'is-narrow-image' : ''}`}
      style={getImageFrameStyle(src)}
    >
      <img
        src={resolvedSrc}
        alt={alt}
        className={imageClassName}
        onLoad={(event) => {
          const image = event.currentTarget;
          setIsNarrow(image.naturalWidth < image.clientWidth * 1.08);
        }}
      />
    </div>
  );
}

function ArticlePage() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language.split('-')[0];
  const labels = articleLabels[lang] || articleLabels.en;

  const article = useMemo(() => getArticleBySlug(lang, slug), [lang, slug]);

  const relatedArticles = useMemo(() => {
    return getArticles(lang)
      .filter(item => item.slug !== slug)
      .slice(0, 3);
  }, [lang, slug]);

  const [views, setViews] = useState(0);
  const [reactions, setReactions] = useState({
    like: 0,
    love: 0,
    fire: 0
  });
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [reactionStatus, setReactionStatus] = useState('idle');

  useEffect(() => {
    if (!article) return;

    const viewKey = `views-${lang}-${slug}`;
    const storedViews = Number.parseInt(localStorage.getItem(viewKey), 10);
    const newViews = Number.isNaN(storedViews) ? 1 : storedViews + 1;
    const storedReactions = readLocalReactions(slug, lang);

    localStorage.setItem(viewKey, String(newViews));
    const timer = window.setTimeout(() => {
      setViews(newViews);
      setReactions(storedReactions);
      setSelectedReaction(readSelectedReaction(slug));
    }, 0);

    fetchArticleReactions(slug)
      .then(({ reactions: serverReactions, selected }) => {
        setReactions(serverReactions);
        setSelectedReaction(selected);
        setReactionStatus('idle');
      })
      .catch(() => {
        setReactionStatus('offline');
      });

    return () => window.clearTimeout(timer);
  }, [article, lang, slug]);

  async function addReaction(type) {
    if (reactionStatus === 'saving') return;

    const previousReactions = reactions;
    const previousSelectedReaction = selectedReaction;
    const optimistic = toggleLocalReaction(reactions, selectedReaction, type);

    setReactions(optimistic.reactions);
    setSelectedReaction(optimistic.selected);
    setReactionStatus('saving');
    writeSelectedReaction(slug, optimistic.selected);

    try {
      const result = await toggleArticleReaction(slug, type);
      setReactions(result.reactions);
      setSelectedReaction(result.selected);
      setReactionStatus(result.action);
    } catch {
      setReactions(previousReactions);
      setSelectedReaction(previousSelectedReaction);
      writeSelectedReaction(slug, previousSelectedReaction);
      setReactionStatus('offline');
    }
  }

  function renderContentBlock(block, index) {
    if (typeof block === 'string') {
      return (
        <div
          key={index}
          className="article-content-block"
          dangerouslySetInnerHTML={{ __html: block }}
        />
      );
    }

    if (!block || typeof block !== 'object') return null;

    switch (block.type) {
      case 'paragraph':
        return <p key={index}>{block.text}</p>;

      case 'heading': {
        const level = Math.min(Math.max(Number(block.level) || 2, 2), 4);
        const Tag = `h${level}`;
        return <Tag key={index}>{block.text}</Tag>;
      }

      case 'link':
        return (
          <p key={index}>
            <a href={block.url} target="_blank" rel="noopener noreferrer">
              {block.name || block.url}
            </a>
          </p>
        );

      case 'image':
        return (
          <figure key={index} className="article-main-image-block">
            <ArticleImage
              src={block.src}
              alt={block.alt || ''}
              imageClassName="article-inline-image"
              frameClassName="article-inline-frame"
            />
            {block.caption && (
              <figcaption className="image-caption">{block.caption}</figcaption>
            )}
          </figure>
        );

      default:
        return null;
    }
  }

  if (!article) return <p>Article not found.</p>;

  const formattedDate = formatLongDate(article.date, lang);

  const categoriesText = article.categories?.length > 0
    ? article.categories.join(' / ')
    : '';

  return (
    <article className="article-page">
      <header className="article-hero-header">
        {categoriesText && (
          <p className="article-kicker">{categoriesText}</p>
        )}

        <h1>{article.title}</h1>

        <div className="article-meta article-meta-stack">
          <span>{formattedDate}</span>

          {categoriesText && (
            <span>{labels.category}: {categoriesText}</span>
          )}

          {article.author && (
            <span>
              {labels.author}:{' '}
              <span
                className="article-author"
                onClick={() =>
                  navigate(`/${lang}/author/${encodeURIComponent(article.author)}`)
                }
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    navigate(`/${lang}/author/${encodeURIComponent(article.author)}`);
                  }
                }}
              >
                {article.author}
              </span>
            </span>
          )}

          <span className="article-views">
            {views}
          </span>
        </div>
      </header>

      {article.image && (
        <figure className="article-main-image-block article-cover-block">
          <ArticleImage
            src={article.image}
            alt={article.title}
            imageClassName="article-main-image"
            frameClassName="article-cover-frame"
          />
          {article.imageCaption && (
            <figcaption className="image-caption">{article.imageCaption}</figcaption>
          )}
        </figure>
      )}

      {article.lead && (
        <p className="article-lead article-standfirst">{article.lead}</p>
      )}

      <div className="article-body">
        {Array.isArray(article.content) &&
          article.content.map((block, index) => renderContentBlock(block, index))}
      </div>

      <ArticleGallery gallery={article.gallery} />

      <footer className="article-footer">
        <div className="article-reactions">
          <button
            className={`reaction-button reaction-like ${selectedReaction === 'like' ? 'is-active' : ''}`}
            onClick={() => addReaction('like')}
            aria-label="Like"
            aria-pressed={selectedReaction === 'like'}
          >
            <span className="reaction-icon" aria-hidden="true">+</span>
            <span className="reaction-count">{reactions.like}</span>
          </button>

          <button
            className={`reaction-button reaction-love ${selectedReaction === 'love' ? 'is-active' : ''}`}
            onClick={() => addReaction('love')}
            aria-label="Love"
            aria-pressed={selectedReaction === 'love'}
          >
            <span className="reaction-icon" aria-hidden="true">{'\u2665'}</span>
            <span className="reaction-count">{reactions.love}</span>
          </button>

          <button
            className={`reaction-button reaction-fire ${selectedReaction === 'fire' ? 'is-active' : ''}`}
            onClick={() => addReaction('fire')}
            aria-label="Fire"
            aria-pressed={selectedReaction === 'fire'}
          >
            <span className="reaction-icon" aria-hidden="true">*</span>
            <span className="reaction-count">{reactions.fire}</span>
          </button>
        </div>

        {article.source && article.source.url && (
          <p className="article-source">
            Source:{' '}
            <a href={article.source.url} target="_blank" rel="noopener noreferrer">
              {article.source.name || article.source.url}
            </a>
          </p>
        )}
      </footer>

      {relatedArticles.length > 0 && (
        <section className="related-articles">
          <div className="section-heading">
            <h2 className="section-title">{labels.readAlso}</h2>
            <button
              className="text-button"
              onClick={() => navigate(`/${lang}/articles`)}
            >
              {labels.allArticles}
            </button>
          </div>

          <div className="related-articles-grid">
            {relatedArticles.map(item => (
              <ArticleCard
                key={item.slug || item.id}
                article={item}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export default ArticlePage;
