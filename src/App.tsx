import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ExternalSecurityEvaluation from './pages/services/ExternalSecurityEvaluation'
import SecuredAI from './pages/services/SecuredAI'
import SecurityAwareness from './pages/services/SecurityAwareness'
import CloudSecurity from './pages/services/CloudSecurity'
import ApplicationSecurity from './pages/services/ApplicationSecurity'
import GRC from './pages/services/GRC'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios/evaluacion-seguridad-externa" element={<ExternalSecurityEvaluation />} />
            <Route path="/servicios/ia-segura" element={<SecuredAI />} />
            <Route path="/servicios/concienciacion-seguridad" element={<SecurityAwareness />} />
            <Route path="/servicios/seguridad-nube" element={<CloudSecurity />} />
            <Route path="/servicios/seguridad-aplicaciones" element={<ApplicationSecurity />} />
            <Route path="/servicios/grc" element={<GRC />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/terminos" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
