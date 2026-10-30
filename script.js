// Actualizar año del footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Menú Móvil
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Función para descargar el código HTML completo del sitio
    
// Formulario de contacto: limpiar campos y mostrar agradecimiento
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset();
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo a la brevedad.');
});
