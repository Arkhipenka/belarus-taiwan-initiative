import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}
