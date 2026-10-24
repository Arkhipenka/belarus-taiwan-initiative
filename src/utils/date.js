const localeFor = lang => ({ by: 'be', zh: 'zh-TW' })[lang] || lang;

export function formatLongDate(date, lang) {
  return date
    ? new Date(date).toLocaleDateString(localeFor(lang), {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    : '';
}

export function formatShortDate(date, lang) {
  return date
    ? new Date(date).toLocaleDateString(localeFor(lang), {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
    : '';
}

export function formatDateTime(date, lang) {
  return date ? new Date(date).toLocaleString(localeFor(lang)) : '';
}
