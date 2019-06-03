/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"browser.exothermic": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/browser.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../exothermic.config.js":
/*!***************************************************************!*\
  !*** /Users/mattsuhay/code/exothermicjs/exothermic.config.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n//# sourceURL=webpack:////Users/mattsuhay/code/exothermicjs/exothermic.config.js?");

/***/ }),

/***/ "./ sync recursive ^\\.\\/.*\\/src$":
/*!****************************!*\
  !*** . sync ^\.\/.*\/src$ ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./ sync recursive ^\\\\.\\\\/.*\\\\/src$\";\n\n//# sourceURL=webpack:///._sync_^\\.\\/.*\\/src$?");

/***/ }),

/***/ "./exothermic.config.js":
/*!******************************!*\
  !*** ./exothermic.config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  plugins: [\"exothermicjs-plugin-markdown\"],\n  dashboard: \"exothermicjs-dashboard-endo\",\n  auth: \"exothermicjs-lib-auth0\",\n  dev: \"/browser.js\",\n  live: \"https://unpkg.com/exothermicjs/dist/browser.exothermic.min.js\"\n};\n\n//# sourceURL=webpack:///./exothermic.config.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/form/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/form/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".inputWrapper {\\n  position: relative;\\n  display: block;\\n  margin-top: 30px;\\n  font-size: .9em;\\n  background: transparent;\\n  border: 1px solid #EFF0F0;\\n  border-radius: 4px;\\n}\\n.inputFocus {\\n  border: 1px solid #666;\\n}\\n.inputErr {\\n  color: #f00;\\n  border: 1px solid #f00;\\n}\\n.inputLabel {\\n  position: absolute;\\n  top: -18px;\\n  left: 0;\\n  font-size: .85em;\\n  display: block;\\n  opacity: .75;\\n  transition: transform .2s;\\n  transform: translate(7px, 30px);\\n}\\n.inputLabelMoved {\\n  transform: translate(0px, 0px);\\n}\\n.input {\\n  width: 100%;\\n  display: block;\\n  background: transparent;\\n  border: 0;\\n  border-radius: 4px;\\n  font-size: 16px;\\n  padding: 0 10px;\\n  height: 36px;\\n  outline: none;\\n}\\n.inputErrMsg {\\n  position: absolute;\\n  display: inline-block;\\n  font-size: .75em;\\n  right: 0;\\n  top: 42px;\\n}\\n.checkbox {\\n  width: 20px;\\n  height: 20px;\\n  border: 1px solid #666;\\n  position: relative;\\n  display: inline-block;\\n  user-select: none;\\n  margin-right: 10px;\\n}\\n.checkbox input {\\n  display: none;\\n}\\n.checkboxChecked {\\n  background: #666;\\n}\\n.checkboxIcon {\\n  color: #fff;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.radio {\\n  width: 20px;\\n  height: 20px;\\n  border: 1px solid #666;\\n  position: relative;\\n  display: inline-block;\\n  user-select: none;\\n  margin-right: 10px;\\n}\\n.radio input {\\n  display: none;\\n}\\n.radioChecked {\\n  background: #666;\\n}\\n.radioIcon {\\n  color: #fff;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.selectWrapper {\\n  position: relative;\\n  display: block;\\n  margin-top: 30px;\\n  font-size: .9em;\\n  background: #FFF;\\n  border: 1px solid #EFF0F0;\\n  border-radius: 4px;\\n}\\n.select {\\n  background: transparent;\\n  height: 36px;\\n  position: relative;\\n  z-index: 2;\\n  display: block;\\n  width: 100%;\\n  font-size: 16px;\\n  border: 0;\\n  outline: none;\\n}\\n.selectFocus {\\n  border: 1px solid #666;\\n}\\n.selectErr {\\n  color: #f00;\\n  border: 1px solid #f00;\\n}\\n.selectErrMsg {\\n  position: absolute;\\n  display: inline-block;\\n  font-size: .75em;\\n  right: 0;\\n  bottom: -18px;\\n}\\n.selectLabel {\\n  position: absolute;\\n  top: -20px;\\n  left: 0;\\n  font-size: .8em;\\n  display: block;\\n  opacity: .75;\\n  transition: transform .2s;\\n  transform: translate(7px, 32px);\\n  margin-bottom: 5px;\\n}\\n.selectLabelMoved {\\n  transform: translate(0px, 0px);\\n}\\n.clickableLabel {\\n\\tcursor: pointer;\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -webkit-flex;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\tmargin-top: 30px;\\n\\t-webkit-user-select: none;\\n\\t-moz-user-select: none;\\n\\t-ms-user-select: none;\\n\\tuser-select: none;\\n}\\n.requiredInput:after {\\n\\tcontent: \\\"*\\\";\\n\\tcolor: #F00;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/form/style.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/util/spinner.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/util/spinner.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".sk-folding-cube {\\n  margin: 20px auto;\\n  width: 40px;\\n  height: 40px;\\n  position: relative;\\n  -webkit-transform: rotateZ(45deg);\\n          transform: rotateZ(45deg);\\n}\\n\\n.sk-folding-cube .sk-cube {\\n  float: left;\\n  width: 50%;\\n  height: 50%;\\n  position: relative;\\n  -webkit-transform: scale(1.1);\\n      -ms-transform: scale(1.1);\\n          transform: scale(1.1); \\n}\\n.sk-folding-cube .sk-cube:before {\\n  content: '';\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #333;\\n  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\\n          animation: sk-foldCubeAngle 2.4s infinite linear both;\\n  -webkit-transform-origin: 100% 100%;\\n      -ms-transform-origin: 100% 100%;\\n          transform-origin: 100% 100%;\\n}\\n.sk-folding-cube .sk-cube2 {\\n  -webkit-transform: scale(1.1) rotateZ(90deg);\\n          transform: scale(1.1) rotateZ(90deg);\\n}\\n.sk-folding-cube .sk-cube3 {\\n  -webkit-transform: scale(1.1) rotateZ(180deg);\\n          transform: scale(1.1) rotateZ(180deg);\\n}\\n.sk-folding-cube .sk-cube4 {\\n  -webkit-transform: scale(1.1) rotateZ(270deg);\\n          transform: scale(1.1) rotateZ(270deg);\\n}\\n.sk-folding-cube .sk-cube2:before {\\n  -webkit-animation-delay: 0.3s;\\n          animation-delay: 0.3s;\\n}\\n.sk-folding-cube .sk-cube3:before {\\n  -webkit-animation-delay: 0.6s;\\n          animation-delay: 0.6s; \\n}\\n.sk-folding-cube .sk-cube4:before {\\n  -webkit-animation-delay: 0.9s;\\n          animation-delay: 0.9s;\\n}\\n@-webkit-keyframes sk-foldCubeAngle {\\n  0%, 10% {\\n    -webkit-transform: perspective(140px) rotateX(-180deg);\\n            transform: perspective(140px) rotateX(-180deg);\\n    opacity: 0; \\n  } 25%, 75% {\\n    -webkit-transform: perspective(140px) rotateX(0deg);\\n            transform: perspective(140px) rotateX(0deg);\\n    opacity: 1; \\n  } 90%, 100% {\\n    -webkit-transform: perspective(140px) rotateY(180deg);\\n            transform: perspective(140px) rotateY(180deg);\\n    opacity: 0; \\n  } \\n}\\n\\n@keyframes sk-foldCubeAngle {\\n  0%, 10% {\\n    -webkit-transform: perspective(140px) rotateX(-180deg);\\n            transform: perspective(140px) rotateX(-180deg);\\n    opacity: 0; \\n  } 25%, 75% {\\n    -webkit-transform: perspective(140px) rotateX(0deg);\\n            transform: perspective(140px) rotateX(0deg);\\n    opacity: 1; \\n  } 90%, 100% {\\n    -webkit-transform: perspective(140px) rotateY(180deg);\\n            transform: perspective(140px) rotateY(180deg);\\n    opacity: 0; \\n  }\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/util/spinner.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/browser.js":
/*!************************!*\
  !*** ./src/browser.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./src/state/index.js\");\n/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loader */ \"./src/components/loader.js\");\n/* harmony import */ var _components_navbar_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/type */ \"./src/components/navbar/type.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout */ \"./src/components/layout/index.js\");\n/* harmony import */ var _components_article_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/article/type */ \"./src/components/article/type.js\");\n/* harmony import */ var _components_util_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/util/types */ \"./src/components/util/types.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/form */ \"./src/components/form/index.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/browser.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\nconst dumpTag = tag => {\n  console.log(tag);\n  let represent = tag._self.represent && tag.props.data ? tag._self.represent(tag.props.cacheId ? tag.props : tag.props.data) : {};\n\n  if (represent.content) {\n    represent.content = represent.content._self.represent ? represent.content._self.represent(represent.content.props) : represent.content;\n  }\n\n  if (represent.items) {\n    represent.items = represent.items.map(part => dumpTag(part));\n  } else if (tag.props.children) {\n    represent = _objectSpread({}, represent, dumpTag(tag.props.children));\n  } else if (tag.props.items) {\n    represent.items = tag.props.id && _state__WEBPACK_IMPORTED_MODULE_3__[\"dragState\"].state.draggables[tag.props.id] ? _state__WEBPACK_IMPORTED_MODULE_3__[\"dragState\"].state.draggables[tag.props.id].map(part => dumpTag(part)) : tag.props.items.map(part => dumpTag(part));\n  }\n\n  return represent;\n};\n\nconst dump = data => {\n  const {\n    description,\n    tags,\n    page\n  } = data.props.data;\n  return \"---\\n\".concat(js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.dump({\n    description,\n    tags,\n    page: page.map(part => dumpTag(part))\n  }).replace(/tag: '!(.*)'/g, \"!$1\"));\n};\n\nconst Types = {\n  NavbarYamlType: _components_navbar_type__WEBPACK_IMPORTED_MODULE_5__[\"NavbarYamlType\"],\n  SectionYamlType: _components_layout__WEBPACK_IMPORTED_MODULE_6__[\"SectionYamlType\"],\n  ColYamlType: _components_layout__WEBPACK_IMPORTED_MODULE_6__[\"ColYamlType\"],\n  MainYamlType: _components_layout__WEBPACK_IMPORTED_MODULE_6__[\"MainYamlType\"],\n  HeaderYamlType: _components_layout__WEBPACK_IMPORTED_MODULE_6__[\"HeaderYamlType\"],\n  FooterYamlType: _components_layout__WEBPACK_IMPORTED_MODULE_6__[\"FooterYamlType\"],\n  ArticleYamlType: _components_article_type__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  GetYamlType: _components_util_types__WEBPACK_IMPORTED_MODULE_8__[\"GetYamlType\"],\n  FormYamlType: _components_form__WEBPACK_IMPORTED_MODULE_9__[\"FormYamlType\"]\n};\n\nconst configBuilder = () => {\n  const def = __webpack_require__(/*! ../exothermic.config */ \"./exothermic.config.js\");\n\n  let user = {};\n\n  try {\n    user = __webpack_require__(/*! ../../../exothermic.config */ \"../../exothermic.config.js\");\n  } catch (e) {}\n\n  return _objectSpread({}, def, user);\n};\n\nconst Schema = function Schema() {\n  let addedPlugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  const conf = configBuilder();\n  const plugins = conf.plugins.map(plug => __webpack_require__(\"./ sync recursive ^\\\\.\\\\/.*\\\\/src$\")(\"./\".concat(plug, \"/src\")));\n\n  if (addedPlugins && Object.keys(addedPlugins).length > 0) {\n    // Override all Types with their addedPlugins replacers\n    const addedPlusStandard = _objectSpread({}, Types, addedPlugins);\n\n    const schemaTypes = [...Object.keys(addedPlusStandard).map(key => addedPlusStandard[key]), ...plugins.map(plugin => plugin.Type)];\n    return js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Schema.create(schemaTypes);\n  }\n\n  return js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Schema.create([...Object.keys(Types).map(key => Types[key]), ...plugins.map(plugin => plugin.Type)]);\n};\n\n_state__WEBPACK_IMPORTED_MODULE_3__[\"schemaState\"].setState({\n  schema: () => Schema()\n});\nwindow.EXOTHERMIC = window.EXOTHERMIC || {};\n\nwindow.EXOTHERMIC.initialize = config => Object(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"hydrate\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  dump: dump,\n  config: config,\n  path: window.location.pathname === \"/\" ? \"index\" : window.location.pathname.replace(/^\\//, \"\"),\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 93\n  },\n  __self: undefined\n}), document.getElementById(\"__exothermic\"));\n\n//# sourceURL=webpack:///./src/browser.js?");

