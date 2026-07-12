import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getArticleBySlug, getEventBySlug } from '../data/materials';
import { getAssetUrl } from '../utils/assets';
import { getMaterialExcerpt, stripHtml } from '../utils/text';

const siteUrl = 'https://belarus-taiwan.org';
const siteName = 'Belarus-Taiwan & East Asia Platform';
const defaultImage = '/images/hero-presidential-meeting.jpg';
const languages = ['en', 'by', 'ru', 'pl', 'zh'];
const hreflangByRoute = {
  en: 'en',
  by: 'be',
  ru: 'ru',
  pl: 'pl',
  zh: 'zh-TW'
};

const seoCopy = {
  en: {
    homeTitle: 'Belarus-Taiwan & East Asia Platform',
    homeDescription: 'Independent research, culture, education, and civic dialogue connecting Belarus, Taiwan, and East Asia.',
    aboutDescription: 'An independent platform connecting Belarusian and Taiwanese civil societies through research, culture, and advocacy.',
    articlesDescription: 'Articles, research, analysis, and guides on Taiwan, Belarus, East Asia, democracy, culture, and civil society.',
    eventsDescription: 'Lectures, meetings, conferences, and public programs about Belarus, Taiwan, and East Asia.',
    contactsDescription: 'Contact Belarus-Taiwan & East Asia Platform for cooperation, research, publications, and cultural initiatives.',
    donateDescription: 'Support independent research, publications, educational work, and civic dialogue between Belarus and Taiwan.'
  },
  by: {
    homeTitle: 'Belarus-Taiwan & East Asia Platform',
    homeDescription: 'Незалежныя даследаванні, культура, адукацыя і грамадзянскі дыялог паміж Беларуссю, Тайванем і Усходняй Азіяй.',
    aboutDescription: 'Незалежная платформа, якая злучае беларускую і тайваньскую грамадзянскія супольнасці праз даследаванні, культуру і адвакатаванне.',
    articlesDescription: 'Артыкулы, даследаванні, аналітыка і гайды пра Тайвань, Беларусь, Усходнюю Азію, дэмакратыю, культуру і грамадзянскую супольнасць.',
    eventsDescription: 'Лекцыі, сустрэчы, канферэнцыі і публічныя праграмы пра Беларусь, Тайвань і Усходнюю Азію.',
    contactsDescription: 'Кантакты Belarus-Taiwan & East Asia Platform для супрацоўніцтва, даследаванняў, публікацый і культурных ініцыятыў.',
    donateDescription: 'Падтрымайце незалежныя даследаванні, публікацыі, адукацыйную працу і грамадзянскі дыялог паміж Беларуссю і Тайванем.'
  },
  ru: {
    homeTitle: 'Belarus-Taiwan & East Asia Platform',
    homeDescription: 'Независимые исследования, культура, образование и гражданский диалог между Беларусью, Тайванем и Восточной Азией.',
    aboutDescription: 'Независимая платформа, соединяющая беларусское и тайваньское гражданские общества через исследования, культуру и адвокацию.',
    articlesDescription: 'Статьи, исследования, аналитика и гайды о Тайване, Беларуси, Восточной Азии, демократии, культуре и гражданском обществе.',
    eventsDescription: 'Лекции, встречи, конференции и публичные программы о Беларуси, Тайване и Восточной Азии.',
    contactsDescription: 'Контакты Belarus-Taiwan & East Asia Platform для сотрудничества, исследований, публикаций и культурных инициатив.',
    donateDescription: 'Поддержите независимые исследования, публикации, образовательную работу и гражданский диалог между Беларусью и Тайванем.'
  },
  pl: {
    homeTitle: 'Belarus-Taiwan & East Asia Platform',
    homeDescription: 'Niezależne badania, kultura, edukacja i dialog obywatelski między Białorusią, Tajwanem i Azją Wschodnią.',
    aboutDescription: 'Niezależna platforma łącząca białoruskie i tajwańskie społeczeństwa obywatelskie poprzez badania, kulturę i rzecznictwo.',
    articlesDescription: 'Artykuły, badania, analizy i przewodniki o Tajwanie, Białorusi, Azji Wschodniej, demokracji, kulturze i społeczeństwie obywatelskim.',
    eventsDescription: 'Wykłady, spotkania, konferencje i programy publiczne o Białorusi, Tajwanie i Azji Wschodniej.',
    contactsDescription: 'Kontakt z Belarus-Taiwan & East Asia Platform w sprawie współpracy, badań, publikacji i inicjatyw kulturalnych.',
    donateDescription: 'Wesprzyj niezależne badania, publikacje, edukację i dialog obywatelski między Białorusią a Tajwanem.'
  },
  zh: {
    homeTitle: 'Belarus-Taiwan & East Asia Platform',
    homeDescription: '連結白俄羅斯、台灣與東亞的獨立研究、文化、教育與公民對話平台。',
    aboutDescription: '透過研究、文化與倡議連結白俄羅斯和台灣公民社會的獨立平台。',
    articlesDescription: '關於台灣、白俄羅斯、東亞、民主、文化與公民社會的文章、研究、分析和指南。',
    eventsDescription: '關於白俄羅斯、台灣與東亞的講座、聚會、會議和公共活動。',
    contactsDescription: '聯絡 Belarus-Taiwan & East Asia Platform，洽談合作、研究、出版和文化倡議。',
    donateDescription: '支持白俄羅斯與台灣之間的獨立研究、出版、教育工作與公民對話。'
  }
};

