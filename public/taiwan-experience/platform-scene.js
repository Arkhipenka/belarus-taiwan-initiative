// Wait for the parent page to paint before starting its decorative WebGL scene.
if (new URLSearchParams(location.search).get('view') !== 'explore') {
  import('./spatial.js').catch(error => {
    if (window.parent !== window) window.parent.postMessage({type:'taiwan-hero-error'},location.origin);
    console.warn('Animation unavailable; static view retained.',error);
  });
}
