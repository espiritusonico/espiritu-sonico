document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuOverlay = document.querySelector('.menu-overlay');
  const pageSections = document.querySelectorAll('.page');
  const navLinkItems = document.querySelectorAll('.nav-link');

  // Función para abrir/cerrar menú móvil
  function toggleMenu() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  }

  // Cerrar menú al hacer click en overlay
  menuOverlay.addEventListener('click', () => {
    toggleMenu();
  });

  // Abrir/cerrar menú al click en el botón hamburguesa
  menuToggle.addEventListener('click', () => {
    toggleMenu();
  });

  // Función para mostrar una sección y ocultar las demás
  function showPage(pageId) {
    pageSections.forEach(page => {
      if (page.id === pageId) {
        page.classList.add('visible');
      } else {
        page.classList.remove('visible');
      }
    });
  }

  // Escuchar clicks en enlaces de navegación
  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetPage = link.getAttribute('href').substring(1);
      showPage(targetPage);

      // Actualizar clase active en el menú
      navLinkItems.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');

      // Cerrar menú móvil si está abierto
      if (navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Inicializar mostrando la primera página (por ejemplo, 'inicio')
  if (pageSections.length > 0) {
    showPage(pageSections[0].id);
    navLinkItems[0].classList.add('active');
  }
});
