import { useTranslation } from 'react-i18next'

function Contacts() {
  const { t } = useTranslation()

  return (
    <div className="contacts-page">
      <section className="contacts-info">
        <h1>{t('contacts.title')}</h1>
        <p>{t('contacts.subtitle')}</p>

        <div className="contact-details">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:contact@taiwanasialens.org">
              contact@taiwanasialens.org
            </a>
          </p>

          <p>
            <strong>{t('contacts.languages')}:</strong> English, Belarusian,
            Russian, Polish, Chinese (basic)
          </p>
        </div>
      </section>

      <section className="contacts-map">
        <iframe
          title="Taiwan map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=120.5%2C23.3%2C121.2%2C24.2&layer=mapnik"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </div>
  )
}

export default Contacts
