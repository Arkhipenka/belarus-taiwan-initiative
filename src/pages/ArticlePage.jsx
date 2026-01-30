import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

const articles = import.meta.glob('../data/articles/**/**/*.json')

function ArticlePage() {
  const { id } = useParams()
  const { i18n } = useTranslation()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const lang = i18n.language.split('-')[0]
    const path = `../data/articles/${lang}/${id}.json`

    if (!articles[path]) {
      setArticle(null)
      setLoading(false)
      return
    }

    articles[path]().then(module => {
      setArticle(module.default)
      setLoading(false)
    })
  }, [id, i18n.language])

  if (loading) return <p>Loading...</p>
  if (!article) return <p>Article not found</p>

  return (
    <article className="article-page">
      <h1>{article.title}</h1>

      <p className="article-meta">
        <span>{article.date}</span> · <span>{article.category}</span>
      </p>

      {article.image && (
        <img src={article.image} alt={article.title} />
      )}

      {article.content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </article>
  )
}

export default ArticlePage
