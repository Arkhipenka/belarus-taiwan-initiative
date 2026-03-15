import HeroBanner from '../components/HeroBanner'
import ArticleCard from '../components/ArticleCard'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'

function Home() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const navigate = useNavigate()

  /* ---------------- HERO ---------------- */

  const slides = [
    {
      image: `${import.meta.env.BASE_URL}images/taiwan1.jpg`,
      alt: 'Taiwan street',
      title: 'hero.slide1Title',
      subtitle: 'hero.slide1Subtitle',
      button: { text: 'hero.slide1Button', link: `/${lang}/articles` }
    },
    {
      image: `${import.meta.env.BASE_URL}images/taiwan2.jpg`,
      alt: 'Taiwan night market',
      title: 'hero.slide2Title',
      subtitle: 'hero.slide2Subtitle',
      button: { text: 'hero.slide2Button', link: `/${lang}/articles` }
    },
    {
      image: `${import.meta.env.BASE_URL}images/taiwan3.jpg`,
      alt: 'Taiwan landscape',
      title: 'hero.slide3Title',
      subtitle: 'hero.slide3Subtitle',
      button: { text: 'hero.slide3Button', link: `/${lang}/articles` }
    }
  ]

  /* ---------------- ARTICLES ---------------- */

  // Загружаем ВСЕ статьи всех языков
  const articlesModules = import.meta.glob(
    '../data/articles/*/*.json',
    { eager: true }
  )

  // Фильтруем по текущему языку
  const allArticles = Object.entries(articlesModules)
    .filter(([path]) => path.includes(`/data/articles/${lang}/`))
    .map(([, mod]) => mod.default)
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // новые сверху

  const featuredArticle = allArticles[0] || null
  const secondaryArticles = allArticles.slice(1, 3)

  /* ---------------- RENDER ---------------- */

  return (
    <div className="home-container">

      {/* Hero */}
      <HeroBanner slides={slides} />

      {/* About */}
      <section className="about-initiative">
        <img
          src={`${import.meta.env.BASE_URL}images/Flag_of_Formosa_1895.svg`}
          alt="Historical flag of Formosa 1895"
          className="about_img"
        />

        <div className="about_content-box">
          <h2>{t('home.aboutTitle')}</h2>
          <p>{t('home.aboutText1')}</p>
          <p>{t('home.aboutText2')}</p>
          <p>{t('home.aboutText3')}</p>
          <p>{t('home.aboutText4')}</p>

          <button onClick={() => navigate(`/${lang}/about`)}>
            {t('home.aboutButton')}
          </button>
        </div>
      </section>

      {/* Articles */}
      <section className="featured-articles">
        <h2 className="section-title">
          {t('articles.featuredTitle')}
        </h2>

        <div className="articles-showcase">
          {featuredArticle && (
            <ArticleCard
              key={featuredArticle.id}
              article={featuredArticle}
              featured={true}
            />
          )}

          {secondaryArticles.map(article => (
            <ArticleCard
              key={article.id}
              article={article}
              featured={false}
            />
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home