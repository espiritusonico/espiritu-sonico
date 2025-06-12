document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-btn');
  const welcomeScreen = document.querySelector('.welcome-screen');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const grimorioBtns = document.querySelectorAll('.btn-grimorio');

  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
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
      contenido.style.display = (contenido.style.display === 'block') ? 'none' : 'block';
    });
  });
});
