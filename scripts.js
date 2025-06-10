// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.menu-overlay');
  const contentContainer = document.getElementById('content-container');
  const navLinkElements = document.querySelectorAll('.nav-link');

  // Contenido HTML de cada sección (puede extraerse a archivos separados en futuro)
  const sections = {
    inicio: `
      <section class="page visible" aria-label="Inicio">
        <h1>Espíritu Sónico</h1>
        <p>Un universo donde el sonido despierta el espíritu y la calma te acompaña.</p>
        <img src="img/banner.png" alt="Banner Espíritu Sónico" style="max-width: 100%; border-radius: 10px; margin-top: 1rem;" />
      </section>
    `,
    acerca: `
      <section class="page" aria-label="Acerca de Espíritu Sónico">
        <h2>Acerca de Espíritu Sónico</h2>
        <p>Este es un espacio sagrado creado para quienes buscan reconectar con su esencia a través del poder del sonido y la calma profunda.</p>
        <p>El proyecto integra sahumerios artesanales, viajes sonoros y experiencias que despiertan la conciencia y promueven el bienestar.</p>
        <p>Más que una página, un templo sonoro donde puedes descubrir nuevas formas de vivir y sentir.</p>
      </section>
    `,
    viajes: `
      <section class="page" aria-label="Viajes Sonoros">
        <h2>Viajes Sonoros</h2>
        <p>Explora nuestros viajes sonoros, cuidadosamente diseñados para acompañarte en procesos de introspección, relajación y sanación.</p>
        <ul>
          <li>Viajes guiados con voz y música ambiental.</li>
          <li>Experiencias inmersivas para distintos estados emocionales.</li>
          <li>Contenidos exclusivos para usuarios de la app Espíritu Sónico.</li>
        </ul>
      </section>
    `,
    productos: `
      <section class="page" aria-label="Productos">
        <h2>Productos Artesanales</h2>
        <p>Descubre nuestros sahumerios hechos a mano, con ingredientes naturales seleccionados para potenciar tus rituales y espacios.</p>
        <ul>
          <li>Palo Santo</li>
          <li>Salvia Officinalis</li>
          <li>Lavanda, Jazmín y otros</li>
        </ul>
        <p>Próximamente podrás comprar directamente desde aquí y acceder a ofertas especiales.</p>
      </section>
    `,
    contacto: `
      <section class="page" aria-label="Contacto">
        <h2>Contacto</h2>
        <form id="contact-form" novalidate>
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required placeholder="Tu nombre" />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="tu@email.com" />

          <label for="message">Mensaje:</label>
          <textarea id="message" name="message" rows="5" required placeholder="Escribe tu mensaje aquí"></textarea>

          <button type="submit">Enviar</button>
        </form>
        <div id="form-status" role="alert" style="margin-top:1rem;"></div>
      </section>
    `
  };

  // Carga inicial
  loadSection('inicio');

  // Función para cargar la sección con animación
  function loadSection(sectionName) {
    if (!sections[sectionName]) return;

    // Animar salida
    const currentPage = contentContainer.querySelector('.page.visible');
    if (currentPage) {
      currentPage.classList.remove('visible');
      currentPage.classList.add('page-leaving');
      setTimeout(() => {
        contentContainer.innerHTML = sections[sectionName];
        const newPage = contentContainer.querySelector('.page');
        newPage.classList.add('visible');
        // Llevar foco para accesibilidad
        newPage.setAttribute('tabindex', '-1');
        newPage.focus();
        attachContactFormHandler();
      }, 350);
    } else {
      contentContainer.innerHTML = sections[sectionName];
      const newPage = contentContainer.querySelector('.page');
      newPage.classList.add('visible');
      newPage.setAttribute('tabindex', '-1');
      newPage.focus();
      attachContactFormHandler();
    }

    // Actualizar menú activo
    navLinkElements.forEach(link => {
      link.classList.toggle('active', link.dataset.target === sectionName);
    });

    // Cerrar menú móvil si está abierto
    if (navLinks.classList.contains('active')) toggleMenu();
  }

  // Toggle menú móvil
  function toggleMenu() {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    // Animación toggle menú hamburguesa
    menuToggle.classList.toggle('open');
  }

  menuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Navegación click en menú
  navLinkElements.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.dataset.target;
      loadSection(target);
    });
  });

  // Formulario contacto (simulación)
  function attachContactFormHandler() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      // Validación sencilla
      if (!form.checkValidity()) {
        status.textContent = 'Por favor, completa todos los campos correctamente.';
        status.style.color = '#b00020';
        return;
      }
      // Simulación envío
      status.style.color = '#4e3c6e';
      status.textContent = 'Enviando...';
      setTimeout(() => {
        status.textContent = 'Gracias por contactarnos. Te responderemos pronto.';
        form.reset();
      }, 1500);
    });
  }
});
