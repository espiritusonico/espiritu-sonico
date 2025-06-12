// Animación de entrada: desaparece la pantalla de bienvenida al presionar "Entrar"
document.getElementById("enter-btn").addEventListener("click", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  welcomeScreen.style.opacity = 0;
  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 800);
});

// Control del menú hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const menuOverlay = document.getElementById("menu-overlay");
const menuBackdrop = document.getElementById("menu-backdrop");

menuToggle.addEventListener("click", () => {
  menuOverlay.classList.toggle("active");
});

// Cerrar el menú al hacer clic en el fondo
menuBackdrop.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
});

// Mostrar/Ocultar los papiros de cada sahumerio
document.querySelectorAll(".toggle-papiro").forEach(button => {
  button.addEventListener("click", () => {
    const papiro = button.nextElementSibling;
    if (papiro.style.display === "block") {
      papiro.style.display = "none";
    } else {
      papiro.style.display = "block";
    }
  });
});