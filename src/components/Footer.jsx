import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <div className='wrapper-footer'>
    <footer className="site-footer">
      <div className="footer-grid">

        <div className="footer-brand">
          <a href="/">
          <img src="/belarus-taiwan-initiative/images/logo.png" alt="logo" className='logo'/>
        </a>
        </div>

        <nav className="footer-nav">
          <h4>{t('footer.navigation')}</h4>
          <ul>
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/articles">{t('nav.articles')}</Link></li>
            <li><Link to="/events">{t('nav.events')}</Link></li>
            <li><Link to="/contacts">{t('nav.contacts')}</Link></li>
            <li><Link to="/donate">{t('nav.donate')}</Link></li>
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

        <div className="footer-meta">
          <p>© 2026 Belarus–Taiwan Platform</p>
          <p>{t('footer.nonprofitNote')}</p>
        </div>

      </div>
    </footer>
    </div>
  )
}

export default Footer