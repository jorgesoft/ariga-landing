import { Link } from 'react-router-dom'

export default function ApplicationSecurity() {
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
                Seguridad de Aplicaciones
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-code-square display-4 text-primary me-3"></i>
              <h1 className="display-4 fw-bold mb-0">Seguridad de Aplicaciones</h1>
            </div>
            <p className="lead text-muted">
              Protege tus aplicaciones en cada fase del ciclo de desarrollo con análisis inteligente
            </p>
          </div>

          {/* Overview */}
          <section className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">¿Qué es?</h3>
                <p>
                  Las vulnerabilidades en aplicaciones son la causa principal de brechas de seguridad. Nuestro servicio de Seguridad de Aplicaciones integra inteligencia artificial en todo el ciclo de vida del desarrollo de software (SDLC) para identificar y remediar vulnerabilidades antes de que lleguen a producción, protegiendo tus aplicaciones web, móviles y APIs.
                </p>
              </div>
            </div>
          </section>

          {/* How We Do It */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4">Cómo Protegemos tus Aplicaciones con IA</h3>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <i className="bi bi-file-code text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Análisis Estático Inteligente (SAST)</h5>
                        <p className="mb-0">
                          IA revisa tu código fuente detectando vulnerabilidades, patrones inseguros y malas prácticas. Reduce falsos positivos mediante aprendizaje del contexto de tu aplicación.
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
                        <i className="bi bi-play-circle text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Análisis Dinámico Automatizado (DAST)</h5>
                        <p className="mb-0">
                          Testing de seguridad automatizado que simula ataques reales contra tus aplicaciones en ejecución. La IA adapta las pruebas según la tecnología y comportamiento de tu app.
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
                        <i className="bi bi-box-seam text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Análisis de Componentes (SCA)</h5>
                        <p className="mb-0">
                          Identificación automática de vulnerabilidades en dependencias y librerías de terceros. Priorización inteligente basada en explotabilidad real y contexto de uso.
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
                        <h5 className="fw-bold mb-2">Protección de APIs</h5>
                        <p className="mb-0">
                          Monitorización continua de APIs con IA que aprende el comportamiento normal y detecta abusos, ataques de inyección, broken authentication y exposición de datos.
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
                        <i className="bi bi-git text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Integración DevSecOps</h5>
                        <p className="mb-0">
                          Incorporamos controles de seguridad automatizados en tu pipeline CI/CD. Los desarrolladores reciben feedback inmediato sin ralentizar el desarrollo.
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
                        <i className="bi bi-patch-check text-primary fs-2"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Sugerencias de Remediación</h5>
                        <p className="mb-0">
                          No solo identificamos problemas. La IA proporciona código de ejemplo específico y guías paso a paso para remediar cada vulnerabilidad encontrada.
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
                    <h6 className="fw-bold mb-1">Shift Left Security</h6>
                    <p className="text-muted mb-0">Detecta y corrige vulnerabilidades temprano en el desarrollo, cuando son más baratas de remediar.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Reducción de Tiempo de Remediación</h6>
                    <p className="text-muted mb-0">Menos falsos positivos y guías específicas aceleran drásticamente la corrección de problemas.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Cumplimiento y Auditorías</h6>
                    <p className="text-muted mb-0">Documentación automática de controles de seguridad facilita auditorías y certificaciones.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Desarrollo Más Rápido y Seguro</h6>
                    <p className="text-muted mb-0">Automatización permite mantener velocidad de desarrollo sin comprometer seguridad.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-5">
            <div className="card bg-light border-0">
              <div className="card-body p-5">
                <h4 className="fw-bold mb-3">¿Sabes qué vulnerabilidades tienen tus aplicaciones?</h4>
                <p className="text-muted mb-4">
                  Realiza un análisis de seguridad gratuito de una de tus aplicaciones
                </p>
                <a 
                  href="https://cal.com/jorgesilva.pro/reunion-inicial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Analizar mi App
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
