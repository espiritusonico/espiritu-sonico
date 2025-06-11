document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const welcomeScreen = document.getElementById('welcome-screen');
  const enterBtn = document.getElementById('enter-btn');
  const pages = document.querySelectorAll('.page');

  // Primero: al cargar solo mostramos la pantalla de bienvenida.
  pages.forEach(page => {
    page.style.display = 'none';
  });

  // Al ingresar, ocultamos bienvenida y mostramos Inicio
  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.opacity = 0;
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      showPage('inicio');
    }, 800);
  });

  // Mostrar la sección correspondiente
  function showPage(pageId) {
    pages.forEach(page => {
      if (page.id === pageId) {
        page.style.display = 'flex';
        setTimeout(() => {
          page.classList.add('visible');
        }, 50);
      } else {
        page.classList.remove('visible');
        setTimeout(() => {
          page.style.display = 'none';
        }, 500);
      }
    });
    closeMenu();
  }

  // Acciones al hacer click en los links del menú
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = link.dataset.target;
      showPage(targetPage);
    });
  });

  // Toggle del menú hamburguesa
  menuToggle.addEventListener('click', () => {
    const isOpen = sideMenu.style.right === '0px';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Overlay click cierra menú
  menuOverlay.addEventListener('click', () => {
    closeMenu();
  });

  function openMenu() {
    sideMenu.style.right = '0';
    menuOverlay.style.display = 'block';
  }

  function closeMenu() {
    sideMenu.style.right = '-250px';
    menuOverlay.style.display = 'none';
  }
});

