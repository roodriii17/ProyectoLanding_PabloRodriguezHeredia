window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.querySelectorAll('.toggle-text').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(button.getAttribute('data-target'));
        target.classList.toggle('collapse');

        // Cambiar texto del botón
        if (!target.classList.contains('collapse')) {
            button.textContent = 'Menos Información';
        } else {
            button.textContent = 'Más Información';
        }
    });
});


