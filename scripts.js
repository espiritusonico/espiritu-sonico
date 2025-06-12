document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-btn');
  const welcomeScreen = document.getElementById('welcome-screen');
  const mainContent = document.getElementById('main-content');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainContent.style.opacity = '1';
      mainContent.style.pointerEvents = 'auto';
    }, 1000);
  });

  menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('open');
    menuToggle.classList.toggle('active');
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
      menuToggle.classList.remove('active');
    });
  });
});