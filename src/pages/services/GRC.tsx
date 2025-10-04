import { Link } from 'react-router-dom'

export default function GRC() {
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
                GRC - Gobierno, Riesgo y Cumplimiento
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-clipboard-check display-4 text-primary me-3"></i>
              <h1 className="display-4 fw-bold mb-0">GRC</h1>
            </div>
            <p className="lead text-muted">
              Gobierno, Riesgo y Cumplimiento automatizados con inteligencia artificial
            </p>
          </div>

          {/* Overview */}
          <section className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">¿Qué es?</h3>
                <p>
                  Gestionar el gobierno de la seguridad, evaluar riesgos y mantener el cumplimiento normativo es complejo, costoso y consume tiempo. Nuestro servicio GRC potenciado con IA automatiza procesos, proporciona insights accionables y te ayuda a demostrar cumplimiento continuo con GDPR, ISO 27001, ENS, PCI-DSS y otras normativas.
                </p>
              </div>
            </div>
          </section>

          {/* How We Do It */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4">Cómo Optimizamos tu GRC</h3>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4 text-center">
                    <i className="bi bi-briefcase text-primary fs-2 mb-3"></i>
                    <h5 className="fw-bold mb-2">Consultoría GRC</h5>
                    <p className="mb-0">Asesoría experta en gobierno, gestión de riesgos y cumplimiento normativo para tu organización.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm position-relative">
                  <div className="card-body p-4 text-center">
                    <div className="position-absolute top-0 end-0 mt-3 me-3">
                      <span className="badge bg-info">Próximamente</span>
                    </div>
                    <i className="bi bi-layers text-primary fs-2 mb-3"></i>
                    <h5 className="fw-bold mb-2">Plataforma GRC</h5>
                    <p className="mb-0">Gestión centralizada y automatizada de políticas, riesgos y cumplimiento desde una sola plataforma.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm position-relative">
                  <div className="card-body p-4 text-center">
                    <div className="position-absolute top-0 end-0 mt-3 me-3">
                      <span className="badge bg-info">Próximamente</span>
                    </div>
                    <i className="bi bi-shield-check text-primary fs-2 mb-3"></i>
                    <h5 className="fw-bold mb-2">Ley de Protección de Datos Personales de El Salvador</h5>
                    <p className="mb-0">Prepara tu empresa para cumplir con la nueva ley salvadoreña de protección de datos personales.</p>
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
                    <h6 className="fw-bold mb-1">Reducción de Carga Administrativa</h6>
                    <p className="text-muted mb-0">Automatización libera hasta 70% del tiempo dedicado a tareas manuales de GRC.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Auditorías Más Rápidas</h6>
                    <p className="text-muted mb-0">Evidencias organizadas y actualizadas automáticamente reducen tiempo de auditoría en 50%.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Visión Ejecutiva Clara</h6>
                    <p className="text-muted mb-0">Dashboards inteligentes traducen métricas técnicas en riesgo de negocio comprensible para la dirección.</p>
                  </div>
                </div>
              </div>
              <div className="list-group-item border-0 ps-0">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Decisiones Basadas en Datos</h6>
                    <p className="text-muted mb-0">Prioriza inversiones en seguridad basándote en riesgo real cuantificado, no en intuición.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-5">
            <div className="card bg-light border-0">
              <div className="card-body p-5">
                <h4 className="fw-bold mb-3">¿Listo para simplificar tu GRC?</h4>
                <p className="text-muted mb-4">
                  Descubre cómo la IA puede transformar tu gestión de gobierno, riesgo y cumplimiento
                </p>
                <a 
                  href="https://cal.com/jorgesilva.pro/reunion-inicial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Agendar Demostración
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
