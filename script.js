// =========================
// REVEAL (animazione Apple)
// =========================

const reveals = document.querySelectorAll(".reveal, .big-title");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold: 0.18
});

reveals.forEach(el => observer.observe(el));


// =========================
// PARALLAX PROFONDITÀ
// =========================

const hero = document.querySelector(".hero-inner");
const orb1 = document.querySelector(".orb-1");
const orb2 = document.querySelector(".orb-2");

window.addEventListener("scroll", () => {

  const y = window.scrollY;

  if(hero){
    hero.style.transform = `translateY(${y * 0.12}px)`;
  }

  if(orb1){
    orb1.style.transform = `translateY(${y * -0.25}px)`;
  }

  if(orb2){
    orb2.style.transform = `translateY(${y * 0.18}px)`;
  }

}, { passive: true });


// =========================
// MICRO ANIMAZIONE CARD
// =========================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
