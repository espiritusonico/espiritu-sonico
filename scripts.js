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

  // Mostrar primera sección sin activar links
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

  // Función abrir/cerrar menú móvil
  function toggleMenu() {
    const isActive = menuToggle.classList.toggle('active');
    if (isActive) {
      navLinks.removeAttribute('hidden');
      menuOverlay.removeAttribute('hidden');
      navLinks.classList.add('active');
      menuOverlay.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      navLinks.setAttribute('hidden', '');
      menuOverlay.setAttribute('hidden', '');
      navLinks.classList.remove('active');
      menuOverlay.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  // Evento click menú toggle
  menuToggle.addEventListener('click', toggleMenu);

  // Cerrar menú al click en overlay
  menuOverlay.addEventListener('click', () => {
    if (menuToggle.classList.contains('active')) {
      toggleMenu();
    }
  });

  // Click en links menú para mostrar sección y cerrar menú
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

  // Botón ingresar: ocultar bienvenida y mostrar contenido
  enterBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('fade-out');
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainHeader.style.display = 'flex';
      contentContainer.style.display = 'block';
      mainFooter.style.display = 'block';
      // Mostrar primera sección
      showPage('inicio');
      // Activar link inicio
      navLinkItems.forEach(link => link.classList.remove('active'));
      const firstLink = document.querySelector('.nav-link[data-target="inicio"]');
      if (firstLink) firstLink.classList.add('active');
    }, 700);
  });
});
