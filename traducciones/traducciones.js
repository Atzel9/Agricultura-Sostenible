document.addEventListener('DOMContentLoaded', () => {
    const btnTraducir = document.getElementById('traducir');
    const icono = document.getElementById('iconoBtn');
    let currentLang = 'es'; // Idioma inicial

    // Cargar traducciones
    fetch('../traducciones/traducciones.json')
        .then(response => response.json())
        .then(translations => {
            btnTraducir.addEventListener('click', () => {
                // Cambiar idioma
                currentLang = currentLang === 'es' ? 'en' : 'es';
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
                elemento.innerHTML = translations[key];
            }
        });
    }
});