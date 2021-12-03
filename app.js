//Targetting toggle menu
const menu = document.querySelector('#mobile-menu');

//Targetting SneakersOfFame navbar logo
const navLogo = document.querySelector('#navbar_logo');

//Targetting menu class links
const menuLinks = document.querySelector('.navbar_menu');

//Display Mobile Menu
/* Create an error function */
const mobileMenu = () => { 
    menu.classList.toggle('is-active'); /* .toggle think of it as active or not active, true or false */
    menuLinks.classList.toggle('active');
};

//To toggle the above.
menu.addEventListener('click', mobileMenu);

//Show navbar active menu when scrolling
const highlightMenu = () => {
    const ele = document.querySelector('.highlight');
    const home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const services = document.querySelector('#services-page');
    //Scroll Position which shows me where user am positioned at
    let scrollPos = window.scrollY //if i console.log(scrollPos) below i am able to see the positioning
    console.log(scrollPos);
    //adds the 'highlight' class to my menu items.
    //anything > 960 means that highlights only works in laptop just not for mobiles
    if(window.innerWidth > 960 && scrollPos < 700) {
        home.classList.add('highlight');
        about.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 1600) {
        about.classList.add('highlight');
        home.classList.remove('highlight');
        services.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 1900) {
        services.classList.add('highlight');
        about.classList.remove('highlight');
        return
    }

    if ((ele && window.innerWidth < 960 && scrollPos < 700) || ele) {
        ele.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//Close the mobile menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
menuLinks.addEventListener('click', hideMobileMenu);