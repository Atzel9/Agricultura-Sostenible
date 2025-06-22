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

//menu de temas desplegable
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


  


  const boton = document.getElementById('botonMenu');
 

  let abierto = true; // Estado inicial: visible en -50%

  boton.addEventListener('click', () => {
    if (abierto) {
     
      boton.style.transform = 'translateX(500%)';
    } else {
      
      boton.style.transform = 'translateX(-50%)';
    }
    abierto = !abierto; // Alternar estado
  });

  //esto sirve para que el textarea inicie a escribir desde el inicio de este
  const textarea = document.getElementById("miTextarea");

// Limpia espacios y saltos al cargar la página (opcional si el textarea inicia vacío)
textarea.value = textarea.value.trim();

textarea.addEventListener("click", function () {
  // Limpia espacios y saltos de línea invisibles al hacer clic
  this.value = this.value.trim();

  // Mueve el cursor al inicio solo si está vacío después de limpiar
  if (this.value.length === 0) {
    this.setSelectionRange(0, 0);
  }

  // Resetea scroll horizontal (por si acaso)
  this.scrollLeft = 0;
});

// lo que hace esta parte es que al momento de presionar el boton de enviar, manda el mensaje :v
const btn = document.getElementById("enviarBtn");

  btn.addEventListener("click", () => {
    const mensaje = textarea.value.trim();
    if (mensaje === "") {
      alert("Por favor, escribe un mensaje antes de enviar.");
      return;
    }

    console.log("Mensaje enviado:", mensaje);
    alert("Mensaje enviado: " + mensaje);
    textarea.value = "";
  });

  //emojis para el boton de emojis 
  // Referencias a los elementos
const btnEmoji = document.getElementById('btnEmoji');
const emojiPicker = document.getElementById('emojiPicker');
const miTextarea = document.getElementById('miTextarea');
const chatContainer = document.getElementById('chatContainer');

// Al hacer clic en el botón de emoji
btnEmoji.addEventListener('click', () => {
  if (emojiPicker.style.display === 'none' || emojiPicker.style.display === '') {
    // Posiciona el emoji picker justo debajo del botón, dentro del contenedor
    const btnRect = btnEmoji.getBoundingClientRect();
    const containerRect = chatContainer.getBoundingClientRect();

    // Coordenadas relativas al contenedor
    const top = btnEmoji.offsetTop + btnEmoji.offsetHeight -450;
    const left = btnEmoji.offsetLeft -50;

    emojiPicker.style.top = top + 'px';
    emojiPicker.style.left = left + 'px';
    emojiPicker.style.display = 'block';
  } else {
    emojiPicker.style.display = 'none';
  }
});

// Insertar emoji en el textarea
emojiPicker.addEventListener('emoji-click', (event) => {
  miTextarea.value += event.detail.unicode;
  emojiPicker.style.display = 'none'; // Opcional: cerrar después de insertar
});

// Ocultar emoji picker al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!emojiPicker.contains(e.target) && e.target !== btnEmoji) {
    emojiPicker.style.display = 'none';
  }
});