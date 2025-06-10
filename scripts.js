document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Función para mostrar la página correcta con transición
    function showPage(targetId) {
        pages.forEach(page => {
            if(page.id === targetId){
                page.classList.add('visible');
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
                page.classList.remove('visible');
            }
        });

        links.forEach(link => {
            if(link.dataset.target === targetId){
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Cerrar menú móvil si está abierto
        if(navLinks.classList.contains('open')){
            navLinks.classList.remove('open');
        }
    }

    // Event listeners para links
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.dataset.target;
            showPage(targetId);
        });
    });

    // Toggle menú móvil
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});

