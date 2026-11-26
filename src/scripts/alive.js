// Supernova motion package — the script half. Styles are in src/styles/global.css under "Motion".
// Nothing here runs for readers who ask their system for reduced motion.
const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 0. The narrow-screen menu: a burger that opens the links as a dropdown.
//    Navigation, not decoration — so this runs regardless of reduced motion.
const burger = document.querySelector('.burger');
if (burger) {
  const header = burger.closest('.site-header');
  const setOpen = (open) => burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  document.addEventListener('click', (e) => { if (header && !header.contains(e.target)) setOpen(false); });
}

// 1. Daylight: a barely-there shift of the page background through the reader's day.
const hour = new Date().getHours();
const light =
  hour < 6 ? '#f2f2f4' : // night: a little cooler
  hour < 11 ? '#f6f6f3' : // morning
  hour < 17 ? '#f5f5f4' : // day (the base colour)
  hour < 21 ? '#f7f4ef' : // evening: a little warmer
  '#f3f3f4';
document.documentElement.style.setProperty('--bg', light);

if (!calm) {
  // 3 + 4. Reveal things as they come into view, a beat apart within a row.
  const targets = document.querySelectorAll('.card, .tile, .people li, .hero-image, .prose figure, .author-card, .subscribe, .takeaways');
  targets.forEach((el) => {
    el.setAttribute('data-reveal', '');
    const siblings = [...el.parentElement.children].filter((c) => c.tagName === el.tagName);
    el.style.setProperty('--i', String(Math.min(siblings.indexOf(el), 5)));
  });
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
    { rootMargin: '0px 0px -8% 0px' },
  );
  document.querySelectorAll('[data-reveal], mark').forEach((el) => io.observe(el));

  // 5. Fireflies: give every dot its own slow clock.
  document.querySelectorAll('.tag .dot, .label .dot').forEach((dot) => {
    dot.style.setProperty('--fly', `${6 + Math.random() * 6}s`);
    dot.style.setProperty('--fly-delay', `${-Math.random() * 12}s`);
  });

  // 9. Grass in the wind: split «спасибо» into letters.
  document.querySelectorAll('.spasibo').forEach((el) => {
    const text = el.textContent ?? '';
    el.setAttribute('aria-label', text);
    el.innerHTML = [...text].map((ch, i) => `<span aria-hidden="true" style="--i:${i}">${ch}</span>`).join('');
  });
} else {
  document.querySelectorAll('mark').forEach((m) => m.classList.add('in'));
}
