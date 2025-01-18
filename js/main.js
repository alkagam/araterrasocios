// Función para manejar la navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Función para iniciar el proceso
function iniciarProceso() {
    window.location.href = 'proceso.html';
}

// Función para manejar el formulario
function handleSubmit(event) {
    event.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
}

// Función para mostrar/ocultar la barra de navegación al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }

    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});