function absoluteUrl(value) {
  if (!value) return `${siteUrl}${defaultImage}`;
  if (value.startsWith('http')) return value;

  const normalized = getAssetUrl(value);
  return `${siteUrl}${normalized.startsWith('/') ? normalized : `/${normalized}`}`;
}

function cleanPath(pathname) {
  const path = pathname === '/' ? '/en' : pathname.replace(/\/+$/, '');
  return path || '/en';
}

function pageUrl(pathname) {
  return `${siteUrl}${cleanPath(pathname)}`;
}

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

function extractDescription(item, fallback) {
  if (!item) return fallback;

  return stripHtml(getMaterialExcerpt(item)) || fallback;
}

function getLanguagePath(pathname, language) {
  const path = cleanPath(pathname);
  return path.replace(/^\/(en|by|ru|pl|zh)(?=\/|$)/, `/${language}`);
}

function getBaseStructuredData(seo, lang) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/favicon.png`,
      email: 'belarus.taiwan.platform@gmail.com',
      sameAs: [
        'https://belarus-taiwan.org'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      inLanguage: hreflangByRoute[lang] || 'en',
      description: seo.description,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/${lang}/articles?search={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  ];
}

export default function SeoManager() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0] || 'en';

  const seo = useMemo(() => {
    const copy = seoCopy[lang] || seoCopy.en;
    const parts = cleanPath(location.pathname).split('/').filter(Boolean);
    const currentLang = parts[0] || lang;
    const page = parts[1] || 'home';
    const slug = parts[2];
    const url = pageUrl(location.pathname);

    const base = {
      title: copy.homeTitle,
      description: copy.homeDescription,
      image: absoluteUrl(defaultImage),
      url,
      type: 'website',
      structuredData: []
    };

    if (page === 'about') {
      return {
        ...base,
        title: `${t('about.title')} | ${siteName}`,
        description: copy.aboutDescription
      };
    }

    if (page === 'articles' && slug) {
      const article = getArticleBySlug(currentLang, slug);

      if (article) {
        const description = extractDescription(article, copy.articlesDescription);

        return {
          ...base,
          title: `${article.title} | ${siteName}`,
          description,
          image: absoluteUrl(article.image),
          type: 'article',
          article,
          structuredData: [
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: article.title,
              description,
              image: absoluteUrl(article.image),
              datePublished: article.date,
              dateModified: article.date,
              author: {
                '@type': 'Person',
                name: article.author || 'Andrei Arkhipenka'
              },
              publisher: {
                '@type': 'Organization',
                name: siteName,
                logo: {
                  '@type': 'ImageObject',
                  url: `${siteUrl}/favicon.png`
                }
              },
              mainEntityOfPage: url,
              inLanguage: hreflangByRoute[currentLang] || 'en'
            }
          ]
        };
      }
    }

    if (page === 'articles') {
      return {
        ...base,
        title: `${t('articles.title')} | ${siteName}`,
        description: copy.articlesDescription,
        image: absoluteUrl('/images/articles/pobeda-nad-aes/main.jpg')
      };
    }

    if (page === 'events' && slug) {
      const event = getEventBySlug(currentLang, slug);

      if (event) {
        const description = stripHtml(event.description) || copy.eventsDescription;

        return {
          ...base,
          title: `${event.title} | ${siteName}`,
          description,
          image: absoluteUrl(event.image),
          event,
          structuredData: [
            {
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: event.title,
              description,
              image: absoluteUrl(event.image),
              startDate: event.date,
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: [event.location?.city, event.location?.country].filter(Boolean).join(', ')
              },
              organizer: {
                '@type': 'Organization',
                name: siteName,
                url: siteUrl
              },
              inLanguage: hreflangByRoute[currentLang] || 'en'
            }
          ]
        };
      }
    }

    if (page === 'events') {
      return {
        ...base,
        title: `${t('events.title')} | ${siteName}`,
        description: copy.eventsDescription,
        image: absoluteUrl('/images/hero-taipei-mrt.jpg')
      };
    }

    if (page === 'contacts') {
      return {
        ...base,
        title: `${t('contacts.title')} | ${siteName}`,
        description: copy.contactsDescription
      };
    }

    if (page === 'donate') {
      return {
        ...base,
        title: `${t('donate.title')} | ${siteName}`,
        description: copy.donateDescription
      };
    }

    return base;
  }, [lang, location.pathname, t]);

  useEffect(() => {
    const documentLang = hreflangByRoute[lang] || 'en';
    const structuredData = [
      ...getBaseStructuredData(seo, lang),
      ...seo.structuredData
    ];

    document.documentElement.lang = documentLang;
    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' });
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot', content: 'index, follow, max-image-preview:large' });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: documentLang });
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

    if (seo.article) {
      upsertMeta('meta[property="article:published_time"]', { property: 'article:published_time', content: seo.article.date });
      upsertMeta('meta[property="article:modified_time"]', { property: 'article:modified_time', content: seo.article.date });
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
