import { Link } from 'react-router-dom';

function EventCard({ event }) {

  const date = new Date(event.date);

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="event-card">

      <div className="event-image">
        <img src={event.image} alt={event.title} />
      </div>

      <div className="event-content">

        <div className="event-date">
          {formattedDate}
        </div>

        <h3 className="event-title">
          {event.title}
        </h3>

        {event.location && (
          <p className="event-location">
            {event.location.city}, {event.location.country}
          </p>
        )}

        <div className="event-categories">
          {event.categories?.map(cat => (
            <span key={cat} className="event-category">
              {cat}
            </span>
          ))}
        </div>

        <Link to={`/events/${event.slug}`} className="event-button">
          View Event
        </Link>

      </div>
    </div>
  );
}

export default EventCard;