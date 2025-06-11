document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const menuOverlay = document.querySelector('.menu-overlay');
  const pageSections = document.querySelectorAll('.page');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const welcomeScreen = document.getElementById('welcome-screen');
  const enterBtn = document.getElementById('enter-btn');
  const mainHeader = document.getElementById('main-header');
  const contentContainer = document.getElementById('content-container');
  const mainFooter = document.getElementById('main-footer');

  // Inicialmente ocultar header, main y footer
  mainHeader.style.display = 'none';
  contentContainer.style.display = 'none';
  mainFooter.style.display = 'none';

  // Quitar la clase active de todos los links
  navLinkItems.forEach(link => link.classList.remove('active'));

  // Mostrar la primera sección sin activar ningún link
  if (pageSections.length) {
    showPage(pageSections[0].id);
  }

  // Función para mostrar página
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

  // Función para abrir/cerrar menú lateral en móvil
  function toggleMenu() {
    const isActive = menuToggle.classList.toggle('active');
    if (isActive) {
      navLinks.removeAttribute('hidden');
      menuOverlay.removeAttribute('hidden');
      navLinks.classList.add('active');
      menuOverlay.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; // evitar scroll mientras menu está abierto
    } else {
      navLinks.setAttribute('hidden', '');
      menuOverlay.setAttribute('hidden', '');
      navLinks.classList.remove('active');
      menuOverlay.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = ''; // restaurar scroll
    }
  }

  // Evento click para botón de menú
  menuToggle.addEventListener('click', toggleMenu);

  // Cerrar menú al hacer click en overlay
  menuOverlay.addEventListener('click', () => {
    if (menuToggle.classList.contains('active')) {
      toggleMenu();
    }
  });

  // Click en links del menú para mostrar sección y cerrar menú si está abierto
  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetPage = link.dataset.target;
      showPage(targetPage);
      navLinkItems.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
      if (menuToggle.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Animación keyframes inyectada (por si no está en CSS)
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes pageFadeZoomIn {
      0% { opacity: 0; transform: translateX(30px) scale(0.95); }
      100% { opacity: 1; transform: translateX(0) scale(1); }
    }
  `;
  document.head.appendChild(styleSheet);

  // Acción botón Ingresar: ocultar bienvenida y mostrar contenido
  enterBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('fade-out');
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainHeader.style.display = 'flex';
      contentContainer.style.display = 'block';
      mainFooter.style.display = 'block';
      // Mostrar primera sección al entrar
      showPage('inicio');
      // Activar link inicio
      navLinkItems.forEach(link => link.classList.remove('active'));
      const firstLink = document.querySelector('.nav-link[data-target="inicio"]');
      if (firstLink) firstLink.classList.add('active');
    }, 800);
  });
});


