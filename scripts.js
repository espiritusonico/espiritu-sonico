document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuOverlay = document.querySelector('.menu-overlay');
  const pageSections = document.querySelectorAll('.page');
  const navLinkItems = document.querySelectorAll('.nav-link');

  // Limpiamos cualquier clase active al inicio
  navLinkItems.forEach(link => link.classList.remove('active'));

  // Función para abrir/cerrar menú móvil con animaciones y sombra
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

  // Cerrar menú al hacer click en overlay o en un link
  menuOverlay.addEventListener('click', () => toggleMenu());

  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetPage = link.dataset.target;
      showPage(targetPage);

      // Aquí limpiamos el estado activo de todos los links
      navLinkItems.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');

      if (navLinks.classList.contains('active')) toggleMenu();
    });
  });

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

  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes pageFadeZoomIn {
      0% {
        opacity: 0;
        transform: translateX(30px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }
  `;
  document.head.appendChild(styleSheet);

  // Inicializamos mostrando la primera página SIN activar ningún link
  if (pageSections.length) {
    showPage(pageSections[0].id);
  }
});


  pageSections.forEach(page => page.classList.remove('visible'));
  navLinkItems.forEach(nav => nav.classList.remove('active'));
  welcomeScreen.style.display = 'flex';
});
