const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('navbar');
const campoSenha = document.getElementById('senha')
const buttonShowMePassword = document.getElementById('shomeMePassword')

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menuButton.src = 'assets/close.svg';
    } else {
        menu.classList.add('hidden');
        menuButton.src = 'assets/menu_icon.svg';
    }
});

buttonShowMePassword.addEventListener('click', () => {
    if (campoSenha.type === 'password') {
        campoSenha.type = 'text';
        buttonShowMePassword.src = 'assets/hidden_password.svg'
    } else {
        campoSenha.type = 'password';
        buttonShowMePassword.src = 'assets/show_me_password.svg'
    }
})