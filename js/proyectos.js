/*CREAR UNN FILTRO DONDE SOLO SE PUEDAN ELEGIR 3 CATEGORIAS, SI EL USUARIO QUIERE UTILIZAR MAS CATEGORIAS 
SALE UN MENSAJE DE ERROR EN LA PARTE INFERIOR. LOS ARTICULOS QUE NO CUMPLAN CON LOS FILTROS DESAPARECERAN
Y LOS QUE SI SE QUEDARAN*/ 

//Se crea un array para guardar los filtros activos
let filtrosActivos = [];

//Seleccionar TODOS los botones del filtro
const botonesFiltro = document.querySelectorAll('[data-filtro]');

//Seleccionar el mensaje error
const mensajeError = document.getElementById ('mensaje-error');

//Saber si clickearon el botón
botonesFiltro.forEach (boton => {
    boton.addEventListener ('click', () => {
        const filtro = boton.getAttribute('data-filtro');

        //Verificar si el filtro esta activo
        if (filtrosActivos.includes(filtro)) {
            //Si esta activo se elimina de la lista
            filtrosActivos = filtrosActivos.filter( f => f !== filtro);
            boton.classList.remove('activo'); //Quitar el estilo si lo tenia
        } else {
            //Si aun no esta activo, revisa si ya hay 3 filtros activos
            if (filtrosActivos.length >= 3) {
                mensajeError.classList.remove('oculto');
                return; //Se detiene
            }
            filtrosActivos.push(filtro); //Agregar el nuevo filtro
            boton.classList.add('activo'); //Marcar el botón como activo
            mensajeError.classList.add('oculto');
        }
        //Llamar a la función que va a hacer el filtrado de los contenedores
        filtrarProyectos ();
    });
});

function filtrarProyectos () {
    //Seleccionar todos los contenederos con 'data-categoria'
    const proyectos = document.querySelectorAll('[data-categoria]');
    //Si no cumple ninguno con la categoría
    const mensajeVacio = document.getElementById('mensaje-vacio');
    //Para saber si hay uno que cumple
    let hayResultados = false; 
    //Ver todos los poryectos
    proyectos.forEach (proyecto => {
        //Obtenemos las categorias que tienen los contenedores
        const categorias = proyecto.getAttribute ('data-categoria').split(' ');
        //Comprobar que el contenedor cumple con las categorias establecidas por el usuario
        const cumpleTodos = filtrosActivos.every(filtro => categorias.includes(filtro));

        //Mostrar o ocultar contenedor si cumple con las categorias 
        if (cumpleTodos) {
            proyecto.style.display = 'flex'; //Cumple, muestra el contenedor
            hayResultados = true; //Hay al menos uno
        } else {
            proyecto.style.display = 'none'; //No cumple, oculta el contenedor
        }
    });
    if (hayResultados) {
        mensajeVacio.classList.add('oculto');
    } else {
        mensajeVacio.classList.remove('oculto');
    }
}