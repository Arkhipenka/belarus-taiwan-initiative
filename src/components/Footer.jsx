import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getAssetUrl } from '../utils/assets'

function Footer() {
  const { t } = useTranslation()
  const { lang = 'en' } = useParams()
  const year = new Date().getFullYear()

  const navLinks = [
    { to: `/${lang}/about`, label: t('nav.about') },
    { to: `/${lang}/articles`, label: t('nav.articles') },
    { to: `/${lang}/events`, label: t('nav.events') },
    { to: `/${lang}/contacts`, label: t('nav.contacts') },
    { to: `/${lang}/donate`, label: t('nav.donate') }
  ]

  return (
    <div className="wrapper-footer">
      <footer className="site-footer">
        <div className="footer-topline">
          <Link to={`/${lang}`} className="footer-logo-link">
            <img src={getAssetUrl('/images/logo.png')} alt="logo" className="logo" />
          </Link>
        </div>

        <div className="footer-grid">
          <nav className="footer-nav">
            <h4>{t('footer.navigation')}</h4>
            <ul>
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-section">
            <h4>{t('footer.belarusCn')}</h4>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">{t('footer.socials.instagram')}</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">{t('footer.socials.facebook')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.taiwanByRu')}</h4>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">{t('footer.socials.instagram')}</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">{t('footer.socials.tiktok')}</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:belarus.taiwan.platform@gmail.com">belarus.taiwan.platform@gmail.com</a></li>
              <li><Link to={`/${lang}/donate`}>{t('nav.donate')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-meta">
          <p>Copyright {year} Belarus-Taiwan Platform</p>
          <p>Independent research, culture and civil society media.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
