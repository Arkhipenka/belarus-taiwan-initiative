import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* 1️⃣ Бренд */}
        <div className="footer-brand">
          <h3>Беларусь – 台灣</h3>
          <p>
            探索與促進白俄羅斯和台灣之間的民間交流與合作。
          </p>
        </div>

        {/* 2️⃣ Навигация */}
        <div className="footer-nav">
          <h4>Навигация</h4>
          <ul>
            <li><Link to="/by">Галоўная</Link></li>
            <li><Link to="/by/about">Пра нас</Link></li>
            <li><Link to="/by/articles">Артыкулы</Link></li>
            <li><Link to="/by/contacts">Кантакты</Link></li>
            <li><Link to="/by/donate">Падтрымка</Link></li>
          </ul>
        </div>

        {/* 3️⃣ Соцсети */}
        <div className="footer-social">
          <h4>Мы ў сацсетках</h4>
          <div className="social-links">
            {/* Беларусь */}
            <div>
              <p>Беларусь:</p>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a><br/>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
            {/* Тайвань */}
            <div>
              <p>台灣:</p>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a><br/>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* 4️⃣ Мета */}
      <div className="footer-meta">
        &copy; 2026 Belarus–Taiwan. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
