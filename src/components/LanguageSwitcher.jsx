import { useEffect, useRef, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { LANGUAGES } from '../constants/languages'

const LANGUAGE_LABELS = {
  by: { name: 'Belarusian' },
  ru: { name: 'Russian' },
  en: { name: 'English' },
  pl: { name: 'Polish' },
  zh: { name: 'Chinese' }
}

function LanguageSwitcher() {
  const { lang = 'en' } = useParams()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const switcherRef = useRef(null)

  const pathWithoutLang = location.pathname.replace(`/${lang}`, '') || ''

  useEffect(() => {
    function handleDocumentClick(event) {
      if (!switcherRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleDocumentClick)

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, [])

  return (
    <div className="language-switcher" ref={switcherRef}>
      <button
        className="language-trigger"
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className={`language-flag language-flag-${lang}`} aria-hidden="true"></span>
      </button>

      {isOpen && (
        <div className="language-menu">
          {LANGUAGES.map(language => {
            const languageMeta = LANGUAGE_LABELS[language]

            return (
              <Link
                key={language}
                to={`/${language}${pathWithoutLang}`}
                className={`language-option ${language === lang ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
                aria-label={languageMeta.name}
              >
                <span className={`language-flag language-flag-${language}`} aria-hidden="true"></span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
