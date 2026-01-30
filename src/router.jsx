import { Routes, Route, HashRouter } from 'react-router-dom'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </HashRouter>
  )
}
