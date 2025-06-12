// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Bienvenida
  const welcomeScreen = document.getElementById('welcome-screen');
  const enterButton = document.getElementById('enter-btn');
  const mainContent = document.getElementById('main-content');

  enterButton.addEventListener('click', () => {
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainContent.style.opacity = '1';
      AOS.init(); // Iniciar animaciones AOS una vez dentro
    }, 1000);
  });

  // Menú hamburguesa
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  });

  // Navegación entre páginas
  const navLinks = document.querySelectorAll('.nav-links a');
  const pages = document.querySelectorAll('.page');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Ocultar el menú al hacer click
      menuToggle.classList.remove('active');
      menuOverlay.classList.remove('active');

      const target = link.getAttribute('data-target');

      pages.forEach(page => {
        page.classList.remove('visible');
      });

      document.getElementById(target).classList.add('visible');
    });
  });

  // Control de los papiros desplegables
  const toggleButtons = document.querySelectorAll('.toggle-papiro');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const papiro = button.nextElementSibling;
      papiro.classList.toggle('open');
    });
  });
});