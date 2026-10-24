import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getAssetUrl } from '../utils/assets'
import { getHomeCopy } from '../data/home'
import '../styles/footer-compact.css'

const copy = {
  "by": [
    "Даследаванні. Культура. Дыялог.",
    "Раздзелы",
    "Падтрымаць на Patreon",
    "Наверх",
    "Незалежная ініцыятыва"
  ],
  "ru": [
    "Исследования. Культура. Диалог.",
    "Разделы",
    "Поддержать на Patreon",
    "Наверх",
    "Независимая инициатива"
  ],
  "en": [
    "Research. Culture. Dialogue.",
    "Explore",
    "Support on Patreon",
    "Back to top",
    "Independent initiative"
  ],
  "pl": [
    "Badania. Kultura. Dialog.",
    "Na skróty",
    "Wesprzyj na Patreon",
    "Do góry",
    "Niezależna inicjatywa"
  ],
  "zh": [
    "研究・文化・對話",
    "網站導覽",
    "在 Patreon 支持我們",
    "回到頂端",
    "獨立倡議"
  ]
}

export default function Footer() {
 const { t, i18n } = useTranslation()
 const { lang = i18n.language.split('-')[0] || 'en' } = useParams()
 const [tagline,navLabel,support,top,independent] = copy[lang] || copy.en
 const links = [ ['about',t('nav.about')],['articles',t('nav.articles')],['news',getHomeCopy(lang).newsTitle],['events',t('nav.events')],['contacts',t('nav.contacts')] ]
 return <div className="wrapper-footer compact-footer-wrap"><footer className="site-footer compact-footer">
  <div className="compact-footer-main">
   <div className="compact-footer-brand"><Link to={'/'+lang} aria-label="Belarus–Taiwan & East Asia Platform"><img src={getAssetUrl('/images/logo.png')} alt="BTEA — Belarus–Taiwan & East Asia Platform"/></Link><p>{tagline}</p></div>
   <nav className="compact-footer-nav" aria-label={navLabel}>{links.map(([path,label])=><Link key={path} to={'/'+lang+'/'+path}>{label}</Link>)}</nav>
  </div>
  <div className="compact-footer-connect"><a className="compact-footer-email" href="mailto:belarus.taiwan.platform@gmail.com">belarus.taiwan.platform@gmail.com</a><a className="compact-footer-support" href="https://www.patreon.com/c/u113967523" target="_blank" rel="noopener noreferrer">{support} <span aria-hidden="true">↗</span></a></div>
  <div className="compact-footer-bottom"><p>© {new Date().getFullYear()} Belarus–Taiwan & East Asia Platform <span>· {independent}</span></p><button type="button" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}>{top} <span aria-hidden="true">↑</span></button></div>
 </footer></div>
}
