import './style.css';

const bodyContainer = document.querySelector('body');
const contentContainer = document.querySelector('#content');

let shopHeader = document.createElement('h1');
shopHeader.textContent = 'Cafe Naples';

contentContainer.appendChild(shopHeader);