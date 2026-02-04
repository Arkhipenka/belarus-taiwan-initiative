import HeroBanner from '../components/HeroBanner'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'

function Home() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const navigate = useNavigate()

  const slides = [
    {
      image: `${import.meta.env.BASE_URL}images/taiwan1.jpg`,
      alt: 'Taiwan street',
      title: 'hero.slide1Title',
      subtitle: 'hero.slide1Subtitle',
      button: { text: 'hero.slide1Button', link: '/articles' }
    },
    {
      image: `${import.meta.env.BASE_URL}images/taiwan2.jpg`,
      alt: 'Taiwan night market',
      title: 'hero.slide2Title',
      subtitle: 'hero.slide2Subtitle',
      button: { text: 'hero.slide2Button', link: '/articles' }
    },
    {
      image: `${import.meta.env.BASE_URL}images/taiwan3.jpg`,
      alt: 'Taiwan landscape',
      title: 'hero.slide3Title',
      subtitle: 'hero.slide3Subtitle',
      button: { text: 'hero.slide3Button', link: '/articles' }
    }
  ];
  const articles = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/article1.jpg`,
    alt: 'Taiwan democracy',
    title: 'articles.article1Title',
    excerpt: 'articles.article1Excerpt'
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/article2.jpg`,
    alt: 'Taiwan culture',
    title: 'articles.article2Title',
    excerpt: 'articles.article2Excerpt'
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}/images/article3.jpg`,
    alt: 'Belarus-Taiwan',
    title: 'articles.article3Title',
    excerpt: 'articles.article3Excerpt'
  }
]
  return (
    <div className="home-container">
      {/* Баннер */}
      <HeroBanner slides={slides} />

      {/* Блок "О инициативе" */}
      <section className="about-initiative">
        <h2>{t('home.aboutTitle')}</h2>
        <p>{t('home.aboutText1')}</p>
        <p>{t('home.aboutText2')}</p>
        <p>{t('home.aboutText3')}</p>
        <p>{t('home.aboutText4')}</p>
        <button onClick={() => navigate(`/${lang}/about`)}>
          {t('home.aboutButton')}
        </button>
      </section>
      <section className="featured-articles">
<section className="featured-articles">
  <h2 className="section-title">{t('home.featuredTitle')}</h2>

  <div className="articles-showcase">
    {articles.map((article, index) => (
      <ArticleCard
        key={article.id}
        article={article}
        featured={index === 0} // первая статья — большая
      />
    ))}
  </div>
</section>

</section>
    </div>
  )
}

export default Home
