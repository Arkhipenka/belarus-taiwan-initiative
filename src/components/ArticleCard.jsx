import { useNavigate, useParams } from 'react-router-dom'

function ArticleCard({ article, featured }) {
  const { lang } = useParams()
  const navigate = useNavigate()

  const categoriesText = Array.isArray(article.categories)
    ? article.categories.join(' / ')
    : ''

  const excerptText = article.excerpt
    ? article.excerpt
    : Array.isArray(article.content)
      ? article.content[0]
      : ''

  return (
    <div
      className={featured ? 'article-card featured' : 'article-card'}
      onClick={() => navigate(`/${lang}/articles/${article.id}`)}
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
            <span className="article-date">
              {article.date
                ? new Date(article.date).toLocaleDateString()
                : ''}
            </span>
          </div>
          <p>{excerptText}</p>
        </div>
      ) : (
        <div className="article-text">
          <h3>{article.title}</h3>
          <div className="article-meta">
            <span className="article-category">{categoriesText}</span>
            <span className="article-date">
              {article.date
                ? new Date(article.date).toLocaleDateString()
                : ''}
            </span>
          </div>
          <p>{excerptText}</p>
        </div>
      )}
    </div>
  )
}

export default ArticleCard