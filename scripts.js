// Scripts principales de Espíritu Sónico

// Pantalla de bienvenida
document.getElementById('enter-btn').addEventListener('click', function() {
  const welcome = document.getElementById('welcome-screen');
  const main = document.getElementById('main-content');
  welcome.style.opacity = '0';
  setTimeout(() => {
    welcome.style.display = 'none';
    main.style.display = 'flex';
    main.style.opacity = '1';
  }, 1000);
});

// Toggle menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuOverlay.classList.toggle('active');

  // Agregar efecto de oscurecimiento al fondo
  document.body.classList.toggle('menu-open');
});

// Cerrar el menú si se hace clic fuera de él
menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) {
    menuToggle.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
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
    document.body.classList.remove('menu-open');

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
    const papiro = button.previousElementSibling;
    if (papiro.style.display === 'block') {
      papiro.style.display = 'none';
    } else {
      papiro.style.display = 'block';
    }
  });
});