document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuOverlay = document.querySelector('.menu-overlay');
  const pageSections = document.querySelectorAll('.page');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const welcomeScreen = document.querySelector('.welcome-screen');
  const btnEnter = document.querySelector('.btn-enter');

  // Mostrar la primera página y activar el primer link
  function showPage(pageId) {
    pageSections.forEach(page => {
      if (page.id === pageId) {
        page.classList.add('visible');
        page.style.animation = 'pageFadeZoomIn 0.6s ease forwards';
      } else {
        page.classList.remove('visible');
        page.style.animation = '';
      }
    });
  }

  // Abrir/cerrar menú móvil con sombra y overlay
  function toggleMenu() {
    const isActive = menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active', isActive);
    menuOverlay.classList.toggle('active', isActive);

    if (isActive) {
      navLinks.style.boxShadow = '0 0 25px 8px rgba(154, 119, 209, 0.7)';
    } else {
      navLinks.style.boxShadow = 'none';
    }
  }

  // Cerrar menú cuando se hace click en overlay o en un link del menú
  menuOverlay.addEventListener('click', () => {
    toggleMenu();
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetPage = link.getAttribute('href').substring(1);
      showPage(targetPage);

      navLinkItems.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');

      if (navLinks.classList.contains('active')) toggleMenu();
    });
  });

  menuToggle.addEventListener('click', () => {
    toggleMenu();
  });

  // Al hacer click en botón "Entrar" de bienvenida, oculta pantalla y muestra contenido
  btnEnter.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';

    // Inicializar mostrando primera página y primer link activo
    if (pageSections.length) {
      showPage(pageSections[0].id);
      navLinkItems.forEach(nav => nav.classList.remove('active'));
      navLinkItems[0].classList.add('active');
    }
  });

  // Al cargar la página, ocultamos contenido y mostramos bienvenida
  pageSections.forEach(page => page.classList.remove('visible'));
  navLinkItems.forEach(nav => nav.classList.remove('active'));
  welcomeScreen.style.display = 'flex';
});
