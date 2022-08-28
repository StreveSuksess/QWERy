//carousel
const carouselWidth = document.querySelector(".carousel_container").offsetWidth;
const carouselTrack = document.querySelector(".carousel_track");
const btnNext = document.querySelector(".arrayRight");
const btnPrev = document.querySelector(".arrayLeft");
const carouselItems = document.querySelectorAll(".carousel_item");
let trackPosition = 0;

btnNext.onclick = carouselNext;
btnPrev.onclick = carouselPrev;

function carouselNext() {
  trackPosition += carouselWidth;
  if (trackPosition > (carouselItems.length - 1) * carouselWidth) trackPosition = (carouselItems.length - 1) * carouselWidth;
  carouselTrack.style.transform = `translateX(${-trackPosition}px)`;
  console.log(trackPosition);
}

function carouselPrev() {
  trackPosition -= carouselWidth;
  if (trackPosition < 0) trackPosition = 0;
  carouselTrack.style.transform = `translateX(${-trackPosition}px)`;
  console.log(trackPosition);
}

// bugrermenu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.onclick = () => nav.classList.toggle("show");