/***/ }),

/***/ "./src/components/article/index.js":
/*!*****************************************!*\
  !*** ./src/components/article/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/article/index.js\";\n\n\n\nconst Article = (_ref) => {\n  let {\n    data: {\n      id,\n      title,\n      content,\n      items\n    },\n    data\n  } = _ref;\n  const classes = data.class ? data.class : \"\";\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    className: classes,\n    id: id,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    source: title,\n    renderers: {\n      root: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }), content, items);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\n//# sourceURL=webpack:///./src/components/article/index.js?");

/***/ }),

/***/ "./src/components/article/type.js":
/*!****************************************!*\
  !*** ./src/components/article/type.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./src/components/article/index.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/article/type.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst ArticleYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!article\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null && data.id !== null && data.title !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      data: data,\n      key: data.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: ___WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!article\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleYamlType);\n\n//# sourceURL=webpack:///./src/components/article/type.js?");

/***/ }),

/***/ "./src/components/form/checkbox.js":
/*!*****************************************!*\
  !*** ./src/components/form/checkbox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"../../node_modules/formik/dist/formik.esm.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/form/checkbox.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nconst Checkbox = (_ref) => {\n  let {\n    name,\n    value,\n    required,\n    label\n  } = _ref,\n      rest = _objectWithoutProperties(_ref, [\"name\", \"value\", \"required\", \"label\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n    name: name,\n    value: value,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: undefined\n  }, (_ref2) => {\n    let {\n      field,\n      form\n    } = _ref2;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"clickableLabel\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"checkbox \".concat(field.value && field.value.includes(value) ? \"checkboxChecked\" : \"\"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"inputWrapper\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n      type: \"checkbox\"\n    }, rest, {\n      checked: !!(field.value && field.value.includes(value)),\n      onChange: () => {\n        if (field.value && field.value.includes(value)) {\n          const nextValue = field.value.filter(val => val !== value);\n          form.setFieldValue(name, nextValue);\n        } else {\n          const nextValue = field.value ? field.value.concat(value) : [value];\n          form.setFieldValue(name, nextValue);\n        }\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12\n      },\n      __self: undefined\n    }))), field.value && field.value.includes(value) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"checkboxIcon\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29\n      },\n      __self: undefined\n    }, \"\\u2713\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: required ? \"requiredInput\" : \"\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31\n      },\n      __self: undefined\n    }, label));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkbox);\n\n//# sourceURL=webpack:///./src/components/form/checkbox.js?");

/***/ }),

