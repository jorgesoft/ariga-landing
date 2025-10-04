import { Link } from 'react-router-dom'

export default function SecuredAI() {
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
                IA Segura
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-robot display-4 text-primary me-3"></i>
              <h1 className="display-4 fw-bold mb-0">IA Segura</h1>
            </div>
            <p className="lead text-muted">
              Implementa y gestiona sistemas de IA de forma segura y responsable
            </p>
          </div>

          {/* Overview */}
          <section className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">¿Qué es?</h3>
                <p>
                  En la era de la IA generativa y los modelos de lenguaje, implementar inteligencia artificial sin las medidas de seguridad adecuadas puede exponer tu empresa a riesgos críticos: fugas de datos, manipulación de modelos, sesgos no detectados y responsabilidades legales. Nuestro servicio de IA Segura te ayuda a aprovechar el poder de la IA mientras proteges tu información y cumples con las regulaciones.
                </p>
              </div>
            </div>
          </section>

          {/* How We Do It */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4">Cómo Implementamos IA Segura</h3>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <i className="bi bi-shield-lock text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Evaluación de Riesgos de IA</h5>
                        <p className="mb-0">
                          Analizamos tus casos de uso de IA para identificar riesgos de seguridad, privacidad y cumplimiento específicos. Evaluamos modelos, datos de entrenamiento, integraciones y puntos de acceso.
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
                        <i className="bi bi-file-lock text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Protección de Datos Sensibles</h5>
                        <p className="mb-0">
                          Implementamos controles para prevenir que datos confidenciales sean expuestos a modelos de IA externos o utilizados inadecuadamente en entrenamientos.
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
                        <i className="bi bi-cpu text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Seguridad de Modelos</h5>
                        <p className="mb-0">
                          Protegemos tus modelos de IA contra ataques de prompt injection, envenenamiento de datos, extracción de modelos y otras amenazas específicas de machine learning.
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
                        <i className="bi bi-eye text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Monitorización Continua</h5>
                        <p className="mb-0">
                          Implementamos sistemas de monitorización que detectan comportamientos anómalos en tus aplicaciones de IA, incluyendo intentos de manipulación, deriva de modelos y uso indebido.
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
                        <i className="bi bi-clipboard-data text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Gobernanza y Políticas</h5>
                        <p className="mb-0">
                          Ayudamos a establecer políticas claras de uso de IA, procesos de aprobación, y documentación que te preparan para regulaciones como el AI Act europeo.
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
                        <i className="bi bi-people text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Formación del Equipo</h5>
                        <p className="mb-0">
                          Capacitamos a tu equipo en prácticas seguras de desarrollo e implementación de IA, desde prompt engineering seguro hasta validación de outputs.
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
                    <h6 className="fw-bold mb-1">Innovación Sin Riesgos</h6>
                    <p className="text-muted mb-0">Aprovecha el poder de la IA sin comprometer la seguridad o privacidad de tu empresa.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Cumplimiento Normativo</h6>
                    <p className="text-muted mb-0">Prepárate para el AI Act y otras regulaciones de IA con gobernanza y documentación adecuadas.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Protección de Propiedad Intelectual</h6>
                    <p className="text-muted mb-0">Evita que información confidencial o modelos propietarios sean comprometidos.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Confianza de Clientes y Partners</h6>
                    <p className="text-muted mb-0">Demuestra que utilizas IA de forma responsable y segura, ganando la confianza del mercado.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-5">
            <div className="card bg-light border-0">
              <div className="card-body p-5">
                <h4 className="fw-bold mb-3">¿Utilizas IA en tu empresa?</h4>
                <p className="text-muted mb-4">
                  Asegúrate de que tus implementaciones de IA son seguras y cumplen con las regulaciones
                </p>
                <a 
                  href="https://cal.com/jorgesilva.pro/reunion-inicial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Evaluar mi IA
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
