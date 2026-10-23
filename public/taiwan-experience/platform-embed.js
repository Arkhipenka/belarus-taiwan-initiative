// One page, one scrollbar. Only the same-origin platform receives the size.
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
