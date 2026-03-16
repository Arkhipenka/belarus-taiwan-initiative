// ArticleGallery.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';


// Инициализация модулей Swiper
SwiperCore.use([Navigation]);

export default function ArticleGallery({ gallery }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="article-gallery-container">
      <Swiper
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        {gallery.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="slide-item">
              <img src={img.src || img} alt={img.caption || `gallery ${idx + 1}`} className="slide-image" />
              {img.caption && <p className="slide-caption">{img.caption}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}