import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LanguageLayout from './layouts/LanguageLayout'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Footer from './components/Footer'
import Contacts from './pages/Contacts'
import ArticlePage from './pages/ArticlePage'
import Donate from './pages/Donate'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import AuthorPage from './pages/AuthorPage'
import ScrollToTopButton from './components/ScrollToTopButton'
import SeoManager from './components/SeoManager'

function normalizeLegacyHashRoute() {
  if (typeof window === 'undefined') return;

  const { origin, hash } = window.location;
  if (!hash.startsWith('#/')) return;

  window.location.replace(`${origin}${hash.slice(1)}`);
}

normalizeLegacyHashRoute();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />

        <Route path="/:lang" element={<LanguageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="articles" element={<Articles />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="articles/:slug" element={<ArticlePage />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<EventDetail />} />
          <Route path="donate" element={<Donate />} />
          <Route path="author/:author" element={<AuthorPage />} />
        </Route>
      </Routes>

      <Footer />
      <ScrollToTopButton />
      <SeoManager />
    </BrowserRouter>
  )
}

export default App
