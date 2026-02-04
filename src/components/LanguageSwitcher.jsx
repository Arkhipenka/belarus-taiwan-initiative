import { useParams, useLocation, Link } from 'react-router-dom'
import { LANGUAGES } from '../constants/languages'


function LanguageSwitcher() {
  const { lang } = useParams()
  const location = useLocation()

  const pathWithoutLang = location.pathname.replace(`/${lang}`, '')

  return (
    <div className="language-switcher">
      {LANGUAGES.map(l => (
        <Link
          key={l}
          to={`/${l}${pathWithoutLang}`}
          className={l === lang ? 'active' : ''}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}

export default LanguageSwitcher
