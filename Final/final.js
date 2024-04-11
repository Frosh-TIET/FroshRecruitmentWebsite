//spline design
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/tXZiNSprUgG4nqhY/scene.splinecode');

//arrow animatioin
document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.getElementById("scroll-down-arrow");

    arrow.addEventListener("click", function () {
        const container2 = document.querySelector(".container2");
        container2.scrollIntoView({ behavior: "smooth" });
    });
});
