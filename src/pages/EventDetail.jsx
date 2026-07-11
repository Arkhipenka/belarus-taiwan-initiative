import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import { getEventBySlug } from '../data/materials';
import { getAssetUrl } from '../utils/assets';
import { formatDateTime } from '../utils/date';

const eventLabels = {
  by: {
    views: 'прагляды',
    speakers: 'Спікеры',
    partners: 'Партнёры',
    register: 'Зарэгістравацца на падзею',
    notFound: 'Падзея не знойдзена.'
  },
  ru: {
    views: 'просмотры',
    speakers: 'Спикеры',
    partners: 'Партнёры',
    register: 'Зарегистрироваться на событие',
    notFound: 'Событие не найдено.'
  },
  en: {
    views: 'views',
    speakers: 'Speakers',
    partners: 'Partners',
    register: 'Register for this event',
    notFound: 'Event not found.'
  },
  pl: {
    views: 'wyświetlenia',
    speakers: 'Prelegenci',
    partners: 'Partnerzy',
    register: 'Zarejestruj się na wydarzenie',
    notFound: 'Nie znaleziono wydarzenia.'
  },
  zh: {
    views: '瀏覽',
    speakers: '講者',
    partners: '合作夥伴',
    register: '報名參加活動',
    notFound: '找不到活動。'
  }
};

function EventDetail() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];
  const labels = eventLabels[lang] || eventLabels.en;
  const [views, setViews] = useState(0);

  const event = useMemo(() => getEventBySlug(lang, slug), [slug, lang]);

  useEffect(() => {
    if (!event) return;

    const viewKey = `views-event-${lang}-${slug}`;
    const storedViews = Number.parseInt(localStorage.getItem(viewKey), 10);
    const newViews = Number.isNaN(storedViews) ? 1 : storedViews + 1;
    localStorage.setItem(viewKey, String(newViews));
    const timer = window.setTimeout(() => setViews(newViews), 0);

    return () => window.clearTimeout(timer);
  }, [event, slug, lang]);

  if (!event) return <p>{labels.notFound}</p>;

  const startDate = new Date(event.date);
  const endDate = event.endDate ? new Date(event.endDate) : null;

  return (
    <article className="event-page">
      <h1>{event.title}</h1>

      {event.image && <img src={getAssetUrl(event.image)} alt={event.title} className="event-main-image" />}

      <p className="event-date">
        {formatDateTime(startDate, lang)}
        {endDate && <> - {formatDateTime(endDate, lang)}</>}
        {' '}| {labels.views}: {views}
      </p>

      {event.location && (
        <p className="event-location">
          <a href={event.location.link} target="_blank" rel="noopener noreferrer">
            {[event.location.name, event.location.city, event.location.country, event.location.room].filter(Boolean).join(', ')}
          </a>
        </p>
      )}

      <p className="event-description">{event.description}</p>

      {event.speakers && event.speakers.length > 0 && (
        <div className="event-speakers">
          <h3>{labels.speakers}:</h3>
          {event.speakers.map((speaker, index) => (
            <div key={`${speaker.name}-${index}`} className="speaker">
              {speaker.photo && <img src={getAssetUrl(speaker.photo)} alt={speaker.name} className="speaker-photo" />}
              <p>{speaker.name} - {speaker.role}</p>
            </div>
          ))}
        </div>
      )}

      {event.partners && event.partners.length > 0 && (
        <div className="event-partners">
          <h3>{labels.partners}:</h3>
          {event.partners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="partner">
              {partner.logo && <img src={getAssetUrl(partner.logo)} alt={partner.name} />}
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      )}

      {event.registration_url && (
        <p>
          <a href={event.registration_url} target="_blank" rel="noopener noreferrer">
            {labels.register}
          </a>
        </p>
      )}

      {event.gallery && event.gallery.length > 0 && (
        <div className="event-gallery">
          {event.gallery.map((img, index) => (
            <img key={`${img}-${index}`} src={getAssetUrl(img)} alt={`gallery ${index + 1}`} />
          ))}
        </div>
      )}
    </article>
  );
}

export default EventDetail;
