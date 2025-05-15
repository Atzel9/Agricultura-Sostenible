document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Evento para buscar al hacer clic en el botón
    searchButton.addEventListener('click', () => {
        realizarBusqueda();
    });

    // Evento para buscar al presionar Enter
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            realizarBusqueda();
        }
    });

    function realizarBusqueda() {
        const query = searchInput.value.trim().toLowerCase(); // Obtiene el texto ingresado
        const elementos = document.querySelectorAll('[data-trad], h1, h3, p, a'); // Elementos a buscar

        if (query === '') {
            alert('Por favor, ingresa un término de búsqueda.');
            return;
        }

        let encontrado = false;

        elementos.forEach((elemento) => {
            const texto = elemento.textContent.toLowerCase(); // Convierte el texto a minúsculas
            if (texto.includes(query)) {
                elemento.style.backgroundColor = 'yellow'; // Resalta el texto encontrado
                encontrado = true;
                elemento.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Desplaza al elemento
            } else {
                elemento.style.backgroundColor = ''; // Elimina el resaltado si no coincide
            }
        });

        if (!encontrado) {
            alert('No se encontraron resultados para: ' + query);
        }
    }
});