/***/ "./src/components/form/index.js":
/*!**************************************!*\
  !*** ./src/components/form/index.js ***!
  \**************************************/
/*! exports provided: default, FormYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormYamlType\", function() { return FormYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ \"../../node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"../../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input */ \"./src/components/form/input.js\");\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox */ \"./src/components/form/checkbox.js\");\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio */ \"./src/components/form/radio.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ \"./src/components/form/select.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/form/index.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\nclass Form extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      results: null\n    };\n  }\n\n  render() {\n    const {\n      data: {\n        action = \"\",\n        method = \"post\",\n        items = [],\n        class: classes = \"\"\n      }\n    } = this.props || {\n      data: {}\n    };\n    const {\n      results\n    } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Formik\"] //         initialValues={}\n    , {\n      onSubmit: (values, actions) => {\n        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"\".concat(action).concat(method.toLowerCase() === \"get\" ? \"?\".concat(query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(values)) : \"\"), {\n          method: global.event.target.method || \"post\"\n        }).then(response => response.text(), () => this.setState({\n          results: values\n        }), error => {\n          console.error(error);\n          actions.setSubmitting(false);\n          actions.setStatus({\n            msg: \"Set some arbitrary status or data\"\n          });\n        });\n      },\n      render: (_ref) => {\n        let {\n          isSubmitting,\n          values,\n          resetForm\n        } = _ref;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n          className: classes,\n          method: method,\n          action: action,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 60\n          },\n          __self: this\n        }, items.map((field, i) => {\n          const {\n            type,\n            name,\n            label\n          } = field;\n\n          switch (type) {\n            case \"checkbox\":\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _extends({\n                key: name + i\n              }, field, {\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 65\n                },\n                __self: this\n              }));\n\n            case \"radio\":\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_radio__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _extends({\n                key: name + i\n              }, field, {\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 67\n                },\n                __self: this\n              }));\n\n            case \"select\":\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_select__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _extends({\n                key: name + i\n              }, field, {\n                value: values && values[name] ? values[name] : \"\",\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 69\n                },\n                __self: this\n              }));\n\n            case \"reset\":\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n                key: type + i,\n                type: \"button\",\n                disabled: isSubmitting,\n                onClick: resetForm,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 72\n                },\n                __self: this\n              }, label);\n\n            case \"submit\":\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n                key: type + i,\n                type: \"submit\",\n                disabled: isSubmitting,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 78\n                },\n                __self: this\n              }, label);\n\n            default:\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _extends({\n                key: name + i,\n                value: values && values[name] ? values[name] : \"\"\n              }, field, {\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 83\n                },\n                __self: this\n              }));\n          }\n        }));\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: this\n    }), results && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"results\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90\n      },\n      __self: this\n    }, results));\n  }\n\n}\nconst FormYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!form\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data && data.id;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {\n      data: data,\n      key: data.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Form\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/components/form/index.js?");

/***/ }),

