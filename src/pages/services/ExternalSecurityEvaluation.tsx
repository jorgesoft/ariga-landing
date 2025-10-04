import { Link } from 'react-router-dom'

export default function ExternalSecurityEvaluation() {
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
                Evaluación de Seguridad Externa
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-search display-4 text-primary me-3"></i>
              <h1 className="display-4 fw-bold mb-0">Evaluación de Seguridad Externa</h1>
            </div>
            <p className="lead text-muted">
              Descubre cómo los hackers ven tu empresa desde el exterior y anticipa sus movimientos con análisis avanzados de IA.
            </p>
          </div>

          {/* Overview */}
          <section className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">¿Qué es?</h3>
                <p>
                  Nuestro servicio de Evaluación de Seguridad Externa utiliza inteligencia artificial para realizar un análisis exhaustivo de tu exposición en Internet. Identificamos vulnerabilidades, configuraciones incorrectas y puntos débiles en tu perímetro digital antes de que sean explotados por atacantes.
                </p>
              </div>
            </div>
          </section>

          {/* How We Do It */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4">Cómo lo Hacemos con IA</h3>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <i className="bi bi-robot text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Reconocimiento Automatizado</h5>
                        <p className="mb-0">
                          Nuestros sistemas de IA escanean tu infraestructura externa, identificando todos los activos expuestos: servidores, aplicaciones web, APIs, certificados y más.
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
                        <i className="bi bi-graph-up text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Análisis Inteligente de Vulnerabilidades</h5>
                        <p className="mb-0">
                          Utilizamos modelos de machine learning avanzadas para detectar vulnerabilidades conocidas y emergentes, priorizándolas según su criticidad real para tu negocio.
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
                        <i className="bi bi-shield-check text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Detección de Configuraciones Incorrectas</h5>
                        <p className="mb-0">
                          La IA analiza configuraciones de servidores, firewalls, DNS y otros servicios para identificar debilidades que podrían ser aprovechadas por atacantes.
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
                        <i className="bi bi-bell text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Detección de Emails Filtrados</h5>
                        <p className="mb-0">
                          Nuestro sistema busca fuentes públicas y privadas para identificar si correos electrónicos de tu organización han sido filtrados o expuestos, permitiéndote actuar rápidamente ante posibles riesgos de phishing o suplantación.
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
                    <h6 className="fw-bold mb-1">Visión Completa del Perímetro</h6>
                    <p className="text-muted mb-0">Conoce todos tus activos expuestos y su estado de seguridad en tiempo real.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Reducción de Superficie de Ataque</h6>
                    <p className="text-muted mb-0">Identifica y elimina exposiciones innecesarias antes de que sean explotadas.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Cumplimiento Normativo</h6>
                    <p className="text-muted mb-0">Demuestra a auditores y reguladores que monitorizas proactivamente tu seguridad externa.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Eficiencia Operativa</h6>
                    <p className="text-muted mb-0">La automatización con IA libera tiempo de tu equipo para tareas de mayor valor.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-5">
            <div className="card bg-light border-0">
              <div className="card-body p-5">
                <h4 className="fw-bold mb-3">¿Listo para conocer tu exposición real?</h4>
                <p className="text-muted mb-4">
                  Agenda una demostración y descubre qué vulnerabilidades externas tiene tu organización
                </p>
                <a 
                  href="https://cal.com/jorgesilva.pro/reunion-inicial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Agendar Consulta
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
