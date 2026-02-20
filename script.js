document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DEL MENÚ HAMBURGUESA ---
    const menuToggle = document.querySelector('.menu-toggle') || document.getElementById('openBtn');
    const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Cambia el icono de ☰ a ✕
            menuToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
        });

        // Cerrar al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '☰';
            });
        });
    }

    // --- LÓGICA DE WHATSAPP (Basada en tu HTML) ---
    const openWa = document.getElementById('openWa');
    const closeWa = document.getElementById('closeWa');
    const whatsappCard = document.getElementById('whatsappCard');

    if (openWa && whatsappCard) {
        // Abrir tarjeta
        openWa.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que otros clics interfieran
            whatsappCard.style.display = 'block';
        });

        // Cerrar tarjeta con la X
        if (closeWa) {
            closeWa.addEventListener('click', () => {
                whatsappCard.style.display = 'none';
            });
        }

        // Cerrar si hacen clic fuera de la tarjeta
        document.addEventListener('click', (event) => {
            if (!whatsappCard.contains(event.target) && !openWa.contains(event.target)) {
                whatsappCard.style.display = 'none';
            }
        });
    }
});