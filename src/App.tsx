import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.tsx'
import Privacy from './pages/Privacy.tsx'
import Terms from './pages/Terms.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'

/**
 * The route tree, with no router attached, so it can be wrapped by
 * `BrowserRouter` on the client (main.tsx) and `StaticRouter` during
 * prerendering (entry-server.tsx).
 */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  )
}
