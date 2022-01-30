function createHeader() {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const shopHeader = document.createElement('h1');

    const navBar = document.createElement('ul');
    const navHome = document.createElement('li');
    const navMenu = document.createElement('li');
    const navConact = document.createElement('li');

    const navHomeAnchor = document.createElement('a');
    const navMenuAnchor = document.createElement('a');
    const navContactAnchor = document.createElement('a');

    navHomeAnchor.href = '';
    navMenuAnchor.href = '';
    navContactAnchor.href = '';

    navHomeAnchor.textContent = 'Home';
    navMenuAnchor.textContent = 'Menu';
    navContactAnchor.textContent = 'Contact';
    shopHeader.textContent = 'Cafe Naples';
    shopHeader.classList.add('cafeName');

    navBar.appendChild(navHome).appendChild(navHomeAnchor);
    navBar.appendChild(navMenu).appendChild(navMenuAnchor);
    navBar.appendChild(navConact).appendChild(navContactAnchor);

    header.appendChild(shopHeader);
    header.appendChild(navBar);
    body.insertBefore(header, document.querySelector('#content'));
}

export {createHeader}