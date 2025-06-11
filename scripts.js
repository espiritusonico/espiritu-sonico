document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuOverlay = document.querySelector('.menu-overlay');
  const pageSections = document.querySelectorAll('.page');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const btnIngresar = document.getElementById('enter-btn');
  const pantallaBienvenida = document.querySelector('.welcome-screen');
  const contenedorPrincipal = document.getElementById('content-container');

  // Ocultar contenido principal al inicio
  contenedorPrincipal.style.display = 'none';

  // Inicializar páginas - solo mostrar la de "inicio"
  pageSections.forEach(sec => {
    if (sec.id === 'inicio') {
      sec.style.display = 'block';
    } else {
      sec.style.display = 'none';
    }
  });

  // Remover clase active de links (por si queda alguna)
  navLinkItems.forEach(link => link.classList.remove('active'));

  // Función para abrir/cerrar menú hamburguesa
  function toggleMenu() {
    const isActive = menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active', isActive);
    menuOverlay.classList.toggle('active', isActive);
  }

  // Evento para botón "Ingresar" que oculta bienvenida y muestra contenido principal
  btnIngresar.addEventListener('click', () => {
  pantallaBienvenida.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  pantallaBienvenida.style.opacity = '0';
  pantallaBienvenida.style.transform = 'scale(1.1)';
  setTimeout(() => {
    pantallaBienvenida.style.display = 'none';
    contenedorPrincipal.style.display = 'block';
    contenedorPrincipal.style.opacity = '0';
    contenedorPrincipal.style.transition = 'opacity 0.8s ease';
    setTimeout(() => contenedorPrincipal.style.opacity = '1', 50);
   }, 600);
  });


  // Eventos para menú hamburguesa
  menuToggle.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', () => toggleMenu());

  // Eventos para navegación interna
  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetPage = link.dataset.target;
      showPage(targetPage);
      navLinkItems.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
      if (navLinks.classList.contains('active')) toggleMenu();
    });
  });

  // Función para mostrar página específica y ocultar las demás
  function showPage(pageId) {
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

  // Insertar animación CSS para la transición de páginas
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes pageFadeZoomIn {
      0% { opacity: 0; transform: translateX(30px) scale(0.95); }
      100% { opacity: 1; transform: translateX(0) scale(1); }
    }
  `;
  document.head.appendChild(styleSheet);

  // Inicializar mostrando la primera página ("inicio")
  if (pageSections.length) {
    showPage(pageSections[0].id);
  }
});
