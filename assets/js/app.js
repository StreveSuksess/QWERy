/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("//carousel\r\nconst carouselWidth = document.querySelector(\".carousel_container\").offsetWidth;\r\nconst carouselTrack = document.querySelector(\".carousel_track\");\r\nconst btnNext = document.querySelector(\".arrayRight\");\r\nconst btnPrev = document.querySelector(\".arrayLeft\");\r\nconst carouselItems = document.querySelectorAll(\".carousel_item\");\r\nlet trackPosition = 0;\r\n\r\nbtnNext.onclick = carouselNext;\r\nbtnPrev.onclick = carouselPrev;\r\n\r\nfunction carouselNext() {\r\n  trackPosition += carouselWidth;\r\n  if (trackPosition > (carouselItems.length - 1) * carouselWidth) trackPosition = (carouselItems.length - 1) * carouselWidth;\r\n  carouselTrack.style.transform = `translateX(${-trackPosition}px)`;\r\n  console.log(trackPosition);\r\n}\r\n\r\nfunction carouselPrev() {\r\n  trackPosition -= carouselWidth;\r\n  if (trackPosition < 0) trackPosition = 0;\r\n  carouselTrack.style.transform = `translateX(${-trackPosition}px)`;\r\n  console.log(trackPosition);\r\n}\r\n\r\n// bugrermenu\r\nconst burger = document.getElementById(\"burger\");\r\nconst nav = document.getElementById(\"nav\");\r\n\r\nburger.onclick = () => nav.classList.toggle(\"show\");\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;