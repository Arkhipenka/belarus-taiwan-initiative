import { useEffect, useRef, useState } from 'react';
import '../styles/scene-loading.css';

export default function TaiwanExperience({ lang, view = 'explore', title, scene = 0 }) {
  const frame = useRef(null);
  const [height, setHeight] = useState(900);
  const [started, setStarted] = useState(view !== 'hero');
  const [sceneState, setSceneState] = useState('loading');
  const sceneReady = useRef(false);
  const loadingCopy = {en:['Loading animation…','Static view'],by:['Загрузка анімацыі…','Статычны выгляд'],ru:['Загрузка анимации…','Статичный вид'],pl:['Ładowanie animacji…','Widok statyczny'],zh:['動畫載入中…','靜態畫面']}[lang] || ['Loading animation…','Static view'];
  useEffect(() => {
    if (view !== 'hero') return;
    const start = () => setStarted(true);
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, {timeout:1200});
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(start, 150);
    return () => window.clearTimeout(id);
  }, [view]);
  useEffect(() => {
    if (view !== 'hero' || !started) return;
    const id = window.setTimeout(() => {if (!sceneReady.current) setSceneState('fallback');}, 10000);
    return () => window.clearTimeout(id);
  }, [started, view]);
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
      if (event.origin !== location.origin || event.source !== frame.current?.contentWindow) return;
      if (event.data?.type === 'taiwan-hero-ready') {sceneReady.current = true; setSceneState('ready'); sync();}
      if (event.data?.type === 'taiwan-hero-error') setSceneState('fallback');
    };
    window.addEventListener('message', ready);
    sync();
    return () => window.removeEventListener('message', ready);
  }, [scene, view]);
  const experience = (view !== 'hero' || started) && <iframe onLoad={sendScene} ref={frame} className={'home-experience home-experience-' + view}
    src={'/taiwan-experience/taiwan.html?lang=' + mapLang + '&view=' + view}
    title={title} loading={view === 'hero' ? 'eager' : 'lazy'}
    style={view === 'explore' ? { height } : undefined} tabIndex={view === 'hero' ? -1 : undefined}
    aria-hidden={view === 'hero' ? true : undefined} />;
  if (view !== 'hero') return experience;
  return <div className={'hero-scene-loader is-' + sceneState} aria-busy={sceneState === 'loading'}>
    <div className="hero-scene-placeholder" aria-hidden="true"><img src="/images/taiwan-loading.svg" alt="" decoding="async" /></div>
    {experience}
    {sceneState !== 'ready' && <span className="hero-scene-status" role="status">{sceneState === 'loading' && <span className="hero-scene-spinner" aria-hidden="true" />}{loadingCopy[sceneState === 'loading' ? 0 : 1]}</span>}
  </div>;
}
