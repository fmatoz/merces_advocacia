/* ── Constants ─────────────────────────────────────────────── */
const WA_NUMBER = "5511958323722";
const WA_LINK   = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá, vim do site!")}`;
const GTAG_ID   = "AW-18180445744/qNQICJTHz7UcELCsjt1D";

/* ── gtag conversion ───────────────────────────────────────── */
function trackAndGo(url) {
  if (typeof gtag === "function") {
    gtag("event", "conversion", {
      send_to: GTAG_ID,
      event_callback: () => { window.open(url, "_blank"); },
    });
  } else {
    window.open(url, "_blank");
  }
}

/* ── Bind all WhatsApp CTA buttons ─────────────────────────── */
function bindCTAs() {
  document.querySelectorAll("[data-wa]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      const url = el.dataset.waUrl || WA_LINK;
      trackAndGo(url);
    });
  });
}

/* ── Contact Form ───────────────────────────────────────────── */
function bindForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const nome     = form.querySelector("#nome").value.trim();
    const whatsapp = form.querySelector("#whatsapp").value.trim();
    const caso     = form.querySelector("#caso").value.trim();
    const msg = `Olá! Vim pelo site e gostaria de uma avaliação inicial.\n\nNome: ${nome}\nWhatsApp: ${whatsapp}\nDescrição do caso: ${caso}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    trackAndGo(url);
  });
}

/* ── Fade-in on scroll (IntersectionObserver) ───────────────── */
function initAnimations() {
  const els = document.querySelectorAll(".fade-in");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ── Hash-based page routing ────────────────────────────────── */
const pages = {
  "page-main":        ["", "#", "#home"],
  "page-privacy":     ["#politica-de-privacidade"],
  "page-responsavel": ["#responsavel-juridico"],
};

function handleRoute() {
  const hash = window.location.hash || "";

  let active = "page-main";
  for (const [id, hashes] of Object.entries(pages)) {
    if (hashes.includes(hash)) { active = id; break; }
  }

  // title map
  const titles = {
    "page-main":        "Tiago Mérces dos Santos Vieira | Advogado OAB/SP 536941",
    "page-privacy":     "Política de Privacidade | Merces Advocacia",
    "page-responsavel": "Responsável Jurídico | Merces Advocacia",
  };

  document.querySelectorAll("#page-main, #page-privacy, #page-responsavel").forEach(el => {
    el.classList.remove("active");
    el.classList.add("hidden");
  });

  const el = document.getElementById(active);
  if (el) { el.classList.remove("hidden"); el.classList.add("active"); }
  document.title = titles[active] || titles["page-main"];
  window.scrollTo(0, 0);

  // re-bind animations for newly shown page
  initAnimations();
}

/* ── Init ────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  bindCTAs();
  bindForm();
  initAnimations();
  handleRoute();
  window.addEventListener("hashchange", handleRoute);
});
