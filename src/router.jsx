import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import LanguageLayout from './layouts/LanguageLayout'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import Contacts from './pages/Contacts'
import Footer from './components/Footer'
import Donate from './pages/Donate'
import Events from './pages/Events'


function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />

        <Route path="/:lang" element={<LanguageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<ArticlePage />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="donate" element={<Donate />} />

        </Route>
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default Router
