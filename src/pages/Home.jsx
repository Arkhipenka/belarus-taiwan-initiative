import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticles, getEvents, getNews } from '../data/materials';
import { getHomeCopy } from '../data/home';
import { getAssetUrl } from '../utils/assets';
import { getMaterialExcerpt } from '../utils/text';
import { formatShortDate } from '../utils/date';
import TaiwanExperience from '../components/TaiwanExperience';
import '../styles/home-hub.css';

function Material({ item, lang, type }) {
  return <Link className="hub-material" to={'/' + lang + '/' + type + '/' + item.slug}>
    <div className="hub-material-image">{item.image && <img src={getAssetUrl(item.image)} alt="" loading="lazy" />}</div>
    <div className="hub-material-meta"><span>{formatShortDate(item.date, lang)}</span><span aria-hidden="true">↗</span></div>
    <h3>{item.title}</h3><p>{item.description || getMaterialExcerpt(item)}</p>
  </Link>;
}

export default function Home() {
  const { lang = 'en' } = useParams();
  const c = getHomeCopy(lang);
  const [topic, setTopic] = useState(0);
  const root = useRef(null);
  const articles = getArticles(lang).slice(0, 3);
  const news = getNews(lang).slice(0, 3);
  const allEvents = getEvents(lang);
  const [now] = useState(() => Date.now());
  const upcoming = allEvents.filter(event => new Date(event.endDate || event.date).getTime() >= now).sort((a,b) => new Date(a.date)-new Date(b.date));
  const events = (upcoming.length ? upcoming : allEvents).slice(0, 3);
  useEffect(() => {
    const node = root.current;
    if (!node || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    node.dataset.motion = 'ready';
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    node.querySelectorAll('.hub-reveal').forEach(element => observer.observe(element));
    return () => { observer.disconnect(); delete node.dataset.motion; };
  }, [lang]);

  return <main ref={root} className="home-hub">
    <section className="hub-hero" aria-labelledby="hub-title">
      <div className="hub-hero-copy"><p className="hub-kicker">Belarus–Taiwan & East Asia Platform <span lang="zh-Hant">臺灣</span></p>
        <h1 id="hub-title">{c.heroTitle}</h1><p className="hub-hero-intro">{c.heroIntro}</p>
        <a className="hub-primary" href="#discover">{c.explore} <span aria-hidden="true">↓</span></a>
        <div className="hub-topics" role="tablist" aria-label={c.explore}>{c.topics.map((item,index) => <button key={item.title} id={'hero-topic-'+index} role="tab" aria-selected={topic === index} aria-controls="hero-topic-panel" tabIndex={topic === index ? 0 : -1} onClick={() => setTopic(index)} onKeyDown={event => {
          const next = event.key === 'ArrowRight' ? (index+1)%3 : event.key === 'ArrowLeft' ? (index+2)%3 : event.key === 'Home' ? 0 : event.key === 'End' ? 2 : null;
          if (next !== null) { event.preventDefault(); setTopic(next); root.current.querySelector('#hero-topic-'+next)?.focus(); }
        }}>{item.title}</button>)}</div>
        <div id="hero-topic-panel" role="tabpanel" aria-labelledby={'hero-topic-'+topic}><p key={topic} className="hub-topic-description">{c.topics[topic].text}</p></div>
      </div>
      <div className="hub-hero-art"><TaiwanExperience lang={lang} view="hero" title="Taiwan terrain" /><span className="hub-coordinates" aria-hidden="true">23°41′ N · 120°57′ E<br/>山海之間 / TAIWAN</span></div>
      <a className="hub-scroll" href="#platform"><span>01 — {c.scroll}</span><span aria-hidden="true">↓</span></a>
    </section>

    <section id="platform" className="hub-section hub-about hub-reveal"><div><p className="hub-kicker">01 / {c.aboutLink}</p><h2>{c.aboutTitle}</h2></div><div className="hub-about-copy"><p>{c.aboutText}</p><Link className="hub-text-link" to={'/'+lang+'/about'}>{c.aboutLink} ↗</Link></div></section>

    <section id="discover" className="hub-discover"><div className="hub-section hub-section-heading hub-reveal"><div><p className="hub-kicker">02 / 臺灣</p><h2>{c.atlasTitle}</h2></div><p>{c.atlasIntro}</p></div>
      {lang === 'pl' && <p className="hub-language-note">{c.languageNote}</p>}
      <TaiwanExperience lang={lang} title={c.atlasTitle} />
    </section>

    <section id="publications" className="hub-section hub-reveal"><div className="hub-section-heading"><div><p className="hub-kicker">03 / {c.articlesTitle}</p><h2>{c.articlesTitle}</h2><p>{c.articlesIntro}</p></div><Link className="hub-text-link" to={'/'+lang+'/articles'}>{c.allArticles} ↗</Link></div><div className={'hub-materials'+(articles.length === 1 ? ' hub-materials-single' : '')}>{articles.map(item => <Material key={item.slug} item={item} lang={lang} type="articles" />)}</div></section>

    <section id="meetings" className="hub-events"><div className="hub-section hub-reveal"><div className="hub-section-heading"><div><p className="hub-kicker">04 / {upcoming.length ? c.nextEvents : c.pastEvents}</p><h2>{c.eventsTitle}</h2><p>{c.eventsIntro}</p></div><Link className="hub-text-link" to={'/'+lang+'/events'}>{c.allEvents} ↗</Link></div><div className="hub-materials">{events.map(item => <Material key={item.slug} item={item} lang={lang} type="events" />)}</div></div></section>

    <section id="updates" className="hub-section hub-reveal"><div className="hub-section-heading"><div><p className="hub-kicker">05 / {c.newsTitle}</p><h2>{c.newsTitle}</h2><p>{c.newsIntro}</p></div><Link className="hub-text-link" to={'/'+lang+'/news'}>{c.allNews} ↗</Link></div>{news.length ? <div className="hub-materials">{news.map(item => <Material key={item.slug} item={item} lang={lang} type="news" />)}</div> : <div className="hub-empty"><p>{c.newsEmpty}</p><Link to={'/'+lang+'/contacts'}>{c.contact} ↗</Link></div>}</section>
  </main>;
}
