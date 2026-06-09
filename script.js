// REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

revealElements.forEach(el => revealObserver.observe(el));


// 🌈 CAMBIO TEMA ALLO SCROLL

const sections = document.querySelectorAll(".theme-trigger");

const themeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.setAttribute("data-theme", entry.target.dataset.theme);
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => themeObserver.observe(section));


// 🔥 EFFETTO PARALLAX

window.addEventListener("scroll", () => {
  const y = window.scrollY * 0.2;
  const hero = document.querySelector(".hero-title");

  if (hero) {
    hero.style.transform = `translateY(${y * 0.3}px)`;
  }
});
