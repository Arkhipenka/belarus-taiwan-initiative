import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'

function About() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const navigate = useNavigate()
  const base = import.meta.env.BASE_URL

  const focusItems = [
    t('about.activity1'),
    t('about.activity2'),
    t('about.activity3'),
    t('about.activity4'),
    t('about.activity5')
  ]

  const whyItems = [
    t('about.why1'),
    t('about.why2'),
    t('about.why3'),
    t('about.why4')
  ]

  const principleItems = [
    t('about.principle1'),
    t('about.principle2'),
    t('about.principle3'),
    t('about.principle4')
  ]

  return (
    <div className="about-page">
      <section className="about-hero about-hero-editorial">
        <img src={`${base}images/hero-presidential-meeting.jpg`} alt="Belarus Taiwan civic dialogue" />
        <div className="about-hero-text">
          <h1>{t('about.title')}</h1>
          <p>{t('about.subtitle')}</p>
          <p className="about-photo-caption">{t('about.heroCaption')}</p>
        </div>
      </section>

      <section className="about-manifest">
        <div className="about-label">{t('about.aboutTitle')}</div>
        <div className="about-manifest-text">
          <p className="about-lead">{t('about.aboutText1')}</p>
          <p>{t('about.aboutText2')}</p>
          <p>{t('about.aboutText3')}</p>
          <p>{t('about.aboutText4')}</p>
        </div>
      </section>

      <section className="about-feature-grid">
        <article className="about-feature about-feature-large">
          <h2>{t('about.missionTitle')}</h2>
          <p>{t('about.missionText1')}</p>
          <p>{t('about.missionText2')}</p>
        </article>

        <article className="about-feature">
          <h2>{t('about.whyTaiwanTitle')}</h2>
          <ul>
            {whyItems.map(item => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="about-feature">
          <h2>{t('about.activitiesTitle')}</h2>
          <ul>
            {focusItems.map(item => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="about-feature">
          <h2>{t('about.principlesTitle')}</h2>
          <ul>
            {principleItems.map(item => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <section className="about-soft-diplomacy">
        <div>
          <h2>{t('about.softDiplomacyTitle')}</h2>
          <p>{t('about.softDiplomacyText')}</p>
        </div>
        <img src={`${base}images/hero-taipei-mrt.jpg`} alt="Taipei urban infrastructure" />
      </section>

      <section className="about-cta about-cta-editorial">
        <p>{t('about.ctaText')}</p>
        <button onClick={() => navigate(`/${lang}/contacts`)}>
          {t('about.ctaButton')}
        </button>
      </section>
    </div>
  )
}

export default About
