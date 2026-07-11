import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getArticleBySlug, getEventBySlug } from '../data/materials';
import { getAssetUrl } from '../utils/assets';
import { getMaterialExcerpt, stripHtml } from '../utils/text';

const siteUrl = 'https://belarus-taiwan.org';
const siteName = 'Belarus-Taiwan & East Asia Platform';
const defaultImage = '/images/hero-presidential-meeting.jpg';

const seoCopy = {
  en: {
    homeTitle: 'Belarus-Taiwan & East Asia Platform',
    homeDescription: 'Research, culture, education, and civic dialogue between Belarus, Taiwan, and East Asia.',
    aboutDescription: 'An independent platform connecting Belarusian and Taiwanese civil societies through research, culture, and advocacy.',
    articlesDescription: 'Articles, research, analysis, and guides on Taiwan, Belarus, East Asia, democracy, culture, and civil society.',
    eventsDescription: 'Lectures, meetings, conferences, and public programs about Belarus, Taiwan, and East Asia.',
    contactsDescription: 'Contact Belarus-Taiwan & East Asia Platform for cooperation, research, publications, and cultural initiatives.',
    donateDescription: 'Support independent research, publications, educational work, and civic dialogue between Belarus and Taiwan.'
  },
  by: {
    homeTitle: 'Belarus-Taiwan & East Asia Platform',
    homeDescription: 'Даследаванні, культура, адукацыя і грамадзянскі дыялог паміж Беларуссю, Тайванем і Усходняй Азіяй.',
    aboutDescription: 'Незалежная платформа, якая злучае беларускую і тайваньскую грамадзянскія супольнасці праз даследаванні, культуру і адвакатаванне.',
    articlesDescription: 'Артыкулы, даследаванні, аналітыка і гайды пра Тайвань, Беларусь, Усходнюю Азію, дэмакратыю, культуру і грамадзянскую супольнасць.',
    eventsDescription: 'Лекцыі, сустрэчы, канферэнцыі і публічныя праграмы пра Беларусь, Тайвань і Усходнюю Азію.',
    contactsDescription: 'Кантакты Belarus-Taiwan & East Asia Platform для супрацоўніцтва, даследаванняў, публікацый і культурных ініцыятыў.',
    donateDescription: 'Падтрымайце незалежныя даследаванні, публікацыі, адукацыйную працу і грамадзянскі дыялог паміж Беларуссю і Тайванем.'
  },
  ru: {
    homeTitle: 'Belarus-Taiwan & East Asia Platform',
    homeDescription: 'Исследования, культура, образование и гражданский диалог между Беларусью, Тайванем и Восточной Азией.',
    aboutDescription: 'Независимая платформа, соединяющая беларусское и тайваньское гражданские общества через исследования, культуру и адвокацию.',
    articlesDescription: 'Статьи, исследования, аналитика и гайды о Тайване, Беларуси, Восточной Азии, демократии, культуре и гражданском обществе.',
    eventsDescription: 'Лекции, встречи, конференции и публичные программы о Беларуси, Тайване и Восточной Азии.',
    contactsDescription: 'Контакты Belarus-Taiwan & East Asia Platform для сотрудничества, исследований, публикаций и культурных инициатив.',
    donateDescription: 'Поддержите независимые исследования, публикации, образовательную работу и гражданский диалог между Беларусью и Тайванем.'
  },
  pl: {
    homeTitle: 'Belarus-Taiwan & East Asia Platform',
    homeDescription: 'Badania, kultura, edukacja i dialog obywatelski między Białorusią, Tajwanem i Azją Wschodnią.',
    aboutDescription: 'Niezależna platforma łącząca białoruskie i tajwańskie społeczeństwa obywatelskie poprzez badania, kulturę i rzecznictwo.',
    articlesDescription: 'Artykuły, badania, analizy i przewodniki o Tajwanie, Białorusi, Azji Wschodniej, demokracji, kulturze i społeczeństwie obywatelskim.',
    eventsDescription: 'Wykłady, spotkania, konferencje i programy publiczne o Białorusi, Tajwanie i Azji Wschodniej.',
    contactsDescription: 'Kontakt z Belarus-Taiwan & East Asia Platform w sprawie współpracy, badań, publikacji i inicjatyw kulturalnych.',
    donateDescription: 'Wesprzyj niezależne badania, publikacje, edukację i dialog obywatelski między Białorusią a Tajwanem.'
  },
  zh: {
    homeTitle: 'Belarus-Taiwan & East Asia Platform',
    homeDescription: '白俄羅斯、台灣與東亞之間的研究、文化、教育與公民對話。',
    aboutDescription: '一個透過研究、文化與倡議連結白俄羅斯和台灣公民社會的獨立平台。',
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
  let element = document.head.querySelector(`link[rel="${rel}"]${extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`);

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

function extractDescription(item, fallback) {
  if (!item) return fallback;

  return stripHtml(getMaterialExcerpt(item)) || fallback;
}

export default function SeoManager() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0] || 'en';

  const seo = useMemo(() => {
    const copy = seoCopy[lang] || seoCopy.en;
    const parts = location.pathname.split('/').filter(Boolean);
    const currentLang = parts[0] || lang;
    const page = parts[1] || 'home';
    const slug = parts[2];
    const url = `${siteUrl}/#${location.pathname}`;

    const base = {
      title: copy.homeTitle,
      description: copy.homeDescription,
      image: absoluteUrl(defaultImage),
      url,
      type: 'website'
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
        return {
          ...base,
          title: `${article.title} | ${siteName}`,
          description: extractDescription(article, copy.articlesDescription),
          image: absoluteUrl(article.image),
          type: 'article'
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
        return {
          ...base,
          title: `${event.title} | ${siteName}`,
          description: stripHtml(event.description) || copy.eventsDescription,
          image: absoluteUrl(event.image)
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
    document.documentElement.lang = lang;
    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: seo.type });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: seo.url });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: seo.image });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: seo.image });
    upsertLink('canonical', seo.url);

    ['en', 'by', 'ru', 'pl', 'zh'].forEach((language) => {
      const path = location.pathname.replace(/^\/(en|by|ru|pl|zh)/, `/${language}`);
      upsertLink('alternate', `${siteUrl}/#${path}`, { hreflang: language });
    });
  }, [lang, location.pathname, seo]);

  return null;
}
