import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const labels = {
  by:{title:'Спампаваць файл?',text:'Файл будзе захаваны на вашай прыладзе. Ніжэй — назва і звесткі пра матэрыял.',download:'Спампаваць',cancel:'Адмена'},
  ru:{title:'Скачать файл?',text:'Файл будет сохранён на вашем устройстве. Ниже — название и сведения о материале.',download:'Скачать',cancel:'Отмена'},
  en:{title:'Download this file?',text:'The file will be saved to your device. Review the title and file details below.',download:'Download',cancel:'Cancel'},
  pl:{title:'Pobrać plik?',text:'Plik zostanie zapisany na Twoim urządzeniu. Poniżej znajdziesz tytuł i informacje o materiale.',download:'Pobierz',cancel:'Anuluj'},
  zh:{title:'下載此檔案？',text:'檔案將儲存至您的裝置。請確認下方的名稱與檔案資訊。',download:'下載',cancel:'取消'}
};
const format = url => url.split(/[?#]/)[0].split('.').pop().toUpperCase();

export default function MaterialDownloads({items}) {
  const {lang='en'} = useParams();
  const c=labels[lang] || labels.en;
  const dialog=useRef(null);
  const [selected,setSelected]=useState(null);
  useEffect(()=>{
    if (!selected) return;
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return ()=>{document.body.style.overflow=previous;};
  },[selected]);
  if (!items?.length) return null;
  const close=()=>dialog.current?.close();
  return <div className="material-downloads">
    {items.map(item=><button key={item.url} type="button" className="material-download" aria-haspopup="dialog" onClick={()=>{setSelected(item);dialog.current.showModal();}}><span className="material-file-type" aria-hidden="true">{format(item.url)}</span><span><strong>{item.title}</strong><small>{item.meta}</small></span><span aria-hidden="true">↓</span></button>)}
    <dialog ref={dialog} className="material-download-dialog" aria-labelledby="download-confirm-title" aria-describedby="download-confirm-description download-confirm-details" onClose={()=>setSelected(null)} onClick={event=>{if(event.target===event.currentTarget)close();}}>
      <div className="download-dialog-content">
        <h2 id="download-confirm-title">{c.title}</h2>
        <p id="download-confirm-description">{c.text}</p>
        {selected&&<div id="download-confirm-details" className="download-confirm-details"><span className="material-file-type">{format(selected.url)}</span><strong>{selected.title}</strong><p>{selected.meta}</p></div>}
        <div className="download-dialog-actions"><button type="button" autoFocus onClick={close}>{c.cancel}</button>{selected&&<a href={selected.url} download onClick={close}>{c.download} <span aria-hidden="true">↓</span></a>}</div>
      </div>
    </dialog>
  </div>;
}
