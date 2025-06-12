document.addEventListener("DOMContentLoaded", function () {
  const enterBtn = document.getElementById("enter-btn");
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainContent = document.getElementById("main-content");

  enterBtn.addEventListener("click", () => {
    welcomeScreen.style.opacity = "0";
    setTimeout(() => {
      welcomeScreen.style.display = "none";
      mainContent.style.display = "flex";
      setTimeout(() => {
        mainContent.style.opacity = "1";
      }, 100);
    }, 1000);
  });

  // Menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const menuOverlay = document.querySelector(".menu-overlay");

  menuToggle.addEventListener("click", () => {
    menuOverlay.classList.toggle("active");
  });

  // Navegación de secciones
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");

      pages.forEach(page => {
        page.classList.remove("visible");
      });

      document.getElementById(target).classList.add("visible");
      menuOverlay.classList.remove("active");

      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});