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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/image.jpg */ \"./src/assets/image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@200;400;500;600;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*🐾🐾🐾🐾🐾🐾 Variables 🐾🐾🐾🐾🐾🐾*/\\r\\n:root {\\r\\n  /**********Fonts**********/\\r\\n  --body-font: \\\"Poppins\\\", sans-serif;\\r\\n  --second-font: \\\"Bebas Neue\\\", cursive;\\r\\n\\r\\n  /**********Font Sizes**********/\\r\\n  --biggest-font-size: 2.75rem;\\r\\n  --bigger-font-size: 2.3rem;\\r\\n  --big-font-size: 1.75rem;\\r\\n  --h1-font-size: 1.5rem;\\r\\n  --h2-font-size: 1.25rem;\\r\\n  --h3-font-size: 1rem;\\r\\n  --normal-font-size: 0.938rem;\\r\\n  --small-font-size: 0.813rem;\\r\\n  --smaller-font-size: 0.938rem;\\r\\n\\r\\n  /**********Font Weight**********/\\r\\n  --font-extra-light: 200;\\r\\n  --font-regular: 400;\\r\\n  --font-medium: 500;\\r\\n  --font-semi-bold: 600;\\r\\n\\r\\n  /**********Colors**********/\\r\\n  --primary-color: #282a37;\\r\\n  --primary-color-light: #323645;\\r\\n  --primary-color-lighter: #c4c4c4;\\r\\n  --secondary-color: #1d90f4;\\r\\n  --white-color: #fff;\\r\\n}\\r\\n\\r\\n/*🐾🐾🐾🐾🐾🐾 Base 🐾🐾🐾🐾🐾🐾*/\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: var(--body-font);\\r\\n  font-weight: var(--font-regular);\\r\\n  font-size: var(--body-font);\\r\\n  color: var(--white-color);\\r\\n  height: 100vh;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.blue-font {\\r\\n  color: var(--secondary-color);\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n/*🐾🐾🐾🐾🐾🐾 Styling 🐾🐾🐾🐾🐾🐾*/\\r\\n\\r\\n.container {\\r\\n  height: 100vh;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.background {\\r\\n  background-image: linear-gradient(\\r\\n      to left,\\r\\n      rgba(40, 42, 55, 0.301),\\r\\n      rgba(40, 42, 55, 1) 60%\\r\\n    ),\\r\\n    linear-gradient(-160deg, rgba(40, 42, 55, 0.301), rgba(40, 42, 55, 1) 70%),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  min-width: 100%;\\r\\n  min-height: 100%;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  width: 45%;\\r\\n  height: 100%;\\r\\n  padding: 5rem;\\r\\n}\\r\\n\\r\\n/*** NAVBAR ***/\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin-bottom: 8rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.nav-item {\\r\\n  color: var(--primary-color-lighter);\\r\\n  opacity: 50%;\\r\\n  font-size: var(--h1-font-size);\\r\\n  font-weight: var(--font-medium);\\r\\n}\\r\\n\\r\\n/*** TEXT IN FORM ***/\\r\\n\\r\\n.sign-up__form h2 {\\r\\n  color: var(--primary-color-lighter);\\r\\n  font-size: var(--h2-font-size);\\r\\n  font-weight: var(--font-medium);\\r\\n  opacity: 60%;\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.sign-up__form span {\\r\\n  font-size: var(--biggest-font-size);\\r\\n  font-weight: var(--font-semi-bold);\\r\\n  display: inline-block; /*because margin bottom is an inline element and it doesn't have a margin*/\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.sign-up__form h3 {\\r\\n  color: var(--primary-color-lighter);\\r\\n  font-size: var(--h2-font-size);\\r\\n  font-weight: var(--font-regular);\\r\\n  margin-bottom: 4rem;\\r\\n}\\r\\n\\r\\n/*** FORM ***/\\r\\nform {\\r\\n  text-align: end;\\r\\n}\\r\\n\\r\\n.form__input {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1.5rem;\\r\\n  margin-bottom: 4rem;\\r\\n}\\r\\n\\r\\n.name-row {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  column-gap: 2rem;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  background: var(--primary-color-light);\\r\\n  padding: 1rem 1.5rem;\\r\\n  border-radius: 1rem;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  flex-grow: 1;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.material-icons {\\r\\n  font-size: 2rem !important;\\r\\n  color: var(--primary-color-lighter);\\r\\n}\\r\\n\\r\\n.visibility {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.input .label {\\r\\n  position: absolute;\\r\\n  top: 1.7rem;\\r\\n  font-size: var(--h3-font-size);\\r\\n  color: var(--primary-color-lighter);\\r\\n  transition: all 0.5s;\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.input input {\\r\\n  margin-top: 1rem;\\r\\n  height: 2rem;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: transparent;\\r\\n  font-size: var(--h2-font-size);\\r\\n  font-weight: var(--font-medium);\\r\\n}\\r\\n\\r\\n.input input:focus ~ span,\\r\\n.input input:valid ~ span {\\r\\n  top: 0.5rem;\\r\\n  font-size: var(--small-font-size);\\r\\n  color: #1d90f4;\\r\\n}\\r\\n\\r\\n.input-container:focus-within {\\r\\n  border: solid 4px var(--secondary-color);\\r\\n  box-shadow: 0px 0px 6px var(--secondary-color);\\r\\n}\\r\\n\\r\\nform button {\\r\\n  height: 4rem;\\r\\n  width: 48%;\\r\\n  border-radius: 2rem;\\r\\n  background: var(--secondary-color);\\r\\n  color: var(--white-color);\\r\\n  border: none;\\r\\n  font-size: var(--h2-font-size);\\r\\n  font-weight: var(--font-semi-bold);\\r\\n}\\r\\n\\r\\n/*🐾🐾🐾🐾🐾🐾 MEDIA QUERY 🐾🐾🐾🐾🐾🐾*/\\r\\n@media screen and (max-width: 1400px) {\\r\\n  .background {\\r\\n    background: rgba(40, 42, 55, 1);\\r\\n    min-width: 100%;\\r\\n    max-height: 100%;\\r\\n    overflow-y: auto;\\r\\n  }\\r\\n\\r\\n  /*** NAVBAR ***/\\r\\n\\r\\n  nav {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    background: hsla(0, 0%, 100%, 0.15);\\r\\n    backdrop-filter: blur(1rem);\\r\\n    right: 25%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: start;\\r\\n    align-items: start;\\r\\n    gap: 3rem;\\r\\n    height: 100%;\\r\\n    z-index: 10;\\r\\n    padding: 4rem 1.5rem;\\r\\n    transform: translateX(-100%);\\r\\n  }\\r\\n\\r\\n  .logo__container {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .logo {\\r\\n    width: 170px;\\r\\n    height: 100%;\\r\\n  }\\r\\n\\r\\n  .close {\\r\\n    display: inline-block;\\r\\n    color: var(--primary-color);\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  .menu {\\r\\n    display: inline-block;\\r\\n    margin-bottom: 2rem;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  .nav-item {\\r\\n    color: var(--primary-color);\\r\\n    opacity: 100%;\\r\\n    font-size: var(--h1-font-size);\\r\\n    font-weight: var(--font-medium);\\r\\n  }\\r\\n\\r\\n  .open__navbar {\\r\\n    transform: translateX(0);\\r\\n    transition: all 1s;\\r\\n  }\\r\\n\\r\\n  /*** FORM ***/\\r\\n  form {\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  .content {\\r\\n    width: 100%;\\r\\n    padding: 4rem 2rem;\\r\\n  }\\r\\n\\r\\n  .name-row {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 1.5rem;\\r\\n  }\\r\\n\\r\\n  form button {\\r\\n    width: 60%;\\r\\n  }\\r\\n}\\r\\n\\r\\n/*🐾🐾🐾🐾🐾🐾 Used in JS 🐾🐾🐾🐾🐾🐾*/\\r\\n.error-msg {\\r\\n  color: #f7344a;\\r\\n  position: absolute;\\r\\n  font-size: var(--small-font-size) !important;\\r\\n  font-weight: var(--font-extra-light) !important;\\r\\n  bottom: -0.5rem;\\r\\n}\\r\\n\\r\\n.error {\\r\\n  border: solid 4px #f7344a;\\r\\n  box-shadow: 0px 0px 6px #f7344a;\\r\\n}\\r\\n\\r\\n.error-label {\\r\\n  color: #f7344a !important;\\r\\n  animation: shake 0.5s;\\r\\n}\\r\\n\\r\\n@keyframes shake {\\r\\n  0% {\\r\\n    transform: translate(1px, 1px);\\r\\n  }\\r\\n  10% {\\r\\n    transform: translate(-1px, -2px);\\r\\n  }\\r\\n  20% {\\r\\n    transform: translate(-3px, 0px);\\r\\n  }\\r\\n  30% {\\r\\n    transform: translate(3px, 2px);\\r\\n  }\\r\\n  40% {\\r\\n    transform: translate(1px, -1px);\\r\\n  }\\r\\n  50% {\\r\\n    transform: translate(-1px, 2px);\\r\\n  }\\r\\n  60% {\\r\\n    transform: translate(-3px, 1px);\\r\\n  }\\r\\n  70% {\\r\\n    transform: translate(3px, 1px);\\r\\n  }\\r\\n  80% {\\r\\n    transform: translate(-1px, -1px);\\r\\n  }\\r\\n  90% {\\r\\n    transform: translate(1px, 2px);\\r\\n  }\\r\\n  100% {\\r\\n    transform: translate(1px, -2px);\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\r\n\r\n// 🐾🐾🐾🐾🐾🐾 FIREBASE SETUP 🐾🐾🐾🐾🐾🐾\r\n// import { initializeApp } from \"firebase/app\";\r\n// import { getAuth, createUserWithEmailAndPassword } from \"firebase/auth\";\r\n\r\n// //init firebase app\r\n// initializeApp(firebaseConfig);\r\n\r\n// //init firebase services\r\n// const auth = getAuth();\r\n\r\n// 🐾🐾🐾🐾🐾🐾 VARIABLES 🐾🐾🐾🐾🐾🐾\r\nconst form = document.querySelector(\".form\");\r\nconst inputContainers = document.querySelectorAll(\".input-container\");\r\nconst togglePass = document.querySelector(\".visibility\");\r\nconst closeBtn = document.querySelector(\".close\");\r\nconst openBtn = document.querySelector(\".menu\");\r\nconst navbar = document.querySelector(\"#nav\");\r\nconst fname = form.firstname;\r\nconst lname = form.lastname;\r\nconst email = form.email;\r\nconst password = form.password;\r\n\r\nlet fnameValid = true;\r\nlet lnameValid = true;\r\nlet emailValid = true;\r\nlet passwordValid = true;\r\n\r\n// 🐾🐾🐾🐾🐾🐾 IMPLEMENTATION 🐾🐾🐾🐾🐾🐾\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n\r\n  const enteredEmail = email.value;\r\n  const enteredName = fname.value + lname.value;\r\n  if (fnameValid && lnameValid && emailValid && passwordValid) {\r\n    // createUserWithEmailAndPassword(auth, enteredEmail, enteredName)\r\n    //   .then((cred) => {\r\n    //     alert(\"user created\");\r\n    //   })\r\n    //   .catch((err) => {\r\n    //     console.log(err);\r\n    //   });\r\n  }\r\n});\r\n\r\n//validate first name\r\nfname.addEventListener(\"keyup\", (e) => {\r\n  if (e.target.value.trim().length < 3) {\r\n    addError(fname, \"Name should not be less than 3\");\r\n    fnameValid = false;\r\n  } else {\r\n    removeError(fname);\r\n    fnameValid = true;\r\n  }\r\n});\r\n\r\n//validate last name\r\nlname.addEventListener(\"keyup\", (e) => {\r\n  if (e.target.value.trim().length < 3) {\r\n    addError(lname, \"Name should not be less than 3\");\r\n    lnameValid = false;\r\n  } else {\r\n    removeError(lname);\r\n    lnameValid = true;\r\n  }\r\n});\r\n\r\n//validate email\r\nemail.addEventListener(\"keyup\", (e) => {\r\n  if (!validateEmail(email)) {\r\n    addError(email, \"Email is not correct\");\r\n    emailValid = false;\r\n  } else {\r\n    removeError(email);\r\n    emailValid = true;\r\n  }\r\n});\r\n\r\n//validate password\r\npassword.addEventListener(\"keyup\", (e) => {\r\n  if (password.value.length < 8) {\r\n    addError(password, \"Password is less than 8 characters\");\r\n    passwordValid = false;\r\n  } else {\r\n    removeError(password);\r\n    passwordValid = true;\r\n  }\r\n});\r\n\r\n//search the correct element to add error\r\nconst addError = (child, msg) => {\r\n  inputContainers.forEach((container) => {\r\n    if (container.contains(child)) {\r\n      container.classList.add(\"error\");\r\n      container\r\n        .querySelector(\".input\")\r\n        .querySelector(\".label\")\r\n        .classList.add(\"error-label\");\r\n\r\n      container.querySelector(\".error-msg\").innerText = msg;\r\n    }\r\n  });\r\n};\r\n\r\n//toggle password\r\ntogglePass.addEventListener(\"click\", (e) => {\r\n  password.type = password.type === \"password\" ? \"text\" : \"password\";\r\n});\r\n\r\n//close navbar on mobile view\r\ncloseBtn.addEventListener(\"click\", (e) => {\r\n  navbar.classList.toggle(\"open__navbar\");\r\n});\r\n//open navbar on mobile view\r\nopenBtn.addEventListener(\"click\", (e) => {\r\n  navbar.classList.toggle(\"open__navbar\");\r\n});\r\n\r\n// 🐾🐾🐾🐾🐾🐾 USED FUNCTIONS 🐾🐾🐾🐾🐾🐾\r\n//search the correct element to remove error\r\nconst removeError = (child) => {\r\n  inputContainers.forEach((container) => {\r\n    if (container.contains(child)) {\r\n      container.classList.remove(\"error\");\r\n      container\r\n        .querySelector(\".input\")\r\n        .querySelector(\".label\")\r\n        .classList.remove(\"error-label\");\r\n\r\n      container.querySelector(\".error-msg\").innerText = \"\";\r\n    }\r\n  });\r\n};\r\n\r\n//validate email\r\nfunction validateEmail(email) {\r\n  const re =\r\n    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/;\r\n  return re.test(String(email.value).toLowerCase());\r\n}\r\n\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./src/js/index.js?");

/***/ }),

/***/ "./src/assets/image.jpg":
/*!******************************!*\
  !*** ./src/assets/image.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"edda1cbddf227b30d2bf.jpg\";\n\n//# sourceURL=webpack://signup-snd-firebase-auth/./src/assets/image.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;