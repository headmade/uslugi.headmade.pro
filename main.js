/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_general_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_general_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_general_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_sticky_nav__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_sticky_nav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_sticky_nav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_button_up__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_hamburger__ = __webpack_require__(4);





document.addEventListener('DOMContentLoaded', function(){
  new __WEBPACK_IMPORTED_MODULE_2__js_button_up__["a" /* default */]('.under__up');
  new __WEBPACK_IMPORTED_MODULE_3__js_hamburger__["a" /* default */]('.wrapper-nav-sticky')
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

window.onscroll = function() {
  let banner = document.querySelector('.banner');
  let nav = document.querySelector('.wrapper-nav');
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(banner.clientHeight < scrolled){
    nav.classList.add("fixed")
  }else{
    nav.classList.remove("fixed")
  }
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
  class ButtonUp {
    constructor(param) {
      let anchor = document.querySelector(param);
      anchor.addEventListener('click', function () {
        window.scroll(0, -100);
      })
    }
  }
/* harmony export (immutable) */ __webpack_exports__["a"] = ButtonUp;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Hamburger {
  constructor(param){
    let base = document.querySelector(param);
    let hamburger = base.querySelector('.c-hamburger');
    let navList = base.querySelector('.nav-sticky .nav__list');
    let navListItems = base.querySelectorAll('.nav__list-item');

    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navList.classList.toggle('active');
    });

    for (let i = 0; i < navListItems.length;  i++){
      navListItems[i].addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
      })
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hamburger;



/***/ })
/******/ ]);