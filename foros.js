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

document.addEventListener("DOMContentLoaded", function () {
    // ====== Selección de elementos ======
    const slides = document.querySelectorAll(".slide"); // Selecciona todas las diapositivas
    let currentSlide = 0; // Índice de la diapositiva actual
    const intervalTime = 5000; // Tiempo entre cada cambio de diapositiva (5 segundos)
    let slideInterval; // Variable para almacenar el intervalo de cambio automático

    // ====== Función para mostrar una diapositiva específica ======
    function showSlide(n) {
        slides.forEach((slide, index) => {
            slide.classList.remove('active'); // Elimina la clase 'active' de todas las diapositivas
            if (index === n) {
                slide.classList.add('active'); // Agrega la clase 'active' a la diapositiva actual
            }
        });
    }

    // ====== Función para avanzar a la siguiente diapositiva ======
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Calcula el índice de la siguiente diapositiva
        showSlide(currentSlide); // Muestra la nueva diapositiva
    }

    // ====== Iniciar el carrusel automáticamente ======
    slideInterval = setInterval(nextSlide, intervalTime); // Cambia de diapositiva cada 5 segundos
});

//sirve para que al momento de tocar la frase se dirija hacia abajo
function irAlFinal() {
    document.getElementById("final-pagina").scrollIntoView({ behavior: "smooth" });
  }

//menu desplegable del menu de temas
  function toggleMenu() {
    const menu = document.getElementById("menus");
    menu.classList.toggle("activo");
  }