import { NavLink, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function MainNav() {
  const { lang } = useParams()
  const { t } = useTranslation()

  return (
    <nav className="main-nav">
      <div className="site-title">
        Taiwan and Asia Lens
      </div>

      <div className="nav-links">
        <NavLink to={`/${lang}`} end>
          {t('nav.home')}
        </NavLink>

        <NavLink to={`/${lang}/about`}>
          {t('nav.about')}
        </NavLink>

        <NavLink to={`/${lang}/articles`}>
          {t('nav.articles')}
        </NavLink>
      </div>
    </nav>
  )
}

export default MainNav
