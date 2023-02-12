/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.getElementById('content');\n\nfunction componentsAppend() {\n    \n    const restaurantHeader = document.createElement('h3');\n    const explain = document.createElement('p');\n    const sushiImage = document.createElement('img')\n    sushiImage.src = \"../ice-sush.png\"\n    const headerText = document.createTextNode('Schmoogie Restuarant-A');\n    const explainText = document.createTextNode('Schmoogie is the best Italian/Sushi/Ice-cream palor fusion to ever exist (it\\'s also the only one to exist). Our founder, JS. Schmoogie instilled in us a commit to quality ingredients over everything else. Thats why our dishes are so expensive. Nothing but the best!');\n    restaurantHeader.appendChild(headerText);\n    explain.appendChild(explainText);\n\n    content.appendChild(restaurantHeader);\n    content.appendChild(explain);\n    content.appendChild(sushiImage);\n  }\n\n  componentsAppend();\n  \n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;