// One page, one scrollbar. Only the same-origin platform receives the size.
const platformLanguage = ({be:'by',ru:'ru',en:'en','zh-Hant':'zh'})[new URLSearchParams(location.search).get('lang')] || 'en';
addEventListener('load', () => {
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, location.href);
    if (url.hostname !== 'belarus-taiwan.org') return;
    const route = url.hash.startsWith('#/') ? url.hash.slice(1) : url.pathname;
    link.href = location.origin + route.replace(/^\/(en|by|ru|pl|zh)(?=\/|$)/, '/' + platformLanguage);
    link.target = '_top';
  });
});
if (new URLSearchParams(location.search).get('view') === 'explore') {
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || new URL(link.href, location.href).hash !== '#explore-more') return;
    event.preventDefault();
    if (window.parent !== window) window.parent.postMessage({type:'taiwan-experience-publications'},location.origin);
    else location.assign('/' + platformLanguage + '/articles');
  });
}
if (window.parent !== window) {
  let previousHeight = 0;
  const reportHeight = () => {
    const height = Math.ceil(document.body.getBoundingClientRect().height);
    if (height === previousHeight) return;
    previousHeight = height;
    window.parent.postMessage({type:'taiwan-experience-height',height},location.origin);
  };
  new ResizeObserver(reportHeight).observe(document.body);
  addEventListener('load',reportHeight);
  document.fonts.ready.then(reportHeight);
  reportHeight();
}
