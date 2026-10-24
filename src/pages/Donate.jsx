import { useTranslation } from 'react-i18next'
import PageIntro from '../components/PageIntro'

function Donate() {
  const { t } = useTranslation()
  return <div className="donate-page">
    <PageIntro title={t('donate.title')} description={t('donate.subtitle')} />
    <div className="donate-options donate-options-single">
      <article className="donate-card">
        <h3>Patreon</h3><p>{t('donate.patreon')}</p>
        <a href="https://www.patreon.com/c/u113967523" target="_blank" rel="noopener noreferrer" className="donate-button">{t('donate.becomeSupporter')}</a>
      </article>
    </div>
  </div>
}
export default Donate
