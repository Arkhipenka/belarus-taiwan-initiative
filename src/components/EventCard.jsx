import React from 'react';

function EventCard({ event }) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="event-card">
      <img src={event.image} alt="lecture" className='event_image'/>
      <div className="eventCard_content">
        <h3>{event.title}</h3>
          <div className="event-date">{formattedDate}</div>
          {event.categories && (
            <div className="event-categories">
              {event.categories.map((cat) => (
                <span key={cat} className="event-category">
                  {cat}
                </span>
              ))}
            </div>
          )}
          <a href={event.location.link} className='location'>{event.location.name}, {event.location.city}, {event.location.country}</a>
          <p className="event-description">{event.description.slice(0, 100)}</p>
        </div>
      </div>
      
  );
}

export default EventCard;
