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





//menu pegajoso prueba
// Variable para almacenar la última posición de desplazamiento del usuario
let lastScrollTop = 0; 

// Obtiene la referencia al elemento del menú que tiene el ID 'stickyMenu'
const stickyMenu = document.getElementById('stickyMenu');

// Agrega un evento que escucha el desplazamiento (scroll) de la ventana
window.addEventListener('scroll', function() {

    // Obtiene la posición actual del desplazamiento vertical
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Compara la nueva posición del scroll con la anterior
    if (scrollTop < lastScrollTop) {
        // Si la nueva posición es menor que la anterior, el usuario está desplazándose hacia arriba
        stickyMenu.classList.remove('hidden');
    } else {
        // Si la nueva posición es mayor que la anterior, el usuario está desplazándose hacia abajo
        stickyMenu.classList.add('hidden');
    }

    // Actualiza la última posición del scroll para la próxima comparación
    lastScrollTop = scrollTop;
});

//menu pegajoso prueba