/***/ "./src/components/form/input.js":
/*!**************************************!*\
  !*** ./src/components/form/input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-input-mask */ \"../../node_modules/react-input-mask/index.js\");\n/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"../../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/components/form/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/form/input.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nclass Input extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      focus: false\n    };\n    this.handleFocus = this.handleFocus.bind(this);\n    this.handleBlur = this.handleBlur.bind(this);\n  }\n\n  handleFocus() {\n    this.setState({\n      focus: true\n    });\n  }\n\n  handleBlur() {\n    this.setState({\n      focus: false\n    });\n  }\n\n  render() {\n    const {\n      focus,\n      error\n    } = this.state;\n    const {\n      label,\n      mask,\n      type,\n      autoComplete,\n      name,\n      value,\n      required\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"inputWrapper \".concat(focus ? \"inputFocus\" : \"\", \" \").concat(error ? \"inputErr\" : \"\"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"inputLabel \".concat(value || focus ? \"inputLabelMoved\" : \"\", \" \").concat(required ? \"requiredInput\" : \"\"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41\n      },\n      __self: this\n    }, label), mask && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n      name: name,\n      render: (_ref) => {\n        let {\n          field\n        } = _ref;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({\n          mask: mask,\n          maskChar: null,\n          className: \"input\",\n          type: type || \"text\",\n          autoComplete: autoComplete,\n          name: name,\n          onFocus: () => this.handleFocus(),\n          onBlur: () => this.handleBlur()\n        }, this.props, field, {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 48\n          },\n          __self: this\n        }));\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45\n      },\n      __self: this\n    }), !mask && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], _extends({\n      type: type || \"text\",\n      autoComplete: autoComplete,\n      name: name,\n      className: \"input\",\n      onFocus: () => this.handleFocus(),\n      onBlur: () => this.handleBlur()\n    }, this.props, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64\n      },\n      __self: this\n    })), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"inputErrMsg\",\n      \"data-error\": true,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75\n      },\n      __self: this\n    }, error));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/form/input.js?");

/***/ }),

/***/ "./src/components/form/radio.js":
/*!**************************************!*\
  !*** ./src/components/form/radio.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Radio; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"../../node_modules/formik/dist/formik.esm.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/form/radio.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nclass Radio extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const {\n      name,\n      value,\n      required,\n      label\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n      name: name,\n      value: value,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13\n      },\n      __self: this\n    }, (_ref) => {\n      let {\n        field,\n        form\n      } = _ref;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        className: \"clickableLabel\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"radio \".concat(field.value && field.value === value ? \"radioChecked\" : \"\"),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        className: \"inputWrapper\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n        type: \"radio\"\n      }, this.props, {\n        checked: !!(field.value && field.value === value),\n        onChange: () => {\n          form.setFieldValue(name, value);\n        },\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18\n        },\n        __self: this\n      }))), field.value && field.value === value && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"radioIcon\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27\n        },\n        __self: this\n      }, \"\\u2713\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: required ? \"requiredInput\" : \"\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29\n        },\n        __self: this\n      }, label));\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/form/radio.js?");

/***/ }),

