document.addEventListener('DOMContentLoaded', () => {
  // Referencias
  const welcomeScreen = document.querySelector('.welcome-screen');
  const enterBtn = document.getElementById('enter-btn');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const btnsGrimorio = document.querySelectorAll('.btn-grimorio');

  // Función para ocultar pantalla bienvenida
  enterBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('oculto');
  });

  // Función para abrir/cerrar menú lateral
  menuToggle.addEventListener('click', () => {
    const isActive = menuOverlay.classList.toggle('activo');
    menuToggle.setAttribute('aria-expanded', isActive);
  });

  // Navegación interna: mostrar sección correspondiente y cerrar menú
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('data-target');

      pages.forEach(page => {
        if (page.id === targetId) {
          page.classList.add('visible');
        } else {
          page.classList.remove('visible');
        }
      });

      // Cerrar menú si está abierto
      if (menuOverlay.classList.contains('activo')) {
        menuOverlay.classList.remove('activo');
        menuToggle.setAttribute('aria-expanded', false);
      }

      // Opcional: mover scroll a top al cambiar sección
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Botones "Abrir Papiro" para mostrar/ocultar grimorio contenido
  btnsGrimorio.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.sahumerio-card');
      const grimorio = card.querySelector('.grimorio-contenido');

      // Alternar visibilidad
      const isVisible = grimorio.style.display === 'block';
      grimorio.style.display = isVisible ? 'none' : 'block';

      // Cambiar texto del botón acorde al estado
      btn.textContent = isVisible ? 'Abrir Papiro' : 'Cerrar Papiro';
    });
  });
});

