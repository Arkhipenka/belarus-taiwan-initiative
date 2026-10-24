import { Link, useParams } from 'react-router-dom';
import { getNews } from '../data/materials';
import { getAssetUrl } from '../utils/assets';
import { formatShortDate } from '../utils/date';
import { getMaterialExcerpt } from '../utils/text';
import { getHomeCopy } from '../data/home';
import PageIntro from '../components/PageIntro';

export default function News() {
  const { lang = 'en' } = useParams();
  const copy = getHomeCopy(lang);
  const news = getNews(lang);
  return <main className="platform-news-page home-hub">
    <PageIntro title={copy.newsTitle} description={copy.newsIntro} />
    <section className="hub-section">
      <div className="hub-materials">{news.map(item => <Link key={item.slug} className="hub-material" to={'/' + lang + '/news/' + item.slug}>
        {item.image && <div className="hub-material-image"><img src={getAssetUrl(item.image)} alt="" loading="lazy" /></div>}
        <div className="hub-material-meta"><span>{formatShortDate(item.date, lang)}</span><span aria-hidden="true">↗</span></div><h2>{item.title}</h2><p>{getMaterialExcerpt(item)}</p>
      </Link>)}</div>
      {!news.length && <div className="hub-empty"><p>{copy.newsEmpty}</p><Link to={'/' + lang + '/contacts'}>{copy.contact} ↗</Link></div>}
    </section>
  </main>;
}
