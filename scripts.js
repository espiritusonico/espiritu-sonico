document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuOverlay = document.querySelector('.menu-overlay');
  const pageSections = document.querySelectorAll('.page');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const btnIngresar = document.getElementById('enter-btn');  // Aquí el id correcto
  const pantallaBienvenida = document.querySelector('.welcome-screen');
  const contenedorPrincipal = document.getElementById('content-container');
  const secciones = document.querySelectorAll('.page');

  // Ocultar todas las secciones excepto inicio al iniciar
  secciones.forEach(sec => {
    if (sec.id === 'inicio') {
      sec.style.display = 'block';
    } else {
      sec.style.display = 'none';
    }
  });

  // Ocultar contenedor principal inicialmente porque está oculto tras bienvenida
  contenedorPrincipal.style.display = 'none';

  // Limpiamos cualquier clase active al inicio
  navLinkItems.forEach(link => link.classList.remove('active'));

  // Función para abrir/cerrar menú móvil con animaciones y sombra
  function toggleMenu() {
    const isActive = menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active', isActive);
    menuOverlay.classList.toggle('active', isActive);
  }

  // Evento click para botón Ingresar
  btnIngresar.addEventListener('click', () => {
    // Animar fade out antes de ocultar pantalla bienvenida
    pantallaBienvenida.style.transition = 'opacity 0.
