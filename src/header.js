function createHeader() {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const shopHeader = document.createElement('h1');

    // Home
    // Menu
    // Contact

    shopHeader.textContent = 'Cafe Naples';
    shopHeader.classList.add('cafeName');

    header.appendChild(shopHeader)
    body.insertBefore(header, document.querySelector('#content'))
}

export {createHeader}