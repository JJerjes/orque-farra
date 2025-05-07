// scripts/menu.js
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector(".nav");
  
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("open");
      nav.classList.toggle("open");
    });
  });
  