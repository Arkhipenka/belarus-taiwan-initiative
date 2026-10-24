import { useEffect, useRef, useState } from 'react';

export default function TaiwanExperience({ lang, view = 'explore', title, scene = 0 }) {
  const frame = useRef(null);
  const [height, setHeight] = useState(900);
  const mapLang = ({ by: 'be', zh: 'zh-Hant', pl: 'en' })[lang] || lang;
  useEffect(() => {
    if (view !== 'explore') return;
    const resize = (event) => {
      if (event.origin !== location.origin || event.source !== frame.current?.contentWindow) return;
      if (event.data?.type === 'taiwan-experience-publications') {
        document.getElementById('publications')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        return;
      }
      if (event.data?.type !== 'taiwan-experience-height') return;
      const next = event.data.height;
      if (Number.isFinite(next) && next >= 300 && next <= 30000) setHeight(next);
    };
    window.addEventListener('message', resize);
    return () => window.removeEventListener('message', resize);
  }, [view]);
  const sendScene = () => frame.current?.contentWindow?.postMessage({ type: 'taiwan-hero-scene', scene }, location.origin);
  useEffect(() => {
    if (view !== 'hero') return;
    const sync = () => frame.current?.contentWindow?.postMessage({ type: 'taiwan-hero-scene', scene }, location.origin);
    const ready = event => {
      if (event.origin === location.origin && event.source === frame.current?.contentWindow && event.data?.type === 'taiwan-hero-ready') sync();
    };
    window.addEventListener('message', ready);
    sync();
    return () => window.removeEventListener('message', ready);
  }, [scene, view]);
  return <iframe onLoad={sendScene} ref={frame} key={mapLang} className={'home-experience home-experience-' + view}
    src={'/taiwan-experience/taiwan.html?lang=' + mapLang + '&view=' + view}
    title={title} loading={view === 'hero' ? 'eager' : 'lazy'}
    style={view === 'explore' ? { height } : undefined} tabIndex={view === 'hero' ? -1 : undefined}
    aria-hidden={view === 'hero' ? true : undefined} />;
}
