document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const menuOverlay = document.querySelector(".menu-overlay");
  const contentContainer = document.getElementById("content-container");

  // Secciones de la página (en formato objeto)
  const pages = {
    inicio: `
      <section class="page">
        <div class="page-initial">
          <h1>Espíritu Sónico</h1>
          <p>Un universo sonoro para el despertar del espíritu y la calma interior.</p>
        </div>
      </section>
    `,
    acerca: `
      <section class="page">
        <div>
          <h2>Acerca de Espíritu Sónico</h2>
          <p>Espíritu Sónico es un espacio místico donde los viajes sonoros ayudan a conectar con lo más profundo de tu ser, armonizando cuerpo, mente y alma.</p>
        </div>
      </section>
    `,
    viajes: `
      <section class="page">
        <div>
          <h2>Viajes Sonoros</h2>
          <p>Experimenta transformaciones a través de nuestros viajes sonoros, cada uno diseñado para un propósito específico, desde la sanación hasta la creatividad.</p>
        </div>
      </section>
    `,
    productos: `
      <section class="page">
        <div>
          <h2>Productos</h2>
          <p>Explora nuestros productos exclusivos, desde sahumerios artesanales hasta herramientas para la meditación sonora.</p>
        </div>
      </section>
    `,
    contacto: `
      <section class="page">
        <div>
          <h2>Contacto</h2>
          <form>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    `
  };

  // Función para cargar el contenido
  function loadPage(pageId) {
    const pageContent = pages[pageId];
    if (!pageContent) return;

    // Elimina las páginas anteriores
    const currentPage = contentContainer.querySelector(".page");
    if (currentPage) {
      currentPage.classList.add("page-leaving");
      setTimeout(() => {
        currentPage.remove();
      }, 600); // Duración de la animación
    }

    // Cargar nueva página
    contentContainer.innerHTML = pageContent;
    const newPage = contentContainer.querySelector(".page");
    setTimeout(() => {
      newPage.classList.add("visible");
    }, 100); // Añade la clase 'visible' para animación
  }

  // Event listener para abrir/cerrar el menú
  menuToggle.addEventListener("click", () => {
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // Cerrar el menú cuando se hace clic fuera de él
  menuOverlay.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  // Cambiar la sección al hacer clic en un enlace del menú
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("data-target");
      loadPage(target);
      navLinks.forEach(link => link.classList.remove("active"));
      e.target.classList.add("active");
      menuOverlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  // Cargar la página inicial al cargar el sitio
  loadPage("inicio");
});
