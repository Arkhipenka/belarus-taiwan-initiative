import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en'
import ru from './locales/ru'
import by from './locales/by'
import pl from './locales/pl'
import zh from './locales/zh'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      },
      by: {
        translation: by
      },
      pl: {
        translation: pl
      },
      zh: {
        translation: zh
      }
    },

    lng: 'en',        // язык по умолчанию
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
