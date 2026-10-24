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

const cmsModules = import.meta.glob('../content/*/*/*.json', { eager: true, import: 'default' });

function cmsRecords(type, lang) {
  return Object.entries(cmsModules)
    .filter(([path]) => path.includes('/' + type + '/' + lang + '/'))
    .map(([, record]) => ({ ...record, kind: type,
      content: record.body ? [record.body] : record.content }));
}

function mergeCms(legacy, records) {
  const overridden = new Set(records.flatMap(record => [record.id, record.slug]).filter(Boolean));
  return uniqueMaterials([
    ...records.filter(record => record.published === true),
    ...legacy.filter(record => !overridden.has(record.id) && !overridden.has(record.slug))
  ]).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function recordsForLang(modules, type, lang) {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/${type}/${lang}/`))
    .map(([, data]) => data);
}

export function getArticles(lang) {
  const articles = recordsForLang(articleModules, 'articles', lang)
    .map(article => translateArticle(article, lang))
    .filter(isPublishedArticle);

  return mergeCms(articles, cmsRecords('articles', lang));
}

export function getNews(lang) {
  return mergeCms([], cmsRecords('news', lang));
}

export function getArticleBySlug(lang, slug) {
  return [...getArticles(lang), ...getNews(lang)].find(article => article.slug === slug);
}

export function getEvents(lang) {
  const legacy = recordsForLang(eventModules, 'events', lang).map(event => translateEvent(event, lang));
  return mergeCms(legacy, cmsRecords('events', lang));
}

export function getEventBySlug(lang, slug) {
  return getEvents(lang).find(event => event.slug === slug);
}
