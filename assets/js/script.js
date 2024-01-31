// Quando tiver o evento de click quero mudar para outra imagem
const iconMenu = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.menu-mobile');
const menuDesktop = document.querySelector('.menu-desktop');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        iconMenu.src = "assets/images/icon-menu.svg";
        overlay.classList.remove('ativo');
    } else {
        menuMobile.classList.add('open');
        iconMenu.src = "assets/images/icon-menu-close.svg";
        overlay.classList.add('ativo');
    }
}

iconMenu.addEventListener('click', toggleMenu);