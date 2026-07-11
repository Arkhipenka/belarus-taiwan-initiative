import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EventCard from '../components/EventCard';
import { getEvents } from '../data/materials';

function Events() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language.split('-')[0] || 'en';

  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [showPast, setShowPast] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  const allEvents = useMemo(() => getEvents(lang), [lang]);

  const allCategories = useMemo(() => {
    const categoriesSet = new Set(['all']);
    allEvents.forEach(event => {
      event.categories?.forEach(cat => categoriesSet.add(cat));
    });
    return Array.from(categoriesSet);
  }, [allEvents]);

  const filteredEvents = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const now = new Date();

    return allEvents
      .filter(event => {
        const matchesCategory = category === 'all' || event.categories?.includes(category);
        const searchableText = [event.title, event.description].filter(Boolean).join(' ').toLowerCase();
        const matchesSearch = searchableText.includes(normalizedSearch);
        return matchesCategory && matchesSearch;
      })
      .filter(event => {
        const eventDate = new Date(event.date);
        return showPast ? eventDate < now : eventDate >= now;
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [allEvents, category, search, showPast]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);

  const applySearch = () => {
    setSearch(searchInput);
    setVisibleCount(6);
  };

  const selectCategory = (nextCategory) => {
    setCategory(nextCategory);
    setVisibleCount(6);
  };

  const togglePast = () => {
    setShowPast(prev => !prev);
    setVisibleCount(6);
  };

  return (
    <div className="articles-page events-page">
      <section className="articles-header page-hero page-hero-split events-hero">
        <div className="articles-text">
          <span className="page-hero-kicker">Public program</span>
          <h1>{t('events.title')}</h1>
          <p className="articles-subtitle">{t('events.subtitle')}</p>
        </div>

        <div className="page-hero-media" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}images/hero-taipei-mrt.jpg`} alt="" />
        </div>
      </section>

      <section className="events-filter-panel">
        <div className="events-filter-top">
          <div className="events-controls">
            <div className="events-search-box">
              <input
                type="text"
                placeholder={t('events.search')}
                value={searchInput}
                onChange={event => setSearchInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    applySearch();
                  }
                }}
              />
              <button onClick={applySearch}>
                {t('events.searchButton')}
              </button>
            </div>
          </div>

          <div className="events-filter-meta">
            <span className="events-count">{filteredEvents.length} / {allEvents.length}</span>
            <label className="events-past-toggle">
              <input
                type="checkbox"
                checked={showPast}
                onChange={togglePast}
              />
              {t('events.showPast')}
            </label>
          </div>
        </div>

        <div className="events-categories">
          {allCategories.map(cat => (
            <button
              key={cat}
              className={cat === category ? 'active' : ''}
              onClick={() => selectCategory(cat)}
            >
              {cat === 'all' ? t('articles.categories.all') : cat}
            </button>
          ))}
        </div>
      </section>

      <div className="events-grid">
        {visibleEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {visibleCount < filteredEvents.length && (
        <button
          className="search-button"
          style={{ marginBottom: '40px' }}
          onClick={() => setVisibleCount(prev => prev + 6)}
        >
          {t('articles.showMore')}
        </button>
      )}

      {filteredEvents.length === 0 && (
        <p className="no-results">{t('events.noResults')}</p>
      )}
    </div>
  );
}

export default Events;
