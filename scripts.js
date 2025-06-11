// script.js

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

  // Función para saber si es móvil
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // Mostrar la primera sección sin activar ningún link
  function showPage(pageId) {
    pageSections.forEach(page => {
      if (page.id === pageId) {
        page.classList.add('visible');
        page.style.animation = 'none';
        page.offsetHeight; // trigger reflow para reiniciar animación
        page.style.animation = null;
        page.focus();
      } else {
        page.classList.remove('visible');
      }
    });
    // Marcar activo en menú
    navLinkItems.forEach(link => {
      if (link.dataset.target === pageId) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // Abrir/cerrar menú móvil
  function toggleMenu(open) {
    if (open) {
      navLinks.classList.add('active');
      menuOverlay.classList.add('active');
      navLinks.removeAttribute('hidden');
      menuToggle.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      // Enfocar primer enlace
      navLinkItems[0].focus();
    } else {
      navLinks.classList.remove('active');
      menuOverlay.classList.remove('active');
      navLinks.setAttribute('hidden', '');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  }

  // Eventos menú toggle
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    toggleMenu(!expanded);
  });
  // Cerrar menú al pulsar overlay
  menuOverlay.addEventListener('click', () => {
    toggleMenu(false);
  });

  // Navegación por menú
  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.dataset.target;
      showPage(targetId);
      if (isMobile()) toggleMenu(false);
    });
  });

  // Botón ingresar para bienvenida
  enterBtn.addEventListener('click', () => {
    // Animación fade out bienvenida
    welcomeScreen.classList.add('fade-out');
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainHeader.style.display = 'flex';
      contentContainer.style.display = 'block';
      mainFooter.style.display = 'block';
      showPage('inicio');
      // Foco accesible
      document.getElementById('inicio').focus();
    }, 900);
  });

  // Soporte para cerrar menú con ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      toggleMenu(false);
    }
  });
});



