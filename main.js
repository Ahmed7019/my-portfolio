// declare variables of menu bar buttons

let menuBtn = document.getElementById("menu-btn"),
  closeBtn = document.getElementById("close-btn"),
  links = document.getElementById("nav-links"),
  menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.style.setProperty("display", "block");
  menuBtn.style.setProperty("display", "none");
  closeBtn.style.setProperty("display", "block");
});

closeBtn.addEventListener("click", () => {
  menuBtn.style.setProperty("display", "block");
  menu.style.setProperty("display", "none");
  closeBtn.style.setProperty("display", "none");
});

links.addEventListener("click", () => {
  menuBtn.style.setProperty("display", "block");
  menu.style.setProperty("display", "none");
  closeBtn.style.setProperty("display", "none");
});

/* ######################################################
  For Contact me page
  ######################################################
*/

let contactForm = document.querySelector("#contact-form"),
  submitButton = document.querySelector("#submit-btn");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Loader while loading page
let loader = document.querySelector("#loader-wrapper");
window.addEventListener("load", () => {
  loader.classList.add("hidden");
});
