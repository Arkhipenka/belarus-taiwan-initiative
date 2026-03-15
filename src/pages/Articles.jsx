import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ArticleCard from '../components/ArticleCard';

function Articles() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';

  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [allArticles, setAllArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [categories, setCategories] = useState(['all']);


  useEffect(() => {
  const fetchArticles = async () => {
    try {
      const lang = i18n.language.split('-')[0];
      const modules = import.meta.glob(`../data/events/${lang}/*.json`, { eager: true, import: 'default' });

      const loadedArticles = Object.values(modules);
      setAllArticles(loadedArticles);

      const allCategories = new Set();
        loadedArticles.forEach(article => {
          article.categories?.forEach(cat => allCategories.add(cat));
        });
        setCategories(['all', ...Array.from(allCategories)]);
    } catch (err) {
      console.error('Ошибка загрузки статей', err);
    }
  };

  fetchArticles();
}, [lang]);



  // фильтрация статей
  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = category === 'all' || article.categories.includes(category);
    const matchesSearch =
      article.title?.toLowerCase().includes(search.toLowerCase()) ||
      (Array.isArray(article.content) &&
        article.content.some(p => p.toLowerCase().includes(search.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="articles-page">
      <section className="articles-header">
        <div className="articles-text">
          <h1>{t('articles.title')}</h1>
          <p className="articles-subtitle">{t('articles.subtitle')}</p>
        </div>
      </section>

      <div className="articles-controls">
        <div className="articles-search-box">
          <input
            type="text"
            placeholder={t('articles.search')}
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            className="articles-search"
          />
          <button className="search-button" onClick={() => setSearch(searchInput)}>
            {t('articles.searchButton')}
          </button>
        </div>

        <div className="articles-categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${cat === category ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {t(`articles.categories.${cat}`, cat)}
              {/* Если нет перевода, отображаем имя категории */}
            </button>
          ))}
        </div>
      </div>

      <div className="articles-grid">
        {visibleArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {visibleCount < filteredArticles.length && (
        <button
          className="search-button"
          style={{ marginBottom: '40px' }}
          onClick={() => setVisibleCount(prev => prev + 6)}
        >
          {t('articles.showMore')}
        </button>
      )}

      {filteredArticles.length === 0 && (
        <p className="no-results">{t('articles.noResults')}</p>
      )}
    </div>
  );
}

export default Articles;
