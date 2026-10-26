import PageIntro from '../components/PageIntro';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useSearchParams } from 'react-router-dom';
import { getArticles } from '../data/materials';
import { getAssetUrl } from '../utils/assets';
import { getBlockText, getMaterialExcerpt } from '../utils/text';
import { formatLongDate } from '../utils/date';

function ArticleIndexCard({ article, lang }) {
  const categoriesText = Array.isArray(article.categories)
    ? article.categories.join(' / ')
    : '';

  const excerptText = getMaterialExcerpt(article);
  const formattedDate = formatLongDate(article.date, lang);

  return (
    <Link
      to={`/${lang}/articles/${article.slug}`}
      className="hub-material articles-material"
    >
      {article.image && <div className="hub-material-image"><img src={getAssetUrl(article.image)} alt="" loading="lazy" /></div>}
      <div className="articles-material-body">
        <div className="hub-material-meta">
          <span>{categoriesText}</span>
          <span>{formattedDate}</span>
        </div>
        <h2>{article.shortTitle || article.title}</h2>
        <p>{excerptText}</p>
      </div>
    </Link>
  );
}

function Articles() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchInput, setSearchInput] = useState(initialSearch);
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const allArticles = useMemo(() => getArticles(lang), [lang]);

  const categories = useMemo(() => {
    const categorySet = new Set(['all']);
    allArticles.forEach(article => {
      article.categories?.forEach(cat => categorySet.add(cat));
    });
    return Array.from(categorySet);
  }, [allArticles]);

  const filteredArticles = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return allArticles.filter(article => {
      const matchesCategory =
        category === 'all' || article.categories?.includes(category);

      const articleText = Array.isArray(article.content)
        ? article.content.map(getBlockText).join(' ')
        : '';

      const searchableText = [
        article.title,
        article.shortTitle,
        article.lead,
        articleText
      ].filter(Boolean).join(' ').toLowerCase();

      return matchesCategory && searchableText.includes(normalizedSearch);
    });
  }, [allArticles, category, search]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const applySearch = () => {
    const nextSearch = searchInput.trim();
    setSearch(nextSearch);
    setVisibleCount(6);
    setSearchParams(nextSearch ? { search: nextSearch } : {});
  };

  const selectCategory = (nextCategory) => {
    setCategory(nextCategory);
    setVisibleCount(6);
  };

  return (
    <div className="articles-page home-hub">
      <PageIntro title={t('articles.title')} description={t('articles.subtitle')} />

      <section className="articles-controls content-filter-panel">
        <div className="content-filter-top">
          <div className="articles-search-box">
            <input
              type="search"
              aria-label={t('articles.search')}
              placeholder={t('articles.search')}
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  applySearch();
                }
              }}
              className="articles-search"
            />

            <button
              className="search-button"
              onClick={applySearch}
            >
              {t('articles.searchButton')}
            </button>
          </div>

          <div className="articles-categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${cat === category ? 'active' : ''}`}
                aria-pressed={cat === category}
                onClick={() => selectCategory(cat)}
              >
                {t(`articles.categories.${cat}`, cat)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="hub-section articles-results" aria-live="polite">
        <div className="hub-materials articles-materials">
          {visibleArticles.map(article => (
            <ArticleIndexCard key={article.slug || article.id} article={article} lang={lang} />
          ))}
        </div>

      {visibleCount < filteredArticles.length && (
        <button
          className="search-button"
          onClick={() => setVisibleCount(prev => prev + 6)}
        >
          {t('articles.showMore')}
        </button>
      )}

      {filteredArticles.length === 0 && (
        <p className="no-results">{t('articles.noResults')}</p>
      )}
      </section>
    </div>
  );
}

export default Articles;
