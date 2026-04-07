/* ============================================================
   MERCES ADVOCACIA — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll animations (Intersection Observer) ─────────── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Hero: trigger immediately (already in viewport) ───── */
  document.querySelectorAll('#hero .fade-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 160);
  });

});
