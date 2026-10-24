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
  <div className="compact-footer-socials" aria-label="Social media">
   <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
   <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 22v-9h3l.5-3H14V8c0-1 .3-1.5 1.6-1.5H18V3.2A23 23 0 0 0 15 3c-3 0-4.5 1.8-4.5 4.8V10H8v3h2.5v9Z"/></svg></a>
   <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3v12a4.5 4.5 0 1 1-4-4.5M14 3c.6 3.2 2.5 5 6 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
  </div>
  <div className="compact-footer-connect"><a className="compact-footer-email" href="mailto:belarus.taiwan.platform@gmail.com">belarus.taiwan.platform@gmail.com</a><a className="compact-footer-support" href="https://www.patreon.com/c/u113967523" target="_blank" rel="noopener noreferrer">{support} <span aria-hidden="true">↗</span></a></div>
  <div className="compact-footer-bottom"><p>© {new Date().getFullYear()} Belarus–Taiwan & East Asia Platform <span>· {independent}</span></p><button type="button" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}>{top} <span aria-hidden="true">↑</span></button></div>
 </footer></div>
}
