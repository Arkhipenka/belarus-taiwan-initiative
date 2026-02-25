import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="footer-grid">

        <div className="footer-brand">
          <h3 className='footer-site'>Belarus–Taiwan</h3>
          <span className='footer-site_small'>& East Asia Platform</span>
        </div>

        <nav className="footer-nav">
          <ul>
            <li>{t('nav.about')}</li>
            <li>{t('nav.articles')}</li>
            <li>{t('nav.contacts')}</li>
            <li>{t('nav.donate')}</li>
          </ul>
        </nav>
        <div>
          <h4>{t('footer.sections.belarusCn')}</h4>
          <a>{t('footer.socials.instagram')}</a>
          <a>{t('footer.socials.facebook')}</a>
        </div>
        <div>
          <h4>{t('footer.sections.taiwanByRu')}</h4>
          <a>{t('footer.socials.instagram')}</a>
          <a>{t('footer.socials.tiktok')}</a>
        </div>

        


        <div className="footer-meta">
          © 2026 Belarus–Taiwan Platform
        </div>
        <div className="footer-meta-initiative">
          Independent initiative
        </div>
      </div>
    </footer>
  )
}

export default Footer

