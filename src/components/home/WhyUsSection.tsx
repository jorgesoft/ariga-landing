export default function WhyUsSection() {
  return (
    <section className="bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">¿Por Qué Ariga.ai?</h2>
            </div>
              <h4 className="fw-bold mb-2 fs-2">Fundador: Jorge Silva, CISSP</h4>
              <p className="mb-2 fs-5">
                Soy Jorge Silva, especialista en ciberseguridad y computación en la nube con más de 7 años de experiencia ayudando a organizaciones a proteger su infraestructura digital.
              </p>
              <ul className="list-unstyled mb-2 fs-5">
                <li><i className="bi bi-mortarboard text-primary me-2"></i>Graduado en Cloud Computing (WGU) y Cybersecurity (NYU)</li>
                <li><i className="bi bi-patch-check text-success me-2"></i>Más de 15 certificaciones en seguridad, nube y tecnología</li>
                <li><i className="bi bi-lightbulb text-warning me-2"></i>Experiencia con startups, PYMEs y entornos de misión crítica</li>
              </ul>
            <a href="https://www.linkedin.com/in/jorgeecsilva/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-2">
              <i className="bi bi-linkedin me-2"></i>Ver perfil en LinkedIn
            </a>
            <div className="text-center text-muted mt-4">
              En Ariga.ai, combinamos experiencia real, formación de alto nivel y pasión por la seguridad para ayudarte a proteger lo que más importa.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
