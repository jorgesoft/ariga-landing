export default function WhyUsSection() {
  const features = [
    {
      title: 'Experiencia Especializada',
      description: 'Con años de experiencia en ciberseguridad y desarrollo de soluciones de IA, combinamos el conocimiento técnico profundo con una comprensión práctica de los desafíos empresariales.'
    },
    {
      title: 'IA Aplicada a la Seguridad',
      description: 'No solo implementamos tecnología de IA genérica. Desarrollamos y adaptamos modelos específicos que entienden el contexto de seguridad de tu empresa, automatizando procesos y detectando amenazas de forma proactiva.'
    },
    {
      title: 'Enfoque Personalizado',
      description: 'Cada empresa es única. Analizamos tu infraestructura, procesos y necesidades específicas para diseñar soluciones que se integren perfectamente con tu operativa actual.'
    },
    {
      title: 'Resultados Medibles',
      description: 'Utilizamos IA para proporcionar métricas claras y dashboards inteligentes que te permiten visualizar el estado de tu seguridad y el retorno de inversión de nuestras soluciones.'
    }
  ]

  return (
    <section className="bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">¿Por Qué Ariga.ai?</h2>
            </div>
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6">
                  <div className="card border-0 bg-transparent">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <div className="me-3">
                          <i className="bi bi-check-circle-fill text-success fs-3"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-2">{feature.title}</h5>
                          <p className="text-muted">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
