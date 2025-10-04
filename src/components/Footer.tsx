import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold mb-3 text-white">
              <i className="bi bi-shield-check me-2"></i>
              Ariga.ai
            </h5>
            <p className="text-white-50 small">
              Implementación de inteligencia artificial en ciberseguridad para proteger tu empresa.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold mb-3 text-white">Enlaces Rápidos</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <a href="#servicios" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>
                  Servicios
                </a>
              </li>
              <li className="mb-2">
                <a href="#contacto" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold mb-3 text-white">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/privacidad" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>
                  Política de Privacidad
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terminos" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <div className="row">
          <div className="col text-center">
            <p className="text-white-50 small mb-0">
              © {new Date().getFullYear()} Ariga.ai - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
