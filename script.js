document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. LÓGICA DEL MENÚ HAMBURGUESA
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle') || document.getElementById('openBtn');
    const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        // Estado inicial: siempre cerrado al cargar
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '☰';

        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = navMenu.classList.toggle('active');
            menuToggle.innerHTML = isOpen ? '✕' : '☰';
        });

        // Cerrar al hacer clic en enlaces
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '☰';
            });
        });
    }

    // ==========================================
    // 2. LÓGICA DE LA TARJETA DE WHATSAPP (MÓVIL Y PC)
    // ==========================================
    const openWa = document.getElementById('openWa');
    const closeWa = document.getElementById('closeWa');
    const whatsappCard = document.getElementById('whatsappCard');

    if (openWa && whatsappCard) {
        
        // Función para abrir
        const abrirWhatsApp = (e) => {
            e.preventDefault();
            e.stopPropagation();
            whatsappCard.classList.add('show');
            // Forzamos el estilo por si el CSS falla
            whatsappCard.style.display = 'block'; 
        };

        // Función para cerrar
        const cerrarWhatsApp = (e) => {
            e.preventDefault();
            e.stopPropagation();
            whatsappCard.classList.remove('show');
            whatsappCard.style.display = 'none';
        };

        // Eventos para el botón verde (Click y Toque)
        openWa.addEventListener('click', abrirWhatsApp);
        openWa.addEventListener('touchstart', abrirWhatsApp, {passive: false});

        // Eventos para la X de cerrar (Click y Toque)
        if (closeWa) {
            closeWa.addEventListener('click', cerrarWhatsApp);
            closeWa.addEventListener('touchstart', cerrarWhatsApp, {passive: false});
        }

        // Cerrar al tocar cualquier parte fuera de la tarjeta
        const cerrarFuera = (event) => {
            if (!whatsappCard.contains(event.target) && !openWa.contains(event.target)) {
                whatsappCard.classList.remove('show');
                whatsappCard.style.display = 'none';
            }
        };

        document.addEventListener('click', cerrarFuera);
        document.addEventListener('touchstart', cerrarFuera);
    }
});