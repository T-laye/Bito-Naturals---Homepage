"use strict";

const openNav = document.querySelector(".openNav");
const closeNav = document.querySelector(".closeNav");
const navBar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) =>
  link.addEventListener("click", function () {
    navBar.classList.remove("showNav");
    closeNav.classList.add("hidden");
    openNav.classList.remove("hidden");
  })
);

openNav.addEventListener("click", function () {
  navBar.classList.add("showNav");
  closeNav.classList.remove("hidden");
  openNav.classList.add("hidden");
});
closeNav.addEventListener("click", function () {
  navBar.classList.remove("showNav");
  closeNav.classList.add("hidden");
  openNav.classList.remove("hidden");
});
