export function formatLongDate(date, lang) {
  return date
    ? new Date(date).toLocaleDateString(lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    : '';
}

export function formatShortDate(date, lang) {
  return date
    ? new Date(date).toLocaleDateString(lang, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
    : '';
}

export function formatDateTime(date, lang) {
  return date ? new Date(date).toLocaleString(lang) : '';
}
