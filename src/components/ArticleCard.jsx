import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function stripHtml(value) {
  return value.replace(/<[^>]+>/g, '').trim();
}

function getBlockText(block) {
  if (typeof block === 'string') {
    return stripHtml(block);
  }

  if (block && typeof block === 'object') {
    return block.text || block.caption || block.alt || '';
  }

  return '';
}

function getAssetUrl(src) {
  if (!src || src.startsWith('http') || src.startsWith(import.meta.env.BASE_URL)) {
    return src;
  }

  if (src.startsWith('/images/')) {
    return `${import.meta.env.BASE_URL}${src.slice(1)}`;
  }

  return src;
}

function ArticleCard({ article, featured, compact }) {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];
  const articleUrl = `/${lang}/articles/${article.slug}`;

  const categoriesText = Array.isArray(article.categories)
    ? article.categories.join(' / ')
    : '';

  const firstTextBlock = Array.isArray(article.content)
    ? article.content.find(block => getBlockText(block))
    : null;

  const excerptText = article.lead || getBlockText(firstTextBlock);

  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  const openArticle = () => navigate(articleUrl);

  return (
    <div
      className={[
        'article-card',
        featured ? 'featured' : '',
        compact ? 'compact' : ''
      ].filter(Boolean).join(' ')}
      onClick={openArticle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openArticle();
        }
      }}
      role="button"
      tabIndex={0}
    >
      {!compact && (
        <img
          src={getAssetUrl(article.image)}
          alt={article.title}
          className={featured ? 'article-image-full' : 'article-image'}
        />
      )}

      {featured ? (
        <div className="article-overlay">
          <h3>{article.title}</h3>
          <div className="article-meta">
            <span className="article-category">{categoriesText}</span>
            <span className="article-date">{formattedDate}</span>
          </div>
          <p>{excerptText}</p>
        </div>
      ) : (
        <div className="article-text">
          <h3>{article.title}</h3>
          <div className="article-meta">
            <span className="article-category">{categoriesText}</span>
            <span className="article-date">{formattedDate}</span>
          </div>
          <p>{excerptText}</p>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
