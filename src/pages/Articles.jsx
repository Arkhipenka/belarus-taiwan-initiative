import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { translateArticle, uniqueMaterials } from '../data/materialTranslations';
import { getAssetUrl } from '../utils/assets';

const articleModules = import.meta.glob('../data/articles/*/*.json', {
  eager: true,
  import: 'default'
});

function getBlockText(block) {
  if (typeof block === 'string') {
    return block.replace(/<[^>]+>/g, ' ');
  }

  if (block && typeof block === 'object') {
    return [block.text, block.caption, block.alt].filter(Boolean).join(' ');
  }

  return '';
}

function ArticleIndexCard({ article, lang, variant = 'grid' }) {
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

  return (
    <Link
      to={`/${lang}/articles/${article.slug}`}
      className={`articles-index-card articles-index-card-${variant}`}
    >
      <img src={getAssetUrl(article.image)} alt={article.title} />
      <div className="articles-index-card-body">
        <div className="articles-index-meta">
          <span>{categoriesText}</span>
          <span>{formattedDate}</span>
        </div>
        <h2>{article.title}</h2>
        <p>{excerptText}</p>
      </div>
    </Link>
  );
}

function Articles() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];

  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const allArticles = useMemo(() => {
    const articles = Object.entries(articleModules)
      .filter(([path]) => path.includes(`/articles/${lang}/`))
      .map(([, data]) => translateArticle(data, lang));

    return uniqueMaterials(articles)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [lang]);

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
        article.lead,
        articleText
      ].filter(Boolean).join(' ').toLowerCase();

      return matchesCategory && searchableText.includes(normalizedSearch);
    });
  }, [allArticles, category, search]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasEditorialLayout = visibleArticles.length >= 3;
  const leadArticle = hasEditorialLayout ? visibleArticles[0] : null;
  const sideArticles = hasEditorialLayout ? visibleArticles.slice(1, 3) : [];
  const secondaryArticles = hasEditorialLayout ? visibleArticles.slice(3) : visibleArticles;
  const latestArticles = allArticles
    .filter(article => article.slug !== leadArticle?.slug)
    .slice(0, 5);

  const applySearch = () => {
    setSearch(searchInput);
    setVisibleCount(6);
  };

  const selectCategory = (nextCategory) => {
    setCategory(nextCategory);
    setVisibleCount(6);
  };

  return (
    <div className="articles-page">
      <section className="articles-header page-hero page-hero-compact">
        <div className="articles-text">
          <span className="page-hero-kicker">Belarus-Taiwan Platform</span>
          <h1>{t('articles.title')}</h1>
          <p className="articles-subtitle">{t('articles.subtitle')}</p>
        </div>
      </section>

      <section className="articles-controls content-filter-panel">
        <div className="content-filter-top">
          <div className="articles-search-box">
            <input
              type="text"
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
                onClick={() => selectCategory(cat)}
              >
                {t(`articles.categories.${cat}`, cat)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="articles-index-shell">
        <main className="articles-index-main">
          {hasEditorialLayout && leadArticle && (
            <section className="articles-index-featured">
              <ArticleIndexCard
                article={leadArticle}
                lang={lang}
                variant="lead"
              />

              {sideArticles.length > 0 && (
                <div className="articles-index-side">
                  {sideArticles.map(article => (
                    <ArticleIndexCard
                      key={article.slug || article.id}
                      article={article}
                      lang={lang}
                      variant="side"
                    />
                  ))}
                </div>
              )}
            </section>
          )}

          {secondaryArticles.length > 0 && (
            <section className="articles-index-grid">
              {secondaryArticles.map(article => (
                <ArticleIndexCard
                  key={article.slug || article.id}
                  article={article}
                  lang={lang}
                  variant="grid"
                />
              ))}
            </section>
          )}
        </main>

        {latestArticles.length > 0 && (
          <aside className="articles-index-sidebar">
            <h2>{t('articles.latestTitle')}</h2>
            <div className="articles-latest-list">
              {latestArticles.map(article => (
                <Link
                  key={article.slug || article.id}
                  to={`/${lang}/articles/${article.slug}`}
                  className="articles-latest-link"
                >
                  <span>{article.date ? new Date(article.date).toLocaleDateString(lang, { day: 'numeric', month: 'short', year: 'numeric' }) : ''}</span>
                  <strong>{article.title}</strong>
                </Link>
              ))}
            </div>
          </aside>
        )}
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