/***/ "./src/components/form/select.js":
/*!***************************************!*\
  !*** ./src/components/form/select.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Select; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"../../node_modules/formik/dist/formik.esm.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/form/select.js\";\n\n\nclass Select extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      focus: false\n    };\n    this.handleFocus = this.handleFocus.bind(this);\n    this.handleBlur = this.handleBlur.bind(this);\n  }\n\n  handleFocus() {\n    this.setState({\n      focus: true\n    });\n  }\n\n  handleBlur() {\n    this.setState({\n      focus: false\n    });\n  }\n\n  render() {\n    const {\n      focus,\n      error\n    } = this.state;\n    const {\n      label,\n      name,\n      value,\n      options,\n      required\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"selectWrapper \".concat(focus ? \"selectFocus\" : \"\", \" \").concat(error ? \"selectErr\" : \"\"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"selectLabel \".concat(value || focus ? \"selectLabelMoved\" : \"\", \" \").concat(required ? \"requiredInput\" : \"\"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36\n      },\n      __self: this\n    }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n      component: \"select\",\n      name: name,\n      className: \"select\",\n      onFocus: this.handleFocus,\n      onBlur: this.handleBlur,\n      value: value,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      disabled: true,\n      value: \"\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47\n      },\n      __self: this\n    }), options.map((option, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: i,\n      value: option.value,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48\n      },\n      __self: this\n    }, option.label))));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/form/select.js?");

/***/ }),

/***/ "./src/components/form/style.css":
/*!***************************************!*\
  !*** ./src/components/form/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./src/components/form/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"../../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/form/style.css?");

/***/ }),

/***/ "./src/components/layout/col.js":
/*!**************************************!*\
  !*** ./src/components/layout/col.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/col.js\";\n\n\nconst Col = (_ref) => {\n  let {\n    data\n  } = _ref;\n  const classes = data.class ? data.class.startsWith(\"col\") ? data.class : \"col \".concat(data.class) : \"col\";\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: undefined\n  }, data.content, data.items);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Col);\n\n//# sourceURL=webpack:///./src/components/layout/col.js?");

/***/ }),

/***/ "./src/components/layout/footer.js":
/*!*****************************************!*\
  !*** ./src/components/layout/footer.js ***!
  \*****************************************/
/*! exports provided: Footer, FooterYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FooterYamlType\", function() { return FooterYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/footer.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const _this$props = this.props,\n          {\n      data,\n      children\n    } = _this$props,\n          rest = _objectWithoutProperties(_this$props, [\"data\", \"children\"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", _extends({\n      className: data.class ? data.class : \"\"\n    }, rest, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }), data.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      source: data.title,\n      renderers: {\n        root: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }), data.content, data.items, children);\n  }\n\n}\nconst FooterYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Type(\"!footer\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {\n      data: data,\n      key: \"footer\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Footer,\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!footer\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/layout/footer.js?");

/***/ }),

/***/ "./src/components/layout/header.js":
/*!*****************************************!*\
  !*** ./src/components/layout/header.js ***!
  \*****************************************/
/*! exports provided: Header, HeaderYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderYamlType\", function() { return HeaderYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/header.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const _this$props = this.props,\n          {\n      data,\n      children\n    } = _this$props,\n          rest = _objectWithoutProperties(_this$props, [\"data\", \"children\"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", _extends({\n      className: data.class ? data.class : \"\"\n    }, rest, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }), data.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      source: data.title,\n      renderers: {\n        root: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }), data.content, data.items, children);\n  }\n\n}\nconst HeaderYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Type(\"!header\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {\n      data: data,\n      key: \"header\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Header,\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!header\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/layout/header.js?");

/***/ }),

/***/ "./src/components/layout/index.js":
/*!****************************************!*\
  !*** ./src/components/layout/index.js ***!
  \****************************************/
/*! exports provided: SectionYamlType, ColYamlType, LAYOUT_SCHEMA, FooterYamlType, HeaderYamlType, MainYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LAYOUT_SCHEMA\", function() { return LAYOUT_SCHEMA; });\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ \"./src/components/layout/type.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SectionYamlType\", function() { return _type__WEBPACK_IMPORTED_MODULE_1__[\"SectionYamlType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ColYamlType\", function() { return _type__WEBPACK_IMPORTED_MODULE_1__[\"ColYamlType\"]; });\n\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/components/layout/footer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FooterYamlType\", function() { return _footer__WEBPACK_IMPORTED_MODULE_2__[\"FooterYamlType\"]; });\n\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./src/components/layout/header.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HeaderYamlType\", function() { return _header__WEBPACK_IMPORTED_MODULE_3__[\"HeaderYamlType\"]; });\n\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ \"./src/components/layout/main.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MainYamlType\", function() { return _main__WEBPACK_IMPORTED_MODULE_4__[\"MainYamlType\"]; });\n\n\n\n\n\n\nconst LAYOUT_SCHEMA = js_yaml__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.create([_type__WEBPACK_IMPORTED_MODULE_1__[\"SectionYamlType\"], _type__WEBPACK_IMPORTED_MODULE_1__[\"ColYamlType\"], _footer__WEBPACK_IMPORTED_MODULE_2__[\"FooterYamlType\"], _header__WEBPACK_IMPORTED_MODULE_3__[\"HeaderYamlType\"], _main__WEBPACK_IMPORTED_MODULE_4__[\"MainYamlType\"]]);\n\n\n//# sourceURL=webpack:///./src/components/layout/index.js?");

/***/ }),

