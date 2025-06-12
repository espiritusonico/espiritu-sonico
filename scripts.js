document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-btn');
  const welcomeScreen = document.getElementById('welcome-screen');
  const mainContent = document.getElementById('main-content');

  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainContent.style.display = 'flex';
    }, 1000);
  });

  // Menú lateral
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');

  menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('open');
  });
});
