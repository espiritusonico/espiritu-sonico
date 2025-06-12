document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-btn');
  const welcomeScreen = document.getElementById('welcome-screen');
  const mainContent = document.getElementById('main-content');
  const banner = document.getElementById('top-banner');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-links a');
  const pages = document.querySelectorAll('.page');

  // Cuando se hace clic en "Ingresar"
  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainContent.style.display = 'flex';
      banner.style.display = 'flex';
    }, 1000);
  });

  // Activación/desactivación del menú
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('open');
  });

  // Navegación entre secciones
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const target = link.dataset.target;

      pages.forEach(page => {
        if (page.id === target) {
          page.classList.add('visible');
        } else {
          page.classList.remove('visible');
        }
      });

      menuToggle.classList.remove('active');
      menuOverlay.classList.remove('open');
    });
  });
});