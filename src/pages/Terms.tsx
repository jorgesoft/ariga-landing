import { Link } from 'react-router-dom'

export default function Terms() {
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
                Términos y Condiciones
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-5">
            <h1 className="display-4 fw-bold mb-3">Términos y Condiciones</h1>
            <p className="text-muted">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </div>

          {/* Content */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">1. Aceptación de los Términos</h3>
              <p>
                Al acceder y utilizar el sitio web de Ariga.ai y nuestros servicios, aceptas estar 
                vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte 
                de estos términos, no debes utilizar nuestros servicios.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">2. Descripción de Servicios</h3>
              <p>
                Ariga.ai proporciona servicios de consultoría e implementación de inteligencia 
                artificial en ciberseguridad, incluyendo pero no limitado a:
              </p>
              <ul>
                <li>Evaluación de Seguridad Externa</li>
                <li>IA Segura</li>
                <li>Concienciación en Seguridad</li>
                <li>Seguridad en la Nube</li>
                <li>Seguridad de Aplicaciones</li>
                <li>GRC (Gobierno, Riesgo y Cumplimiento)</li>
              </ul>
              <p>
                Los detalles específicos de cada servicio se acuerdan mediante contratos 
                individuales con cada cliente.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">3. Uso del Sitio Web</h3>
              <p>Te comprometes a:</p>
              <ul>
                <li>Utilizar el sitio web solo para fines legales y de acuerdo con estos términos</li>
                <li>No intentar obtener acceso no autorizado a ninguna parte del sitio web</li>
                <li>No utilizar el sitio web de manera que pueda dañar, deshabilitar o afectar su funcionamiento</li>
                <li>Proporcionar información precisa y actualizada cuando nos contactes</li>
              </ul>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">4. Propiedad Intelectual</h3>
              <p>
                Todo el contenido de este sitio web, incluyendo texto, gráficos, logos, iconos, 
                imágenes y software, es propiedad de Ariga.ai o de sus proveedores de contenido 
                y está protegido por las leyes de propiedad intelectual.
              </p>
              <p>
                No está permitido copiar, reproducir, distribuir o crear obras derivadas sin 
                nuestro consentimiento expreso por escrito.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">5. Confidencialidad</h3>
              <p>
                En el curso de proporcionar nuestros servicios, ambas partes pueden tener acceso 
                a información confidencial. Nos comprometemos a:
              </p>
              <ul>
                <li>Mantener la confidencialidad de toda información sensible del cliente</li>
                <li>Implementar medidas de seguridad apropiadas para proteger la información</li>
                <li>No divulgar información confidencial a terceros sin consentimiento previo</li>
              </ul>
              <p>
                Los acuerdos de confidencialidad específicos se establecen en contratos 
                individuales de servicio.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">6. Limitación de Responsabilidad</h3>
              <p>
                Aunque nos esforzamos por proporcionar servicios de la más alta calidad, 
                Ariga.ai no será responsable de:
              </p>
              <ul>
                <li>Daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios</li>
                <li>Pérdida de beneficios, datos o goodwill</li>
                <li>Interrupciones del servicio por causas fuera de nuestro control</li>
              </ul>
              <p>
                Las limitaciones de responsabilidad específicas se detallan en los contratos 
                de servicio individuales.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">7. Garantías y Declaraciones</h3>
              <p>
                Proporcionamos nuestros servicios utilizando habilidades y cuidados razonables. 
                Sin embargo, no garantizamos que:
              </p>
              <ul>
                <li>Nuestros servicios satisfagan todas tus necesidades específicas</li>
                <li>Los resultados obtenidos sean completamente precisos o libres de errores</li>
                <li>El sitio web funcionará sin interrupciones o errores</li>
              </ul>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">8. Terminación</h3>
              <p>
                Nos reservamos el derecho de terminar o suspender el acceso a nuestros servicios 
                inmediatamente, sin previo aviso, por conducta que consideremos que viola estos 
                Términos y Condiciones o es perjudicial para otros usuarios, nosotros o terceros.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">9. Modificaciones</h3>
              <p>
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier 
                momento. Las modificaciones entrarán en vigor inmediatamente después de su 
                publicación en el sitio web. Es tu responsabilidad revisar periódicamente estos términos.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">10. Ley Aplicable y Jurisdicción</h3>
              <p>
                Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes 
                de España. Cualquier disputa relacionada con estos términos estará sujeta a la 
                jurisdicción exclusiva de los tribunales españoles.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">11. Acuerdo Completo</h3>
              <p>
                Estos Términos y Condiciones, junto con nuestra Política de Privacidad y cualquier 
                contrato de servicio específico, constituyen el acuerdo completo entre tú y Ariga.ai.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">12. Contacto</h3>
              <p>
                Si tienes preguntas sobre estos Términos y Condiciones, contáctanos:
              </p>
              <ul className="list-unstyled">
                <li><strong>Email:</strong> <a href="mailto:legal@ariga.ai">legal@ariga.ai</a></li>
                <li><strong>Sitio web:</strong> <a href="https://cal.com/jorgesilva.pro/reunion-inicial" target="_blank" rel="noopener noreferrer">Agendar consulta</a></li>
              </ul>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-5">
            <Link to="/" className="btn btn-primary">
              <i className="bi bi-arrow-left me-2"></i>
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
