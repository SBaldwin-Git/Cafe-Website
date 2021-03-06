import {createHome} from "./home";
import {createMenu} from "./menu";
import {createContact} from "./contact";

function createHeader() {
    const body = document.querySelector('body');
    const header = document.createElement('header');


    header.appendChild(createHeading());
    header.appendChild(createNavBar());
    body.insertBefore(header, document.querySelector('#content'));
}

function createHeading() {
    const shopHeader = document.createElement('h1');

    shopHeader.textContent = 'Cafe Naples';
    shopHeader.classList.add('cafeName');

    return shopHeader;
}

function createNavBar() {

    const navBar = document.createElement('ul');
    const navHome = document.createElement('li');
    const navMenu = document.createElement('li');
    const navConact = document.createElement('li');

    const navHomeAnchor = document.createElement('a');
    const navMenuAnchor = document.createElement('a');
    const navContactAnchor = document.createElement('a');

    navHomeAnchor.textContent = 'Home';
    navMenuAnchor.textContent = 'Menu';
    navContactAnchor.textContent = 'Contact';

    navHomeAnchor.addEventListener('click', function() {
        createHome();
    });

    navMenuAnchor.addEventListener('click', function() {
        createMenu();
    });

    navContactAnchor.addEventListener('click', function() {
        createContact();
    });

    navBar.appendChild(navHome).appendChild(navHomeAnchor);
    navBar.appendChild(navMenu).appendChild(navMenuAnchor);
    navBar.appendChild(navConact).appendChild(navContactAnchor);

    return navBar;
}

export {
    createHeader
}