document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-btn');
  const welcomeScreen = document.getElementById('welcome-screen');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const grimorioBtns = document.querySelectorAll('.btn-grimorio');

  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
  welcomeScreen.style.transition = 'opacity 1s ease';
  welcomeScreen.style.opacity = '0';
  setTimeout(() => {
    welcomeScreen.style.display = 'none';
    document.getElementById('main-content').style.display = 'flex'; // <-- Esta línea es la clave
  }, 1000);
});

  menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target.dataset.target;
      pages.forEach(page => {
        if (page.id === target) {
          page.classList.add('visible');
        } else {
          page.classList.remove('visible');
        }
      });
      menuOverlay.classList.remove('open');
    });
  });

  grimorioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const contenido = btn.nextElementSibling;
      if (contenido.style.maxHeight) {
        contenido.style.maxHeight = null;
      } else {
        contenido.style.maxHeight = contenido.scrollHeight + "px";
      }
    });
  });
});