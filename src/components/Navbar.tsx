import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-shield-check me-2"></i>
          Ariga.ai
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/servicios/evaluacion-seguridad-externa">
                    Evaluación de Seguridad Externa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/servicios/ia-segura">
                    IA Segura
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/servicios/concienciacion-seguridad">
                    Concienciación en Seguridad
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/servicios/seguridad-nube">
                    Seguridad en la Nube
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/servicios/seguridad-aplicaciones">
                    Seguridad de Aplicaciones
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/servicios/grc">
                    GRC
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
