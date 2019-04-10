"use strict";

var slid = document.querySelectorAll("#slider li");
var currentSlide = 0;
slid[currentSlide].className = "slide visible";
var carouselInterval;
function clearCarouselInterval() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(nextCarousel, 5000);
}
clearCarouselInterval();
function nextCarousel() {
  slid[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slid.length;
  slid[currentSlide].className = "slide visible";
}
var btn_next = document.getElementById("next-btn");
btn_next.onclick = function() {
  slid[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slid.length;
  slid[currentSlide].className = "slide visible";
  clearCarouselInterval();
};
var btn_prev = document.getElementById("prev-btn");
btn_prev.onclick = function() {
  slid[currentSlide].className = "slide";
  //тут будет решение
  if (!currentSlide) {
    currentSlide = slid.length;
  }
  currentSlide = (currentSlide - 1) % slid.length;
  slid[currentSlide].className = "slide visible";
  clearCarouselInterval();
};
