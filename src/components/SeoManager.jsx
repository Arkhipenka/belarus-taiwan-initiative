import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {resolveSeo, getBaseStructuredData, siteUrl, siteName, languages, hreflangByRoute, getLanguagePath} from '../utils/seoMetadata';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(rel, href, extra = {}) {
  const selector = `link[rel="${rel}"]${extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
  Object.entries(extra).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertJsonLd(data) {
  let element = document.head.querySelector('script[data-seo-json-ld="true"]');

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.seoJsonLd = 'true';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function removeMeta(selector) {
  document.head.querySelectorAll(selector).forEach(element => element.remove());
}

export default function SeoManager() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0] || 'en';

  const seo = useMemo(() => {
    return resolveSeo(location.pathname, lang, t);
  }, [lang, location.pathname, t]);

  useEffect(() => {
    const routeLang = location.pathname.split('/')[1];
    const activeLang = languages.includes(routeLang) ? routeLang : lang;
    const documentLang = hreflangByRoute[activeLang] || 'en';
    const structuredData = [
      ...getBaseStructuredData(seo, activeLang),
      ...seo.structuredData
    ];

    document.documentElement.lang = documentLang;
    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' });
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot', content: 'index, follow, max-image-preview:large' });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: ({en:'en_US',by:'be_BY',ru:'ru_RU',pl:'pl_PL',zh:'zh_TW'})[activeLang] || 'en_US' });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: seo.type });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: seo.url });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: seo.image });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: seo.title });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: seo.image });
    upsertLink('canonical', seo.url);
    upsertJsonLd(structuredData);
    removeMeta('meta[property^="article:"]');

    if (seo.article && /^\d{4}-\d{2}-\d{2}/.test(seo.article.date || '')) {
      upsertMeta('meta[property="article:published_time"]', { property: 'article:published_time', content: seo.article.date });
      upsertMeta('meta[property="article:author"]', { property: 'article:author', content: seo.article.author || 'Andrei Arkhipenka' });
    }

    languages.forEach((language) => {
      const href = `${siteUrl}${getLanguagePath(location.pathname, language)}`;
      upsertLink('alternate', href, { hreflang: hreflangByRoute[language] });
    });

    upsertLink('alternate', `${siteUrl}${getLanguagePath(location.pathname, 'en')}`, { hreflang: 'x-default' });
  }, [lang, location.pathname, seo]);

  return null;
}
