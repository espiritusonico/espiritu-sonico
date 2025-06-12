document.addEventListener('DOMContentLoaded', () => {
  // Pantalla de bienvenida
  const enterBtn = document.getElementById('enter-btn');
  const welcomeScreen = document.querySelector('.welcome-screen');
  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.opacity = 0;
    setTimeout(() => welcomeScreen.style.display = 'none', 500);
  });

  // Navegación de páginas
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.dataset.target;
      pages.forEach(page => {
        page.classList.remove('visible');
        if (page.id === target) {
          page.classList.add('visible');
        }
      });
      closeMenu();
    });
  });

  // Menú hamburguesa móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  function closeMenu() {
    nav.classList.remove('active');
  }

  // Animación grimorio
  const grimorioButtons = document.querySelectorAll('.btn-grimorio');
  grimorioButtons.forEach(button => {
    button.addEventListener('click', () => {
      const grimorio = button.nextElementSibling;
      grimorio.classList.toggle('activo');
    });
  });
});
