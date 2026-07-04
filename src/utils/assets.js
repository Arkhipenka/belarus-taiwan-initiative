const legacyBasePath = '/belarus-taiwan-initiative/';

export function getAssetUrl(src) {
  if (!src || src.startsWith('http')) {
    return src;
  }

  let normalizedSrc = src;

  if (normalizedSrc.startsWith(legacyBasePath)) {
    normalizedSrc = `/${normalizedSrc.slice(legacyBasePath.length)}`;
  }

  if (normalizedSrc.startsWith(import.meta.env.BASE_URL)) {
    return normalizedSrc;
  }

  if (normalizedSrc.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${normalizedSrc.slice(1)}`;
  }

  return `${import.meta.env.BASE_URL}${normalizedSrc}`;
}
