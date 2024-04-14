import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/VufIgZe7y0IUh0fl/scene.splinecode');

//arrow animatioin
document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.getElementById("scroll-down-arrow");

    arrow.addEventListener("click", function () {
        const container2 = document.querySelector(".container2");
        container2.scrollIntoView({ behavior: "smooth" });
    });
});


let timer = null;

window.addEventListener('scroll', function() {
  if(timer !== null) {
    clearTimeout(timer);        
    document.querySelector('.bg').classList.remove('wiggle');
  }

  timer = setTimeout(function() {
    document.querySelector('.bg').classList.add('wiggle');
  }, 150);
}, false);