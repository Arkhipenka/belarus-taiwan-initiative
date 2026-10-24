export default function MaterialDownloads({items}) {
  if (!items?.length) return null;
  return <div className="material-downloads">{items.map(item=><a key={item.url} href={item.url} download className="material-download"><span className="material-file-type" aria-hidden="true">PPTX</span><span><strong>{item.title}</strong><small>{item.meta}</small></span><span aria-hidden="true">↓</span></a>)}</div>;
}
