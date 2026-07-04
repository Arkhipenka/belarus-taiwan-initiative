import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import ArticleCard from '../components/ArticleCard'
import { translateArticle, uniqueMaterials } from '../data/materialTranslations'

const articlesModules = import.meta.glob(
  '../data/articles/*/*.json',
  { eager: true }
)

function Home() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const navigate = useNavigate()

  const slides = [
    {
      image: `${import.meta.env.BASE_URL}images/hero-taiwan-protest.webp`,
      alt: 'Taiwan civic protest',
      title: 'hero.slide1Title',
      subtitle: 'hero.slide1Subtitle',
      button: { text: 'hero.slide1Button', link: `/${lang}/articles` }
    },
    {
      image: `${import.meta.env.BASE_URL}images/hero-taipei-mrt.jpg`,
      alt: 'Taipei MRT and city streets',
      title: 'hero.slide2Title',
      subtitle: 'hero.slide2Subtitle',
      button: { text: 'hero.slide2Button', link: `/${lang}/articles` }
    },
    {
      image: `${import.meta.env.BASE_URL}images/hero-presidential-meeting.jpg`,
      alt: 'Public meeting with the president of Taiwan',
      title: 'hero.slide3Title',
      subtitle: 'hero.slide3Subtitle',
      button: { text: 'hero.slide3Button', link: `/${lang}/about` }
    }
  ]

  const allArticles = useMemo(() => {
    const articles = Object.entries(articlesModules)
      .filter(([path]) => path.includes(`/data/articles/${lang}/`))
      .map(([, mod]) => translateArticle(mod.default, lang))

    return uniqueMaterials(articles)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [lang])

  const featuredArticle = allArticles[0] || null
  const secondaryArticles = allArticles.slice(1, 3)

  return (
    <div className="home-container">
      <HeroBanner slides={slides} />

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

      <section className="featured-articles">
        <div className="section-heading">
          <h2 className="section-title">
            {t('articles.featuredTitle')}
          </h2>
          <button className="text-button" onClick={() => navigate(`/${lang}/articles`)}>
            {t('nav.articles')}
          </button>
        </div>

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
