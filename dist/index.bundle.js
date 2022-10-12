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

/***/ "./src/Modules/itemDeclaration.js":
/*!****************************************!*\
  !*** ./src/Modules/itemDeclaration.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBtn\": () => (/* binding */ addBtn),\n/* harmony export */   \"displaySection\": () => (/* binding */ displaySection),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"score\": () => (/* binding */ score)\n/* harmony export */ });\nconst displaySection = document.querySelector('.list');\r\nconst name = document.getElementById('name');\r\nconst score = document.getElementById('score');\r\nconst addBtn = document.getElementById('btn');\r\n\r\n\n\n//# sourceURL=webpack://leaderboard/./src/Modules/itemDeclaration.js?");

/***/ }),

/***/ "./src/Modules/scores.js":
/*!*******************************!*\
  !*** ./src/Modules/scores.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Score\": () => (/* binding */ Score),\n/* harmony export */   \"displaySection\": () => (/* reexport safe */ _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.displaySection),\n/* harmony export */   \"name\": () => (/* reexport safe */ _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.name),\n/* harmony export */   \"score\": () => (/* reexport safe */ _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.score)\n/* harmony export */ });\n/* harmony import */ var _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemDeclaration.js */ \"./src/Modules/itemDeclaration.js\");\n\r\n\r\n\r\n\r\nclass Score {\r\n  availableScores;\r\n\r\n  constructor() {\r\n    this.getFromLocalStorage();\r\n  }\r\n\r\n  saveToLocalStorage = (addedScores) => localStorage.setItem('availableScores', JSON.stringify(addedScores));\r\n\r\n  getFromLocalStorage = () => {\r\n    this.availableScores = JSON.parse(localStorage.getItem('availableScores')) ?? [];\r\n  };\r\n\r\n  displayItem = () => {\r\n    this.getFromLocalStorage();\r\n    _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.displaySection.innerHTML = '';\r\n    this.availableScores.forEach((availableScore, i) => {\r\n      _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.displaySection.innerHTML += `<div class=\"availableScore\">\r\n        <p>${availableScore.name} : ${availableScore.score}</p>\r\n        </div>`;\r\n    });\r\n  };\r\n\r\n  addScore = (e) => {\r\n    if (_itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.name.value === '' || _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.score.value === '') {\r\n      e.preventDefault();\r\n    } else {\r\n      const addedScore = {\r\n        name: _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.name.value,\r\n        score: _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.score.value,\r\n      };\r\n      this.availableScores.push(addedScore);\r\n      this.clear();\r\n      this.saveToLocalStorage(this.availableScores);\r\n      this.displayItem();\r\n    }\r\n  };\r\n\r\nclear = () => {\r\n  _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.name.value = '';\r\n  _itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.score.value = '';\r\n};\r\n}\r\n\n\n//# sourceURL=webpack://leaderboard/./src/Modules/scores.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/itemDeclaration.js */ \"./src/Modules/itemDeclaration.js\");\n/* harmony import */ var _Modules_scores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/scores.js */ \"./src/Modules/scores.js\");\n\r\n\r\n\r\nconst availableScore = new _Modules_scores_js__WEBPACK_IMPORTED_MODULE_1__.Score();\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  availableScore.displayItem();\r\n});\r\n\r\n_Modules_itemDeclaration_js__WEBPACK_IMPORTED_MODULE_0__.addBtn.addEventListener('click', availableScore.addScore);\r\n\r\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

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