const bodyContainer = document.querySelector('body');
const contentContainer = document.querySelector('#content');

const header = document.createElement('header');
const shopHeader = document.createElement('h1');
shopHeader.textContent = 'Cafe Naples';
shopHeader.classList.add('cafeName');

contentContainer.appendChild(header).appendChild(shopHeader);