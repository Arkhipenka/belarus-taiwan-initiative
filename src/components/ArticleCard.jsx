import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ArticleCard({ article }) {
  const { t } = useTranslation()
  const { lang } = useParams()
  const navigate = useNavigate()

  return (
    <div
      className="article-card"
      onClick={() => navigate(`/${lang}/articles/${article.id}`)}
      role="button"
      tabIndex={0}
    >
      <img src={article.image} alt={article.alt || ''} />

      <div className="article-text">
        <h3>{t(article.title)}</h3>
        <p>{t(article.excerpt)}</p>
      </div>
    </div>
  )
}

export default ArticleCard
