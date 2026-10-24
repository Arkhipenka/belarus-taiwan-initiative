import { Outlet, useParams, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../constants/languages'
import MainNav from '../components/MainNav'

function LanguageLayout() {
  const { lang } = useParams()
  const { i18n } = useTranslation()
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

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
      <Outlet />
    </>
  )
}

export default LanguageLayout
