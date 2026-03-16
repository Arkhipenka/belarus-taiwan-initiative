import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EventCard({ event }) {
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0]; // en, ru, zh и т.д.

  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString(lang, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="event-card">

      {event.image && (
        <div className="event-image">
          <img src={event.image} alt={event.title} />
        </div>
      )}

      <div className="event-content">

        <div className="event-date">{formattedDate}</div>

        <h3 className="event-title">{event.title}</h3>

        {event.location && (
          <p className="event-location">
            {event.location.city}, {event.location.country}
          </p>
        )}

        {event.categories?.length > 0 && (
          <div className="event-categories">
            {event.categories.map(cat => (
              <span key={cat} className="event-category">
                {cat}
              </span>
            ))}
          </div>
        )}

        <Link to={`/${lang}/event/${event.slug}`} className="event-button">
          View Event
        </Link>

      </div>
    </div>
  );
}

export default EventCard;