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



//Botón ir arriba
document.addEventListener('DOMContentLoaded', function() {
    const toTopButtons = document.querySelectorAll('.toTop'); // Selecciona todos los botones con clase 'toTop'

    // Mostrar u ocultar los botones al hacer scroll
    window.addEventListener('scroll', function() {
        toTopButtons.forEach(button => {
            if (window.pageYOffset > window.innerHeight) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });
    });

    // Desplazamiento suave al hacer clic en cualquiera de los botones
    toTopButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});

const iconoMenu2 = document.querySelector('#icono-menu2'),
      menu2 = document.querySelector('#menu2'),
      mainContent = document.querySelector('#main-content');

iconoMenu2.addEventListener('click', () => {
    menu2.classList.toggle('active2');
    mainContent.classList.toggle('shifted');

    const icon = iconoMenu2.querySelector('i');
    if (icon.classList.contains('bi-list')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
});