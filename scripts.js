document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const pageSections = document.querySelectorAll('.page');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const welcomeScreen = document.getElementById('welcome-screen');
  const enterBtn = document.getElementById('enter-btn');

  if (pageSections.length) {
    showPage(pageSections[0].id);
  }

  function toggleMenu() {
    navLinks.classList.toggle('active');
  }

  menuToggle.addEventListener('click', toggleMenu);

  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetPage = link.dataset.target;
      showPage(targetPage);
      navLinkItems.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
      if (navLinks.classList.contains('active')) toggleMenu();
    });
  });

  function showPage(pageId) {
    pageSections.forEach(page => {
      if (page.id === pageId) {
        page.classList.add('visible');
      } else {
        page.classList.remove('visible');
      }
    });
  }

  enterBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('fade-out');
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      document.getElementById('main-header').style.display = 'block';
      document.getElementById('content-container').style.display = 'block';
      document.getElementById('main-footer').style.display = 'block';
    }, 800);
  });
});
