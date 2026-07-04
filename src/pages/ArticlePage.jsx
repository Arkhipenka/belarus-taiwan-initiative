import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import ArticleGallery from '../components/ArticleGallery';
import ArticleCard from '../components/ArticleCard';
import { translateArticle, uniqueMaterials } from '../data/materialTranslations';
import { getAssetUrl } from '../utils/assets';

const articleModules = import.meta.glob('../data/articles/*/*.json', {
  eager: true,
  import: 'default'
});

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

function getStoredJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function ArticlePage() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language.split('-')[0];
  const labels = articleLabels[lang] || articleLabels.en;

  const article = useMemo(() => {
    return Object.entries(articleModules)
      .filter(([path]) => path.includes(`/articles/${lang}/`))
      .map(([, data]) => translateArticle(data, lang))
      .find(item => item.slug === slug);
  }, [lang, slug]);

  const relatedArticles = useMemo(() => {
    const articles = Object.entries(articleModules)
      .filter(([path]) => path.includes(`/articles/${lang}/`))
      .map(([, data]) => translateArticle(data, lang));

    return uniqueMaterials(articles)
      .filter(item => item.slug !== slug)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, [lang, slug]);

  const [views, setViews] = useState(0);
  const [reactions, setReactions] = useState({
    like: 0,
    love: 0,
    fire: 0
  });

  useEffect(() => {
    if (!article) return;

    const viewKey = `views-${lang}-${slug}`;
    const storedViews = Number.parseInt(localStorage.getItem(viewKey), 10);
    const newViews = Number.isNaN(storedViews) ? 1 : storedViews + 1;
    const storedReactions = getStoredJson(`reactions-${lang}-${slug}`, {
      like: 0,
      love: 0,
      fire: 0
    });

    localStorage.setItem(viewKey, String(newViews));
    const timer = window.setTimeout(() => {
      setViews(newViews);
      setReactions(storedReactions);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [article, lang, slug]);

  function addReaction(type) {
    const newReactions = {
      ...reactions,
      [type]: reactions[type] + 1
    };

    setReactions(newReactions);
    localStorage.setItem(`reactions-${lang}-${slug}`, JSON.stringify(newReactions));
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
            <img
              src={getAssetUrl(block.src)}
              alt={block.alt || ''}
              className="article-inline-image"
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

  const formattedDate = new Date(article.date).toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

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
          <img src={getAssetUrl(article.image)} alt={article.title} className="article-main-image" />
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
          <button className="reaction-button reaction-like" onClick={() => addReaction('like')} aria-label="Like">
            <span className="reaction-icon" aria-hidden="true">↑</span>
            <span className="reaction-count">{reactions.like}</span>
          </button>

          <button className="reaction-button reaction-love" onClick={() => addReaction('love')} aria-label="Love">
            <span className="reaction-icon" aria-hidden="true">♥</span>
            <span className="reaction-count">{reactions.love}</span>
          </button>

          <button className="reaction-button reaction-fire" onClick={() => addReaction('fire')} aria-label="Fire">
            <span className="reaction-icon" aria-hidden="true">★</span>
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
