document.addEventListener('DOMContentLoaded', () => {
    const btnIdioma = document.getElementById('btn-idioma'); // Botón que activa/desactiva el menú de idiomas
    const banderaIdioma = document.getElementById('bandera-idioma'); // Imagen de la bandera del idioma actual
    const etiquetaIdioma = document.getElementById('etiqueta-idioma'); // Texto que muestra el código del idioma (ES/EN)
    const menuIdiomas = document.getElementById('menu-idiomas'); // Menú desplegable con opciones de idioma
    const contenedorIdiomas = document.querySelector('.idiomas-desplegable'); // Contenedor del menú desplegable

    // Define las banderas y etiquetas para español y inglés
    const iconos = {
        es: { src: getRutaImg('mexico.png'), alt: 'Español', label: 'ES' },
        en: { src: getRutaImg('usa.png'), alt: 'English', label: 'EN' }
    };

    // Determina la ruta correcta para las imágenes basada en la ubicación de la página
    function getRutaImg(img) {
        return window.location.pathname.includes('/html/') ? `../img/${img}` : `img/${img}`;
    }
    // Similar a la anterior pero para el archivo JSON de traducciones
    function getRutaJson() {
        return window.location.pathname.includes('/html/') ? '../traducciones/traducciones.json' : 'traducciones/traducciones.json';
    }

    // Usa localStorage para persistir la selección de idioma
    if (!localStorage.getItem('idioma')) {
        // Si no hay idioma guardado, establece español ('es') como predeterminado
        localStorage.setItem('idioma', 'es');
    }
    let idiomaActual = localStorage.getItem('idioma');

    // Solicita el archivo JSON de traducciones
    fetch(getRutaJson())
        .then(respuesta => respuesta.json()) // Convierte la respuesta en un objeto JSON
        .then(traducciones => {
            aplicarTraducciones(traducciones[idiomaActual]); // Aplica las traducciones del idioma actual
            actualizarUIIdioma(idiomaActual); // Cambia la bandera y etiqueta del botón de idioma

            // Abre/cierra el menú de idiomas al hacer clic en el botón
            btnIdioma.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita que el clic se propague y cierre el menú inmediatamente
                contenedorIdiomas.classList.toggle('abierto'); // Alterna la clase "abierto" en el contenedor de idiomas
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
                    contenedorIdiomas.classList.remove('abierto'); // Cierra el menú después de seleccionar
                });
            });

            // Cierra el menú si se hace clic fuera de él
            document.addEventListener('click', () => {
                contenedorIdiomas.classList.remove('abierto');
            });
        })
        .catch(error => console.error('Error cargando traducciones:', error)); // Captura posibles errores

    /**
     * Actualiza la UI del botón de idioma (bandera y etiqueta)
     */
    function actualizarUIIdioma(idioma) {
        banderaIdioma.src = iconos[idioma].src; // Cambia la bandera usando el objeto iconos
        banderaIdioma.alt = iconos[idioma].alt; // Cambia el texto alternativo de la imagen
        etiquetaIdioma.textContent = iconos[idioma].label; // Actualiza el texto de la etiqueta con el código del idioma
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