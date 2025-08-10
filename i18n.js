// i18n.js
// Contains translations and language switching logic for Ariga landing page

const translations = {
  en: {
    // nav
    nav_how: "How it works", nav_benefits: "Benefits", nav_faq: "FAQ", nav_demo: "Schedule a Meeting",
    // hero
  hero_title: "AI‑Powered Security for SMBs in Latin America",
  hero_sub: "We scan your internet‑facing systems, explain risks in plain language, and guide you step‑by‑step to fix them with our AI agent.",
    hero_trust: "Built by a CISSP‑led team. Works with your existing stack.",
    cta_primary: "Schedule a Meeting", cta_secondary: "Schedule a Meeting",
    value_title: "What you get",
    value_1: "Initial external security scanning",
    value_2: "Plain‑language findings",
    value_3: "AI‑guided remediation",
    value_4: "Ongoing re‑scanning",
    soon_badge: "Coming soon",
    soon_text: "Internal and Cloud Scanning, plus agent‑guided remediation.",
    proof_text: "Exploring accelerator partnerships — request our product brief.",
    // how
    how_title: "How Ariga Works",
    how_1_title: "External Scanning", how_1_desc: "We run a baseline scan of your internet‑facing assets to map risks fast.",
    how_2_title: "Plain‑Language Explanations", how_2_desc: "Complex findings are translated into clear, actionable insights.",
  how_3_title: "Guided Remediation", how_3_desc: "Our AI solution provides clear remediation steps.",
    how_4_title: "Ongoing Protection", how_4_desc: "Stay ahead with scheduled rescans, alerts, and fresh recommendations.",
    // tour
    tour_title: "See the Product",
    tour_1_title: "Scan Results", tour_1_desc: "Clear, prioritized findings with risk context.",
    tour_2_title: "Plain‑Language Explanations", tour_2_desc: "Understand what it means and why it matters.",
    tour_3_title: "Guided Remediation", tour_3_desc: "Step‑by‑step fixes tailored to your environment.",
    // who
    who_title: "Who It’s For",
    who_1_title: "SMB Owners & Founders", who_1_desc: "Get a clear security picture without hiring a full team.",
    who_2_title: "IT Managers", who_2_desc: "Prioritize what to fix first and track progress.",
    who_3_title: "Dev Teams", who_3_desc: "Get actionable guidance that fits your stack and workflow.",
    // benefits
    benefits_title: "Why Ariga",
    b_1_title: "Built for LATAM SMBs", b_1_desc: "Local context, bilingual support, practical remediations.",
    b_2_title: "Fast Onboarding", b_2_desc: "No agents required for external scans; get value in minutes.",
    b_3_title: "Affordable", b_3_desc: "Predictable pricing for small and growing teams.",
    b_4_title: "AI‑Guided Fixes", b_4_desc: "Reduce time to remediation with step‑by‑step guidance.",
    // faq
    faq_title: "FAQ",
    q1_t: "What do you scan today?", q1_a: "Internet‑facing assets (external). Internal and Cloud Scanning are coming soon.",
  q2_t: "How will the agent work?", q2_a: "Our AI agent will read your vulnerabilities and guide you step by step to safely remediate them, making the process clear and actionable for your team.",
    q3_t: "Is this safe for production?", q3_a: "Yes. We use non‑invasive checks by default. We only run active tests with written approval.",
    // final cta
    final_title: "Start protecting your business today.", final_sub: "It takes minutes to get value from your first scan.", final_cta1: "Book a Demo", final_cta2: "Contact Us",
    // footer
    foot_tagline: "Ariga — AI security for SMBs.", foot_contact: "Contact", foot_privacy: "Privacy", foot_terms: "Terms",
    // meta
    meta_title: "Ariga – AI Security for SMBs in Latin America",
    meta_desc: "External scanning, plain‑language explanations, and step‑by‑step remediation with an AI agent."
  },
  es: {
    // nav
    nav_how: "Cómo funciona", nav_benefits: "Beneficios", nav_faq: "Preguntas",
    nav_demo: "Agendar reunión",
    // hero
  hero_title: "Seguridad con IA para PYMEs en Latinoamérica",
  hero_sub: "Escaneamos tus sistemas expuestos a internet, explicamos los riesgos en un lenguaje claro y te guiamos paso a paso para corregirlos con nuestro agente de IA.",
    hero_trust: "Creado por un equipo liderado por CISSP. Funciona con tu stack actual.",
    cta_primary: "Agendar reunión", cta_secondary: "Agendar reunión",
    value_title: "Qué obtienes",
    value_1: "Escaneo externo inicial de seguridad",
    value_2: "Hallazgos en lenguaje claro",
    value_3: "Remediación guiada por IA",
    value_4: "Re‑escaneos continuos",
    soon_badge: "Próximamente",
    soon_text: "Escaneo Interno y en la Nube, más remediación guiada por agente.",
    proof_text: "Explorando alianzas con aceleradoras — solicita nuestro product brief.",
    cta_primary: "Agendar reunión",
    cta_secondary: "Agendar reunión",
    final_cta1: "Agendar reunión",
    how_2_title: "Explicaciones Claras", how_2_desc: "Convertimos hallazgos complejos en recomendaciones claras y accionables.",
  how_3_title: "Remediación Guiada", how_3_desc: "Nuestra solución de IA proporciona pasos claros de remediación.",
    how_4_title: "Protección Continua", how_4_desc: "Mantente al día con reescaneos programados, alertas y nuevas recomendaciones.",
    // tour
    tour_title: "Conoce el Producto",
    tour_1_title: "Resultados del Escaneo", tour_1_desc: "Hallazgos claros y priorizados con contexto de riesgo.",
    tour_2_title: "Explicaciones Claras", tour_2_desc: "Entiende qué significa y por qué importa.",
    tour_3_title: "Remediación Guiada", tour_3_desc: "Correcciones paso a paso adaptadas a tu entorno.",
    // who
    who_title: "Para Quién Es",
    who_1_title: "Dueños y Fundadores", who_1_desc: "Una visión clara sin contratar un equipo completo.",
    who_2_title: "Responsables de TI", who_2_desc: "Prioriza qué corregir primero y da seguimiento al avance.",
    who_3_title: "Equipos de Desarrollo", who_3_desc: "Guía accionable que se adapta a tu stack y flujo de trabajo.",
    // benefits
    benefits_title: "Por Qué Ariga",
    b_1_title: "Diseñado para PYMEs LATAM", b_1_desc: "Contexto local, soporte bilingüe y remediaciones prácticas.",
    b_2_title: "Inicio Rápido", b_2_desc: "Sin agentes para escaneos externos; valor en minutos.",
    b_3_title: "Asequible", b_3_desc: "Precios predecibles para equipos pequeños y en crecimiento.",
    b_4_title: "Correcciones con IA", b_4_desc: "Reduce el tiempo de remediación con guía paso a paso.",
    // faq
    faq_title: "Preguntas",
    q1_t: "¿Qué escanean hoy?", q1_a: "Activos expuestos a internet (externo). Próximamente: escaneo Interno y en la Nube.",
  q2_t: "¿Cómo funcionará el agente?", q2_a: "Nuestro agente de IA leerá tus vulnerabilidades y te guiará paso a paso para remediarlas de forma segura, haciendo el proceso claro y accionable para tu equipo.",
    q3_t: "¿Es seguro para producción?", q3_a: "Sí. Usamos verificaciones no invasivas por defecto. Solo ejecutamos pruebas activas con aprobación escrita.",
    // final cta
    final_title: "Empieza a proteger tu negocio hoy.", final_sub: "Obtén valor en minutos con tu primer escaneo.", final_cta1: "Agendar reunión", final_cta2: "Agendar reunión",
    // footer
    foot_tagline: "Ariga — seguridad con IA para PYMEs.", foot_contact: "Contacto", foot_privacy: "Privacidad", foot_terms: "Términos",
    // meta
    meta_title: "Ariga – Seguridad con IA para PYMEs en Latinoamérica",
    meta_desc: "Escaneo externo, explicaciones claras y remediación guiada paso a paso con un agente de IA."
  }
};

function applyLang(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.getElementById('currentLang').textContent = lang.toUpperCase();
  document.title = dict.meta_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict.meta_desc);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  localStorage.setItem('ariga_lang', lang);
}

document.addEventListener('DOMContentLoaded', function() {
  const saved = localStorage.getItem('ariga_lang') || 'en';
  applyLang(saved);
  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-set-lang')));
  });
});
