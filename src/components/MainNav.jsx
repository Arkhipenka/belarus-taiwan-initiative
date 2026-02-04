import { NavLink, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import '../styles/main-nav.css'

function MainNav() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // блокируем скролл при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  const handleLinkClick = () => {
    // добавляем задержку, чтобы проигралась анимация закрытия
    setIsOpen(false)
  }
  return (
    <nav className="main-nav">
      <div className="site-title">
        <h1 className='head-site'>Belarus–Taiwan</h1>
        <span className='head-site_small'>& East Asia Platform</span>
      </div>

      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to={`/${lang}`} end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
          {t('nav.home')}
        </NavLink>
        <NavLink to={`/${lang}/about`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
          {t('nav.about')}
        </NavLink>
        <NavLink to={`/${lang}/articles`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
          {t('nav.articles')}
        </NavLink>
        <NavLink to={`/${lang}/contacts`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
          {t('nav.contacts')}
        </NavLink>
        <NavLink to={`/${lang}/donate`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
          {t('nav.donate')}
        </NavLink>
      </div>

      {/* затемнённый фон при открытом меню */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  )
}

export default MainNav
