document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-btn');
  const welcomeScreen = document.getElementById('welcome-screen');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  // Transición de bienvenida
  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
    }, 1000);
  });

  // Toggle menú lateral
  menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  // Animación de icono hamburguesa a X
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
  });

  // Navegación de secciones
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target.dataset.target;
      pages.forEach(page => {
        if (page.id === target) {
          page.classList.add('visible');
        } else {
          page.classList.remove('visible');
        }
      });
      menuOverlay.classList.remove('open');
      menuToggle.classList.remove('open');
    });
  });
});