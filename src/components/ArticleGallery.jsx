import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { getAssetUrl } from '../utils/assets';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ArticleGallery({ gallery }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="article-gallery-container">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        {gallery.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="slide-item">
              <img src={getAssetUrl(img.src || img)} alt={img.caption || `gallery ${idx + 1}`} className="slide-image" />
              {img.caption && <p className="slide-caption">{img.caption}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
