const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', () => {
    // Alternar el menú
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Cambiar el ícono
    const icon = iconoMenu.querySelector('i');
    if (icon.classList.contains('bi-list')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
});