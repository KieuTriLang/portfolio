const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-item");
const main = document.querySelector(".main-content");
main.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (main.scrollTop >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.textContent.toLowerCase() == current) {
      li.classList.add("active");
    }
  });
};

const prjList = document.querySelectorAll(".project-item .image");
prjList.forEach((item) => {
  item.addEventListener("click", function (e) {
    prjList.forEach((el) => {
      console.log(e.target == el);
      if (e.target != el) {
        el.parentNode.classList.remove("active");
      } else {
        el.parentNode.classList.add("active");
      }
    });
  });
});

const btnClose = document.querySelectorAll(".button-close");
btnClose.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentNode.classList.remove("active");
  });
});

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
// Variables
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};
const colors = ["39, 0, 130", "122, 11, 192"];
addEventListener('mousemove', event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener("resize",()=>{
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.01;
  this.distanceFromCenter = randomIntFromRange(25, innerWidth * 45 /100);
  this.lastMouse = {x:x,y:y};
  this.alpha = Math.random();
  this.update = () => {
    const lastPoint = { x: this.x,y: this.y};
    this.radians += this.velocity;
    // this.lastMouse.x += (mouse.x - this.lastMouse.x)*0.05;
    // this.lastMouse.y += (mouse.y - this.lastMouse.y)*0.05;
    // this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    // this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
    this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
    this.draw(lastPoint);
  };
  this.draw = lastPoint => {
    c.beginPath();
    c.strokeStyle = `rgba(${this.color},${this.alpha})`;
    c.lineWidth = this.radius;    
    c.moveTo(lastPoint.x,lastPoint.y);    
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();
  };
}

let particles;
function init() {
  particles = [];
  for (let i = 0; i < 500; i++) {
    const radius = (Math.random()*2)+1;
    particles.push(
      new Particle(canvas.width *4/5, canvas.height /2, radius, randomColor(colors))
    );
  }
}
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(0, 0, 0,0.1)";
  c.fillRect(0, 0, innerWidth, innerHeight);
  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
