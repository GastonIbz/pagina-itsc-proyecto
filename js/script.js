// js/script.js

// Este archivo JavaScript contendrá cualquier lógica personalizada que necesites.
// Por ahora, Bootstrap ya maneja la interactividad del navbar, dropdowns, etc.

// Un simple log en consola para confirmar que el script se carga
console.log("El script personalizado de ITSC está cargado y listo.");

// Puedes añadir funciones aquí más adelante, por ejemplo:
// - Desplazamiento suave (smooth scroll)
// - Validaciones de formulario (si implementas uno)
// - Animaciones personalizadas
// - Lógica para cargar contenido dinámicamente (más avanzado)

// Ejemplo de una función simple que podrías usar:
// document.addEventListener('DOMContentLoaded', function() {
//     const miBoton = document.getElementById('miBoton');
//     if (miBoton) {
//         miBoton.addEventListener('click', function() {
//             alert('Botón clickeado!');
//         });
//     }
// });

// FIRST DOMContentLoaded BLOCK (as you provided it)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentPath = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual (ej: index.html, nosotros.html)

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Compara el nombre del archivo de la URL actual con el href del enlace
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Asegura que otros enlaces no tengan la clase active
        }
    });
});

// SECOND DOMContentLoaded BLOCK (as you provided it)
// js/script.js // This is just a comment, not a new file.
document.addEventListener('DOMContentLoaded', function() {
    // Función para activar enlaces
    function activateNavLink(linkElements) {
        const currentPath = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual (ej: index.html, nosotros.html)

        linkElements.forEach(link => {
            const linkPath = link.getAttribute('href');

            // Compara el nombre del archivo de la URL actual con el href del enlace
            if (linkPath === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active'); // Asegura que otros enlaces no tengan la clase active
            }
        });
    }

    // Activar enlaces de la barra de navegación principal (Header)
    const headerNavLinks = document.querySelectorAll('.navbar-nav .nav-link');
    activateNavLink(headerNavLinks);

    // Activar enlaces del footer (Enlaces Rápidos)
    const footerNavLinks = document.querySelectorAll('.footer-list a'); // Selecciona los enlaces dentro de la clase .footer-list
    activateNavLink(footerNavLinks);
});