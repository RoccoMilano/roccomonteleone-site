const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const particles = [];

for(let i=0;i<120;i++){

    particles.push({

        x:Math.random()*window.innerWidth,
        y:Math.random()*window.innerHeight,
        r:Math.random()*2,
        v:0.3 + Math.random()

    });

}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p=>{

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.r,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
        "rgba(0,255,255,.4)";

        ctx.fill();

        p.y += p.v;

        if(p.y > canvas.height){

            p.y = 0;
            p.x = Math.random() * canvas.width;

        }

    });

    requestAnimationFrame(animate);

}

animate();
