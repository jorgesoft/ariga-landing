import { Link } from 'react-router-dom'

export default function Privacy() {
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
                Política de Privacidad
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-5">
            <h1 className="display-4 fw-bold mb-3">Política de Privacidad</h1>
            <p className="text-muted">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </div>

          {/* Content */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">1. Información que Recopilamos</h3>
              <p>
                En Ariga.ai, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. 
                Recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul>
                <li>Solicitas una consulta o demostración a través de nuestro sitio web</li>
                <li>Te comunicas con nosotros por correo electrónico o teléfono</li>
                <li>Contratas nuestros servicios</li>
              </ul>
              <p>
                La información puede incluir: nombre, dirección de correo electrónico, empresa, cargo, 
                teléfono y cualquier otra información que decidas compartir.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">2. Uso de la Información</h3>
              <p>Utilizamos la información recopilada para:</p>
              <ul>
                <li>Responder a tus consultas y proporcionar información sobre nuestros servicios</li>
                <li>Programar y realizar reuniones iniciales y demostraciones</li>
                <li>Proporcionar y mejorar nuestros servicios de ciberseguridad</li>
                <li>Enviarte información relevante sobre actualizaciones de servicios (con tu consentimiento)</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">3. Compartir Información</h3>
              <p>
                No vendemos, alquilamos ni compartimos tu información personal con terceros para fines 
                de marketing. Podemos compartir información limitada con:
              </p>
              <ul>
                <li>Proveedores de servicios que nos ayudan a operar nuestro negocio (ej. Cal.com para gestión de citas)</li>
                <li>Autoridades legales cuando sea requerido por ley</li>
              </ul>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">4. Seguridad de los Datos</h3>
              <p>
                Como empresa especializada en ciberseguridad, implementamos medidas técnicas y 
                organizativas apropiadas para proteger tu información personal contra acceso no 
                autorizado, alteración, divulgación o destrucción.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">5. Tus Derechos (GDPR)</h3>
              <p>
                De acuerdo con el Reglamento General de Protección de Datos (GDPR), tienes derecho a:
              </p>
              <ul>
                <li><strong>Acceso:</strong> Solicitar una copia de los datos personales que tenemos sobre ti</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos personales</li>
                <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos personales</li>
                <li><strong>Portabilidad:</strong> Solicitar la transferencia de tus datos a otra organización</li>
                <li><strong>Limitación:</strong> Solicitar la restricción del procesamiento de tus datos</li>
              </ul>
              <p>
                Para ejercer estos derechos, contáctanos en: <a href="mailto:contact@jorgesilva.pro">contact@jorgesilva.pro</a>
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">6. Cookies y Tecnologías Similares</h3>
              <p>
                Nuestro sitio web puede utilizar cookies para mejorar tu experiencia. 
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede 
                afectar la funcionalidad del sitio.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">7. Retención de Datos</h3>
              <p>
                Conservamos tu información personal solo durante el tiempo necesario para 
                cumplir con los fines descritos en esta política, o según lo requiera la ley.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">8. Cambios a esta Política</h3>
              <p>
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
                sobre cambios significativos publicando la nueva política en esta página y 
                actualizando la fecha de "última actualización".
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">9. Contacto</h3>
              <p>
                Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos 
                tus datos personales, contáctanos:
              </p>
              <ul className="list-unstyled">
                <li><strong>Email:</strong> <a href="mailto:contact@jorgesilva.pro">contact@jorgesilva.pro</a></li>
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