/***/ "./src/components/layout/main.js":
/*!***************************************!*\
  !*** ./src/components/layout/main.js ***!
  \***************************************/
/*! exports provided: Main, MainYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainYamlType\", function() { return MainYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/main.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Main extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const {\n      data,\n      children\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n      className: data.class ? data.class : \"\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }, data.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      source: data.title,\n      renderers: {\n        root: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }), data.content, data.items, children);\n  }\n\n}\nconst MainYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Type(\"!main\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {\n      data: data,\n      key: data.id || \"main\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Main,\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!main\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/layout/main.js?");

/***/ }),

/***/ "./src/components/layout/section.js":
/*!******************************************!*\
  !*** ./src/components/layout/section.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/section.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nconst Section = (_ref) => {\n  let {\n    data: {\n      id,\n      title\n    },\n    data,\n    children\n  } = _ref,\n      rest = _objectWithoutProperties(_ref, [\"data\", \"data\", \"children\"]);\n\n  const classes = data.class || \"\";\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", _extends({\n    className: classes,\n    id: id\n  }, rest, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: undefined\n  }), title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    source: title,\n    renderers: {\n      root: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }), data.content, data.items, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./src/components/layout/section.js?");

/***/ }),

/***/ "./src/components/layout/type.js":
/*!***************************************!*\
  !*** ./src/components/layout/type.js ***!
  \***************************************/
/*! exports provided: ColYamlType, SectionYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColYamlType\", function() { return ColYamlType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectionYamlType\", function() { return SectionYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./col */ \"./src/components/layout/col.js\");\n/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section */ \"./src/components/layout/section.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/type.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst ColYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!col\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null && data.id !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_col__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      data: data,\n      key: data.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: _col__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!col\"\n    }, data);\n\n    return rtn;\n  }\n\n});\nconst SectionYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!section\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null && data.items !== null && data.id !== null && data.title !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: data,\n      key: data.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: _section__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!section\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/layout/type.js?");

/***/ }),

/***/ "./src/components/loader.js":
/*!**********************************!*\
  !*** ./src/components/loader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! statable */ \"../../node_modules/statable/dist/index.js\");\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(statable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/spinner */ \"./src/components/util/spinner.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ \"./src/components/page.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state */ \"./src/state/index.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/loader.js\";\n\n\n\n\n\n\n\n\n\nconst Loader = (_ref) => {\n  let {\n    path: propsPath,\n    dump\n  } = _ref;\n  const [path] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(propsPath);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _state__WEBPACK_IMPORTED_MODULE_7__[\"pageState\"].setState({\n      route: path\n    });\n    const {\n      Dashboard\n    } = window ? window.EXOTHERMIC : {\n      Dashboard: null\n    };\n    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"/load/\".concat(path).replace(\"//\", \"/\"), {\n      credentials: \"same-origin\"\n    }).then(response => response.text()).then(data => _state__WEBPACK_IMPORTED_MODULE_7__[\"pageState\"].setState({\n      data: js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(data, {\n        schema: Dashboard ? Dashboard.Schema() : _state__WEBPACK_IMPORTED_MODULE_7__[\"schemaState\"].state.schema()\n      }),\n      loading: false\n    })).catch(error => {\n      throw error;\n    });\n  });\n  const {\n    Dashboard\n  } = window ? window.EXOTHERMIC : {\n    Dashboard: null\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(statable__WEBPACK_IMPORTED_MODULE_4__[\"Subscribe\"], {\n    to: [_state__WEBPACK_IMPORTED_MODULE_7__[\"pageState\"]],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29\n    },\n    __self: undefined\n  }, (_ref2) => {\n    let {\n      route,\n      loading,\n      data\n    } = _ref2;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"base\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31\n      },\n      __self: undefined\n    }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      name: \"folding-cube\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33\n      },\n      __self: undefined\n    }) : Dashboard ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"BrowserRouter\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dashboard.OffCanvas, {\n      dump: dump,\n      path: route,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      data: data,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38\n      },\n      __self: undefined\n    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"BrowserRouter\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      data: data,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44\n      },\n      __self: undefined\n    })));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\n\n//# sourceURL=webpack:///./src/components/loader.js?");

/***/ }),

/***/ "./src/components/navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ \"./src/components/navbar/item.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/navbar/index.js\";\n\n\nclass Navbar extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const {\n      items\n    } = this.props;\n    const nav = items.map((item, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      item: item,\n      key: i.toString(),\n      id: i,\n      size: items.length,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }));\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n      \"aria-label\": \"main nav\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      role: \"menubar\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13\n      },\n      __self: this\n    }, nav));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/navbar/index.js?");

/***/ }),

/***/ "./src/components/navbar/item.js":
/*!***************************************!*\
  !*** ./src/components/navbar/item.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./src/components/navbar/link.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ \"./src/components/util/index.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/navbar/item.js\";\n\n\n\nclass NavItem extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const {\n      item,\n      size,\n      id\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      role: \"none\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      to: Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"val\"])(item),\n      \"aria-setsize\": size,\n      \"aria-posinset\": id + 1,\n      role: \"menuitem\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }, Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"key\"])(item)));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/navbar/item.js?");

/***/ }),

