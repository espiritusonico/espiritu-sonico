document.addEventListener('DOMContentLoaded', () => {
  const welcomeScreen = document.getElementById('welcome-screen');
  const enterBtn = document.getElementById('enter-btn');
  const mainContent = document.getElementById('main-content');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  // Al hacer click en "Ingresar" se oculta pantalla bienvenida y muestra main content
  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainContent.classList.add('show');
    }, 1000);
  });

  // Toggle menú
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  });

  // Cerrar menú al hacer click en enlace y mostrar sección correspondiente
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');

      // Mostrar la sección seleccionada y ocultar las demás
      pages.forEach(page => {
        if (page.id === targetId) {
          page.classList.add('visible');
        } else {
          page.classList.remove('visible');
        }
      });

      // Actualizar estilos de menú
      navLinks.forEach(lnk => lnk.classList.remove('active'));
      link.classList.add('active');

      // Cerrar menú móvil
      menuToggle.classList.remove('active');
      menuOverlay.classList.remove('active');
    });
  });

  // Marcar el primer enlace como activo por defecto al cargar main content
  navLinks[0].classList.add('active');

  // Opcional: Scroll suave (en caso de tener enlaces ancla en la página)
  // Puedes activarlo si quieres.
  /*
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  */
});