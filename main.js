const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('navbar');
const campoSenha = document.getElementById('senha')
const buttonShowMePassword = document.getElementById('shomeMePassword')
const themeButton = document.getElementById('theme')
const address = document.getElementById('address')

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menuButton.src = 'assets/close.svg';
    } else {
        menu.classList.add('hidden');
        menuButton.src = 'assets/menu_icon.svg';
    }
})

themeButton.addEventListener('click', () => {
    if (themeButton.classList.contains('light')) {
        themeButton.classList.remove('light')
        document.documentElement.style.setProperty('--light', '#212529');
        document.documentElement.style.setProperty('--dark', '#F1F3F5');
        document.documentElement.style.setProperty('--grey-light', '#343A40');
        document.documentElement.style.setProperty('--grey-dark', '#DEE2E6');
        themeButton.src = 'assets/dark_mode.svg';
        address.src = 'assets/distance_dark.svg'
    } else {
        document.documentElement.style.setProperty('--light', '#F1F3F5');
        document.documentElement.style.setProperty('--dark', '#212529');
        document.documentElement.style.setProperty('--grey-light', '#DEE2E6');
        document.documentElement.style.setProperty('--grey-dark', '#343A40');
        themeButton.src = 'assets/light_mode.svg';
        address.src = 'assets/distance.svg'
        themeButton.classList.add('light');
        
        }

})

buttonShowMePassword.addEventListener('click', () => {
    if (campoSenha.type === 'password') {
        campoSenha.type = 'text';
        buttonShowMePassword.src = 'assets/hidden_password.svg'
    } else {
        campoSenha.type = 'password';
        buttonShowMePassword.src = 'assets/show_me_password.svg'
    }
})