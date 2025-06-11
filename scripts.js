document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuOverlay = document.querySelector('.menu-overlay');
  const pageSections = document.querySelectorAll('.page');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const btnIngresar = document.getElementById('btnIngresar');
  const pantallaBienvenida = document.getElementById('pantallaBienvenida');
  const contenedorPrincipal = document.getElementById('contenedorPrincipal');
  const secciones = document.querySelectorAll('.page');

  // Ocultar todas las secciones excepto inicio al iniciar
  secciones.forEach(sec => {
    if (sec.id === 'inicio') {
      sec.style.display = 'block';
    } else {
      sec.style.display = 'none';
    }
  });

  // Limpiamos cualquier clase active al inicio
  navLinkItems.forEach(link => link.classList.remove('active'));

  // Función para abrir/cerrar menú móvil con animaciones y sombra
  function toggleMenu() {
    const isActive = menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active', isActive);
    menuOverlay.classList.toggle('active', isActive);
  }

  // Event listeners
  btnIngresar.addEventListener('click', () => {
    // Animar fade out antes de ocultar pantalla bienvenida
    pantallaBienvenida.style.transition = 'opacity 0.6s ease';
    pantallaBienvenida.style.opacity = '0';

    setTimeout(() => {
      pantallaBienvenida.style.display = 'none';
      contenedorPrincipal.style.display = 'block';
    }, 600);
  });

  menuToggle.addEventListener('click', toggleMenu);

  menuOverlay.addEventListener('click', () => toggleMenu());

  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetPage = link.dataset.target;
      showPage(targetPage);

      // Limpiamos el estado activo de todos los links y ponemos active al clickeado
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

  // Agregamos la animación keyframes
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

  // Inicializamos mostrando la primera página sin activar ningún link
  if (pageSections.length) {
    showPage(pageSections[0].id);
  }
});

