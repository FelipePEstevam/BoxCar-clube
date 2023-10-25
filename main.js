const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('navbar');

menuButton.addEventListener('click', () => {
    const novoCaminho = 'assets/close.svg'
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menuButton.src = 'assets/close.svg';
    } else {
        menu.classList.add('hidden');
        menuButton.src = 'assets/menu_icon.svg';
    }
});