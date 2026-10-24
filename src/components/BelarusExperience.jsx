import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import outline from '../data/belarus-outline.json';
import { cities, getCountryCopy } from '../data/country-explorer';

const project = ([lon, lat]) => [60 + (lon - 23.2) * 44, 40 + (56.2 - lat) * 75];
const path = outline.coordinates[0].map((point,index) => (index ? 'L' : 'M') + project(point).join(',')).join(' ') + 'Z';

export default function BelarusExperience({ lang }) {
  const c = getCountryCopy(lang);
  const [city,setCity] = useState(null);
  const [theme,setTheme] = useState(0);
  const [photos,setPhotos] = useState({});
  useEffect(() => { let active=true; fetch('/city-photos.json').then(r=>r.ok?r.json():{}).then(data=>{if(active)setPhotos(data);}).catch(()=>{}); return ()=>{active=false;}; }, []);
  const photo = photos[city === null ? 'minsk' : ['minsk','brest','hrodna','vitebsk','mogilev','gomel'][city]];

  return <div className="belarus-experience">
    <div className="belarus-atlas">
      <div className="belarus-atlas-copy"><p className="hub-kicker">BELARUS / БЕЛАРУСЬ</p><h3>{c.heading}</h3><p>{c.lead}</p><p className="belarus-map-hint">{c.select}</p></div>
      <div className="belarus-map" role="group" aria-label={c.map}>
        <svg viewBox="0 0 540 470" aria-hidden="true"><defs><pattern id="belarus-grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="currentColor" strokeWidth=".4"/></pattern><pattern id="belarus-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V7" stroke="#f5f2eb" strokeWidth="1"/></pattern></defs><rect x="20" y="10" width="500" height="440" fill="url(#belarus-grid)" opacity=".18"/><path d={path} fill="#536c60" stroke="#394d43" strokeWidth="1.5"/><path d={path} fill="url(#belarus-hatch)" opacity=".18"/><text x="480" y="38" fontSize="12" fill="currentColor">N ↑</text></svg>
        {cities.map((point,index) => {const [x,y]=project(point);return <button key={index} className={'belarus-map-point'+(city===index?' is-selected':'')} style={{left:x/540*100+'%',top:y/470*100+'%'}} aria-label={c.cities[index]} aria-pressed={city===index} onClick={()=>setCity(index)}><span>{index+1}</span><span className="belarus-map-label">{c.cities[index]}</span></button>;})}
      </div>
    </div>
    <div className="belarus-city-panel"><div className="belarus-city-list">{c.cities.map((name,index)=><button key={name} aria-pressed={city===index} onClick={()=>setCity(index)}><span>0{index+1}</span>{name}</button>)}<button className="belarus-reset" onClick={()=>setCity(null)}>{c.reset} ↺</button></div><div className="belarus-city-detail" aria-live="polite" aria-atomic="true">{photo && <figure className="atlas-place-photo" key={photo.src}><img src={photo.src} alt={city===null?c.belarus:c.cities[city]} loading="lazy" onError={event=>{event.currentTarget.closest('figure').hidden=true;}}/><figcaption><span>{city===null?c.cities[0]+' · '+c.belarus:c.cities[city]}</span><a href={photo.source} target="_blank" rel="noopener noreferrer">{photo.author} · {photo.license} · Wikimedia Commons ↗</a></figcaption></figure>}<p className="hub-kicker">{city===null?'БЕЛАРУСЬ':'0'+(city+1)}</p><h3>{city===null?c.belarus:c.cities[city]}</h3><p>{city===null?c.select:c.descriptions[city]}</p><Link className="hub-text-link" to={'/'+lang+'/articles'}>{c.materials} ↗</Link></div></div>
    <div className="belarus-themes"><div className="belarus-theme-tabs" role="tablist" aria-label={c.belarus}>{c.themes.map((title,index)=><button key={title} id={'belarus-theme-'+index} role="tab" aria-selected={theme===index} aria-controls="belarus-theme-panel" tabIndex={theme===index?0:-1} onClick={()=>setTheme(index)} onKeyDown={event=>{const next=event.key==='ArrowRight'?(index+1)%3:event.key==='ArrowLeft'?(index+2)%3:event.key==='Home'?0:event.key==='End'?2:null;if(next!==null){event.preventDefault();setTheme(next);event.currentTarget.parentElement.children[next].focus();}}}><span>0{index+1}</span>{title}</button>)}</div><div id="belarus-theme-panel" role="tabpanel" aria-labelledby={'belarus-theme-'+theme}><div key={theme} className="hub-slide-copy"><h3>{c.themeTitles[theme]}</h3><p>{c.themeTexts[theme]}</p></div></div></div>
    <p className="belarus-map-credit">{c.note} <a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noreferrer">Natural Earth ↗</a></p>
  </div>;
}
