// reveal cinematico

const els = document.querySelectorAll('.reveal');

const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('show');
    }
  });
},{threshold:0.15});

els.forEach(el=>obs.observe(el));


// parallax hero cinematico

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-title");

  if(hero){
    hero.style.transform = `translateY(${window.scrollY * 0.12}px)`;
  }
});