/***/ "./src/components/navbar/link.js":
/*!***************************************!*\
  !*** ./src/components/navbar/link.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-hash-link */ \"../../node_modules/react-router-hash-link/lib/index.js\");\n/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-parse */ \"../../node_modules/url-parse/index.js\");\n/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state */ \"./src/state/index.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/navbar/link.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nclass Link extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      to: new url_parse__WEBPACK_IMPORTED_MODULE_5___default.a(props.to)\n    };\n    this.handleNav = this.handleNav.bind(this);\n  }\n\n  handleNav() {\n    const {\n      to\n    } = this.state;\n\n    if (to.pathname === \"\") {\n      return;\n    }\n\n    const {\n      Dashboard\n    } = window ? window.EXOTHERMIC : {\n      Dashboard: null\n    };\n    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(\"/load\".concat(to.pathname === \"/\" ? \"/index\" : to.pathname)).then(response => response.text()).then(data => _state__WEBPACK_IMPORTED_MODULE_6__[\"pageState\"].setState({\n      data: js_yaml__WEBPACK_IMPORTED_MODULE_4___default.a.safeLoad(data, {\n        schema: Dashboard ? Dashboard.Schema() : _state__WEBPACK_IMPORTED_MODULE_6__[\"schemaState\"].state.schema()\n      }),\n      route: to.pathname\n    }));\n  }\n\n  render() {\n    const {\n      to\n    } = this.state;\n    const {\n      children\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39\n      },\n      __self: this\n    }, to.hash === \"\" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], _extends({\n      activeClassName: \"selected\",\n      to: to.pathname,\n      onClick: this.handleNav\n    }, this.props, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41\n      },\n      __self: this\n    }), children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__[\"NavHashLink\"], _extends({\n      smooth: true,\n      activeClassName: \"selected\",\n      to: to.href,\n      onClick: this.handleNav\n    }, this.props, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42\n      },\n      __self: this\n    }), children));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/navbar/link.js?");

/***/ }),

/***/ "./src/components/navbar/type.js":
/*!***************************************!*\
  !*** ./src/components/navbar/type.js ***!
  \***************************************/
/*! exports provided: NavbarYamlType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavbarYamlType\", function() { return NavbarYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./src/components/navbar/index.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/navbar/type.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst NavbarYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!navbar\", {\n  kind: \"mapping\",\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      items: data.items,\n      key: \"nav\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: ___WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!navbar\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavbarYamlType);\n\n//# sourceURL=webpack:///./src/components/navbar/type.js?");

/***/ }),

/***/ "./src/components/page.js":
/*!********************************!*\
  !*** ./src/components/page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/page.js\";\n\n\nconst Page = (_ref) => {\n  let {\n    data\n  } = _ref;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: undefined\n  }, data && data.page, !data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6\n    },\n    __self: undefined\n  }, \"Page not found!\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\n//# sourceURL=webpack:///./src/components/page.js?");

/***/ }),

/***/ "./src/components/util/get.js":
/*!************************************!*\
  !*** ./src/components/util/get.js ***!
  \************************************/
/*! exports provided: GetContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetContext\", function() { return GetContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Get; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"../../node_modules/node-libs-browser/mock/empty.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner */ \"./src/components/util/spinner.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state */ \"./src/state/index.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/util/get.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst GetContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(\"\");\nclass Get extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      data: fs__WEBPACK_IMPORTED_MODULE_3___default.a && typeof fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync === \"function\" ? js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.safeLoad(fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(\"\".concat(_state__WEBPACK_IMPORTED_MODULE_5__[\"pageState\"].state.pagesPath, \"/\").concat(props.data, \".exo\"), \"utf8\"), {\n        schema: _state__WEBPACK_IMPORTED_MODULE_5__[\"schemaState\"].state.schema()\n      }) : null,\n      loading: !(fs__WEBPACK_IMPORTED_MODULE_3___default.a && typeof fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync === \"function\")\n    };\n  }\n\n  componentDidMount() {\n    const {\n      data: fetchPath,\n      cacheId\n    } = this.props;\n    const {\n      Dashboard\n    } = window ? window.EXOTHERMIC : {\n      Dashboard: null\n    };\n    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"/load/\".concat(fetchPath)).then(response => response.text()).then(data => {\n      const yamlData = js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.safeLoad(data, {\n        schema: Dashboard ? Dashboard.Schema() : _state__WEBPACK_IMPORTED_MODULE_5__[\"schemaState\"].state.schema()\n      });\n      this.setState({\n        data: yamlData,\n        loading: false\n      });\n\n      const cache = _objectSpread({}, _state__WEBPACK_IMPORTED_MODULE_5__[\"pageState\"].state.cache);\n\n      cache[cacheId] = {};\n      _state__WEBPACK_IMPORTED_MODULE_5__[\"pageState\"].setState({\n        cache\n      });\n    });\n  }\n\n  componentWillUnmount() {\n    const {\n      cacheId\n    } = this.props;\n\n    const cache = _objectSpread({}, _state__WEBPACK_IMPORTED_MODULE_5__[\"pageState\"].state.cache);\n\n    delete cache[cacheId];\n    _state__WEBPACK_IMPORTED_MODULE_5__[\"pageState\"].setState({\n      cache\n    });\n  }\n\n  render() {\n    const {\n      loading,\n      data = {}\n    } = this.state;\n    const {\n      cacheId\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: loading ? \"get-loading\" : \"get-loaded\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56\n      },\n      __self: this\n    }, !loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GetContext.Provider, {\n      value: cacheId,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58\n      },\n      __self: this\n    }, data.content, data.items), loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"folding-cube\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63\n      },\n      __self: this\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/util/get.js?");

