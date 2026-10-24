import { getBelarusCulture } from '../data/belarus-culture';

function Illustration({ index }) {
  return <svg viewBox="0 0 600 360" aria-hidden="true" focusable="false">
    {index === 0 ? <><rect width="600" height="360" fill="#dfe5db"/><circle cx="480" cy="77" r="38" fill="#f5f2eb"/><path d="M0 230Q120 170 280 210T600 195V360H0Z" fill="#8ba393"/><path d="M0 285Q150 210 310 270T600 250V360H0Z" fill="#536c60"/><path d="M0 310Q200 250 600 300V360H0Z" fill="#b7c9c4"/>{[65,125,190,395,455,520].map((x,i)=><path key={x} d={`M${x} ${125+i%2*25}l-35 95h22l-25 45h76l-25-45h22Z`} fill="#394d43"/>)}</> : index === 1 ? <><rect width="600" height="360" fill="#e7ddca"/><path d="M150 0V360M450 0V360" stroke="#af363b" strokeWidth="5"/>{[65,180,295].map(y=><g key={y} fill="none" stroke="#af363b" strokeWidth="9"><path d={`M300 ${y-53}l53 53-53 53-53-53Z`}/><path d={`M300 ${y-25}l25 25-25 25-25-25Z`}/><path d={`M205 ${y-30}l30 30-30 30-30-30ZM395 ${y-30}l30 30-30 30-30-30Z`}/></g>)}</> : <><rect width="600" height="360" fill="#536c60"/><path d="M0 300H600V360H0Z" fill="#394d43"/>{[45,180,315,450].map((x,i)=><g key={x}><path d={`M${x-8} 160l58-48 58 48Z`} fill="#af363b"/><path d={`M${x} 160h100v140H${x}Z`} fill={i%2?'#cbb998':'#e7ddca'}/>{[0,1,2].map(j=><g key={j}><path d={`M${x+17} ${180+j*35}h20v21h-20ZM${x+63} ${180+j*35}h20v21h-20Z`} fill="#536c60"/></g>)}</g>)}<path d="M0 321H600" stroke="#b7c9c4" strokeWidth="2"/></>}
  </svg>;
}

export default function BelarusCulture({ lang }) {
 const [kicker,title,intro,titles,texts] = getBelarusCulture(lang);
 return <section className="belarus-culture"><div className="belarus-culture-heading"><div><p className="hub-kicker">{kicker}</p><h2>{title}</h2></div><p>{intro}</p></div><div className="belarus-culture-grid">{titles.map((heading,index)=><article key={heading}><div className="belarus-culture-art"><Illustration index={index}/></div><p className="hub-kicker">0{index+1} / {heading}</p><h3>{heading}</h3><p>{texts[index]}</p></article>)}</div></section>;
}
