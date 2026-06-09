// REVEAL

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

reveals.forEach(el => observer.observe(el));

// CAMBIO TEMA

const sections = document.querySelectorAll(".theme-trigger");

const themeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.body.setAttribute("data-theme", entry.target.dataset.theme);
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => themeObserver.observe(section));

// PARALLAX EASY

window.addEventListener("scroll", () => {
  const y = window.scrollY * 0.2;
  const hero = document.querySelector(".hero-title");

  if(hero){
    hero.style.transform = `translateY(${y * 0.3}px)`;
  }
});
