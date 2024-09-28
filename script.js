const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// Scroll Reveal Js

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-content h2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header-btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about-image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about-content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service-card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".facility-content .section-header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".facility-content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".mentor-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner-content h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".banner-content p", {
  ...scrollRevealOption,
  delay: 500,
});
