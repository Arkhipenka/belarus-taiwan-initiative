import { Link, useParams } from 'react-router-dom';
import { getNews } from '../data/materials';
import { getAssetUrl } from '../utils/assets';
import { formatShortDate } from '../utils/date';
import { getMaterialExcerpt } from '../utils/text';
import { getHomeCopy } from '../data/home';

export default function News() {
  const { lang = 'en' } = useParams();
  const copy = getHomeCopy(lang);
  const news = getNews(lang);
  return <main className="platform-news-page home-hub">
    <section className="hub-section"><p className="hub-kicker">Belarus–Taiwan & East Asia Platform</p>
      <h1>{copy.newsTitle}</h1><p className="hub-intro">{copy.newsIntro}</p>
      <div className="hub-materials">{news.map(item => <Link key={item.slug} className="hub-material" to={'/' + lang + '/news/' + item.slug}>
        {item.image && <img src={getAssetUrl(item.image)} alt="" loading="lazy" />}
        <span className="hub-kicker">{formatShortDate(item.date, lang)}</span><h2>{item.title}</h2><p>{getMaterialExcerpt(item)}</p>
      </Link>)}</div>
      {!news.length && <div className="hub-empty"><p>{copy.newsEmpty}</p><Link to={'/' + lang + '/contacts'}>{copy.contact} ↗</Link></div>}
    </section>
  </main>;
}
