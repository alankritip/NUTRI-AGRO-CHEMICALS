// let slideIndex = 0;
// const slides = document.querySelector(".slides");
// const dots = document.getElementById("dots");
// const products = document.getElementById("products");
// const slideshow = document.getElementById("slideshow");
// const showSlideshowBtn = document.getElementById("showSlideshowBtn");

// function createDots() {
//     const slideCount = document.querySelectorAll(".slide").length;
//     for (let i = 0; i < slideCount; i++) {
//         const dot = document.createElement("span");
//         dot.classList.add("dot");
//         dot.setAttribute("onclick", `goToSlide(${i})`);
//         if (i === 0) dot.classList.add("active");
//         dots.appendChild(dot);
//     }
// }

// function updateDots() {
//     const allDots = document.querySelectorAll(".dot");
//     allDots.forEach((dot, index) => {
//         dot.classList.toggle("active", index === slideIndex);
//     });
// }

// function nextSlide() {
//     slideIndex = (slideIndex + 1) % slides.children.length;
//     updateSlideshow();
// }

// function prevSlide() {
//     slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
//     updateSlideshow();
// }

// function goToSlide(index) {
//     slideIndex = index;
//     updateSlideshow();
// }

// function updateSlideshow() {
//     const slideWidth = slideshow.offsetWidth;
//     slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`; // This shifts to the selected slide
//     updateDots();
// }


// function toggleProducts() {
//     products.style.display = "block";
//     slideshow.style.display = "none";
//     showSlideshowBtn.style.display = "block";
// }

// function toggleSlideshow() {
//     products.style.display = "none";
//     slideshow.style.display = "block";
//     showSlideshowBtn.style.display = "none";
// }

// createDots();
// setInterval(nextSlide, 3000);
// import works from './works.js'
import testimonials from './testimonials.js'
testimonials();