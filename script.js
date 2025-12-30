document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // 1. Alterna la clase 'active' para mostrar/ocultar el menú
            navMenu.classList.toggle('active');
            
            // 2. Cambia el ícono de hamburguesa a la 'X' y viceversa
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // fa-times es el ícono de 'X'
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Funcionalidad para cerrar el menú después de un clic en móvil
    document.querySelectorAll('.nav-menu a').forEach(item => {
        item.addEventListener('click', () => {
            // Solo cerramos si el menú está activo (estamos en móvil)
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                
                // Restaura el ícono a la hamburguesa
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const btnOpen = document.getElementById('openWa');
    const btnClose = document.getElementById('closeWa');
    const waCard = document.getElementById('whatsappCard');

    if (btnOpen && btnClose && waCard) {
        // Abrir ventana
        btnOpen.addEventListener('click', function() {
            waCard.classList.add('show');
            btnOpen.style.display = 'none'; // Oculta el círculo al abrir la tarjeta
        });

        // Cerrar ventana
        btnClose.addEventListener('click', function() {
            waCard.classList.remove('show');
            btnOpen.style.display = 'flex'; // Muestra el círculo de nuevo
        });
    }
});