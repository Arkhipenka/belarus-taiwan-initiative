import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import LanguageLayout from './layouts/LanguageLayout'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Footer from './components/Footer'
import Contacts from './pages/Contacts'
import ArticlePage from './pages/ArticlePage'
import Donate from './pages/Donate'



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />

        <Route path="/:lang" element={<LanguageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="articles" element={<Articles />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="articles/:id" element={<ArticlePage />} />
          <Route path="donate" element={<Donate />} />
        </Route>
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App
