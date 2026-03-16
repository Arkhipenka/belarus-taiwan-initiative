import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ArticleCard({ article, featured }) {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];

  const categoriesText = Array.isArray(article.categories)
    ? article.categories.join(' / ')
    : '';

  const excerptText = article.lead
    ? article.lead
    : Array.isArray(article.content)
      ? article.content[0].replace(/<[^>]+>/g, '')
      : '';

  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return (
    <div
      className={featured ? 'article-card featured' : 'article-card'}
      onClick={() => navigate(`/${lang}/articles/${article.slug}`)}
      role="button"
      tabIndex={0}
    >
      <img
        src={article.image}
        alt={article.title}
        className={featured ? 'article-image-full' : 'article-image'}
      />

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