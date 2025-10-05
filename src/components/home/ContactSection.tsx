export default function ContactSection() {
  return (
    <section id="contacto" className="py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-4">Hablemos de tu Seguridad</h2>
            <p className="lead text-muted mb-4 fs-4">
              Agenda una reunión inicial gratuita para discutir cómo podemos ayudarte a implementar IA en tu estrategia de ciberseguridad.
            </p>
            <div className="card shadow border-0">
              <div className="card-body p-5">
                <div className="mb-4">
                  <i className="bi bi-calendar3 display-4 text-primary"></i>
                </div>
                <h4 className="mb-4 fs-3">Reserva tu Consulta Inicial</h4>
                <p className="text-muted mb-4 fs-5">
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
  )
}
