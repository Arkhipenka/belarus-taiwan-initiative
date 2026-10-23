import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/taiwan-explore.css';
const copy={en:['Taiwan','Geography, culture and memory','Open full screen'],by:['Тайвань','Геаграфія, культура і памяць','Адкрыць на ўвесь экран'],ru:['Тайвань','География, культура и память','Открыть на весь экран'],zh:['臺灣','地理、文化與記憶','全螢幕開啟'],pl:['Tajwan','Geografia, kultura i pamięć','Otwórz na pełnym ekranie']};
export default function TaiwanExplore() {
  const { lang = 'en' } = useParams();
  const text = copy[lang] || copy.en;
  const mapLang = ({ by: 'be', zh: 'zh-Hant', pl: 'en' })[lang] || lang;
  const frame = useRef(null);
  const [height, setHeight] = useState(900);
  useEffect(() => {
    const resize = (event) => {
      if (event.origin !== location.origin || event.source !== frame.current?.contentWindow) return;
      if (event.data?.type !== 'taiwan-experience-height') return;
      const next = event.data.height;
      if (Number.isFinite(next) && next >= 600 && next <= 30000) setHeight(next);
    };
    window.addEventListener('message', resize);
    return () => window.removeEventListener('message', resize);
  }, []);
  return <main className="taiwan-explore">
    <div className="taiwan-explore-bar"><div><p className="taiwan-explore-label">{text[0]}</p><p>{text[1]}</p></div><a href={'/taiwan-experience/taiwan.html?lang='+mapLang} target="_blank" rel="noopener noreferrer">{text[2]} ↗</a></div>
    {lang === 'pl' && <p className="taiwan-language-note">Interaktywna część jest dostępna w języku angielskim, białoruskim, rosyjskim i chińskim tradycyjnym.</p>}
    <iframe ref={frame} key={mapLang} src={'/taiwan-experience/taiwan.html?lang='+mapLang} title={text[0]+' — '+text[1]} className="taiwan-explore-frame" style={{height}} loading="eager" />
  </main>;
}
