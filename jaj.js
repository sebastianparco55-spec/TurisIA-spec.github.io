document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación simple al cargar
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});