/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\n    const content = document.getElementById('content');\n\n    while (content.firstChild) {\n        content.firstChild.remove()\n    };\n\n    content.appendChild(createOpeningTimes());\n    content.appendChild(createContactDetails());\n}\n\nfunction createOpeningTimes() {\n    const openingTimesContainer = document.createElement('div');\n    const openingTimesHeader = document.createElement('h2');\n    const addressHeader = document.createElement('h2');\n    openingTimesContainer.classList.add('contactDetailsContainer')\n\n    //Address\n    addressHeader.textContent = 'Where to find us:';\n    const addressContainer = document.createElement('ul');\n    const addressArray = [\n        document.createElement('li'),\n        document.createElement('li'),\n        document.createElement('li'),\n        document.createElement('li'),\n        document.createElement('li')\n    ];\n\n    addressArray[0].textContent = 'Cafe Naples';\n    addressArray[1].textContent = 'Coffee Street';\n    addressArray[2].textContent = 'Espresso Way';\n    addressArray[3].textContent = 'Mochashire';\n    addressArray[4].textContent = 'LA12 TTE5';\n\n    for (let i = 0; i < addressArray.length; i++) {\n        addressContainer.appendChild(addressArray[i]);\n    }\n\n    openingTimesContainer.appendChild(addressHeader);\n    openingTimesContainer.appendChild(addressContainer)\n\n    //Opening times\n    openingTimesHeader.textContent = 'Opening times:';\n    const openingTimesListContainer = document.createElement('ul');\n    const openingTimesArray = [\n        document.createElement('li'),\n        document.createElement('li'),\n        document.createElement('li'),\n        document.createElement('li'),\n        document.createElement('li'),\n        document.createElement('li'),\n        document.createElement('li')\n    ];\n\n    openingTimesArray[0].textContent = 'Mon: 07:00 - 20:00';\n    openingTimesArray[1].textContent = 'Tue: 07:00 - 20:00';\n    openingTimesArray[2].textContent = 'Wed: 07:00 - 16:00';\n    openingTimesArray[3].textContent = 'Thu: 07:00 - 16:00';\n    openingTimesArray[4].textContent = 'Fri: 07:00 - 20:00';\n    openingTimesArray[5].textContent = 'Sat: 07:00 - 20:00';\n    openingTimesArray[6].textContent = 'Sun: 08:00 - 16:00';\n\n    for (let i = 0; i < openingTimesArray.length; i++) {\n        openingTimesListContainer.appendChild(openingTimesArray[i]);\n    }\n\n    openingTimesContainer.appendChild(openingTimesHeader);\n    openingTimesContainer.appendChild(openingTimesListContainer)\n\n    return openingTimesContainer;\n}\n\nfunction createContactDetails() {\n    const contactDetailsContainer = document.createElement('div');\n    const contactDetailsHeader = document.createElement('h2');\n    const contactPhoneNumber = document.createElement('p');\n    const contactEmail = document.createElement('p');\n\n    contactDetailsContainer.classList.add('contactDetailsContainer');\n\n    contactDetailsHeader.textContent = 'Contact us at:';\n    contactPhoneNumber.textContent = '0264846992734';\n    contactEmail.textContent = 'cafenaples@gmail.com'\n\n    contactDetailsContainer.appendChild(contactDetailsHeader);\n    contactDetailsContainer.appendChild(contactPhoneNumber);\n    contactDetailsContainer.appendChild(contactEmail);\n\n    return contactDetailsContainer;\n}\n\n\n\n//# sourceURL=webpack://restaurant_odin/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter() {\n    const body = document.querySelector('body');\n    const footer = document.createElement('footer');\n\n    const footerText = document.createElement('p');\n    footerText.textContent = 'Created by Sam Baldwin';\n\n    const gitHubLogo = document.createElement('img')\n    gitHubLogo.src = '../dist/res/GitHub-Mark-Light-32px.png';\n    gitHubLogo.alt = '';\n\n    const gitHubLink = document.createElement('a');\n    gitHubLink.href = 'https://github.com/SBaldwin-Git/Cafe-Website';\n\n    footer.appendChild(footerText);\n    footer.appendChild(gitHubLink).appendChild(gitHubLogo);\n    body.appendChild(footer);\n}\n\n\n\n//# sourceURL=webpack://restaurant_odin/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n    const body = document.querySelector('body');\n    const header = document.createElement('header');\n\n\n    header.appendChild(createHeading());\n    header.appendChild(createNavBar());\n    body.insertBefore(header, document.querySelector('#content'));\n}\n\nfunction createHeading() {\n    const shopHeader = document.createElement('h1');\n\n    shopHeader.textContent = 'Cafe Naples';\n    shopHeader.classList.add('cafeName');\n\n    return shopHeader;\n}\n\nfunction createNavBar() {\n\n    const navBar = document.createElement('ul');\n    const navHome = document.createElement('li');\n    const navMenu = document.createElement('li');\n    const navConact = document.createElement('li');\n\n    const navHomeAnchor = document.createElement('a');\n    const navMenuAnchor = document.createElement('a');\n    const navContactAnchor = document.createElement('a');\n\n    navHomeAnchor.textContent = 'Home';\n    navMenuAnchor.textContent = 'Menu';\n    navContactAnchor.textContent = 'Contact';\n\n    navHomeAnchor.addEventListener('click', function() {\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n    });\n\n    navMenuAnchor.addEventListener('click', function() {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\n    });\n\n    navContactAnchor.addEventListener('click', function() {\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)();\n    });\n\n    navBar.appendChild(navHome).appendChild(navHomeAnchor);\n    navBar.appendChild(navMenu).appendChild(navMenuAnchor);\n    navBar.appendChild(navConact).appendChild(navContactAnchor);\n\n    return navBar;\n}\n\n\n\n//# sourceURL=webpack://restaurant_odin/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n\n    const content = document.getElementById('content');\n\n    while (content.firstChild) {\n        content.firstChild.remove()\n    }\n\n    content.appendChild(createSlogan());\n    content.appendChild(createReview());\n    content.appendChild(createImg());\n}\n\nfunction createSlogan() {\n\n    const sloganDiv = document.createElement('div');\n    const sloganText = document.createElement('h2');\n\n    sloganDiv.classList.add('sloganContainer');\n    sloganText.classList.add('sloganText');\n    sloganText.textContent = 'FRESHLY BREWED COFFEE, YOUR WAY, EVERYDAY';\n\n    sloganDiv.appendChild(sloganText);\n\n    return sloganDiv;\n}\n\n\nfunction createReview() {\n\n    const container = document.createElement('div');\n    const reviewContainer1 = document.createElement('div');\n    const reviewContainer2 = document.createElement('div');\n    const reviewContainer3 = document.createElement('div');\n\n    container.classList.add('allReviewContainer');\n    reviewContainer1.classList.add('reviewContainer');\n    reviewContainer2.classList.add('reviewContainer');\n    reviewContainer3.classList.add('reviewContainer');\n\n    const reviewText1 = document.createElement('h3');\n    const reviewText2 = document.createElement('h3');\n    const reviewText3 = document.createElement('h3');\n\n    const reviewScore1 = document.createElement('p');\n    const reviewScore2 = document.createElement('p');\n    const reviewScore3 = document.createElement('p');\n\n    reviewScore1.textContent = '⭐⭐⭐⭐⭐';\n    reviewScore2.textContent = '⭐⭐⭐⭐⭐';\n    reviewScore3.textContent = '⭐⭐⭐⭐⭐';\n\n    reviewText1.textContent = ' Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.';\n    reviewText2.textContent = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.';\n    reviewText3.textContent = 'Corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.';\n\n    reviewContainer1.appendChild(reviewText1);\n    reviewContainer2.appendChild(reviewText2);\n    reviewContainer3.appendChild(reviewText3);\n\n    reviewContainer1.appendChild(reviewScore1);\n    reviewContainer2.appendChild(reviewScore2);\n    reviewContainer3.appendChild(reviewScore3);\n\n    container.appendChild(reviewContainer1);\n    container.appendChild(reviewContainer2);\n    container.appendChild(reviewContainer3);\n\n    return container;\n}\n\nfunction createImg() {\n\n    const coffeeImg = document.createElement('img');\n    // coffeeImg.src = '../dist/res/pexels-ekrulila-2128109.jpg';\n    coffeeImg.classList.add('homeImg');\n\n    return coffeeImg;\n}\n\n\n\n//# sourceURL=webpack://restaurant_odin/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\n(0,_home__WEBPACK_IMPORTED_MODULE_2__.createHome)();\n(0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)();\n\n//# sourceURL=webpack://restaurant_odin/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\n\n    const content = document.getElementById('content');\n\n    while (content.firstChild) {\n        content.firstChild.remove()\n    }\n\n    content.appendChild(createDrinksMenu());\n    content.appendChild(createFoodMenu());\n}\n\nfunction createDrinksMenu() {\n    const drinksContainer = document.createElement('div');\n    const drinksHeader = document.createElement('h2');\n\n    drinksContainer.classList.add('menuDiv');\n    drinksHeader.textContent = 'Drinks Menu';\n    drinksContainer.appendChild(drinksHeader);\n\n    const drinksList = [\n        menuItemFactory('Americano', 'A black coffee with 2 shots of espresso.', '2.50'),\n        menuItemFactory('Espresso', 'A single shot of espresso coffee.', '1.80'),\n        menuItemFactory('Cappuccino', 'Single espresso shot with milk foam.', '2.00'),\n        menuItemFactory('Latte', 'A single shot of espresso topped with milk.', '2.60'),\n        menuItemFactory('Mocha', 'A single shot of espresso topped with milk and chocolate.', '2.75')\n    ];\n\n    for (let index = 0; index < drinksList.length; index++) {\n        drinksList[index].classList.add('menuItem');\n        drinksContainer.appendChild(drinksList[index]);\n    }\n\n    return drinksContainer;\n}\n\nfunction createFoodMenu() {\n    const foodContainer = document.createElement('div');\n    const foodHeader = document.createElement('h2');\n\n    foodContainer.classList.add('menuDiv');\n    foodHeader.textContent = 'Breakfast Menu';\n    foodContainer.appendChild(foodHeader);\n\n    const foodList = [\n        menuItemFactory('Croissant', 'A single freshly baked croissant.', '1.00'),\n        menuItemFactory('Breakfast Wrap', 'Tortilla wrap filled with bacon, scrambled egg and sausage.', '2.50'),\n        menuItemFactory('Full English', '2 rashers of bacon, 2 sausages,1 friend egg, baked beans, grilled tomatoes mushrooms', '3.25'),\n        menuItemFactory('Vegan Full English', '2 rashers of vegan bacon, 2 quorn sausages, baked beans, grilled tomatoes mushrooms.', '3.00'),\n        menuItemFactory('Beans on Toast', '2 slices of buttered toast with baked beans on top', '1.50')\n    ];\n\n    for (let index = 0; index < foodList.length; index++) {\n        foodList[index].classList.add('menuItem');\n        foodContainer.appendChild(foodList[index]);\n    }\n\n    return foodContainer;\n}\n\nfunction menuItemFactory(name, description, price) {\n\n    const itemContainer = document.createElement('div');\n    const itemName = document.createElement('h3');\n    const itemDesc = document.createElement('p');\n    const itemPrice = document.createElement('p');\n\n    itemName.textContent = name;\n    itemDesc.textContent = description;\n    itemPrice.textContent = '£' + price;\n\n    itemName.classList.add('itemName');\n    itemDesc.classList.add('itemDesc');\n    itemPrice.classList.add('itemPrice');\n\n    itemContainer.appendChild(itemName);\n    itemContainer.appendChild(itemDesc);\n    itemContainer.appendChild(itemPrice);\n\n    return itemContainer;\n};\n\n\n\n//# sourceURL=webpack://restaurant_odin/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;