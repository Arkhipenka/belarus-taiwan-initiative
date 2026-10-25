import { createServer } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

// Reuse the application's published-content filters and metadata resolver.
// No browser, network request or independent copy of the content catalogue.
const server = await createServer({configFile: false, server: {middlewareMode: true, hmr: false, watch: null}, appType: 'custom'});
const origin = 'https://belarus-taiwan.org';
const langs = {en:'en', by:'be', ru:'ru', pl:'pl', zh:'zh-TW'};
const locales = {en:'en_US', by:'be_BY', ru:'ru_RU', pl:'pl_PL', zh:'zh_TW'};
const escape = value => String(value ?? '').replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const json = value => JSON.stringify(value).replaceAll('<','\\u003c');
try {
  const {resolveSeo, getBaseStructuredData} = await server.ssrLoadModule('/src/utils/seoMetadata.js');
  const {getArticles, getNews, getEvents} = await server.ssrLoadModule('/src/data/materials.js');
  const {default: i18n} = await server.ssrLoadModule('/src/i18n.js');
  const template = await readFile('dist/index.html','utf8');
  const routes = new Map();
  for (const lang of Object.keys(langs)) {
    for (const section of ['', 'about', 'taiwan', 'articles', 'news', 'events', 'contacts', 'donate']) {
      routes.set(`/${lang}${section ? '/'+section : ''}`, {lang});
    }
    for (const [section, items] of [['articles',getArticles(lang)], ['news',getNews(lang)], ['events',getEvents(lang)]]) {
      for (const item of items) routes.set(`/${lang}/${section}/${item.slug}`, {lang, item});
    }
  }
  const alternates = route => Object.entries(langs).map(([lang,code]) => ({lang:code, route:route.replace(/^\/(en|by|ru|pl|zh)(?=\/|$)/,`/${lang}`)})).filter(value => routes.has(value.route));
  function render(route, lang) {
    const seo = resolveSeo(route, lang, i18n.getFixedT(lang));
    const meta = (key,value,attr='name') => `<meta ${attr}="${key}" content="${escape(value)}">`;
    const alternate = alternates(route);
    const english = alternate.find(value => value.lang === 'en');
    const head = [
      `<title>${escape(seo.title)}</title>`,
      meta('description',seo.description),
      meta('robots','index, follow, max-image-preview:large'),
      `<link rel="canonical" href="${escape(seo.url)}">`,
      ...alternate.map(value => `<link rel="alternate" hreflang="${value.lang}" href="${escape(origin+value.route)}">`),
      ...(english ? [`<link rel="alternate" hreflang="x-default" href="${escape(origin+english.route)}">`] : []),
      ...Object.entries({'og:type':seo.type,'og:site_name':'Belarus-Taiwan & East Asia Platform','og:title':seo.title,'og:description':seo.description,'og:url':seo.url,'og:image':seo.image,'og:image:alt':seo.title,'og:locale':locales[lang]}).map(([key,value])=>meta(key,value,'property')),
      ...Object.entries({'twitter:card':'summary_large_image','twitter:title':seo.title,'twitter:description':seo.description,'twitter:image':seo.image}).map(([key,value])=>meta(key,value)),
      `<script type="application/ld+json" data-seo-json-ld="true">${json([...getBaseStructuredData(seo,lang),...seo.structuredData])}</script>`
    ].join('\n');
    // Keep analytics, compiled scripts/styles, icons and viewport unchanged.
    return template.replace(/<html\s+lang="[^"]*"/i,`<html lang="${langs[lang]}"`)
      .replace(/<title>[\s\S]*?<\/title>/gi,'')
      .replace(/<meta\b[^>]*(?:name="(?:description|keywords|author|robots|googlebot|twitter:[^"]*)"|property="(?:og:[^"]*|article:[^"]*)")[^>]*>/gi,'')
      .replace(/<link\b[^>]*rel="(?:canonical|alternate)"[^>]*>/gi,'')
      .replace('</head>',head+'\n</head>');
  }
  for (const [route,{lang}] of routes) {
    const folder = path.join('dist',route.slice(1));
    await mkdir(folder,{recursive:true});
    await writeFile(path.join(folder,'index.html'), render(route,lang));
  }
  await writeFile('dist/index.html',render('/en','en'));
  const xml = [...routes].map(([route]) => {
    const links = alternates(route).map(value=>`    <xhtml:link rel="alternate" hreflang="${value.lang}" href="${escape(origin+value.route)}"/>`);
    return `  <url>\n    <loc>${escape(origin+route)}</loc>\n${links.join('\n')}\n  </url>`;
  });
  await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${xml.join('\n')}\n</urlset>\n`);
  console.log(`SEO: generated ${routes.size} route-specific HTML heads and sitemap entries.`);
} finally { await server.close(); }
