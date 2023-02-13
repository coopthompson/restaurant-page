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

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction buttonCreator () {\n    const buttonBox = document.createElement('div');\n    const homeButton = document.createElement('button');\n    homeButton.textContent = 'Home';\n    const menuButton = document.createElement('button');\n    menuButton.textContent = 'Menu';\n    const contactButton = document.createElement('button');\n    contactButton.textContent = 'Contact';\n    buttonBox.appendChild(homeButton);\n    buttonBox.appendChild(menuButton);\n    buttonBox.appendChild(contactButton);\n    document.body.insertBefore(buttonBox, document.body.firstChild);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonCreator);\n\n//# sourceURL=webpack://restaurant-page/./src/buttons.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactHeader () {\n    const headerFull = document.createElement('h1');\n    const headerText = document.createTextNode('Contact Us');\n    headerFull.appendChild(headerText);\n    return headerFull;\n};\n\nfunction contactProfile () {\n    const explainBox = document.createElement('div');\n    const chefName = document.createElement('h3');\n    const nameText = document.createTextNode('Skittlzeby Jones');\n    chefName.appendChild(nameText);\n    const phoneNumber = document.createElement('p');\n    const numberText = document.createTextNode('123-321-2131');\n    phoneNumber.appendChild(numberText);\n    const explainProfile = document.createElement('p');\n    const profileText = document.createTextNode('Skittlzeby has been working as a chef in the industry for 4 weeks now! He is soooo talented! Call to reserve a table');\n    const chefImage = document.createElement('img');\n    chefImage.src = '../skittlezby.png'\n    explainProfile.appendChild(profileText);\n    explainBox.appendChild(chefName);\n    explainBox.appendChild(phoneNumber);\n    explainBox.append(explainProfile);\n    explainBox.append(chefImage);\n\n    return explainBox;\n};\n\nfunction constructContact() {\n    const content = document.getElementById('content');\n    content.appendChild(contactHeader());\n    content.appendChild(contactProfile())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homeHeader () {\n    const restaurantHeader = document.createElement('h3');\n    const headerText = document.createTextNode('Schmoogie Restuarant-A');\n    restaurantHeader.appendChild(headerText);\n    return restaurantHeader;\n};\n\nfunction homeBody () {\n    const explain = document.createElement('p');\n    const explainText = document.createTextNode('Schmoogie is the best Italian/Sushi/Ice-cream palor fusion to ever exist (it\\'s also the only one to exist). Our founder, JS. Schmoogie instilled in us a commit to quality ingredients over everything else. Thats why our dishes are so expensive. Nothing but the best!');\n    explain.appendChild(explainText);\n    return explain;\n};\n\nfunction homeImage() {\n    const sushiImage = document.createElement('img')\n    sushiImage.src = \"../ice-sush.png\"\n    content.appendChild(sushiImage);\n    return sushiImage;\n}\n\nfunction constructHome() {\n    const content = document.getElementById('content');\n    content.appendChild(homeHeader());\n    content.appendChild(homeBody())\n    content.appendChild(homeImage());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.js */ \"./src/buttons.js\");\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\n\n\n(0,_buttons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_website_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuItem = (name, price, desc, image) => {\n    const fullItem = document.createElement('div');\n    const nameItem = document.createElement('p');\n    const priceItem = document.createElement('p');\n    const descItem = document.createElement('p');\n    const nameText = document.createTextNode(name);\n    const priceText = document.createTextNode(price);\n    const descText = document.createTextNode(desc);\n    const itemImage = document.createElement('img');\n    itemImage.src = image\n    nameItem.appendChild(nameText);\n    priceItem.appendChild(priceText);\n    descItem.appendChild(descText);\n    fullItem.appendChild(nameItem);\n    fullItem.appendChild(priceItem);\n    fullItem.appendChild(descItem); \n    fullItem.appendChild(itemImage);\n    return fullItem;\n}\n\n\n\nfunction constructMenu () {\n    const content = document.getElementById('content')\n    const fullMenu = document.createElement('div');\n    const sashimiIce = menuItem('Salmon Ice', '$100','Witness perfection! This is a slice of fresh salmon on top of vanilla bean gellato.', '../salmonice.png');\n    fullMenu.appendChild(sashimiIce);\n    content.appendChild(fullMenu);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nfunction flipPage() {\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    function emptyPage() {\n        const content = document.getElementById('content')\n        let contentChild = content.lastElementChild; \n            while (contentChild) {\n                content.removeChild(contentChild);\n                contentChild = content.lastElementChild;  \n            }\n    }\n\n    const btns = document.querySelectorAll('button');\n    btns.forEach(function(button) {\n        button.addEventListener('click', function() {\n            emptyPage();\n            if (button.textContent === 'Home') {\n                return (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            } else if (button.textContent === 'Menu') {\n                return (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            } else if (button.textContent === 'Contact') {\n                return (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            };\n        });\n    });\n};\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flipPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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