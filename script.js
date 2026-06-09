// REVEAL SMOOTH (tipo Apple)

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));


// PARALLAX LEGGERO HERO

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-title");

  if(hero){
    const y = window.scrollY * 0.2;
    hero.style.transform = `translateY(${y}px)`;
  }
});
