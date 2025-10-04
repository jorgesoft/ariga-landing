export default function HeroSection() {
  return (
    <section className="bg-dark text-white d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-4">
              Ciberseguridad Inteligente para tu Empresa
            </h1>
            <p className="lead mb-4">
              Ariga.ai usa inteligencia artificial para analizar tus activos digitales, detectar riesgos y guiarte paso a paso para solucionarlos.
            </p>
            <a href="#contacto" className="btn btn-primary btn-lg">
              <i className="bi bi-calendar-check me-2"></i>
              Agenda una Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
