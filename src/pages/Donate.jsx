import { useTranslation } from 'react-i18next'

function Donate() {
  const { t } = useTranslation()

  return (
    <div className="donate-page">
      <h1>{t('donate.title')}</h1>
      <p className="donate-subtitle">{t('donate.subtitle')}</p>

      <div className="donate-options">

        <div className="donate-card">
          <h3>☕ Buy Me a Coffee</h3>
          <p>{t('donate.coffee')}</p>
          <a
            href="https://buymeacoffee.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            {t('donate.support')}
          </a>
        </div>

        <div className="donate-card">
          <h3>❤️ Patreon / Boosty</h3>
          <p>{t('donate.patreon')}</p>
          <a
            href="https://patreon.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            {t('donate.becomeSupporter')}
          </a>
        </div>

        <div className="donate-card">
          <h3>₿ Crypto</h3>
          <p>{t('donate.crypto')}</p>
          <div className="crypto-address">
            <strong>USDT (TRC20):</strong>
            <br />
            <code>TXxxxxxxxxxxxxxxxx</code>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Donate
