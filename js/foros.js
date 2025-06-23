  document.addEventListener("DOMContentLoaded", () => {
    
    function createFakeMessage() { //creamos una acción 
  const mensajeFalso = document.createElement("div"); //crea un elemento de html pero se muestra hasta que se ponga .appendChild()
  mensajeFalso.classList.add("mensaje"); //añadimos de la lista de clases

  const avatar = document.createElement("div"); //crea un elemento en html
  avatar.classList.add("avatar", "avatar-falso"); //añade esas dos clases

  const content = document.createElement("div"); //crea una variable, que hace un div en html
  content.classList.add("content"); // añadimos la clase content

  const username = document.createElement("div"); //creamos otro div en html
  username.classList.add("username"); //añadimos username
  username.textContent = "Benito Camelo Cano"; //Nombre del usuario fake

  const text = document.createElement("div"); // crea otro div sin llamar
  text.classList.add("text"); //añade text
  text.textContent = "Hola a todos, ¿qué técnicas de cultivo sostenible conocen o utilizan para proteger el suelo y optimizar recursos?"; //texto del bot

  content.appendChild(username); //muestra el nombre de usuario
  content.appendChild(text); //muestra su mensaje

  mensajeFalso.appendChild(avatar); //muestra el perejil
  mensajeFalso.appendChild(content); //muestra contenido

  const mensajesContainer = document.getElementById("mensajes"); //busca un ID del html
  mensajesContainer.appendChild(mensajeFalso); //muestra el mensaje falso
}

// Llama la función justo cuando la página carga
createFakeMessage();


  const iconoMenu = document.querySelector('#icono-menu'); //busca el id del menu
  const menu = document.querySelector('#menu'); //busca el id menu
  iconoMenu.addEventListener('click', () => { //hace que escuche o haga un evento al hacer click
    menu.classList.toggle('active'); //toggle quita active, se esconde el menu
    document.body.classList.toggle('opacity'); // hace que se quite la opacidad al abrir el menu
    const icon = iconoMenu.querySelector('i'); // selecciona un icono
    if (icon.classList.contains('bi-list')) { // si esta bi list
      icon.classList.remove('bi-list'); //entonces se quita bi list
      icon.classList.add('bi-x'); //y se pone bi x 
    } else { //sino
      icon.classList.remove('bi-x'); // entonces se quita bix
      icon.classList.add('bi-list'); //y se pone bi list
    }
  });

  const toTopButtons = document.querySelectorAll('.toTop'); //selecciona todos los elementos que tengan totop
  window.addEventListener('scroll', function () { //
    toTopButtons.forEach(button => {
      if (window.pageYOffset > window.innerHeight) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });
  });
  toTopButtons.forEach(button => {
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  const iconoMenu2 = document.querySelector('#icono-menu2');
  const menu2 = document.querySelector('#menu2');
  const mainContent = document.querySelector('#main-content');
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
  let abierto = true;
  boton.addEventListener('click', () => {
    if (abierto) {
      boton.style.transform = 'translateX(500%)';
    } else {
      boton.style.transform = 'translateX(-50%)';
    }
    abierto = !abierto;
  });

  const textarea = document.getElementById("miTextarea");
  textarea.value = textarea.value.trim();
  textarea.addEventListener("click", function () {
    this.value = this.value.trim();
    if (this.value.length === 0) {
      this.setSelectionRange(0, 0);
    }
    this.scrollLeft = 0;
  });

  // envio del mensajee
  const btn = document.getElementById("enviarBtn");
  const mensajesContainer = document.getElementById("mensajes");

  function enviarMensaje() {
  const mensaje = textarea.value.trim();
  if (mensaje === "") {
    alert("Por favor, escribe un mensaje antes de enviar.");
    return;
  }

  const nuevoMensaje = document.createElement("div");
  nuevoMensaje.classList.add("mensaje", "propio");

  const avatar = document.createElement("div");
  avatar.classList.add("avatar", "avatar-propio");


  const content = document.createElement("div");
  content.classList.add("content");

  const username = document.createElement("div");
  username.classList.add("username");
  username.textContent = "Tú"; 
  const text = document.createElement("div");
  text.classList.add("text");
  text.textContent = mensaje;

  content.appendChild(username);
  content.appendChild(text);

  nuevoMensaje.appendChild(avatar);
  nuevoMensaje.appendChild(content);

  mensajesContainer.appendChild(nuevoMensaje);

  textarea.value = "";
  mensajesContainer.scrollTop = mensajesContainer.scrollHeight;
}


  btn.addEventListener("click", enviarMensaje);
  textarea.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      enviarMensaje();
    }
  }); //se cierra el envio de mensajes

  //codigo del boton de emojis
  const btnEmoji = document.getElementById('btnEmoji');
  const emojiPicker = document.getElementById('emojiPicker');
  const chatContainer = document.getElementById('chatContainer');

  btnEmoji.addEventListener('click', () => {
    const top = btnEmoji.offsetTop + btnEmoji.offsetHeight - 450;
    const left = btnEmoji.offsetLeft - 50;
    emojiPicker.style.top = top + 'px';
    emojiPicker.style.left = left + 'px';
    emojiPicker.style.display =
      emojiPicker.style.display === 'none' || emojiPicker.style.display === ''
        ? 'block'
        : 'none';
  });

  emojiPicker.addEventListener('emoji-click', (event) => {
    textarea.value += event.detail.unicode;
    emojiPicker.style.display = 'none';
  });

  document.addEventListener('click', (e) => {
    if (!emojiPicker.contains(e.target) && e.target !== btnEmoji) {
      emojiPicker.style.display = 'none';
    }
  });
});