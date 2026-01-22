import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'

function HeroBanner({ slides, interval = 10000 }) {
  const { t } = useTranslation()
  const { lang } = useParams()
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [slides.length, interval])

  if (!slides || slides.length === 0) return null

  const slide = slides[current]

  return (
    <div className="hero-banner">
      <img src={slide.image} alt={slide.alt} />
      <div className="hero-text">
        <h2>{t(slide.title)}</h2>
        {slide.subtitle && <p>{t(slide.subtitle)}</p>}
        {slide.button && (
          <button onClick={() => navigate(`/${lang}${slide.button.link}`)}>
            {t(slide.button.text)}
          </button>
        )}
      </div>
    </div>
  )
}

export default HeroBanner
