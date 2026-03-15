import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function useEvents() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';
  console.log('Текущий язык сайта:', lang);

  const [allEvents, setAllEvents] = useState([]);
  const [allCategories, setAllCategories] = useState(['all']);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [showPast, setShowPast] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Подгрузка JSON по языку
        const modules = lang === 'zh'
          ? import.meta.glob('../data/events/zh/*.json', { eager: true, import: 'default' })
          : import.meta.glob(`../data/events/${lang}/*.json`, { eager: true, import: 'default' });

        console.log('Импортированные модули:', modules);

        const loadedEvents = Object.values(modules).flat();
        console.log('Загруженные события:', loadedEvents);

        setAllEvents(loadedEvents);

        // Собираем категории
        const categoriesSet = new Set(['all']);
        loadedEvents.forEach(event => {
          event.categories?.forEach(cat => categoriesSet.add(cat));
        });
        const categoriesArray = Array.from(categoriesSet);
        console.log('Все категории:', categoriesArray);
        setAllCategories(categoriesArray);

      } catch (err) {
        console.error('Ошибка при загрузке событий:', err);
      }
    };

    fetchEvents();
  }, [lang]);

  // Фильтрация
  const filteredEvents = allEvents
    .filter(event => {
      const matchesCategory = category === 'all' || event.categories?.includes(category);
      const matchesSearch =
        event.title?.toLowerCase().includes(search.toLowerCase()) ||
        event.description?.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .filter(event => {
      const eventDate = new Date(event.date);
      return showPast ? eventDate < new Date() : eventDate >= new Date();
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  console.log('Отфильтрованные события:', filteredEvents);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  console.log('Видимые события:', visibleEvents);

  return {
    allEvents,
    allCategories,
    searchInput,
    setSearchInput,
    search,
    setSearch,
    category,
    setCategory,
    showPast,
    setShowPast,
    visibleCount,
    setVisibleCount,
    filteredEvents,
    visibleEvents
  };
}

export default useEvents;