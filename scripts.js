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
  });

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("visible");
      });

      const targetId = link.getAttribute("data-target");
      document.getElementById(targetId).classList.add("visible");

      menuOverlay.classList.remove("active");

      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  document.getElementById("inicio").classList.add("visible");
});