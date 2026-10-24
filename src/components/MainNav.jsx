import { Link, NavLink, useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { getAssetUrl } from '../utils/assets'
import { getHomeCopy } from '../data/home'
import '../styles/main-nav.css'

function MainNav() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [publicationsOpen, setPublicationsOpen] = useState(false)
  const publications = useRef(null)
  const publicationsTrigger = useRef(null)
  const { pathname } = useLocation()
  const publicationsActive = pathname.startsWith(`/${lang}/articles`) || pathname.startsWith(`/${lang}/news`)
  const publicationsLabel = ({by:'Публікацыі',ru:'Публикации',en:'Publications',pl:'Publikacje',zh:'出版與動態'})[lang] || 'Publications'

  const toggleMenu = () => { setIsOpen(!isOpen); setPublicationsOpen(false) }
  const closeMenu = () => { setIsOpen(false); setPublicationsOpen(false) }

  useEffect(() => {
    if (!publicationsOpen) return
    const outside = event => {
      if (!publications.current?.contains(event.target)) setPublicationsOpen(false)
    }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [publicationsOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    document.body.classList.toggle('menu-open', isOpen)

    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-open')
    }
  }, [isOpen])

  useEffect(() => {
    const footer = document.querySelector('.wrapper-footer')
    if (!footer) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -20% 0px'
      }
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`wrapper-header ${isFooterVisible ? 'is-hidden-at-footer' : ''}`}>
      <nav className="main-nav">
        <div className="site-title">
          <Link to={`/${lang}`} onClick={closeMenu}>
            <img src={getAssetUrl('/images/logo.png')} alt="logo" className="logo" />
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to={`/${lang}`} end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t('nav.home')}
          </NavLink>
          <NavLink to={`/${lang}/about`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t('nav.about')}
          </NavLink>
          <div className="publications-dropdown" ref={publications} onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPublicationsOpen(false)
          }} onKeyDown={event => {
            if (event.key === 'Escape' && publicationsOpen) {
              event.preventDefault(); event.stopPropagation(); setPublicationsOpen(false); publicationsTrigger.current?.focus()
            }
          }}>
            <button ref={publicationsTrigger} type="button" className={'nav-link publications-trigger'+(publicationsActive?' active':'')} aria-expanded={publicationsOpen} aria-controls="publications-links" onClick={() => setPublicationsOpen(!publicationsOpen)} onKeyDown={event => {
              if (event.key === 'ArrowDown') {
                event.preventDefault(); setPublicationsOpen(true)
                requestAnimationFrame(() => publications.current?.querySelector('.publications-panel a')?.focus())
              }
            }}>{publicationsLabel}<span className="publications-chevron" aria-hidden="true">⌄</span></button>
            <div id="publications-links" className="publications-panel" hidden={!publicationsOpen}>
              <NavLink to={`/${lang}/articles`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>{getHomeCopy(lang).articlesTitle}</NavLink>
              <NavLink to={`/${lang}/news`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>{getHomeCopy(lang).newsTitle}</NavLink>
            </div>
          </div>
          <NavLink to={`/${lang}/events`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t('nav.events')}
          </NavLink>
          <NavLink to={`/${lang}/contacts`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t('nav.contacts')}
          </NavLink>
          <NavLink to={`/${lang}/donate`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t('nav.donate')}
          </NavLink>
        </div>

        <div className="nav-actions">
          <LanguageSwitcher />

          <button
            className={`burger ${isOpen ? 'open' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {isOpen && <button className="overlay" type="button" aria-label="Close navigation" onClick={closeMenu}></button>}
      </nav>
    </div>
  )
}

export default MainNav
