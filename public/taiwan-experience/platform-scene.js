// The homepage atlas does not need a second WebGL scene.
if (new URLSearchParams(location.search).get('view') !== 'explore') import('./spatial.js');
