import { useTranslation } from 'react-i18next'

function Donate() {
  const { t } = useTranslation()
  const options = [
    {
      title: 'Buy Me a Coffee',
      text: t('donate.coffee'),
      href: 'https://buymeacoffee.com/yourname',
      action: t('donate.support')
    },
    {
      title: 'Monthly Support',
      text: t('donate.patreon'),
      href: 'https://patreon.com/yourname',
      action: t('donate.becomeSupporter')
    }
  ]

  return (
    <div className="donate-page">
      <section className="page-hero page-hero-donate donate-intro">
        <div className="page-hero-text">
          <span className="page-hero-kicker">Independent platform</span>
          <h1>{t('donate.title')}</h1>
          <p>{t('donate.subtitle')}</p>
        </div>
      </section>

      <div className="donate-options">
        {options.map(option => (
          <article className="donate-card" key={option.title}>
            <h3>{option.title}</h3>
            <p>{option.text}</p>
            <a
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="donate-button"
            >
              {option.action}
            </a>
          </article>
        ))}

        <article className="donate-card">
          <h3>Crypto</h3>
          <p>{t('donate.crypto')}</p>
          <div className="crypto-address">
            <strong>USDT (TRC20):</strong>
            <br />
            <code>TXxxxxxxxxxxxxxxxx</code>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Donate
