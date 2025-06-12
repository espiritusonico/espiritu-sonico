document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainContent = document.getElementById("main-content");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuOverlay = document.querySelector(".menu-overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  enterBtn.addEventListener("click", () => {
    welcomeScreen.style.opacity = 0;
    setTimeout(() => {
      welcomeScreen.style.display = "none";
      mainContent.style.opacity = 1;
    }, 1000);
  });

  menuToggle.addEventListener("click", () => {
    menuOverlay.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".page").forEach(page => page.classList.remove("visible"));
      const targetId = link.getAttribute("data-target");
      document.getElementById(targetId).classList.add("visible");
      menuOverlay.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  document.getElementById("inicio").classList.add("visible");

  // Logica papiro
  const toggles = document.querySelectorAll(".toggle-papiro");
  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const papiro = btn.previousElementSibling;
      papiro.style.display = papiro.style.display === "block" ? "none" : "block";
    });
  });
});