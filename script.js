document.addEventListener('DOMContentLoaded', () => {
    // Usamos el selector de clase que pusimos en el CSS (.menu-toggle)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // 1. Abrimos o cerramos el menú deslizable
            navMenu.classList.toggle('active');

            // 2. Cambiamos el icono del MISMO botón (así no se enciman)
            if (navMenu.classList.contains('active')) {
                menuToggle.innerHTML = '✕'; // Cambia a X cuando abre
            } else {
                menuToggle.innerHTML = '☰'; // Vuelve a las 3 rayitas cuando cierra
            }
        });
    }

    // Cerrar automáticamente al hacer clic en un enlace (para navegar)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '☰'; // Siempre volvemos a las rayitas al cerrar
        });
    });
});