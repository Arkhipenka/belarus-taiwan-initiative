import '../styles/country-atlas.css';
import { useState } from 'react';
import BelarusExperience from './BelarusExperience';
import TaiwanExperience from './TaiwanExperience';
import { getCountryCopy } from '../data/country-explorer';

export default function CountryExplorer({lang,copy}) {
  const [country,setCountry]=useState('belarus');
  const c=getCountryCopy(lang);
  const countries=['belarus','taiwan'];
  return <section id="discover" className="hub-discover">
    <div className="country-selector" role="tablist" aria-label={c.label}>{countries.map((id,index)=><button key={id} id={'country-'+id} role="tab" aria-selected={country===id} aria-controls={'country-panel-'+id} tabIndex={country===id?0:-1} onClick={()=>setCountry(id)} onKeyDown={event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?1:1-index;setCountry(countries[next]);event.currentTarget.parentElement.children[next].focus();}}}>{c[id]}<span aria-hidden="true">{id==='belarus'?'BY':'TW'}</span></button>)}</div>
    <div className="hub-section hub-section-heading"><div><p className="hub-kicker">02 / {c[country]}</p><h2>{country==='belarus'?c.title:copy.atlasTitle}</h2></div><p>{country==='belarus'?c.intro:copy.atlasIntro}</p></div>
    {countries.map(id=><div key={id} id={'country-panel-'+id} role="tabpanel" aria-labelledby={'country-'+id} hidden={country!==id}>{id==='belarus'?<BelarusExperience lang={lang}/>:<>{lang==='pl'&&<p className="hub-language-note">{copy.languageNote}</p>}<TaiwanExperience lang={lang} title={copy.atlasTitle}/></>}</div>)}
  </section>;
}
