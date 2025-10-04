import { Link } from 'react-router-dom'

export default function CloudSecurity() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Inicio</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Seguridad en la Nube
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-cloud-check display-4 text-primary me-3"></i>
              <h1 className="display-4 fw-bold mb-0">Seguridad en la Nube</h1>
            </div>
            <p className="lead text-muted">
              Protege tu infraestructura cloud con herramientas avanzadas
            </p>
          </div>

          {/* Overview */}
          <section className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">¿Qué es?</h3>
                <p>
                  La nube trae enormes beneficios, pero también introduce nuevos desafíos de seguridad: configuraciones incorrectas, accesos no autorizados, falta de visibilidad y cumplimiento normativo. Nuestro servicio de Seguridad en la Nube utiliza herramientas avanzadas para proporcionar protección continua, automatizada e inteligente de tus entornos AWS, Azure, Google Cloud y multi-cloud.
                </p>
              </div>
            </div>
          </section>

          {/* How We Do It */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4">Cómo Protegemos tu Nube con IA</h3>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <i className="bi bi-clouds text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Soporte Multi-Cloud</h5>
                        <p className="mb-0">
                          Protege y monitorea entornos AWS, Azure, Google Cloud y arquitecturas híbridas desde una sola plataforma centralizada.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <i className="bi bi-diagram-3 text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Mapeo de Frameworks de Cumplimiento</h5>
                        <p className="mb-0">
                          Mapeo automático contra CIS Benchmarks, NIST 800-53, ISO 27001, PCI-DSS, GDPR, SOC 2 y otros estándares. Visualiza tu estado de cumplimiento en tiempo real.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <i className="bi bi-robot text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Cientos de Chequeos Automatizados</h5>
                        <p className="mb-0">
                          Realiza cientos de pruebas automáticas sobre configuraciones, accesos, cifrado, redes y más, detectando riesgos y desviaciones en minutos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <i className="bi bi-bar-chart-line text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Reportes Detallados</h5>
                        <p className="mb-0">
                          Accede a reportes visuales y exportables con hallazgos, tendencias, métricas de cumplimiento y recomendaciones priorizadas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4">Beneficios</h3>
            <div className="list-group">
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Visibilidad Total Multi-Cloud</h6>
                    <p className="text-muted mb-0">Vista unificada de seguridad en todos tus proveedores cloud desde una sola plataforma.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Respuesta Inmediata</h6>
                    <p className="text-muted mb-0">Detección y respuesta automática a amenazas en minutos, no días.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Reducción de Superficie de Ataque</h6>
                    <p className="text-muted mb-0">Identifica y elimina exposiciones innecesarias en tu infraestructura cloud.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-5">
            <div className="card bg-light border-0">
              <div className="card-body p-5">
                <h4 className="fw-bold mb-3">¿Está tu nube realmente segura?</h4>
                <p className="text-muted mb-4">
                  Realiza una evaluación gratuita de tu postura de seguridad en la nube
                </p>
                <a 
                  href="https://cal.com/jorgesilva.pro/reunion-inicial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Evaluar mi Cloud
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
