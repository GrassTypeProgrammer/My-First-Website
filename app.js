// '#' used to get element by ID, '.' used to get element by class.
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.Navbar_menu');



// display mobile menu

const mobileMenu  = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}


menu.addEventListener('click', mobileMenu);


