import MaterialDownloads from '../components/MaterialDownloads';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import RelatedMaterial from '../components/RelatedMaterial';
import { detailLabels } from '../data/detail-labels';
import { getEventBySlug, getArticleBySlug } from '../data/materials';
import { getAssetUrl } from '../utils/assets';
import { formatDateTime, formatLongDate } from '../utils/date';

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

  const detail = detailLabels[lang] || detailLabels.en;
  const relatedNews = event.relatedNews ? getArticleBySlug(lang, event.relatedNews) : null;
  const startDate = new Date(event.date);
  const endDate = event.endDate ? new Date(event.endDate) : null;

  return (
    <article className="event-page">
      <header className="article-hero-header material-detail-header">
        <Link className="material-back-link" to={'/'+lang+'/events'}>← {detail.events}</Link>
        <p className="article-kicker">{detail.event}</p>
        <h1>{event.title}</h1>
        <div className="article-meta material-detail-meta">
          <span>{event.allDay ? formatLongDate(startDate, lang) : formatDateTime(startDate, lang)}{endDate && <> – {event.allDay ? formatLongDate(endDate, lang) : formatDateTime(endDate, lang)}</>}</span>
          {event.location && <a href={event.location.link} target="_blank" rel="noopener noreferrer">{[event.location.name,event.location.city,event.location.country,event.location.room].filter(Boolean).join(', ')}</a>}
          <span className="article-views">{labels.views}: {views}</span>
        </div>
      </header>
      {event.image && <figure className="material-event-cover"><img src={getAssetUrl(event.image)} alt={event.title} className="event-main-image" /></figure>}

      <p className="event-description">{event.description}</p>
      {event.body && <div className="article-body" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.body) }} />}

      <MaterialDownloads items={event.attachments}/>
      {relatedNews && <RelatedMaterial to={'/'+lang+'/news/'+relatedNews.slug} label={detail.report} title={relatedNews.title} image={getAssetUrl(relatedNews.image)}/>}

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
            <figure key={`${img}-${index}`}><img src={getAssetUrl(img.src || img)} alt={img.caption || detail.gallery} loading="lazy"/><figcaption>{img.caption || detail.gallery}</figcaption></figure>
          ))}
        </div>
      )}
    </article>
  );
}

export default EventDetail;
