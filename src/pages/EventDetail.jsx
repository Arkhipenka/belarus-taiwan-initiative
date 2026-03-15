import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// Загружаем все JSON событий
const events = import.meta.glob('../data/events/**/*.json');

function EventDetail() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvent = async () => {
      setLoading(true);
      const lang = i18n.language.split('-')[0];

      // Ищем нужный файл по id и языку
      const key = Object.keys(events).find(p =>
        p.endsWith(`/${lang}/${id}.json`)
      );

      if (!key) {
        setEvent(null);
        setLoading(false);
        return;
      }

      try {
        const module = await events[key]();
        setEvent(module.default);
      } catch (err) {
        console.error('Ошибка при загрузке мероприятия', err);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [id, i18n.language]);

  if (loading) return <p>Loading...</p>;
  if (!event) return <p>Event not found</p>;

  return (
    <div className="event-detail-page">
      <h1>{event.title}</h1>

      <p className="event-meta">
        <span>{event.date}</span> · <span>{event.categories?.join(', ')}</span>
      </p>

      {event.image && (
        <img src={event.image} alt={event.title} className="event-image" />
      )}

      {event.location && (
        <p className="event-location">
          <strong>Location:</strong> {event.location}
        </p>
      )}

      {event.description && (
        <div className="event-description">
          {Array.isArray(event.description)
            ? event.description.map((p, i) => <p key={i}>{p}</p>)
            : <p>{event.description}</p>}
        </div>
      )}
    </div>
  );
}

export default EventDetail;
