document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM relacionados con el menú de idiomas
    const btnIdioma = document.getElementById('btn-idioma');
    const banderaIdioma = document.getElementById('bandera-idioma');
    const etiquetaIdioma = document.getElementById('etiqueta-idioma');
    const menuIdiomas = document.getElementById('menu-idiomas');
    const contenedorIdiomas = document.querySelector('.idiomas-desplegable');

    // Diccionario de iconos y etiquetas por idioma
    const iconos = {
        es: { src: getRutaImg('mexico.png'), alt: 'Español', label: 'ES' },
        en: { src: getRutaImg('usa.png'), alt: 'English', label: 'EN' }
    };

    // Detecta la ruta correcta para imágenes y JSON según la ubicación de la página
    function getRutaImg(img) {
        return window.location.pathname.includes('/html/') ? `../img/${img}` : `img/${img}`;
    }
    function getRutaJson() {
        return window.location.pathname.includes('/html/') ? '../traducciones/traducciones.json' : 'traducciones/traducciones.json';
    }

    // Establece el idioma predeterminado en localStorage si no existe
    if (!localStorage.getItem('idioma')) {
        localStorage.setItem('idioma', 'es');
    }
    let idiomaActual = localStorage.getItem('idioma');

    // Carga el archivo de traducciones y aplica el idioma actual
    fetch(getRutaJson())
        .then(respuesta => respuesta.json())
        .then(traducciones => {
            aplicarTraducciones(traducciones[idiomaActual]);
            actualizarUIIdioma(idiomaActual);

            // Abre/cierra el menú de idiomas al hacer clic en el botón
            btnIdioma.addEventListener('click', (e) => {
                e.stopPropagation();
                contenedorIdiomas.classList.toggle('abierto');
            });

            // Cambia el idioma al seleccionar una opción del menú
            menuIdiomas.querySelectorAll('li').forEach(item => {
                item.addEventListener('click', () => {
                    const idiomaSeleccionado = item.getAttribute('data-idioma');
                    if (idiomaSeleccionado !== idiomaActual) {
                        idiomaActual = idiomaSeleccionado;
                        localStorage.setItem('idioma', idiomaActual);
                        aplicarTraducciones(traducciones[idiomaActual]);
                        actualizarUIIdioma(idiomaActual);
                    }
                    contenedorIdiomas.classList.remove('abierto');
                });
            });

            // Cierra el menú si se hace clic fuera de él
            document.addEventListener('click', () => {
                contenedorIdiomas.classList.remove('abierto');
            });
        })
        .catch(error => console.error('Error cargando traducciones:', error));

    /**
     * Actualiza la UI del botón de idioma (bandera y etiqueta)
     * @param {string} idioma - Código del idioma actual ('es' o 'en')
     */
    function actualizarUIIdioma(idioma) {
        banderaIdioma.src = iconos[idioma].src;
        banderaIdioma.alt = iconos[idioma].alt;
        etiquetaIdioma.textContent = iconos[idioma].label;
    }

    /**
     * Aplica las traducciones a todos los elementos con el atributo data-trad
     * Si el elemento es un input, traduce el placeholder; si no, el innerHTML.
     * @param {Object} traducciones - Objeto con las traducciones del idioma actual
     */
    function aplicarTraducciones(traducciones) {
        const elementos = document.querySelectorAll('[data-trad]');
        elementos.forEach(elemento => {
            const clave = elemento.getAttribute('data-trad');
            if (traducciones[clave]) {
                if (elemento.tagName === 'INPUT') {
                    elemento.placeholder = traducciones[clave];
                } else {
                    elemento.innerHTML = traducciones[clave];
                }
            }
        });
    }
});