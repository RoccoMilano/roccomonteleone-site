// Reveal + stagger
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.16 });

revealItems.forEach(item => revealObserver.observe(item));

// Parallax hero + sfere
const heroInner = document.querySelector(".hero-inner");
const orb1 = document.querySelector(".orb-1");
const orb2 = document.querySelector(".orb-2");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (heroInner) {
    heroInner.style.transform = `translateY(${y * 0.10}px)`;
  }

  if (orb1) {
    orb1.style.transform = `translateY(${y * -0.18}px)`;
  }

  if (orb2) {
    orb2.style.transform = `translateY(${y * 0.12}px)`;
  }
}, { passive: true });

// Micro-pulse sui mega statement
const megaLines = document.querySelectorAll(".mega-line");

const megaObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0.7, transform: "translateY(16px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 900,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards"
        }
      );
    }
  });
}, { threshold: 0.4 });

megaLines.forEach(line => megaObserver.observe(line));
