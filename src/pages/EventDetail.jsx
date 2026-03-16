import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// Подгрузка всех JSON с событиями
const eventModules = import.meta.glob('../data/events/*/*.json', { eager: true, import: 'default' });

function EventPage() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0]; // en, ru, by и т.д.

  const [event, setEvent] = useState(null);
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Загружаем все события нужного языка
    const loadedEvents = Object.entries(eventModules)
      .filter(([path]) => path.includes(`/events/${lang}/`))
      .map(([, data]) => data);

    const foundEvent = loadedEvents.find(e => e.slug === slug);
    setEvent(foundEvent);

    if (foundEvent) {
      const viewKey = `views-event-${lang}-${slug}`;
      const storedViews = localStorage.getItem(viewKey);
      const newViews = storedViews ? parseInt(storedViews) + 1 : 1;
      localStorage.setItem(viewKey, newViews);
      setViews(newViews);
    }
  }, [slug, lang]);

  if (!event) return <p>Loading event...</p>;

  const startDate = new Date(event.date);
  const endDate = event.endDate ? new Date(event.endDate) : null;

  return (
    <article className="event-page">
      <h1>{event.title}</h1>

      {event.image && <img src={event.image} alt={event.title} className="event-main-image" />}

      <p className="event-date">
        {startDate.toLocaleString(lang)}
        {endDate && <> - {endDate.toLocaleString(lang)}</>}
        {' '}· 👁 {views}
      </p>

      {event.location && (
        <p className="event-location">
          <a href={event.location.link} target="_blank" rel="noopener noreferrer">
            {event.location.name}, {event.location.city}, {event.location.country}
          </a>
        </p>
      )}

      <p className="event-description">{event.description}</p>

      {event.speakers && event.speakers.length > 0 && (
        <div className="event-speakers">
          <h3>Speakers:</h3>
          {event.speakers.map((s, i) => (
            <div key={i} className="speaker">
              {s.photo && <img src={s.photo} alt={s.name} className="speaker-photo" />}
              <p>{s.name} — {s.role}</p>
            </div>
          ))}
        </div>
      )}

      {event.partners && event.partners.length > 0 && (
        <div className="event-partners">
          <h3>Partners:</h3>
          {event.partners.map((p, i) => (
            <div key={i} className="partner">
              {p.logo && <img src={p.logo} alt={p.name} />}
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      )}

      {event.registration_url && (
        <p>
          <a href={event.registration_url} target="_blank" rel="noopener noreferrer">
            Register for this event
          </a>
        </p>
      )}

      {event.gallery && event.gallery.length > 0 && (
        <div className="event-gallery">
          {event.gallery.map((img, i) => (
            <img key={i} src={img} alt={`gallery ${i + 1}`} />
          ))}
        </div>
      )}
    </article>
  );
}

export default EventPage;