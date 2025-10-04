import { Link } from 'react-router-dom'

export default function SecurityAwareness() {
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
                Entrenamiento y Concienciación en Seguridad
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-mortarboard display-4 text-primary me-3"></i>
              <h1 className="display-4 fw-bold mb-0">Concienciación en Seguridad</h1>
            </div>
            <p className="lead text-muted">
              Transforma a tus empleados en la primera línea de defensa con formación personalizada
            </p>
          </div>

          {/* Overview */}
          <section className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">¿Qué es?</h3>
                <p>
                  Nuestro programa de Concienciación en Seguridad brinda experiencias de aprendizaje personalizadas, relevantes y efectivas que transforman el comportamiento de tus empleados y reducen drásticamente el riesgo de incidentes de seguridad.
                </p>
              </div>
            </div>
          </section>

          {/* How We Do It */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4">Cómo lo Hacemos</h3>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <i className="bi bi-play-circle text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Capacitación en Video</h5>
                        <p className="mb-0">
                          Contenido formativo en video de alta calidad, accesible bajo demanda para que tus equipos aprendan a su propio ritmo sobre amenazas de ciberseguridad y mejores prácticas.
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
                        <i className="bi bi-camera-video text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Webinars en Vivo</h5>
                        <p className="mb-0">
                          Sesiones interactivas en vivo donde tus empleados pueden participar, hacer preguntas y aprender sobre las últimas tendencias y amenazas en ciberseguridad.
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
                        <i className="bi bi-easel text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Presentaciones en Vivo</h5>
                        <p className="mb-0">
                          Presentaciones presenciales personalizadas en tu empresa, adaptadas a las necesidades específicas de tu organización y con ejemplos relevantes para tu sector.
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
                        <i className="bi bi-person-badge text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Formación Personalizada por Rol y Sector</h5>
                        <p className="mb-0">
                          Formación personalizada según roles específicos (ejecutivos, desarrolladores, finanzas) y adaptada a las amenazas particulares de tu industria.
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
                        <i className="bi bi-award text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Formación Liderada por Expertos</h5>
                        <p className="mb-0">
                          Entrenamiento impartido por un experto con maestría en ciberseguridad de una universidad top 30 a nivel mundial, asegurando profundidad técnica y experiencia real en cada sesión.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm position-relative">
                  <div className="card-body p-4">
                    <div className="position-absolute top-0 end-0 mt-3 me-3">
                      <span className="badge bg-info">Próximamente</span>
                    </div>
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <i className="bi bi-envelope-exclamation text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Pruebas de Phishing</h5>
                        <p className="mb-0">
                          Simulaciones de ataques de phishing para evaluar y mejorar la capacidad de tus empleados para detectar amenazas reales.
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
                    <h6 className="fw-bold mb-1">Reducción Significativa de Incidentes</h6>
                    <p className="text-muted mb-0">Empleados formados reconocen y reportan amenazas, evitando brechas de seguridad costosas.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Cultura de Seguridad</h6>
                    <p className="text-muted mb-0">Formación continua y relevante crea una cultura organizacional donde la seguridad es responsabilidad de todos.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Cumplimiento Normativo</h6>
                    <p className="text-muted mb-0">Demuestra a auditores que proporcionas formación documentada y efectiva en ciberseguridad.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">ROI Medible</h6>
                    <p className="text-muted mb-0">Métricas claras sobre mejora de comportamientos y reducción de riesgo demuestran el valor de la inversión.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-5">
            <div className="card bg-light border-0">
              <div className="card-body p-5">
                <h4 className="fw-bold mb-3">¿Tus empleados son tu mayor fortaleza o debilidad?</h4>
                <p className="text-muted mb-4">
                  Descubre cómo transformar a tu equipo en defensores activos de la seguridad
                </p>
                <a 
                  href="https://cal.com/jorgesilva.pro/reunion-inicial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Solicitar Demo
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
