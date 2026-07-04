import { Link, NavLink, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import '../styles/main-nav.css'

function MainNav() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

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
            <img src="/belarus-taiwan-initiative/images/logo.png" alt="logo" className="logo" />
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to={`/${lang}`} end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t('nav.home')}
          </NavLink>
          <NavLink to={`/${lang}/about`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t('nav.about')}
          </NavLink>
          <NavLink to={`/${lang}/articles`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t('nav.articles')}
          </NavLink>
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
