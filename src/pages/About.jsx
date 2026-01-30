import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'

function About() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const navigate = useNavigate()

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>{t('about.title')}</h1>
        <p className="about-subtitle">{t('about.subtitle')}</p>
      </section>

      <section className="about-section">
        <h2>{t('about.missionTitle')}</h2>
        <p>{t('about.missionText1')}</p>
        <p>{t('about.missionText2')}</p>
      </section>

      <section className="about-section">
        <h2>{t('about.whyTaiwanTitle')}</h2>
        <ul>
          <li>{t('about.why1')}</li>
          <li>{t('about.why2')}</li>
          <li>{t('about.why3')}</li>
          <li>{t('about.why4')}</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>{t('about.activitiesTitle')}</h2>
        <ul>
          <li>{t('about.activity1')}</li>
          <li>{t('about.activity2')}</li>
          <li>{t('about.activity3')}</li>
          <li>{t('about.activity4')}</li>
          <li>{t('about.activity5')}</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>{t('about.softDiplomacyTitle')}</h2>
        <p>{t('about.softDiplomacyText')}</p>
      </section>

      <section className="about-section">
        <h2>{t('about.principlesTitle')}</h2>
        <ul>
          <li>{t('about.principle1')}</li>
          <li>{t('about.principle2')}</li>
          <li>{t('about.principle3')}</li>
          <li>{t('about.principle4')}</li>
        </ul>
      </section>

      <section className="about-section about-cta">
        <p>{t('about.ctaText')}</p>
        <button onClick={() => navigate(`/${lang}/contacts`)}>
          {t('about.ctaButton')}
        </button>
      </section>
    </div>
  )
}

export default About
