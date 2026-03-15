import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Contacts() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Пока просто выводим данные
    console.log(formData)

    alert(t('contacts.formSuccess'))

    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="contacts-page">

      <div className="block-text">
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
            <strong>Telegram:</strong>{' '}
            <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
              @yourtelegram
            </a>
          </p>

          <p>
            <strong>Line:</strong>{' '}
            <a href="https://line.me/ti/p/yourlineid" target="_blank" rel="noopener noreferrer">
              @yourlineid
            </a>
          </p>

          <p>
            <strong>{t('contacts.languages')}:</strong>{' '}
            English, Belarusian, Russian, Polish, Chinese (basic)
          </p>

        </div>
      </section>
      <section className="contact-form-section">

        <h2>{t('contacts.formTitle')}</h2>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder={t('contacts.name')}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t('contacts.email')}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder={t('contacts.message')}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {t('contacts.send')}
          </button>

        </form>

      </section>
      </div>
      


      


      <section className="contacts-map">
        <iframe
          title="Taiwan map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=120.5%2C23.3%2C121.2%2C24.2&layer=mapnik"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        />
      </section>

    </div>
  )
}

export default Contacts
