// Reveal on scroll
const revealNodes = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.18 });

revealNodes.forEach(node => revealObserver.observe(node));

// Parallax morbido hero + orbs
const heroInner = document.querySelector(".hero-inner");
const orb1 = document.querySelector(".orb-1");
const orb2 = document.querySelector(".orb-2");

window.addEventListener("scroll", () => {
  const y = window.scrollY * 0.08;

  if (heroInner) {
    heroInner.style.transform = `translateY(${y * 0.22}px)`;
  }

  if (orb1) {
    orb1.style.transform = `translateY(${y * -0.35}px)`;
  }

  if (orb2) {
    orb2.style.transform = `translateY(${y * 0.28}px)`;
  }
}, { passive: true });
