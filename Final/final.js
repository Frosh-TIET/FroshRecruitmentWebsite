// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// if ("IntersectionObserver" in window) {
//   let app;
//   let observer = new IntersectionObserver(function(entries, observer) {
//     entries.forEach(function(entry) {
//       if (entry.isIntersecting) {
//         if (!app) {
//           app = new Application(canvas);
//           app.load('https://prod.spline.design/VufIgZe7y0IUh0fl/scene.splinecode');
//         }
//       } else {
//         if (app) {
//           let ctx = canvas.getContext('2d');
//           ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
//           app = null; // Remove reference to the app
//         }
//       }
//     });
//   });
//   observer.observe(canvas);
// }
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


// var video = document.getElementById('myVideo');

// if (window.matchMedia('(max-width: 480)').matches) {
//   // If the viewport is 600px or smaller, use small.mp4
//   video.src = './Final/images/sohum.mp4';
// } else {
//   // Otherwise, use large.mp4
//   video.src = './Final/images/navansh.mp4';
// }


document.addEventListener('DOMContentLoaded', function() {
  var myVideo = document.getElementById('myVideo');
  myVideo.muted = true;
  myVideo.play();
});