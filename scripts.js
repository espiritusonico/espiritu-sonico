document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuOverlay = document.querySelector('.menu-overlay');
  const pageSections = document.querySelectorAll('.page');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const btnIngresar = document.getElementById('enter-btn');  
  const pantallaBienvenida = document.querySelector('.welcome-screen');  
  const contenedorPrincipal = document.getElementById('content-container');  

  // Ocultamos contenido principal inicialmente
  contenedorPrincipal.style.display = 'none';

  // Inicializamos mostrando sólo la sección de inicio
  pageSections.forEach(section => {
    section.style.display = (section.id === 'inicio') ? 'block' : 'none';
  });

  // Limpia el estado de los links activos
  navLinkItems.forEach(link => link.classList.remove('active'));

  // Función para manejar el menú móvil
  function toggleMenu() {
    const isActive = menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active', isActive);
    menuOverlay.classList.toggle('active', isActive);
  }

  // Evento del botón de ingresar (bienvenida)
  btnIngresar.addEventListener('click', () => {
    pantallaBienvenida.style.transition = 'opacity 0.7s ease';
    pantallaBienvenida.style.opacity = '0';

    setTimeout(() => {
      pantallaBienvenida.style.display = 'none';
      contenedorPrincipal.style.display = 'block';
    }, 700);
  });

  // Evento para el botón de hamburguesa
  menuToggle.addEventListener('click', toggleMenu);

  // Cierre del menú al tocar fuera en móviles
  menuOverlay.addEventListener('click', toggleMenu);

  // Manejo de la navegación entre páginas internas
  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetPage = link.dataset.target;
      mostrarPagina(targetPage);

      navLinkItems.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');

      if (navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Función que muestra la sección seleccionada
  function mostrarPagina(pageId) {
    pageSections.forEach(page => {
      if (page.id === pageId) {
        page.classList.add('visible');
        page.style.animation = 'pageFadeZoomIn 0.6s ease forwards';
        page.style.display = 'block';
      } else {
        page.classList.remove('visible');
        page.style.animation = '';
        page.style.display = 'none';
      }
    });
  }

  // Agregamos keyframes de animación por si acaso (refuerzo)
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes pageFadeZoomIn {
      0% { opacity: 0; transform: translateX(30px) scale(0.95); }
      100% { opacity: 1; transform: translateX(0) scale(1); }
    }
  `;
  document.head.appendChild(styleSheet);

  // Cargamos la primera sección visible
  if (pageSections.length) {
    mostrarPagina('inicio');
  }
});


  // Inicializamos mostrando la primera página sin activar ningún link
  if (pageSections.length) {
    showPage(pageSections[0].id);
  }
});
