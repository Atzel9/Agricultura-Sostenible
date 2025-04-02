//Menu hamburguesa 
const iconoMenu = document.querySelector('#icono-menu'), /*selecciona el elemento con el ID*/

    menu = document.querySelector('#menu'); 
/*Selecciona el elemento ID que corresponde a el contenedor del menu lateral*/

iconoMenu.addEventListener('click', () => { /*cuando haces click ejecuta la funcion que sigue */
    // Alternar el menú

    menu.classList.toggle('active');
/*Hace que se desplaze dentro o fuera de la pantalla*/

    document.body.classList.toggle('opacity');
    /*Sirve para hacer que se opaque el fondo cuando presionamos el menu hambueguesa */

    // Cambiar el ícono
    const icon = iconoMenu.querySelector('i'); /* selecciona el <i> del HTML*/
    
    if (icon.classList.contains('bi-list')) { //Verifica si el ícono tiene la clase 'bi-list'(el ícono de hamburguesa)
        icon.classList.remove('bi-list'); // si tiene el icono de hamburguesa, se remueve 
        icon.classList.add('bi-x'); // y añade el icono de equis 
    } else { //si no se cumple con lo anterior...
        icon.classList.remove('bi-x'); // se remueve la equis
        icon.classList.add('bi-list'); // y se anade el icono de hamburguesa
    }
});
//Fin de menu hamburguesa

//menun pegajoso
// Menu pegajoso
// Variable para almacenar la última posición de desplazamiento del usuario
let lastScrollTop = 0; 

// Obtiene la referencia al elemento del menú que tiene el ID 'stickyMenu'
const stickyMenu = document.getElementById('stickyMenu');

// Agrega un evento que escucha el desplazamiento (scroll) de la ventana
window.addEventListener('scroll', function() {
    // Obtiene la posición actual del desplazamiento vertical
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Verificamos si el scroll es hacia abajo o hacia arriba
    if (scrollTop > lastScrollTop) {
        // Si se desplaza hacia abajo, ocultamos el menú
        stickyMenu.classList.add('hidden');
    } else {
        // Si se desplaza hacia arriba, mostramos el menú
        stickyMenu.classList.remove('hidden');
    }

    // Actualizamos la última posición del scroll
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
});