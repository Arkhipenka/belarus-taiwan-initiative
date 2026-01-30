import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import ArticleCard from '../components/ArticleCard'

function Articles() {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const categories = [
    'all',
    'political',
    'culture',
    'belarus_taiwan'
  ]

  const articles = [
    {
      id: 1,
      title: 'articles.article1Title',
      excerpt: 'articles.article1Excerpt',
      category: 'political',
      image: '/images/article1.jpg'
    },
    {
      id: 2,
      title: 'articles.article2Title',
      excerpt: 'articles.article2Excerpt',
      category: 'culture',
      image: '/images/article2.jpg'
    },
    {
      id: 3,
      title: 'articles.article3Title',
      excerpt: 'articles.article3Excerpt',
      category: 'belarus_taiwan',
      image: '/images/article3.jpg'
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory =
      category === 'all' || article.category === category

    const matchesSearch =
      t(article.title).toLowerCase().includes(search.toLowerCase()) ||
      t(article.excerpt).toLowerCase().includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="articles-page">
      <h1>{t('articles.title')}</h1>

      {/* Поиск */}
      <input
        type="text"
        placeholder={t('articles.search')}
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="articles-search"
      />

      {/* Категории */}
      <div className="articles-categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === category ? 'active' : ''}
            onClick={() => setCategory(cat)}
          >
            {t(`articles.categories.${cat}`)}
          </button>
        ))}
      </div>

      {/* Список статей */}
      <div className="articles-grid">
        {filteredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default Articles
