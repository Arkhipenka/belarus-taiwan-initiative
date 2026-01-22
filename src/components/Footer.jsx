import { useTranslation } from 'react-i18next'
import { useParams, Link } from 'react-router-dom'

function Footer() {
  const { t } = useTranslation()
  const { lang } = useParams()

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <h3>Taiwan and Asia Lens</h3>
          <p>{t('footer.tagline')}</p>
        </div>

        <div className="footer-nav">
          <h4>{t('footer.navigation')}</h4>
          <ul>
            <li><Link to={`/${lang}`}>{t('nav.home')}</Link></li>
            <li><Link to={`/${lang}/about`}>{t('nav.about')}</Link></li>
            <li><Link to={`/${lang}/articles`}>{t('nav.articles')}</Link></li>
          </ul>
        </div>

        <div className="footer-meta">
          <p>© {new Date().getFullYear()} Taiwan and Asia Lens</p>
          <p>{t('footer.nonprofitNote')}</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
