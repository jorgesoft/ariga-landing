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
                Concienciación en Seguridad
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
              Transforma a tus empleados en la primera línea de defensa con formación personalizada mediante IA
            </p>
          </div>

          {/* Overview */}
          <section className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">¿Qué es?</h3>
                <p>
                  El factor humano sigue siendo el eslabón más vulnerable en ciberseguridad. Nuestro programa de Concienciación en Seguridad utiliza inteligencia artificial para crear experiencias de aprendizaje personalizadas, relevantes y efectivas que transforman el comportamiento de tus empleados y reducen drásticamente el riesgo de incidentes de seguridad.
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
                        <i className="bi bi-person-badge text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Contenido Personalizado</h5>
                        <p className="mb-0">
                          La IA analiza el rol, comportamiento y nivel de conocimiento de cada empleado para ofrecer formación específica y relevante para su puesto de trabajo.
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
                        <i className="bi bi-envelope-exclamation text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Simulaciones de Phishing Inteligentes</h5>
                        <p className="mb-0">
                          Generamos campañas de phishing simulado adaptadas a las amenazas reales que enfrenta tu sector, con dificultad ajustada según el nivel de cada usuario.
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
                        <i className="bi bi-graph-up-arrow text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Análisis Predictivo de Riesgos</h5>
                        <p className="mb-0">
                          Identificamos qué empleados o departamentos presentan mayor riesgo basándonos en patrones de comportamiento, y priorizamos la formación en consecuencia.
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
                        <i className="bi bi-controller text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Gamificación Adaptativa</h5>
                        <p className="mb-0">
                          Utilizamos técnicas de gamificación que se adaptan al progreso de cada usuario, manteniendo el engagement y reforzando conceptos clave de seguridad.
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
                        <i className="bi bi-chat-dots text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Asistente Virtual de Seguridad</h5>
                        <p className="mb-0">
                          Implementamos un chatbot de IA disponible 24/7 que responde dudas de seguridad de los empleados en tiempo real, reforzando el aprendizaje.
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
                        <i className="bi bi-bar-chart text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Métricas e Insights Accionables</h5>
                        <p className="mb-0">
                          Dashboards inteligentes que muestran el progreso, identifican tendencias y recomiendan acciones específicas para mejorar la postura de seguridad.
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
