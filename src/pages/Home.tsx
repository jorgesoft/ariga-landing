import { Link } from 'react-router-dom'

export default function Home() {
  const services = [
    {
      title: 'Evaluación de Seguridad Externa',
      icon: 'bi-search',
      description: 'Análisis exhaustivo de vulnerabilidades y exposición externa de tus activos digitales mediante IA.',
      link: '/servicios/evaluacion-seguridad-externa'
    },
    {
      title: 'IA Segura',
      icon: 'bi-robot',
      description: 'Implementación y gestión segura de sistemas de inteligencia artificial en tu organización.',
      link: '/servicios/ia-segura'
    },
    {
      title: 'Concienciación en Seguridad',
      icon: 'bi-mortarboard',
      description: 'Programas de formación y concienciación en ciberseguridad potenciados con IA.',
      link: '/servicios/concienciacion-seguridad'
    },
    {
      title: 'Seguridad en la Nube',
      icon: 'bi-cloud-check',
      description: 'Protección y monitorización inteligente de tus infraestructuras cloud.',
      link: '/servicios/seguridad-nube'
    },
    {
      title: 'Seguridad de Aplicaciones',
      icon: 'bi-code-square',
      description: 'Análisis y protección de aplicaciones mediante técnicas avanzadas de IA.',
      link: '/servicios/seguridad-aplicaciones'
    },
    {
      title: 'GRC',
      icon: 'bi-clipboard-check',
      description: 'Gobierno, riesgo y cumplimiento optimizados con inteligencia artificial.',
      link: '/servicios/grc'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white d-flex align-items-center" style={{ minHeight: '100vh' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">
                Implementación de IA en Ciberseguridad
              </h1>
              <p className="lead mb-4">
                En Ariga.ai transformamos la seguridad de tu empresa mediante la implementación estratégica de inteligencia artificial. Protegemos tu negocio con soluciones innovadoras y eficaces.
              </p>
              <a href="#contacto" className="btn btn-primary btn-lg">
                <i className="bi bi-calendar-check me-2"></i>
                Agenda una Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Nuestros Servicios</h2>
              <p className="lead text-muted">
                Soluciones integrales de ciberseguridad potenciadas con inteligencia artificial
              </p>
            </div>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <i className={`bi ${service.icon} display-4 text-primary`}></i>
                    </div>
                    <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                    <p className="card-text text-muted mb-4">{service.description}</p>
                    <Link to={service.link} className="btn btn-outline-primary">
                      Más Información
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-light py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-10 mx-auto">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">¿Por Qué Ariga.ai?</h2>
              </div>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card border-0 bg-transparent">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <div className="me-3">
                          <i className="bi bi-check-circle-fill text-success fs-3"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-2">Experiencia Especializada</h5>
                          <p className="text-muted">
                            Con años de experiencia en ciberseguridad y desarrollo de soluciones de IA, combinamos el conocimiento técnico profundo con una comprensión práctica de los desafíos empresariales.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 bg-transparent">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <div className="me-3">
                          <i className="bi bi-check-circle-fill text-success fs-3"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-2">IA Aplicada a la Seguridad</h5>
                          <p className="text-muted">
                            No solo implementamos tecnología de IA genérica. Desarrollamos y adaptamos modelos específicos que entienden el contexto de seguridad de tu empresa, automatizando procesos y detectando amenazas de forma proactiva.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 bg-transparent">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <div className="me-3">
                          <i className="bi bi-check-circle-fill text-success fs-3"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-2">Enfoque Personalizado</h5>
                          <p className="text-muted">
                            Cada empresa es única. Analizamos tu infraestructura, procesos y necesidades específicas para diseñar soluciones que se integren perfectamente con tu operativa actual.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 bg-transparent">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <div className="me-3">
                          <i className="bi bi-check-circle-fill text-success fs-3"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-2">Resultados Medibles</h5>
                          <p className="text-muted">
                            Utilizamos IA para proporcionar métricas claras y dashboards inteligentes que te permiten visualizar el estado de tu seguridad y el retorno de inversión de nuestras soluciones.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Hablemos de tu Seguridad</h2>
              <p className="lead text-muted mb-4">
                Agenda una reunión inicial gratuita para discutir cómo podemos ayudarte a implementar IA en tu estrategia de ciberseguridad.
              </p>
              <div className="card shadow border-0">
                <div className="card-body p-5">
                  <div className="mb-4">
                    <i className="bi bi-calendar3 display-4 text-primary"></i>
                  </div>
                  <h4 className="mb-4">Reserva tu Consulta Inicial</h4>
                  <p className="text-muted mb-4">
                    Sin compromiso. Discutiremos tus necesidades y cómo Ariga.ai puede aportar valor a tu organización.
                  </p>
                  <a 
                    href="https://cal.com/jorgesilva.pro/reunion-inicial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Programar Reunión
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
