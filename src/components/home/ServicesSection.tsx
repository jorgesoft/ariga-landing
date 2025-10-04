import { Link } from 'react-router-dom'

export default function ServicesSection() {
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
      title: 'Entrenamiento y Concienciación en Seguridad',
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
  )
}
