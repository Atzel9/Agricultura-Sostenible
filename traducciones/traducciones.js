document.addEventListener('DOMContentLoaded', () => {
    const btnTraducir = document.getElementById('traducir');
    const icono = document.getElementById('iconoBtn');

    // Establecer el idioma predeterminado como español si no está guardado en localStorage
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'es');
    }

    let currentLang = localStorage.getItem('lang'); // Recupera el idioma guardado

    // Cargar traducciones
    fetch('../traducciones/traducciones.json')
        .then(response => response.json())
        .then(translations => {
            // Aplicar traducciones al cargar la página
            aplicarTraducciones(translations[currentLang]);

            // Cambiar imagen del botón según el idioma actual
            if (currentLang === 'en') {
                icono.src = '../img/usa.png';
                icono.alt = 'Icono1';
            } else {
                icono.src = '../img/mexico.png';
                icono.alt = 'Icono2';
            }

            // Cambiar idioma al hacer clic en el botón
            btnTraducir.addEventListener('click', () => {
                currentLang = currentLang === 'es' ? 'en' : 'es';
                localStorage.setItem('lang', currentLang); // Guardar el idioma seleccionado
                aplicarTraducciones(translations[currentLang]);

                // Cambiar imagen del botón
                if (icono.src.includes('usa.png')) {
                    icono.src = '../img/mexico.png'; // Cambia la imagen al español
                    icono.alt = 'Icono2'; // Cambia el texto alternativo al español
                } else {
                    icono.src = '../img/usa.png'; // Cambia la imagen al inglés
                    icono.alt = 'Icono1'; // Cambia el texto alternativo al inglés
                }
            });
        })
        .catch(error => console.error('Error cargando traducciones:', error));

    function aplicarTraducciones(translations) {
        // Seleccionar todos los elementos con data-trad
        const elementos = document.querySelectorAll('[data-trad]');
        
        elementos.forEach(elemento => {
            const key = elemento.getAttribute('data-trad');
            if (translations[key]) {
                if (elemento.tagName === 'INPUT') {
                    // Si es un input, actualiza el placeholder
                    elemento.placeholder = translations[key];
                } else {
                    // Si no, actualiza el contenido
                    elemento.innerHTML = translations[key];
                }
            }
        });
    }
});