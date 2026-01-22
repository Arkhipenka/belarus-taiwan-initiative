import { Outlet, useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../constants/languages'
import MainNav from '../components/MainNav'
import LanguageSwitcher from '../components/LanguageSwitcher'

function LanguageLayout() {
  const { lang } = useParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (LANGUAGES.includes(lang)) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n])

  if (!LANGUAGES.includes(lang)) {
    return <Navigate to="/en" replace />
  }

  return (
    <>
      <MainNav />
      <LanguageSwitcher />
      <Outlet />
    </>
  )
}

export default LanguageLayout