/***/ }),

/***/ "./src/components/util/index.js":
/*!**************************************!*\
  !*** ./src/components/util/index.js ***!
  \**************************************/
/*! exports provided: key, val, isBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"key\", function() { return key; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"val\", function() { return val; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBrowser\", function() { return isBrowser; });\nconst key = function key(item) {\n  let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return Object.keys(item)[i];\n};\nconst val = function val(item) {\n  let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return item[Object.keys(item)[i]];\n};\nconst isBrowser = () => typeof window !== \"undefined\" && window.document !== undefined;\n\n//# sourceURL=webpack:///./src/components/util/index.js?");

/***/ }),

/***/ "./src/components/util/spinner.css":
/*!*****************************************!*\
  !*** ./src/components/util/spinner.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./spinner.css */ \"./node_modules/css-loader/index.js!./src/components/util/spinner.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"../../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/util/spinner.css?");

/***/ }),

/***/ "./src/components/util/spinner.js":
/*!****************************************!*\
  !*** ./src/components/util/spinner.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.css */ \"./src/components/util/spinner.css\");\n/* harmony import */ var _spinner_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/util/spinner.js\";\n\n\n\nconst Spinner = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sk-folding-cube\",\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5\n  },\n  __self: undefined\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sk-cube1 sk-cube\",\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6\n  },\n  __self: undefined\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sk-cube2 sk-cube\",\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7\n  },\n  __self: undefined\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sk-cube4 sk-cube\",\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8\n  },\n  __self: undefined\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sk-cube3 sk-cube\",\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9\n  },\n  __self: undefined\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spinner);\n\n//# sourceURL=webpack:///./src/components/util/spinner.js?");

/***/ }),

/***/ "./src/components/util/types.js":
/*!**************************************!*\
  !*** ./src/components/util/types.js ***!
  \**************************************/
/*! exports provided: GetYamlType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetYamlType\", function() { return GetYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"../../node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get */ \"./src/components/util/get.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state */ \"./src/state/index.js\");\nvar _jsxFileName = \"/Users/mattsuhay/code/exothermicjs/packages/exothermicjs/src/components/util/types.js\";\n\n\n\n\n\nconst GetYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!get\", {\n  kind: \"scalar\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    const cacheId = shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate();\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_get__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: data,\n      cacheId: cacheId,\n      key: cacheId,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: _get__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n\n  represent(props) {\n    console.log(_state__WEBPACK_IMPORTED_MODULE_4__[\"pageState\"].state.cache[props.cacheId]);\n    const rtn = {\n      tag: \"!get \".concat(props.data)\n    };\n    return rtn;\n  }\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  GetYamlType\n});\n\n//# sourceURL=webpack:///./src/components/util/types.js?");

/***/ }),

/***/ "./src/state/draggables.js":
/*!*********************************!*\
  !*** ./src/state/draggables.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! statable */ \"../../node_modules/statable/dist/index.js\");\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(statable__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dragState = new statable__WEBPACK_IMPORTED_MODULE_0__[\"State\"]({\n  draggables: {}\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (dragState);\n\n//# sourceURL=webpack:///./src/state/draggables.js?");

/***/ }),

/***/ "./src/state/index.js":
/*!****************************!*\
  !*** ./src/state/index.js ***!
  \****************************/
/*! exports provided: dragState, pageState, schemaState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _draggables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draggables */ \"./src/state/draggables.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dragState\", function() { return _draggables__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ \"./src/state/page.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pageState\", function() { return _page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ \"./src/state/schema.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"schemaState\", function() { return _schema__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/state/index.js?");

/***/ }),

/***/ "./src/state/page.js":
/*!***************************!*\
  !*** ./src/state/page.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! statable */ \"../../node_modules/statable/dist/index.js\");\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(statable__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pageState = new statable__WEBPACK_IMPORTED_MODULE_0__[\"State\"]({\n  page: \"\",\n  route: \"\",\n  pagesPath: \"\",\n  editing: false,\n  editingThis: \"\",\n  cache: {},\n  cacheId: \"\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageState);\n\n//# sourceURL=webpack:///./src/state/page.js?");

/***/ }),

/***/ "./src/state/schema.js":
/*!*****************************!*\
  !*** ./src/state/schema.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! statable */ \"../../node_modules/statable/dist/index.js\");\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(statable__WEBPACK_IMPORTED_MODULE_0__);\n\nconst schemaState = new statable__WEBPACK_IMPORTED_MODULE_0__[\"State\"]({\n  state: null\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (schemaState);\n\n//# sourceURL=webpack:///./src/state/schema.js?");

/***/ })

/******/ });