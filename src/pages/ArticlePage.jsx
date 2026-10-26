import MaterialDownloads from '../components/MaterialDownloads';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import ArticleGallery from '../components/ArticleGallery';
import RelatedMaterial from '../components/RelatedMaterial';
import { detailLabels } from '../data/detail-labels';
import { getArticleBySlug, getArticles, getNews, getEventBySlug } from '../data/materials';
import { getAssetUrl } from '../utils/assets';
import { formatLongDate } from '../utils/date';


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
    if (!article) return [];
    const topicsBySlug = {
      'platform-at-warsaw-memory-conference-2026': ['historical-memory','political-repression','museums'],
      'incident-228-white-terror-taiwan-2025': ['historical-memory','political-repression','transitional-justice'],
      'pobeda-nad-aes-spustya-sorok-let-protestov-i-takoe-vozmozhno1': ['nuclear-energy','environment','civic-activism']
    };
    const topics = item => item.topics || topicsBySlug[item.slug] || item.categories || [];
    const currentTopics = new Set(topics(article));
    return [...getArticles(lang), ...getNews(lang)]
      .filter(item => item.slug !== slug)
      .map(item => ({item,score:topics(item).filter(topic=>currentTopics.has(topic)).length}))
      .filter(({score})=>score>0)
      .sort((a,b)=>b.score-a.score)
      .slice(0,3).map(({item})=>item);
  }, [article, lang, slug]);

  const [views, setViews] = useState(0);
  useEffect(() => {
    if (!article) return;
    const viewKey = `views-${lang}-${slug}`;
    const storedViews = Number.parseInt(localStorage.getItem(viewKey), 10);
    const newViews = Number.isNaN(storedViews) ? 1 : storedViews + 1;
    localStorage.setItem(viewKey, String(newViews));
    const timer = window.setTimeout(() => setViews(newViews), 0);
    return () => window.clearTimeout(timer);
  }, [article, lang, slug]);

  function renderContentBlock(block, index) {
    if (typeof block === 'string') {
      return (
        <div
          key={index}
          className="article-content-block"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block) }}
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

  const detail = detailLabels[lang] || detailLabels.en;
  const isNews = getNews(lang).some(item => item.slug === slug);
  const relatedEvent = article.relatedEvent ? getEventBySlug(lang, article.relatedEvent) : null;
  const formattedDate = formatLongDate(article.date, lang);

  const categoriesText = article.categories?.length > 0
    ? article.categories.join(' / ')
    : '';

  return (
    <article className={"article-page" + (relatedArticles.length ? " has-related-rail" : "")}>
      <header className="article-hero-header material-detail-header">
        <Link className="material-back-link" to={'/'+lang+'/'+(isNews?'news':'articles')}>← {isNews?detail.news:labels.allArticles}</Link>
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

      {article.translationNote && <p className="article-lead">{article.translationNote}</p>}

      <div className="article-body">
        {Array.isArray(article.content) &&
          article.content.map((block, index) => renderContentBlock(block, index))}
      </div>

      <MaterialDownloads items={article.attachments}/>
      {relatedEvent && <RelatedMaterial to={'/'+lang+'/events/'+relatedEvent.slug} label={detail.details} title={relatedEvent.title} image={getAssetUrl(relatedEvent.image)}/>}
      <ArticleGallery gallery={article.gallery} />

      <footer className="article-footer">
        {article.source && article.source.url && (
          <p className="article-source">
            Source:{' '}
            <a href={article.source.url} target="_blank" rel="noopener noreferrer">
              {article.source.name || article.source.url}
            </a>
          </p>
        )}
      </footer>

      {relatedArticles.length > 0 && <aside className="article-related-rail" aria-label={({by:'Па тэме',ru:'По теме',en:'Related reading',pl:'Powiązane materiały',zh:'相關閱讀'})[lang] || 'Related reading'}>
        <h2>{({by:'Па тэме',ru:'По теме',en:'Related reading',pl:'Powiązane materiały',zh:'相關閱讀'})[lang] || 'Related reading'}</h2>
        <div className="article-rail-cards">{relatedArticles.map(item=><Link className="article-rail-card" key={item.slug} to={'/'+lang+'/'+(item.kind==='news'?'news':'articles')+'/'+item.slug}>
          {item.image && <img src={getAssetUrl(item.image)} alt="" loading="lazy"/>}
          <span className="article-rail-date">{formatLongDate(item.date,lang)}</span>
          <h3>{item.shortTitle || item.title}</h3>
        </Link>)}</div>
        <Link className="article-rail-all" to={'/'+lang+'/articles'}>{labels.allArticles} ↗</Link>
      </aside>}

    </article>
  );
}

export default ArticlePage;
