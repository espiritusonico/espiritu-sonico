document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-btn');
  const welcomeScreen = document.getElementById('welcome-screen');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
    }, 1000);
  });

  menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target.dataset.target;
      pages.forEach(page => {
        page.classList.toggle('visible', page.id