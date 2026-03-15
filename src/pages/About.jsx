import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'

function About() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const navigate = useNavigate()

  return (
    <div className="about-page">
      <section className="about-hero">
        <img src={`${import.meta.env.BASE_URL}images/about_banner.jpg`} alt="Taiwan"/>
        <div className="about-hero-text">
          <h1>{t('about.title')}</h1>
          <p>{t('about.subtitle')}</p>
        </div>
      </section>

      <section className="about-section">
        <img src={`${import.meta.env.BASE_URL}images/about1.jpg`} alt="Taiwan"/>
        <div className="about-text">
          <h2>{t('about.aboutTitle')}</h2>
          <p>{t('about.aboutText1')}</p>
          <p>{t('about.aboutText2')}</p>
          <p>{t('about.aboutText3')}</p>
          <p>{t('about.aboutText4')}</p>
        </div>
        
      </section>

      <section className="about-section">
        <img src={`${import.meta.env.BASE_URL}images/about2.jpg`} alt="Taiwan"/>
        <div className="about-text">
          <h2>{t('about.missionTitle')}</h2>
          <p>{t('about.missionText1')}</p>
          <p>{t('about.missionText2')}</p>
        </div>
      </section>

      <section className="about-section">
        <img src={`${import.meta.env.BASE_URL}images/about3.jpg`} alt="Taiwan"/>
        <div className="about-text">
        <h2>{t('about.whyTaiwanTitle')}</h2>
        <ul>
          <li>{t('about.why1')}</li>
          <li>{t('about.why2')}</li>
          <li>{t('about.why3')}</li>
          <li>{t('about.why4')}</li>
        </ul>
        </div>
      </section>

      <section className="about-section">
        <img src={`${import.meta.env.BASE_URL}images/about4.jpg`} alt="Taiwan"/>
        <div className="about-text">
        <h2>{t('about.activitiesTitle')}</h2>
        <ul>
          <li>{t('about.activity1')}</li>
          <li>{t('about.activity2')}</li>
          <li>{t('about.activity3')}</li>
          <li>{t('about.activity4')}</li>
          <li>{t('about.activity5')}</li>
        </ul>
        </div>
      </section>

      <section className="about-section about-cta">
        <div className="about-text">
        <p>{t('about.ctaText')}</p>
        <button onClick={() => navigate(`/${lang}/contacts`)}>
          {t('about.ctaButton')}
        </button>
        </div>
      </section>
    </div>
  )
}

export default About
