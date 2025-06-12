// Scripts principales de Espíritu Sónico

// Pantalla de bienvenida
document.getElementById('btn-enter').addEventListener('click', function() {
  document.getElementById('welcome-screen').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.opacity = '1';
  }, 1000);
});

// Toggle menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuOverlay.classList.toggle('active');
});

// Navegación de páginas
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Ocultar menú móvil
    menuToggle.classList.remove('active');
    menuOverlay.classList.remove('active');

    // Mostrar página correspondiente
    const targetId = link.getAttribute('data-target');
    pages.forEach(page => {
      page.classList.remove('visible');
      if (page.id === targetId) {
        page.classList.add('visible');
      }
    });

    // Activar indicador de navegación
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Mostrar la página de inicio al cargar
window.addEventListener('load', () => {
  document.getElementById('inicio').classList.add('visible');
  document.querySelector('.nav-link[data-target="inicio"]').classList.add('active');
});

// Funcionalidad de papiros desplegables
const toggleButtons = document.querySelectorAll('.toggle-papiro');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const papiro = button.nextElementSibling;
    if (papiro.style.display === 'block') {
      papiro.style.display = 'none';
    } else {
      papiro.style.display = 'block';
    }
  });
});