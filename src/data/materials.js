import {
  isPublishedArticle,
  translateArticle,
  translateEvent,
  uniqueMaterials
} from './materialTranslations';

const articleModules = import.meta.glob('./articles/*/*.json', {
  eager: true,
  import: 'default'
});

const eventModules = import.meta.glob('./events/*/*.json', {
  eager: true,
  import: 'default'
});

function recordsForLang(modules, type, lang) {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/${type}/${lang}/`))
    .map(([, data]) => data);
}

export function getArticles(lang) {
  const articles = recordsForLang(articleModules, 'articles', lang)
    .map(article => translateArticle(article, lang))
    .filter(isPublishedArticle);

  return uniqueMaterials(articles)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(lang, slug) {
  return getArticles(lang).find(article => article.slug === slug);
}

export function getEvents(lang) {
  return recordsForLang(eventModules, 'events', lang)
    .map(event => translateEvent(event, lang));
}

export function getEventBySlug(lang, slug) {
  return getEvents(lang).find(event => event.slug === slug);
}
