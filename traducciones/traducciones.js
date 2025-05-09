document.addEventListener('DOMContentLoaded', () => {
    const btnTraducir = document.getElementById('traducir');
    let currentLang = 'es'; // Idioma inicial

    // Cargar traducciones
    fetch('../traducciones/traducciones.json')
        .then(response => response.json())
        .then(translations => {
            btnTraducir.addEventListener('click', () => {
                // Cambiar idioma
                currentLang = currentLang === 'es' ? 'en' : 'es';
                aplicarTraducciones(translations[currentLang]);
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