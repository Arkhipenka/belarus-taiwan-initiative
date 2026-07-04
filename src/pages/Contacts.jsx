import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CONTACT_EMAIL = 'contact@taiwanasialens.org'
const CONTACT_FORM_ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://formspree.io/f/xvzjddvq'

function Contacts() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modal, setModal] = useState(null)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const openMailClient = () => {
    const subject = encodeURIComponent(`Website contact: ${formData.name}`)
    const body = encodeURIComponent([
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message
    ].join('\n'))

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setModal(null)

    try {
      if (CONTACT_FORM_ENDPOINT) {
        const payload = new FormData(event.currentTarget)
        payload.set('_replyto', formData.email)
        payload.set('_subject', `Website contact: ${formData.name}`)
        payload.set('source', window.location.href)

        const response = await fetch(CONTACT_FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: payload
        })

        if (!response.ok) {
          throw new Error('Contact form request failed')
        }
      } else {
        openMailClient()
      }

      setModal({
        title: t('contacts.formSuccessTitle', 'Message sent'),
        message: t('contacts.formSuccess')
      })

      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch {
      setModal({
        title: t('contacts.formErrorTitle', 'Message was not sent'),
        message: t('contacts.formError', 'Please email us directly.')
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contacts-page">
      <section className="page-hero page-hero-contact">
        <div className="page-hero-text">
          <span className="page-hero-kicker">Contact</span>
          <h1>{t('contacts.title')}</h1>
          <p>{t('contacts.subtitle')}</p>
        </div>
      </section>

      <div className="block-text">
        <section className="contacts-info">
          <div className="contact-details">
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
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

          <form
            className="contact-form"
            action={CONTACT_FORM_ENDPOINT}
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value={`Website contact: ${formData.name}`} />
            <input type="hidden" name="_replyto" value={formData.email} />
            <input type="hidden" name="source" value={typeof window === 'undefined' ? '' : window.location.href} />

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

            <label className="contact-consent">
              <input
                type="checkbox"
                name="data_consent"
                value="yes"
                required
              />
              <span>{t('contacts.dataConsent')}</span>
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('contacts.sending', 'Sending...') : t('contacts.send')}
            </button>
          </form>
        </section>
      </div>

      {modal && (
        <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
          <button
            className="contact-modal-backdrop"
            type="button"
            aria-label={t('common.close', 'Close')}
            onClick={() => setModal(null)}
          />
          <div className="contact-modal-panel">
            <h2 id="contact-modal-title">{modal.title}</h2>
            <p>{modal.message}</p>
            <button type="button" onClick={() => setModal(null)}>
              {t('common.close', 'Close')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contacts
