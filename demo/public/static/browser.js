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
/*!************************************************************!*\
  !*** /Users/msuhay/code/exothermicjs/exothermic.config.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n//# sourceURL=webpack:////Users/msuhay/code/exothermicjs/exothermic.config.js?");

/***/ }),

/***/ "../../node_modules/css-loader/index.js!../exothermicjs-dashboard-endo/src/styles/endothermic.css":
/*!***********************************************************************************************************!*\
  !*** /Users/msuhay/code/exothermicjs/node_modules/css-loader!.-dashboard-endo/src/styles/endothermic.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"../../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".drag-handle {\\n  cursor: grab;\\n}\\n\\n.smooth-dnd-draggable-wrapper {\\n  border: 1px solid transparent;\\n\\ttransition: border 1s ease;\\n\\tborder-radius: 4px;\\n}\\n\\n.smooth-dnd-draggable-wrapper:hover {\\n\\tborder: 1px solid #CCC;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///.-dashboard-endo/src/styles/endothermic.css?/Users/msuhay/code/exothermicjs/node_modules/css-loader");

/***/ }),

/***/ "../../node_modules/css-loader/index.js!./src/components/form/style.css":
/*!***********************************************************************************************!*\
  !*** /Users/msuhay/code/exothermicjs/node_modules/css-loader!./src/components/form/style.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"../../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".inputWrapper {\\n  position: relative;\\n  display: block;\\n  margin-top: 30px;\\n  font-size: .9em;\\n  background: transparent;\\n  border: 1px solid #EFF0F0;\\n  border-radius: 4px;\\n}\\n.inputFocus {\\n  border: 1px solid #666;\\n}\\n.inputErr {\\n  color: #f00;\\n  border: 1px solid #f00;\\n}\\n.inputLabel {\\n  position: absolute;\\n  top: -18px;\\n  left: 0;\\n  font-size: .85em;\\n  display: block;\\n  opacity: .75;\\n  transition: transform .2s;\\n  transform: translate(7px, 30px);\\n}\\n.inputLabelMoved {\\n  transform: translate(0px, 0px);\\n}\\n.input {\\n  width: 100%;\\n  display: block;\\n  background: transparent;\\n  border: 0;\\n  border-radius: 4px;\\n  font-size: 16px;\\n  padding: 0 10px;\\n  height: 36px;\\n  outline: none;\\n}\\n.inputErrMsg {\\n  position: absolute;\\n  display: inline-block;\\n  font-size: .75em;\\n  right: 0;\\n  top: 42px;\\n}\\n.checkbox {\\n  width: 20px;\\n  height: 20px;\\n  border: 1px solid #666;\\n  position: relative;\\n  display: inline-block;\\n  user-select: none;\\n  margin-right: 10px;\\n}\\n.checkbox input {\\n  display: none;\\n}\\n.checkboxChecked {\\n  background: #666;\\n}\\n.checkboxIcon {\\n  color: #fff;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.radio {\\n  width: 20px;\\n  height: 20px;\\n  border: 1px solid #666;\\n  position: relative;\\n  display: inline-block;\\n  user-select: none;\\n  margin-right: 10px;\\n}\\n.radio input {\\n  display: none;\\n}\\n.radioChecked {\\n  background: #666;\\n}\\n.radioIcon {\\n  color: #fff;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.selectWrapper {\\n  position: relative;\\n  display: block;\\n  margin-top: 30px;\\n  font-size: .9em;\\n  background: #FFF;\\n  border: 1px solid #EFF0F0;\\n  border-radius: 4px;\\n}\\n.select {\\n  background: transparent;\\n  height: 36px;\\n  position: relative;\\n  z-index: 2;\\n  display: block;\\n  width: 100%;\\n  font-size: 16px;\\n  border: 0;\\n  outline: none;\\n}\\n.selectFocus {\\n  border: 1px solid #666;\\n}\\n.selectErr {\\n  color: #f00;\\n  border: 1px solid #f00;\\n}\\n.selectErrMsg {\\n  position: absolute;\\n  display: inline-block;\\n  font-size: .75em;\\n  right: 0;\\n  bottom: -18px;\\n}\\n.selectLabel {\\n  position: absolute;\\n  top: -20px;\\n  left: 0;\\n  font-size: .8em;\\n  display: block;\\n  opacity: .75;\\n  transition: transform .2s;\\n  transform: translate(7px, 32px);\\n  margin-bottom: 5px;\\n}\\n.selectLabelMoved {\\n  transform: translate(0px, 0px);\\n}\\n.clickableLabel {\\n\\tcursor: pointer;\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -webkit-flex;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\tmargin-top: 30px;\\n\\t-webkit-user-select: none;\\n\\t-moz-user-select: none;\\n\\t-ms-user-select: none;\\n\\tuser-select: none;\\n}\\n.requiredInput:after {\\n\\tcontent: \\\"*\\\";\\n\\tcolor: #F00;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/form/style.css?/Users/msuhay/code/exothermicjs/node_modules/css-loader");

/***/ }),

/***/ "../../node_modules/css-loader/index.js!./src/components/util/spinner.css":
/*!*************************************************************************************************!*\
  !*** /Users/msuhay/code/exothermicjs/node_modules/css-loader!./src/components/util/spinner.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"../../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".sk-folding-cube {\\n  margin: 20px auto;\\n  width: 40px;\\n  height: 40px;\\n  position: relative;\\n  -webkit-transform: rotateZ(45deg);\\n          transform: rotateZ(45deg);\\n}\\n\\n.sk-folding-cube .sk-cube {\\n  float: left;\\n  width: 50%;\\n  height: 50%;\\n  position: relative;\\n  -webkit-transform: scale(1.1);\\n      -ms-transform: scale(1.1);\\n          transform: scale(1.1); \\n}\\n.sk-folding-cube .sk-cube:before {\\n  content: '';\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #333;\\n  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\\n          animation: sk-foldCubeAngle 2.4s infinite linear both;\\n  -webkit-transform-origin: 100% 100%;\\n      -ms-transform-origin: 100% 100%;\\n          transform-origin: 100% 100%;\\n}\\n.sk-folding-cube .sk-cube2 {\\n  -webkit-transform: scale(1.1) rotateZ(90deg);\\n          transform: scale(1.1) rotateZ(90deg);\\n}\\n.sk-folding-cube .sk-cube3 {\\n  -webkit-transform: scale(1.1) rotateZ(180deg);\\n          transform: scale(1.1) rotateZ(180deg);\\n}\\n.sk-folding-cube .sk-cube4 {\\n  -webkit-transform: scale(1.1) rotateZ(270deg);\\n          transform: scale(1.1) rotateZ(270deg);\\n}\\n.sk-folding-cube .sk-cube2:before {\\n  -webkit-animation-delay: 0.3s;\\n          animation-delay: 0.3s;\\n}\\n.sk-folding-cube .sk-cube3:before {\\n  -webkit-animation-delay: 0.6s;\\n          animation-delay: 0.6s; \\n}\\n.sk-folding-cube .sk-cube4:before {\\n  -webkit-animation-delay: 0.9s;\\n          animation-delay: 0.9s;\\n}\\n@-webkit-keyframes sk-foldCubeAngle {\\n  0%, 10% {\\n    -webkit-transform: perspective(140px) rotateX(-180deg);\\n            transform: perspective(140px) rotateX(-180deg);\\n    opacity: 0; \\n  } 25%, 75% {\\n    -webkit-transform: perspective(140px) rotateX(0deg);\\n            transform: perspective(140px) rotateX(0deg);\\n    opacity: 1; \\n  } 90%, 100% {\\n    -webkit-transform: perspective(140px) rotateY(180deg);\\n            transform: perspective(140px) rotateY(180deg);\\n    opacity: 0; \\n  } \\n}\\n\\n@keyframes sk-foldCubeAngle {\\n  0%, 10% {\\n    -webkit-transform: perspective(140px) rotateX(-180deg);\\n            transform: perspective(140px) rotateX(-180deg);\\n    opacity: 0; \\n  } 25%, 75% {\\n    -webkit-transform: perspective(140px) rotateX(0deg);\\n            transform: perspective(140px) rotateX(0deg);\\n    opacity: 1; \\n  } 90%, 100% {\\n    -webkit-transform: perspective(140px) rotateY(180deg);\\n            transform: perspective(140px) rotateY(180deg);\\n    opacity: 0; \\n  }\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/util/spinner.css?/Users/msuhay/code/exothermicjs/node_modules/css-loader");

/***/ }),

/***/ "../../node_modules/express/lib sync recursive":
/*!*********************************************************************!*\
  !*** /Users/msuhay/code/exothermicjs/node_modules/express/lib sync ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"../../node_modules/express/lib sync recursive\";\n\n//# sourceURL=webpack:////Users/msuhay/code/exothermicjs/node_modules/express/lib_sync?");

/***/ }),

/***/ "../../node_modules/find-config/src sync recursive":
/*!*************************************************************************!*\
  !*** /Users/msuhay/code/exothermicjs/node_modules/find-config/src sync ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"../../node_modules/find-config/src sync recursive\";\n\n//# sourceURL=webpack:////Users/msuhay/code/exothermicjs/node_modules/find-config/src_sync?");

/***/ }),

/***/ "../exothermicjs-dashboard-endo/exothermic.config.js":
/*!*********************************************!*\
  !*** .-dashboard-endo/exothermic.config.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  dev: \"/exothermicjs-dashboard-endo.min.js\"\n};\n\n//# sourceURL=webpack:///.-dashboard-endo/exothermic.config.js?");

/***/ }),

/***/ "../exothermicjs-dashboard-endo/src/components/off-canvas.js":
/*!*****************************************************!*\
  !*** .-dashboard-endo/src/components/off-canvas.js ***!
  \*****************************************************/
/*! exports provided: default, Schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OffCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Schema\", function() { return Schema; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var exothermicjs_plugin_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exothermicjs-plugin-upload */ \"../exothermicjs-plugin-upload/src/index.js\");\n/* harmony import */ var exothermicjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! exothermicjs */ \"./index.js\");\n/* harmony import */ var exothermicjs_src_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! exothermicjs/src/state */ \"./src/state/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ \"../exothermicjs-dashboard-endo/src/components/types.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs-dashboard-endo/src/components/off-canvas.js\";\n\n\n\n\n\n\nclass OffCanvas extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.handleSave = this.handleSave.bind(this);\n  }\n\n  componentDidMount() {\n    exothermicjs_src_state__WEBPACK_IMPORTED_MODULE_4__[\"pageState\"].setState({\n      editing: true\n    });\n  }\n\n  componentWillUnmount() {\n    exothermicjs_src_state__WEBPACK_IMPORTED_MODULE_4__[\"pageState\"].setState({\n      editing: false\n    });\n  }\n\n  handleSave() {\n    const _this$props = this.props,\n          children = _this$props.children,\n          dump = _this$props.dump,\n          path = _this$props.path;\n    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"/api/\".concat(path).replace(\"//\", \"/\"), {\n      credentials: \"same-origin\",\n      method: \"PATCH\",\n      headers: {\n        'Content-Type': \"application/json; charset=utf-8\"\n      },\n      body: JSON.stringify({\n        text: dump(children)\n      })\n    }).then(response => response.text()).catch(error => {\n      throw error;\n    });\n  }\n\n  render() {\n    const children = this.props.children;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47\n      },\n      __self: this\n    }, \"Endothermic Dashboard Off-Canvas!!!\"), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"button\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49\n      },\n      __self: this\n    }, \"Add\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"button\",\n      onClick: this.handleSave,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50\n      },\n      __self: this\n    }, \"Save\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"uploads\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(exothermicjs_plugin_upload__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52\n      },\n      __self: this\n    })));\n  }\n\n}\nconst Schema = () => {\n  const InteractiveTypes = {\n    MainYamlType: _types__WEBPACK_IMPORTED_MODULE_5__[\"MainYamlType\"],\n    SectionYamlType: _types__WEBPACK_IMPORTED_MODULE_5__[\"SectionYamlType\"],\n    FooterYamlType: _types__WEBPACK_IMPORTED_MODULE_5__[\"FooterYamlType\"]\n  };\n  return Object(exothermicjs__WEBPACK_IMPORTED_MODULE_3__[\"Schema\"])(InteractiveTypes);\n};\n\n//# sourceURL=webpack:///.-dashboard-endo/src/components/off-canvas.js?");

/***/ }),

/***/ "../exothermicjs-dashboard-endo/src/components/types.js":
/*!************************************************!*\
  !*** .-dashboard-endo/src/components/types.js ***!
  \************************************************/
/*! exports provided: MainYamlType, FooterYamlType, SectionYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainYamlType\", function() { return MainYamlType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FooterYamlType\", function() { return FooterYamlType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectionYamlType\", function() { return SectionYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var exothermicjs_lib_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exothermicjs-lib-dnd */ \"../exothermicjs-lib-dnd/src/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var exothermicjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! exothermicjs */ \"./index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs-dashboard-endo/src/components/types.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst MainYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Type(\"!main\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    const classes = {\n      class: data.class\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(exothermicjs__WEBPACK_IMPORTED_MODULE_3__[\"Main\"], {\n      data: classes,\n      key: data.id || \"main\",\n      \"data-state\": \"endo\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(exothermicjs_lib_dnd__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      items: data.items,\n      id: data.id || \"main\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22\n      },\n      __self: this\n    }));\n  },\n\n  instanceOf: exothermicjs__WEBPACK_IMPORTED_MODULE_3__[\"Main\"],\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!main\"\n    }, data);\n\n    return rtn;\n  }\n\n});\nconst FooterYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Type(\"!footer\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(exothermicjs__WEBPACK_IMPORTED_MODULE_3__[\"Footer\"], {\n      key: data.id || \"footer\",\n      data: data,\n      \"data-state\": \"endo\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: exothermicjs__WEBPACK_IMPORTED_MODULE_3__[\"Footer\"],\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!footer\"\n    }, data);\n\n    return rtn;\n  }\n\n});\nconst SectionYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Type(\"!section\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null && data.items !== null && data.id !== null && data.title !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(exothermicjs_lib_dnd__WEBPACK_IMPORTED_MODULE_1__[\"Draggable\"], {\n      key: data.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(exothermicjs__WEBPACK_IMPORTED_MODULE_3__[\"Section\"], {\n      data: data,\n      \"data-state\": \"endo\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58\n      },\n      __self: this\n    }));\n  },\n\n  instanceOf: exothermicjs__WEBPACK_IMPORTED_MODULE_3__[\"Section\"],\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!section\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///.-dashboard-endo/src/components/types.js?");

/***/ }),

/***/ "../exothermicjs-dashboard-endo/src/index.js":
/*!*************************************!*\
  !*** .-dashboard-endo/src/index.js ***!
  \*************************************/
/*! exports provided: OffCanvasContainer, Schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OffCanvasContainer\", function() { return OffCanvasContainer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_off_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/off-canvas */ \"../exothermicjs-dashboard-endo/src/components/off-canvas.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Schema\", function() { return _components_off_canvas__WEBPACK_IMPORTED_MODULE_1__[\"Schema\"]; });\n\n/* harmony import */ var _styles_endothermic_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/endothermic.css */ \"../exothermicjs-dashboard-endo/src/styles/endothermic.css\");\n/* harmony import */ var _styles_endothermic_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_endothermic_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs-dashboard-endo/src/index.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst OffCanvasContainer = (_ref) => {\n  let dump = _ref.dump,\n      path = _ref.path,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_off_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    dump: dump,\n    path: path,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: undefined\n  }, children);\n};\n\n\nif (window) {\n  window.EXOTHERMIC = window.EXOTHERMIC || {};\n  window.EXOTHERMIC.Dashboard = window.EXOTHERMIC.Dashboard || {};\n  window.EXOTHERMIC.Dashboard = _objectSpread({}, window.EXOTHERMIC.Dashboard, {\n    OffCanvas: OffCanvasContainer,\n    Schema: _components_off_canvas__WEBPACK_IMPORTED_MODULE_1__[\"Schema\"]\n  });\n} else {\n  setTimeout(() => {\n    if (window) {\n      window.EXOTHERMIC = window.EXOTHERMIC || {};\n      window.EXOTHERMIC.Dashboard = window.EXOTHERMIC.Dashboard || {};\n      window.EXOTHERMIC.Dashboard = _objectSpread({}, window.EXOTHERMIC.Dashboard, {\n        OffCanvas: OffCanvasContainer,\n        Schema: _components_off_canvas__WEBPACK_IMPORTED_MODULE_1__[\"Schema\"]\n      });\n    }\n  }, 500);\n}\n\n//# sourceURL=webpack:///.-dashboard-endo/src/index.js?");

/***/ }),

/***/ "../exothermicjs-dashboard-endo/src/styles/endothermic.css":
/*!***************************************************!*\
  !*** .-dashboard-endo/src/styles/endothermic.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!./endothermic.css */ \"../../node_modules/css-loader/index.js!../exothermicjs-dashboard-endo/src/styles/endothermic.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"../../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///.-dashboard-endo/src/styles/endothermic.css?");

/***/ }),

/***/ "../exothermicjs-lib-auth0/src/index.js":
/*!********************************!*\
  !*** .-lib-auth0/src/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {__webpack_require__(/*! dotenv */ \"../../node_modules/dotenv/lib/main.js\").config({\n  path: __webpack_require__(/*! find-config */ \"../../node_modules/find-config/src/find-config.js\")(\".env\")\n});\n\nconst express = __webpack_require__(/*! express */ \"../../node_modules/express/index.js\");\n\nconst passport = __webpack_require__(/*! passport */ \"../../node_modules/passport/lib/index.js\");\n\nconst Auth0Strategy = __webpack_require__(/*! passport-auth0 */ \"../../node_modules/passport-auth0/lib/index.js\");\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"../../node_modules/body-parser/index.js\");\n\nconst session = __webpack_require__(/*! express-session */ \"../../node_modules/express-session/index.js\");\n\nconst MemoryStore = __webpack_require__(/*! memorystore */ \"../../node_modules/memorystore/index.js\")(session);\n\nconst flash = __webpack_require__(/*! connect-flash */ \"../../node_modules/connect-flash/lib/index.js\");\n\nconst router = express.Router();\nconst strategy = new Auth0Strategy({\n  domain: process.env.AUTH0_DOMAIN || \"\",\n  clientID: process.env.AUTH0_CLIENT_ID || \"\",\n  clientSecret: process.env.AUTH0_CLIENT_SECRET || \"\",\n  callbackURL: process.env.AUTH0_CALLBACK_URL || \"http://localhost:3000/callback\"\n}, (accessToken, refreshToken, extraParams, profile, done) => done(null, profile));\npassport.use(strategy);\npassport.serializeUser((user, done) => {\n  done(null, user);\n});\npassport.deserializeUser((user, done) => {\n  done(null, user);\n});\nrouter.use(bodyParser.json());\nrouter.use(bodyParser.urlencoded({\n  extended: true\n}));\nrouter.use(session({\n  store: new MemoryStore({\n    checkPeriod: 86400000 // prune expired entries every 24h\n\n  }),\n  secret: process.env.SESSION_SECRET || \"shhhhhhhhh\",\n  resave: true,\n  saveUninitialized: true\n}));\nrouter.use(passport.initialize());\nrouter.use(passport.session());\nrouter.use(flash());\nrouter.use((req, res, next) => {\n  if (req && req.query && req.query.error) {\n    req.flash(\"error\", req.query.error);\n  }\n\n  if (req && req.query && req.query.error_description) {\n    req.flash(\"error_description\", req.query.error_description);\n  }\n\n  next();\n});\nrouter.use((req, res, next) => {\n  res.locals.loggedIn = false;\n\n  if (req.session && req.session.passport && typeof req.session.passport.user !== \"undefined\") {\n    res.locals.loggedIn = true;\n  }\n\n  next();\n});\nrouter.get(\"/login\", passport.authenticate(\"auth0\", {\n  scope: \"openid email profile\"\n}), (req, res) => {\n  res.redirect(\"/admin/dashboard\");\n});\nrouter.get(\"/callback\", passport.authenticate(\"auth0\", {\n  failureRedirect: \"/failure\"\n}), (req, res) => {\n  res.redirect(req.session.returnTo || \"/admin/dashboard\");\n});\nmodule.exports = router;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"../../node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///.-lib-auth0/src/index.js?");

/***/ }),

/***/ "../exothermicjs-lib-dnd/src/container.js":
/*!**********************************!*\
  !*** .-lib-dnd/src/container.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Container; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_smooth_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-smooth-dnd */ \"../../node_modules/react-smooth-dnd/dist/index.js\");\n/* harmony import */ var react_smooth_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_smooth_dnd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var exothermicjs_src_state_draggables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exothermicjs/src/state/draggables */ \"./src/state/draggables.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"../exothermicjs-lib-dnd/src/utils.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs-lib-dnd/src/container.js\";\n\n\n\n\nclass Container extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      items: props.items\n    };\n    this.onDrop = this.onDrop.bind(this);\n  }\n\n  onDrop(e) {\n    const items = this.state.items;\n    const id = this.props.id;\n    const result = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(items, e);\n    const draggables = exothermicjs_src_state_draggables__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.draggables;\n    draggables[id] = result;\n    exothermicjs_src_state_draggables__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setState({\n      draggables\n    });\n    this.setState({\n      items: result\n    });\n  }\n\n  render() {\n    const items = this.state.items;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_smooth_dnd__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      groupName: \"1\",\n      getChildPayload: i => items[i],\n      dragHandleSelector: \".drag-handle\",\n      onDrop: this.onDrop,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31\n      },\n      __self: this\n    }, items));\n  }\n\n}\n\n//# sourceURL=webpack:///.-lib-dnd/src/container.js?");

/***/ }),

/***/ "../exothermicjs-lib-dnd/src/daggable.js":
/*!*********************************!*\
  !*** .-lib-dnd/src/daggable.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draggable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_smooth_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-smooth-dnd */ \"../../node_modules/react-smooth-dnd/dist/index.js\");\n/* harmony import */ var react_smooth_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_smooth_dnd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_DragIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/DragIndicator */ \"../../node_modules/@material-ui/icons/DragIndicator.js\");\n/* harmony import */ var _material_ui_icons_DragIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DragIndicator__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs-lib-dnd/src/daggable.js\";\n\n\n\nclass Draggable extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const children = this.props.children;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_smooth_dnd__WEBPACK_IMPORTED_MODULE_1__[\"Draggable\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"drag-handle\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DragIndicator__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"draggable-item\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11\n      },\n      __self: this\n    }, children));\n  }\n\n}\n\n//# sourceURL=webpack:///.-lib-dnd/src/daggable.js?");

/***/ }),

/***/ "../exothermicjs-lib-dnd/src/index.js":
/*!******************************!*\
  !*** .-lib-dnd/src/index.js ***!
  \******************************/
/*! exports provided: Draggable, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _daggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daggable */ \"../exothermicjs-lib-dnd/src/daggable.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Draggable\", function() { return _daggable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ \"../exothermicjs-lib-dnd/src/container.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return _container__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///.-lib-dnd/src/index.js?");

/***/ }),

/***/ "../exothermicjs-lib-dnd/src/utils.js":
/*!******************************!*\
  !*** .-lib-dnd/src/utils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nconst applyDrag = (arr, dragResult) => {\n  const removedIndex = dragResult.removedIndex,\n        addedIndex = dragResult.addedIndex,\n        payload = dragResult.payload;\n  if (removedIndex === null && addedIndex === null) return arr;\n  const result = [...arr];\n  let itemToAdd = payload;\n\n  if (removedIndex !== null) {\n    var _result$splice = result.splice(removedIndex, 1);\n\n    var _result$splice2 = _slicedToArray(_result$splice, 1);\n\n    itemToAdd = _result$splice2[0];\n  }\n\n  if (addedIndex !== null) {\n    result.splice(addedIndex, 0, itemToAdd);\n  }\n\n  return result;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (applyDrag);\n\n//# sourceURL=webpack:///.-lib-dnd/src/utils.js?");

/***/ }),

/***/ "../exothermicjs-plugin-markdown/src/editor.js":
/*!***************************************!*\
  !*** .-plugin-markdown/src/editor.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_simplemde_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simplemde-editor */ \"../../node_modules/react-simplemde-editor/lib/index.js\");\n/* harmony import */ var react_simplemde_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_simplemde_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var simplemde_dist_simplemde_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplemde/dist/simplemde.min.css */ \"../../node_modules/simplemde/dist/simplemde.min.css\");\n/* harmony import */ var simplemde_dist_simplemde_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simplemde_dist_simplemde_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var exothermicjs_src_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! exothermicjs/src/state */ \"./src/state/index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs-plugin-markdown/src/editor.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nclass Editor extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: props.value,\n      id: props.id,\n      prevValue: \"\"\n    };\n    this.handleEdit = this.handleEdit.bind(this);\n    this.handleSave = this.handleSave.bind(this);\n    this.handleChange = this.handleChange.bind(this);\n    this.handleCancel = this.handleCancel.bind(this);\n  }\n\n  componentDidMount() {\n    const id = this.props.id;\n    const smde = global.localStorage.getItem(\"smde_\".concat(id));\n    const ls = smde ? smde.trim() : \"\";\n\n    if (ls && ls !== \"\") {\n      this.setState({\n        value: ls\n      });\n    }\n  }\n\n  handleChange(value) {\n    this.setState({\n      value\n    });\n  }\n\n  handleEdit() {\n    const _this$state = this.state,\n          id = _this$state.id,\n          value = _this$state.value;\n    this.setState({\n      prevValue: value\n    });\n    exothermicjs_src_state__WEBPACK_IMPORTED_MODULE_4__[\"pageState\"].setState({\n      editingThis: id\n    });\n  }\n\n  handleSave() {\n    const _this$state2 = this.state,\n          id = _this$state2.id,\n          value = _this$state2.value;\n    global.localStorage.setItem(\"smde_\".concat(id), value);\n    exothermicjs_src_state__WEBPACK_IMPORTED_MODULE_4__[\"pageState\"].setState({\n      editingThis: \"\"\n    });\n  }\n\n  handleCancel() {\n    const _this$state3 = this.state,\n          prevValue = _this$state3.prevValue,\n          id = _this$state3.id;\n    this.setState({\n      value: prevValue\n    });\n    global.localStorage.setItem(\"smde_\".concat(id), prevValue);\n    exothermicjs_src_state__WEBPACK_IMPORTED_MODULE_4__[\"pageState\"].setState({\n      editingThis: \"\"\n    });\n  }\n\n  render() {\n    const _this$props = this.props,\n          options = _this$props.options,\n          delay = _this$props.delay,\n          id = _this$props.id,\n          editingThis = _this$props.editingThis,\n          rest = _objectWithoutProperties(_this$props, [\"options\", \"delay\", \"id\", \"editingThis\"]);\n\n    const value = this.state.value;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62\n      },\n      __self: this\n    }, editingThis && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_simplemde_editor__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, rest, {\n      id: id,\n      value: value,\n      onChange: this.handleChange,\n      options: _objectSpread({\n        autosave: {\n          enabled: true,\n          uniqueId: id,\n          delay\n        }\n      }, options),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66\n      },\n      __self: this\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"button\",\n      onClick: this.handleCancel,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80\n      },\n      __self: this\n    }, \"cancel\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"button\",\n      onClick: this.handleSave,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81\n      },\n      __self: this\n    }, \"save\")), !editingThis && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      source: value,\n      escapeHtml: false,\n      renderers: {\n        root: react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"]\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87\n      },\n      __self: this\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"button\",\n      onClick: this.handleEdit,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88\n      },\n      __self: this\n    }, \"edit\")));\n  }\n\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///.-plugin-markdown/src/editor.js?");

/***/ }),

/***/ "../exothermicjs-plugin-markdown/src/index.js":
/*!**************************************!*\
  !*** .-plugin-markdown/src/index.js ***!
  \**************************************/
/*! exports provided: Markdown, Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Markdown\", function() { return Markdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Type\", function() { return Type; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"../../node_modules/node-libs-browser/mock/empty.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! statable */ \"../../node_modules/statable/dist/index.js\");\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(statable__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shortid */ \"../../node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var exothermicjs_src_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! exothermicjs/src/state */ \"./src/state/index.js\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor */ \"../exothermicjs-plugin-markdown/src/editor.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs-plugin-markdown/src/index.js\";\n\n\n\n\n\n\n\n\n\nclass Markdown extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      data: fs__WEBPACK_IMPORTED_MODULE_3___default.a && typeof fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync === \"function\" ? fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(\"\".concat(exothermicjs_src_state__WEBPACK_IMPORTED_MODULE_7__[\"pageState\"].state.pagesPath, \"markdown/\").concat(props.data, \".md\"), \"utf8\") : null,\n      loading: !(fs__WEBPACK_IMPORTED_MODULE_3___default.a && typeof fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync === \"function\")\n    };\n  }\n\n  componentDidMount() {\n    const fetchPath = this.props.data;\n    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"/load/pages/markdown/\".concat(fetchPath, \".md\")).then(response => response.text()).then(data => this.setState({\n      data,\n      loading: false\n    }));\n  }\n\n  render() {\n    const _this$state = this.state,\n          data = _this$state.data,\n          loading = _this$state.loading;\n    const id = data || shortid__WEBPACK_IMPORTED_MODULE_6___default.a.generate();\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(statable__WEBPACK_IMPORTED_MODULE_5__[\"Subscribe\"], {\n      to: [exothermicjs_src_state__WEBPACK_IMPORTED_MODULE_7__[\"pageState\"]],\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35\n      },\n      __self: this\n    }, (_ref) => {\n      let editing = _ref.editing,\n          editingThis = _ref.editingThis;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37\n        },\n        __self: this\n      }, !editing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        source: data,\n        escapeHtml: false,\n        renderers: {\n          root: react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"]\n        },\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38\n        },\n        __self: this\n      }), editing && !loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editor__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        id: id,\n        value: data,\n        editingThis: editingThis === id,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39\n        },\n        __self: this\n      }));\n    });\n  }\n\n}\nconst Type = new js_yaml__WEBPACK_IMPORTED_MODULE_4___default.a.Type(\"!markdown\", {\n  kind: \"scalar\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Markdown, {\n      data: data,\n      key: \"content\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Markdown,\n\n  represent(data) {\n    const rtn = {\n      tag: \"!markdown\",\n      data\n    };\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///.-plugin-markdown/src/index.js?");

/***/ }),

/***/ "../exothermicjs-plugin-upload/src/index.js":
/*!************************************!*\
  !*** .-plugin-upload/src/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Upload; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs-plugin-upload/src/index.js\";\n\n\nclass Upload extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      fileURL: \"\"\n    };\n    this.handleUpload = this.handleUpload.bind(this);\n  }\n\n  handleUpload(event) {\n    event.preventDefault();\n    const data = new global.FormData();\n    data.append(\"file\", this.uploadInput.files[0]);\n    data.append(\"filename\", this.fileName.value);\n    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"/api/upload\", {\n      method: \"POST\",\n      body: data\n    }).then(response => {\n      response.json().then(body => {\n        this.setState({\n          fileURL: \"\".concat(body.file)\n        });\n      });\n    });\n  }\n\n  render() {\n    const fileURL = this.state.fileURL;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.handleUpload,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      ref: _ref => {\n        this.uploadInput = _ref;\n      },\n      type: \"file\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34\n      },\n      __self: this\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      ref: _ref2 => {\n        this.fileName = _ref2;\n      },\n      type: \"text\",\n      placeholder: \"Enter the desired name of file\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: this\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39\n      },\n      __self: this\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"button\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41\n      },\n      __self: this\n    }, \"Upload\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: fileURL,\n      alt: \"img\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43\n      },\n      __self: this\n    }));\n  }\n\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///.-plugin-upload/src/index.js?");

/***/ }),

/***/ "../exothermicjs-server-express/src/index.js":
/*!*************************************!*\
  !*** .-server-express/src/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {const configPath = __webpack_require__(/*! find-config */ \"../../node_modules/find-config/src/find-config.js\")(\".env\");\n\n__webpack_require__(/*! dotenv */ \"../../node_modules/dotenv/lib/main.js\").config({\n  path: configPath\n});\n\nconst projectRoot = configPath.replace(\"/.env\", \"\");\n\nconst exothermic = __webpack_require__(/*! exothermicjs */ \"./index.js\");\n\nconst auth = __webpack_require__(/*! exothermicjs/src/auth */ \"./src/auth.js\");\n\nconst express = __webpack_require__(/*! express */ \"../../node_modules/express/index.js\");\n\nconst path = __webpack_require__(/*! path */ \"../../node_modules/path-browserify/index.js\");\n\nconst logger = __webpack_require__(/*! morgan */ \"../../node_modules/morgan/index.js\");\n\nconst helmet = __webpack_require__(/*! helmet */ \"../../node_modules/helmet/index.js\");\n\nconst fileUpload = __webpack_require__(/*! express-fileupload */ \"../../node_modules/express-fileupload/lib/index.js\");\n\nconst indexRouter = __webpack_require__(/*! ./routes/index */ \"../exothermicjs-server-express/src/routes/index.js\");\n\nconst adminRouter = __webpack_require__(/*! ./routes/admin */ \"../exothermicjs-server-express/src/routes/admin.js\");\n\nconst apiRouter = __webpack_require__(/*! ./routes/api */ \"../exothermicjs-server-express/src/routes/api.js\");\n\nconst app = express();\napp.engine(\"exo\", (filePath, options, callback) => {\n  const theseOptions = options || {};\n  theseOptions.pages = theseOptions.pages || app.get(\"views\");\n  theseOptions.hydrate = theseOptions.hydrate || false;\n  const page = theseOptions.get ? exothermic.get(filePath, theseOptions) : theseOptions.hydrate ? exothermic.hydrate(filePath, theseOptions) : exothermic.render(filePath, theseOptions);\n  return callback(null, page);\n});\napp.set(\"views\", [\"\".concat(path.resolve(\"\".concat(projectRoot, \"/\").concat(process.env.PUBLIC)), \"/pages/\") || false, \"\".concat(path.resolve(\"\".concat(projectRoot, \"/node_modules/exothermicjs/templates\")))]);\napp.set(\"view engine\", \"exo\");\napp.use(helmet());\napp.use(logger(\"dev\"));\n\nif (auth) {\n  app.use(auth);\n}\n\napp.use(express.static(\"\".concat(path.resolve(\"\".concat(projectRoot, \"/\").concat(process.env.PUBLIC)), \"/static\") || false));\napp.use(fileUpload());\napp.use(\"/admin\", adminRouter);\napp.use(\"/api\", apiRouter);\napp.use(\"/\", indexRouter);\napp.use((req, res, next) => {\n  const err = new Error(\"Not Found\");\n  err.status = 404;\n  next(err);\n});\n\nif (app.get(\"env\") === \"development\") {\n  app.use((err, req, res) => {\n    res.status(err.status || 500);\n    console.error(err);\n    res.render(\"error\", {\n      message: err.message,\n      error: err\n    });\n  });\n}\n\napp.use((err, req, res) => {\n  res.status(err.status || 500);\n  res.render(\"error\", {\n    message: err.message,\n    error: {}\n  });\n});\nmodule.exports = app;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"../../node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///.-server-express/src/index.js?");

/***/ }),

/***/ "../exothermicjs-server-express/src/routes/admin.js":
/*!********************************************!*\
  !*** .-server-express/src/routes/admin.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// eslint-disable-next-line global-require\n__webpack_require__(/*! dotenv */ \"../../node_modules/dotenv/lib/main.js\").config({\n  path: __webpack_require__(/*! find-config */ \"../../node_modules/find-config/src/find-config.js\")(\".env\")\n});\n\nconst express = __webpack_require__(/*! express */ \"../../node_modules/express/index.js\");\n\nconst ensureLoggedIn = __webpack_require__(/*! connect-ensure-login */ \"../../node_modules/connect-ensure-login/lib/index.js\").ensureLoggedIn();\n\nconst router = express.Router();\nrouter.get(\"/dashboard\", ensureLoggedIn, (req, res) => {\n  req.session.options = {\n    user: req.user.displayName,\n    userProfile: JSON.stringify(req.user, null, \"  \")\n  };\n  res.render(\"admin/dashboard\", req.session.options);\n});\nrouter.get(\"/\", ensureLoggedIn, (req, res) => {\n  res.redirect(\"/admin/dashboard\");\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///.-server-express/src/routes/admin.js?");

/***/ }),

/***/ "../exothermicjs-server-express/src/routes/api.js":
/*!******************************************!*\
  !*** .-server-express/src/routes/api.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {// eslint-disable-next-line global-require\n__webpack_require__(/*! dotenv */ \"../../node_modules/dotenv/lib/main.js\").config({\n  path: __webpack_require__(/*! find-config */ \"../../node_modules/find-config/src/find-config.js\")(\".env\")\n});\n\nconst express = __webpack_require__(/*! express */ \"../../node_modules/express/index.js\");\n\nconst url = __webpack_require__(/*! url */ \"../../node_modules/url/url.js\");\n\nconst router = express.Router();\n\nconst ensureLoggedIn = __webpack_require__(/*! connect-ensure-login */ \"../../node_modules/connect-ensure-login/lib/index.js\").ensureLoggedIn();\n\nconst fs = __webpack_require__(/*! fs */ \"../../node_modules/node-libs-browser/mock/empty.js\");\n\nconst path = __webpack_require__(/*! path */ \"../../node_modules/path-browserify/index.js\");\n\nrouter.get(\"/site\", ensureLoggedIn, (req, res) => {\n  if (!fs.existsSync(path.join(process.env.PUBLIC, \"site.json\"))) {\n    fs.writeFile(path.join(process.env.PUBLIC, \"site.json\"), \"{}\", err => {\n      if (err) throw err;\n    });\n  }\n\n  res.sendFile(\"site.json\", {\n    root: path.resolve(process.env.PUBLIC)\n  });\n});\nrouter.get(\"/*\", ensureLoggedIn, (req, res) => {\n  const urlParts = url.parse(req.url, true);\n\n  if (urlParts.query && urlParts.query.path) {\n    res.render(urlParts.query.path.replace(/^\\//, \"\").replace(\"?\", \"\"), {\n      get: true\n    });\n  }\n});\nrouter.patch(\"/*\", ensureLoggedIn, (req, res) => {\n  const urlParts = url.parse(req.url, true);\n\n  if (fs.existsSync(path.join(process.env.PUBLIC, \"pages/\".concat(urlParts.path, \".exo\"))) && req.body.text.length > 10) {\n    fs.writeFile(path.join(process.env.PUBLIC, \"pages/\".concat(urlParts.path, \".exo\")), req.body.text, err => {\n      if (err) throw err;\n      res.send(\"Thing saved!\");\n    });\n  } else {\n    res.status(500).send(\"There was a problem saving this thing...\");\n  }\n});\nrouter.post(\"/upload\", ensureLoggedIn, (req, res) => {\n  const theFile = req.files.file;\n  theFile.mv(\"\".concat(process.env.PUBLIC, \"/static/uploads/\").concat(req.body.filename, \".\").concat(theFile.name.replace(/.*\\.(.+)$/, \"$1\")), err => {\n    if (err) {\n      return res.status(500).send(err);\n    }\n\n    res.json({\n      file: \"/uploads/\".concat(req.body.filename, \".\").concat(theFile.name.replace(/.*\\.(.+)$/, \"$1\"))\n    });\n    return res.status(200).send(\"Upload complete!\");\n  });\n}); // router.post()\n// router.put()\n// router.delete()\n\nmodule.exports = router;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ \"../../node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///.-server-express/src/routes/api.js?");

/***/ }),

/***/ "../exothermicjs-server-express/src/routes/index.js":
/*!********************************************!*\
  !*** .-server-express/src/routes/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {/* eslint-disable no-underscore-dangle */\n// eslint-disable-next-line global-require\nconst configPath = __webpack_require__(/*! find-config */ \"../../node_modules/find-config/src/find-config.js\")(\".env\");\n\n__webpack_require__(/*! dotenv */ \"../../node_modules/dotenv/lib/main.js\").config({\n  path: configPath\n});\n\nconst projectRoot = configPath.replace(\"/.env\", \"\");\n\nconst express = __webpack_require__(/*! express */ \"../../node_modules/express/index.js\");\n\nconst router = express.Router();\n\nconst fs = __webpack_require__(/*! fs */ \"../../node_modules/node-libs-browser/mock/empty.js\");\n\nconst path = __webpack_require__(/*! path */ \"../../node_modules/path-browserify/index.js\");\n\nrouter.get(\"/load/module/:module\", (req, res) => {\n  const mod = req.params.module;\n\n  if (mod.includes(\"exothermicjs-dashboard\") || mod.includes(\"exothermicjs-plugin\")) {\n    const modulePath = path.resolve(\"\".concat(projectRoot, \"/../\").concat(mod, \"/index.js\"));\n\n    if (fs.existsSync(modulePath)) {\n      res.sendFile(modulePath);\n    } else {\n      res.send(\"Module not found!\");\n      throw new Error(\"Module not found\");\n    }\n  } else {\n    res.send(\"Module not found!\");\n    throw new Error(\"Module not found\");\n  }\n});\nrouter.get(\"/load/*\", (req, res) => {\n  const options = req.session && req.session.options ? req.session.options : {};\n  options.hydrate = true;\n\n  if (req.params[0].endsWith(\".exo\") || req.params[0].indexOf(\".\") < 0) {\n    res.render(req.params[0], options);\n  } else {\n    res.sendFile(req.params[0], {\n      root: path.resolve(\"\".concat(projectRoot, \"/\").concat(process.env.PUBLIC))\n    });\n  }\n});\nrouter.get(\"/\", (req, res) => {\n  res.render(\"index\", {\n    dashboard: !!req.user\n  });\n});\nrouter.get(\"/logout\", (req, res) => {\n  req.logout();\n  res.redirect(\"/\");\n});\nrouter.get(\"/failure\", (req, res) => {\n  const error = req.flash(\"error\");\n  const errorDescription = req.flash(\"error_description\");\n  req.logout();\n  req.session.options = {\n    error: error[0],\n    error_description: errorDescription[0]\n  };\n  res.render(\"failure\", req.session.options);\n});\nrouter.post(\"/*\", (req, res) => {\n  res.send(\"posted!\");\n});\nrouter.get(\"/*\", (req, res) => {\n  res.render(req.url.replace(/^\\//, \"\"), {\n    dashboard: !!req.user\n  });\n});\nmodule.exports = router;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ \"../../node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///.-server-express/src/routes/index.js?");

/***/ }),

/***/ "./.. sync recursive ^\\.\\/.*\\/exothermic\\.config$":
/*!********************************************!*\
  !*** .. sync ^\.\/.*\/exothermic\.config$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./exothermicjs-dashboard-endo/exothermic.config\": \"../exothermicjs-dashboard-endo/exothermic.config.js\",\n\t\"./exothermicjs/exothermic.config\": \"./exothermic.config.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./.. sync recursive ^\\\\.\\\\/.*\\\\/exothermic\\\\.config$\";\n\n//# sourceURL=webpack:///.._sync_^\\.\\/.*\\/exothermic\\.config$?");

/***/ }),

/***/ "./.. sync recursive ^\\.\\/.*\\/src$":
/*!*****************************!*\
  !*** .. sync ^\.\/.*\/src$ ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./exothermicjs-dashboard-endo/src\": \"../exothermicjs-dashboard-endo/src/index.js\",\n\t\"./exothermicjs-lib-auth0/src\": \"../exothermicjs-lib-auth0/src/index.js\",\n\t\"./exothermicjs-lib-dnd/src\": \"../exothermicjs-lib-dnd/src/index.js\",\n\t\"./exothermicjs-plugin-markdown/src\": \"../exothermicjs-plugin-markdown/src/index.js\",\n\t\"./exothermicjs-plugin-upload/src\": \"../exothermicjs-plugin-upload/src/index.js\",\n\t\"./exothermicjs-server-express/src\": \"../exothermicjs-server-express/src/index.js\",\n\t\"./exothermicjs/src\": \"./src/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./.. sync recursive ^\\\\.\\\\/.*\\\\/src$\";\n\n//# sourceURL=webpack:///.._sync_^\\.\\/.*\\/src$?");

/***/ }),

/***/ "./exothermic.config.js":
/*!******************************!*\
  !*** ./exothermic.config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  plugins: [\"exothermicjs-plugin-markdown\"],\n  dashboard: \"exothermicjs-dashboard-endo\",\n  auth: \"exothermicjs-lib-auth0\",\n  dev: \"/browser.js\",\n  live: \"https://unpkg.com/exothermicjs/dist/browser.exothermic.min.js\"\n};\n\n//# sourceURL=webpack:///./exothermic.config.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Schema, Types, version, plugins, render, hydrate, Footer, Main, Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Schema\", function() { return Schema; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Types\", function() { return Types; });\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/navbar */ \"./src/components/navbar/index.js\");\n/* harmony import */ var _src_components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/layout */ \"./src/components/layout/index.js\");\n/* harmony import */ var _src_components_article_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/components/article/type */ \"./src/components/article/type.js\");\n/* harmony import */ var _src_components_util_Get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/components/util/Get */ \"./src/components/util/Get.js\");\n/* harmony import */ var _src_components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/form */ \"./src/components/form/index.js\");\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ \"./package.json\", 1);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return _package_json__WEBPACK_IMPORTED_MODULE_6__[\"version\"]; });\n\n/* harmony import */ var _exothermic_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exothermic.config */ \"./exothermic.config.js\");\n/* harmony import */ var _exothermic_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_exothermic_config__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"plugins\", function() { return _exothermic_config__WEBPACK_IMPORTED_MODULE_7__[\"plugins\"]; });\n\n/* harmony import */ var _src_exothermic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/exothermic */ \"./src/exothermic.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _src_exothermic__WEBPACK_IMPORTED_MODULE_8__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hydrate\", function() { return _src_exothermic__WEBPACK_IMPORTED_MODULE_8__[\"hydrate\"]; });\n\n/* harmony import */ var _src_components_layout_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/components/layout/footer */ \"./src/components/layout/footer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _src_components_layout_footer__WEBPACK_IMPORTED_MODULE_9__[\"Footer\"]; });\n\n/* harmony import */ var _src_components_layout_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/components/layout/main */ \"./src/components/layout/main.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return _src_components_layout_main__WEBPACK_IMPORTED_MODULE_10__[\"Main\"]; });\n\n/* harmony import */ var _src_components_layout_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/components/layout/section */ \"./src/components/layout/section.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Section\", function() { return _src_components_layout_section__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst configBuilder = () => {\n  const def = __webpack_require__(/*! ./exothermic.config */ \"./exothermic.config.js\");\n\n  let user = {};\n\n  try {\n    user = __webpack_require__(/*! ../../exothermic.config */ \"../../exothermic.config.js\");\n  } catch (e) {}\n\n  return _objectSpread({}, def, user);\n};\n\nconst Types = {\n  NavbarYamlType: _src_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"NavbarYamlType\"],\n  SectionYamlType: _src_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"SectionYamlType\"],\n  ColYamlType: _src_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"ColYamlType\"],\n  MainYamlType: _src_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"MainYamlType\"],\n  HeaderYamlType: _src_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"HeaderYamlType\"],\n  FooterYamlType: _src_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"FooterYamlType\"],\n  ArticleYamlType: _src_components_article_type__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  GetYamlType: _src_components_util_Get__WEBPACK_IMPORTED_MODULE_4__[\"GetYamlType\"],\n  FormYamlType: _src_components_form__WEBPACK_IMPORTED_MODULE_5__[\"FormYamlType\"]\n};\nconst Schema = function Schema() {\n  let addedPlugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  const conf = configBuilder();\n  const plugins = conf.plugins.map(plug => __webpack_require__(\"./.. sync recursive ^\\\\.\\\\/.*\\\\/src$\")(\"./\".concat(plug, \"/src\")));\n\n  if (addedPlugins && Object.keys(addedPlugins).length > 0) {\n    // Override all Types with their addedPlugins replacers\n    const addedPlusStandard = _objectSpread({}, Types, addedPlugins);\n\n    const schemaTypes = [...Object.keys(addedPlusStandard).map(key => addedPlusStandard[key]), ...plugins.map(plugin => plugin.Type)];\n    return js_yaml__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.create(schemaTypes);\n  }\n\n  return js_yaml__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.create([...Object.keys(Types).map(key => Types[key]), ...plugins.map(plugin => plugin.Type)]);\n};\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, repository, bugs, author, keywords, main, module, homepage, license, dependencies, devDependencies, scripts, babel, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"exothermicjs\",\"version\":\"1.3.1\",\"description\":\"ExothermicJS | Yaml based template engine for Node.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/suhay/exothermicjs.git\"},\"bugs\":{\"url\":\"https://github.com/suhay/exothermicjs/issues\"},\"author\":\"Matt Suhay <matthew.suhay@gmail.com>\",\"keywords\":[\"nodejs\",\"template engine\",\"yaml\",\"front end\"],\"main\":\"dist/exothermic.min.js\",\"module\":\"index.js\",\"homepage\":\"https://github.com/suhay/exothermicjs#readme\",\"license\":\"MIT\",\"dependencies\":{\"babel-runtime\":\"^6.26.0\",\"dotenv\":\"^6.0.0\",\"find-config\":\"^1.0.0\",\"formik\":\"^1.4.1\",\"isomorphic-fetch\":\"^2.2.1\",\"js-yaml\":\"^3.12.2\",\"passport\":\"^0.4.0\",\"query-string\":\"^6.2.0\",\"react\":\"^16.6.1\",\"react-dom\":\"^16.6.1\",\"react-input-mask\":\"^2.0.4\",\"react-markdown\":\"^4.0.3\",\"react-router\":\"^4.3.1\",\"react-router-dom\":\"^4.3.1\",\"react-router-hash-link\":\"^1.2.0\",\"statable\":\"^0.3.2\",\"url-parse\":\"^1.4.3\"},\"devDependencies\":{\"babel-plugin-module-resolver\":\"^3.1.1\",\"css-loader\":\"^1.0.0\",\"rimraf\":\"^2.6.3\",\"style-loader\":\"^0.23.0\",\"webpack\":\"^4.18.0\",\"webpack-bundle-analyzer\":\"^3.3.2\",\"webpack-cli\":\"^3.1.0\",\"webpack-node-externals\":\"^1.6.0\"},\"scripts\":{\"dev\":\"webpack --watch --mode development\",\"clean\":\"rimraf dist\",\"build\":\"yarn clean && webpack --mode development\",\"build:prod\":\"yarn clean && webpack --mode production\",\"build:all\":\"yarn clean && yarn build && yarn build:prod\",\"test\":\"jest --no-cache\",\"stat\":\"webpack --mode production --profile --json > stats.json\",\"test:coverage\":\"jest --coverage\"},\"babel\":{\"env\":{\"test\":{\"presets\":[\"@babel/react\",\"@babel/preset-env\"]}}}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst configBuilder = () => {\n  const def = __webpack_require__(/*! ../exothermic.config */ \"./exothermic.config.js\");\n\n  let user = {};\n\n  try {\n    user = __webpack_require__(/*! ../../../exothermic.config */ \"../../exothermic.config.js\");\n  } catch (e) {}\n\n  return _objectSpread({}, def, user);\n};\n\nconst conf = configBuilder();\nconst auth = conf.auth;\nmodule.exports = __webpack_require__(\"./.. sync recursive ^\\\\.\\\\/.*\\\\/src$\")(\"./\".concat(auth, \"/src\"));\n\n//# sourceURL=webpack:///./src/auth.js?");

/***/ }),

/***/ "./src/browser.js":
/*!************************!*\
  !*** ./src/browser.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_draggables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/draggables */ \"./src/state/draggables.js\");\n/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loader */ \"./src/components/loader.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/browser.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst dumpTag = tag => {\n  let represent = tag._self.represent && tag.props.data ? tag._self.represent(tag.props.data) : {};\n\n  if (represent.content) {\n    represent.content = represent.content._self.represent ? represent.content._self.represent(represent.content.props.data) : represent.content;\n  }\n\n  if (represent.items) {\n    represent.items = represent.items.map(part => dumpTag(part));\n  } else if (tag.props.children) {\n    represent = _objectSpread({}, represent, dumpTag(tag.props.children));\n  } else if (tag.props.items) {\n    represent.items = tag.props.id && _state_draggables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.draggables[tag.props.id] ? _state_draggables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.draggables[tag.props.id].map(part => dumpTag(part)) : tag.props.items.map(part => dumpTag(part));\n  }\n\n  return represent;\n};\n\nconst dump = data => {\n  const _data$props$data = data.props.data,\n        description = _data$props$data.description,\n        tags = _data$props$data.tags,\n        page = _data$props$data.page;\n  return \"---\\n\".concat(js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.dump({\n    description,\n    tags,\n    page: page.map(part => dumpTag(part))\n  }).replace(/tag: '!(.*)'/g, \"!$1\"));\n};\n\nwindow.EXOTHERMIC = window.EXOTHERMIC || {};\n\nwindow.EXOTHERMIC.initialize = config => Object(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"hydrate\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  dump: dump,\n  config: config,\n  path: window.location.pathname === \"/\" ? \"index\" : window.location.pathname.replace(/^\\//, \"\"),\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37\n  },\n  __self: undefined\n}), document.getElementById(\"__exothermic\"));\n\n//# sourceURL=webpack:///./src/browser.js?");

/***/ }),

/***/ "./src/components/article/index.js":
/*!*****************************************!*\
  !*** ./src/components/article/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/article/index.js\";\n\n\n\nconst Article = (_ref) => {\n  let _ref$data = _ref.data,\n      id = _ref$data.id,\n      title = _ref$data.title,\n      content = _ref$data.content,\n      items = _ref$data.items,\n      data = _ref.data;\n  const classes = data.class ? data.class : \"\";\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    className: classes,\n    id: id,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    source: title,\n    renderers: {\n      root: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }), content, items);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\n//# sourceURL=webpack:///./src/components/article/index.js?");

/***/ }),

/***/ "./src/components/article/type.js":
/*!****************************************!*\
  !*** ./src/components/article/type.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./src/components/article/index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/article/type.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst ArticleYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!article\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null && data.id !== null && data.title !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      data: data,\n      key: data.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: ___WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!article\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleYamlType);\n\n//# sourceURL=webpack:///./src/components/article/type.js?");

/***/ }),

/***/ "./src/components/base.js":
/*!********************************!*\
  !*** ./src/components/base.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ \"./src/components/page.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/base.js\";\n\n\n\nconst Base = (_ref) => {\n  let children = _ref.children,\n      data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"base\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    data: data,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: undefined\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);\n\n//# sourceURL=webpack:///./src/components/base.js?");

/***/ }),

/***/ "./src/components/form/checkbox.js":
/*!*****************************************!*\
  !*** ./src/components/form/checkbox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"../../node_modules/formik/dist/formik.esm.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/form/checkbox.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nconst Checkbox = (_ref) => {\n  let name = _ref.name,\n      value = _ref.value,\n      required = _ref.required,\n      label = _ref.label,\n      rest = _objectWithoutProperties(_ref, [\"name\", \"value\", \"required\", \"label\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n    name: name,\n    value: value,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: undefined\n  }, (_ref2) => {\n    let field = _ref2.field,\n        form = _ref2.form;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"clickableLabel\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"checkbox \".concat(field.value && field.value.includes(value) ? \"checkboxChecked\" : \"\"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"inputWrapper\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n      type: \"checkbox\"\n    }, rest, {\n      checked: !!(field.value && field.value.includes(value)),\n      onChange: () => {\n        if (field.value && field.value.includes(value)) {\n          const nextValue = field.value.filter(val => val !== value);\n          form.setFieldValue(name, nextValue);\n        } else {\n          const nextValue = field.value ? field.value.concat(value) : [value];\n          form.setFieldValue(name, nextValue);\n        }\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12\n      },\n      __self: undefined\n    }))), field.value && field.value.includes(value) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"checkboxIcon\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29\n      },\n      __self: undefined\n    }, \"\\u2713\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: required ? \"requiredInput\" : \"\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31\n      },\n      __self: undefined\n    }, label));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkbox);\n\n//# sourceURL=webpack:///./src/components/form/checkbox.js?");

/***/ }),

/***/ "./src/components/form/index.js":
/*!**************************************!*\
  !*** ./src/components/form/index.js ***!
  \**************************************/
/*! exports provided: default, FormYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormYamlType\", function() { return FormYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ \"../../node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"../../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input */ \"./src/components/form/input.js\");\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox */ \"./src/components/form/checkbox.js\");\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio */ \"./src/components/form/radio.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ \"./src/components/form/select.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/form/index.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\nclass Form extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      results: null\n    };\n  }\n\n  render() {\n    const _ref = this.props || {\n      data: {}\n    },\n          _ref$data = _ref.data,\n          _ref$data$action = _ref$data.action,\n          action = _ref$data$action === void 0 ? \"\" : _ref$data$action,\n          _ref$data$method = _ref$data.method,\n          method = _ref$data$method === void 0 ? \"post\" : _ref$data$method,\n          _ref$data$items = _ref$data.items,\n          items = _ref$data$items === void 0 ? [] : _ref$data$items,\n          _ref$data$class = _ref$data.class,\n          classes = _ref$data$class === void 0 ? \"\" : _ref$data$class;\n\n    const results = this.state.results;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Formik\"] //         initialValues={}\n    , {\n      onSubmit: (values, actions) => {\n        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"\".concat(action).concat(method.toLowerCase() === \"get\" ? \"?\".concat(query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(values)) : \"\"), {\n          method: global.event.target.method || \"post\"\n        }).then(response => response.text(), () => this.setState({\n          results: values\n        }), error => {\n          console.error(error);\n          actions.setSubmitting(false);\n          actions.setStatus({\n            msg: \"Set some arbitrary status or data\"\n          });\n        });\n      },\n      render: (_ref2) => {\n        let isSubmitting = _ref2.isSubmitting,\n            values = _ref2.values,\n            resetForm = _ref2.resetForm;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n          className: classes,\n          method: method,\n          action: action,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 60\n          },\n          __self: this\n        }, items.map((field, i) => {\n          const type = field.type,\n                name = field.name,\n                label = field.label;\n\n          switch (type) {\n            case \"checkbox\":\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _extends({\n                key: name + i\n              }, field, {\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 65\n                },\n                __self: this\n              }));\n\n            case \"radio\":\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_radio__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _extends({\n                key: name + i\n              }, field, {\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 67\n                },\n                __self: this\n              }));\n\n            case \"select\":\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_select__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _extends({\n                key: name + i\n              }, field, {\n                value: values && values[name] ? values[name] : \"\",\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 69\n                },\n                __self: this\n              }));\n\n            case \"reset\":\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n                key: type + i,\n                type: \"button\",\n                disabled: isSubmitting,\n                onClick: resetForm,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 72\n                },\n                __self: this\n              }, label);\n\n            case \"submit\":\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n                key: type + i,\n                type: \"submit\",\n                disabled: isSubmitting,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 78\n                },\n                __self: this\n              }, label);\n\n            default:\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _extends({\n                key: name + i,\n                value: values && values[name] ? values[name] : \"\"\n              }, field, {\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 83\n                },\n                __self: this\n              }));\n          }\n        }));\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: this\n    }), results && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"results\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90\n      },\n      __self: this\n    }, results));\n  }\n\n}\nconst FormYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!form\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data && data.id;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {\n      data: data,\n      key: data.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Form\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/components/form/index.js?");

/***/ }),

/***/ "./src/components/form/input.js":
/*!**************************************!*\
  !*** ./src/components/form/input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-input-mask */ \"../../node_modules/react-input-mask/index.js\");\n/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"../../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/components/form/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/form/input.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nclass Input extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      focus: false\n    };\n    this.handleFocus = this.handleFocus.bind(this);\n    this.handleBlur = this.handleBlur.bind(this);\n  }\n\n  handleFocus() {\n    this.setState({\n      focus: true\n    });\n  }\n\n  handleBlur() {\n    this.setState({\n      focus: false\n    });\n  }\n\n  render() {\n    const _this$state = this.state,\n          focus = _this$state.focus,\n          error = _this$state.error;\n    const _this$props = this.props,\n          label = _this$props.label,\n          mask = _this$props.mask,\n          type = _this$props.type,\n          autoComplete = _this$props.autoComplete,\n          name = _this$props.name,\n          value = _this$props.value,\n          required = _this$props.required;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"inputWrapper \".concat(focus ? \"inputFocus\" : \"\", \" \").concat(error ? \"inputErr\" : \"\"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"inputLabel \".concat(value || focus ? \"inputLabelMoved\" : \"\", \" \").concat(required ? \"requiredInput\" : \"\"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41\n      },\n      __self: this\n    }, label), mask && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n      name: name,\n      render: (_ref) => {\n        let field = _ref.field;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({\n          mask: mask,\n          maskChar: null,\n          className: \"input\",\n          type: type || \"text\",\n          autoComplete: autoComplete,\n          name: name,\n          onFocus: () => this.handleFocus(),\n          onBlur: () => this.handleBlur()\n        }, this.props, field, {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 48\n          },\n          __self: this\n        }));\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45\n      },\n      __self: this\n    }), !mask && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], _extends({\n      type: type || \"text\",\n      autoComplete: autoComplete,\n      name: name,\n      className: \"input\",\n      onFocus: () => this.handleFocus(),\n      onBlur: () => this.handleBlur()\n    }, this.props, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64\n      },\n      __self: this\n    })), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"inputErrMsg\",\n      \"data-error\": true,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75\n      },\n      __self: this\n    }, error));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/form/input.js?");

/***/ }),

/***/ "./src/components/form/radio.js":
/*!**************************************!*\
  !*** ./src/components/form/radio.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Radio; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"../../node_modules/formik/dist/formik.esm.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/form/radio.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nclass Radio extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const _this$props = this.props,\n          name = _this$props.name,\n          value = _this$props.value,\n          required = _this$props.required,\n          label = _this$props.label;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n      name: name,\n      value: value,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13\n      },\n      __self: this\n    }, (_ref) => {\n      let field = _ref.field,\n          form = _ref.form;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        className: \"clickableLabel\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"radio \".concat(field.value && field.value === value ? \"radioChecked\" : \"\"),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        className: \"inputWrapper\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n        type: \"radio\"\n      }, this.props, {\n        checked: !!(field.value && field.value === value),\n        onChange: () => {\n          form.setFieldValue(name, value);\n        },\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18\n        },\n        __self: this\n      }))), field.value && field.value === value && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"radioIcon\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27\n        },\n        __self: this\n      }, \"\\u2713\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: required ? \"requiredInput\" : \"\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29\n        },\n        __self: this\n      }, label));\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/form/radio.js?");

/***/ }),

/***/ "./src/components/form/select.js":
/*!***************************************!*\
  !*** ./src/components/form/select.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Select; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"../../node_modules/formik/dist/formik.esm.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/form/select.js\";\n\n\nclass Select extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      focus: false\n    };\n    this.handleFocus = this.handleFocus.bind(this);\n    this.handleBlur = this.handleBlur.bind(this);\n  }\n\n  handleFocus() {\n    this.setState({\n      focus: true\n    });\n  }\n\n  handleBlur() {\n    this.setState({\n      focus: false\n    });\n  }\n\n  render() {\n    const _this$state = this.state,\n          focus = _this$state.focus,\n          error = _this$state.error;\n    const _this$props = this.props,\n          label = _this$props.label,\n          name = _this$props.name,\n          value = _this$props.value,\n          options = _this$props.options,\n          required = _this$props.required;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"selectWrapper \".concat(focus ? \"selectFocus\" : \"\", \" \").concat(error ? \"selectErr\" : \"\"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"selectLabel \".concat(value || focus ? \"selectLabelMoved\" : \"\", \" \").concat(required ? \"requiredInput\" : \"\"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36\n      },\n      __self: this\n    }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n      component: \"select\",\n      name: name,\n      className: \"select\",\n      onFocus: this.handleFocus,\n      onBlur: this.handleBlur,\n      value: value,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      disabled: true,\n      value: \"\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47\n      },\n      __self: this\n    }), options.map((option, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: i,\n      value: option.value,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48\n      },\n      __self: this\n    }, option.label))));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/form/select.js?");

/***/ }),

/***/ "./src/components/form/style.css":
/*!***************************************!*\
  !*** ./src/components/form/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./style.css */ \"../../node_modules/css-loader/index.js!./src/components/form/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"../../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/form/style.css?");

/***/ }),

/***/ "./src/components/head.js":
/*!********************************!*\
  !*** ./src/components/head.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta */ \"./src/components/meta.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ \"./src/components/link.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script */ \"./src/components/script.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ */ \"./index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/head.js\";\n\n\n\n\n\n\nconst Head = (_ref) => {\n  let data = _ref.data;\n  const description = [{\n    description: data.description\n  }];\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_meta__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    tags: data.meta,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12\n    },\n    __self: undefined\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"generator\",\n    content: \"ExothermicJS \".concat(___WEBPACK_IMPORTED_MODULE_4__[\"version\"]),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13\n    },\n    __self: undefined\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14\n    },\n    __self: undefined\n  }, data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_meta__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    tags: description,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: undefined\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    links: data.links,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_script__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    scripts: data.headScripts,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17\n    },\n    __self: undefined\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\n//# sourceURL=webpack:///./src/components/head.js?");

/***/ }),

/***/ "./src/components/layout/col.js":
/*!**************************************!*\
  !*** ./src/components/layout/col.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/col.js\";\n\n\nconst Col = (_ref) => {\n  let data = _ref.data;\n  const classes = data.class ? data.class.startsWith(\"col\") ? data.class : \"col \".concat(data.class) : \"col\";\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: undefined\n  }, data.content, data.items);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Col);\n\n//# sourceURL=webpack:///./src/components/layout/col.js?");

/***/ }),

/***/ "./src/components/layout/footer.js":
/*!*****************************************!*\
  !*** ./src/components/layout/footer.js ***!
  \*****************************************/
/*! exports provided: Footer, FooterYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FooterYamlType\", function() { return FooterYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/footer.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const _this$props = this.props,\n          data = _this$props.data,\n          children = _this$props.children,\n          rest = _objectWithoutProperties(_this$props, [\"data\", \"children\"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", _extends({\n      className: data.class ? data.class : \"\"\n    }, rest, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }), data.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      source: data.title,\n      renderers: {\n        root: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }), data.content, data.items, children);\n  }\n\n}\nconst FooterYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Type(\"!footer\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {\n      data: data,\n      key: \"footer\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Footer,\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!footer\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/layout/footer.js?");

/***/ }),

/***/ "./src/components/layout/header.js":
/*!*****************************************!*\
  !*** ./src/components/layout/header.js ***!
  \*****************************************/
/*! exports provided: Header, HeaderYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderYamlType\", function() { return HeaderYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/header.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const _this$props = this.props,\n          data = _this$props.data,\n          children = _this$props.children,\n          rest = _objectWithoutProperties(_this$props, [\"data\", \"children\"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", _extends({\n      className: data.class ? data.class : \"\"\n    }, rest, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }), data.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      source: data.title,\n      renderers: {\n        root: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }), data.content, data.items, children);\n  }\n\n}\nconst HeaderYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Type(\"!header\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {\n      data: data,\n      key: \"header\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Header,\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!header\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/layout/header.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainYamlType\", function() { return MainYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/main.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Main extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const _this$props = this.props,\n          data = _this$props.data,\n          children = _this$props.children;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n      className: data.class ? data.class : \"\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }, data.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      source: data.title,\n      renderers: {\n        root: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }), data.content, data.items, children);\n  }\n\n}\nconst MainYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.Type(\"!main\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {\n      data: data,\n      key: data.id || \"main\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Main,\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!main\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/layout/main.js?");

/***/ }),

/***/ "./src/components/layout/section.js":
/*!******************************************!*\
  !*** ./src/components/layout/section.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/section.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nconst Section = (_ref) => {\n  let _ref$data = _ref.data,\n      id = _ref$data.id,\n      title = _ref$data.title,\n      data = _ref.data,\n      children = _ref.children,\n      rest = _objectWithoutProperties(_ref, [\"data\", \"data\", \"children\"]);\n\n  const classes = data.class || \"\";\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", _extends({\n    className: classes,\n    id: id\n  }, rest, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: undefined\n  }), title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    source: title,\n    renderers: {\n      root: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }), data.content, data.items, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./src/components/layout/section.js?");

/***/ }),

/***/ "./src/components/layout/type.js":
/*!***************************************!*\
  !*** ./src/components/layout/type.js ***!
  \***************************************/
/*! exports provided: ColYamlType, SectionYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColYamlType\", function() { return ColYamlType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectionYamlType\", function() { return SectionYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./col */ \"./src/components/layout/col.js\");\n/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section */ \"./src/components/layout/section.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/layout/type.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst ColYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!col\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null && data.id !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_col__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      data: data,\n      key: data.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: _col__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!col\"\n    }, data);\n\n    return rtn;\n  }\n\n});\nconst SectionYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!section\", {\n  kind: \"mapping\",\n\n  resolve(data) {\n    return data !== null && data.items !== null && data.id !== null && data.title !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: data,\n      key: data.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: _section__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!section\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/layout/type.js?");

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/components/util/index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/link.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst Link = (_ref) => {\n  let links = _ref.links;\n\n  if (!links) {\n    return null;\n  }\n\n  const linkTags = links.map(tag => {\n    if (typeof tag === \"string\") {\n      return {\n        href: tag,\n        rel: \"stylesheet\",\n        type: \"text/css\"\n      };\n    }\n\n    const numTags = Object.keys(tag).length;\n\n    if (numTags > 1) {\n      // Not just a key and value\n      const link = {};\n\n      for (let i = 0; i < numTags; i++) {\n        link[Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"key\"])(tag, i)] = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"val\"])(tag, i);\n      }\n\n      return link;\n    }\n\n    return {\n      href: Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"val\"])(tag),\n      rel: Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"key\"])(tag)\n    };\n  });\n  return linkTags.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", _extends({}, item, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25\n    },\n    __self: undefined\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Link);\n\n//# sourceURL=webpack:///./src/components/link.js?");

/***/ }),

/***/ "./src/components/loader.js":
/*!**********************************!*\
  !*** ./src/components/loader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! statable */ \"../../node_modules/statable/dist/index.js\");\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(statable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/spinner */ \"./src/components/util/spinner.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ \"./src/components/page.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ */ \"./index.js\");\n/* harmony import */ var _state_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/page */ \"./src/state/page.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/loader.js\";\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nconst Loader = (_ref) => {\n  let propsPath = _ref.path,\n      dump = _ref.dump;\n\n  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(propsPath),\n        _useState2 = _slicedToArray(_useState, 1),\n        path = _useState2[0];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _state_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"].setState({\n      route: path\n    });\n\n    const _ref2 = window ? window.EXOTHERMIC : {\n      Dashboard: null\n    },\n          Dashboard = _ref2.Dashboard;\n\n    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"/load/\".concat(path).replace(\"//\", \"/\"), {\n      credentials: \"same-origin\"\n    }).then(response => response.text()).then(data => _state_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"].setState({\n      data: js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(data, {\n        schema: Dashboard ? Dashboard.Schema() : Object(___WEBPACK_IMPORTED_MODULE_7__[\"Schema\"])()\n      }),\n      loading: false\n    })).catch(error => {\n      throw error;\n    });\n  });\n\n  const _ref3 = window ? window.EXOTHERMIC : {\n    Dashboard: null\n  },\n        Dashboard = _ref3.Dashboard;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(statable__WEBPACK_IMPORTED_MODULE_4__[\"Subscribe\"], {\n    to: [_state_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"]],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30\n    },\n    __self: undefined\n  }, (_ref4) => {\n    let route = _ref4.route,\n        loading = _ref4.loading,\n        data = _ref4.data;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"base\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32\n      },\n      __self: undefined\n    }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      name: \"folding-cube\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34\n      },\n      __self: undefined\n    }) : Dashboard ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"BrowserRouter\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dashboard.OffCanvas, {\n      dump: dump,\n      path: route,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      data: data,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39\n      },\n      __self: undefined\n    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"BrowserRouter\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      data: data,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45\n      },\n      __self: undefined\n    })));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\n\n//# sourceURL=webpack:///./src/components/loader.js?");

/***/ }),

/***/ "./src/components/meta.js":
/*!********************************!*\
  !*** ./src/components/meta.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/components/util/index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/meta.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst Meta = (_ref) => {\n  let tags = _ref.tags;\n\n  if (!tags) {\n    return null;\n  }\n\n  const metaTags = tags.map(tag => {\n    const numTags = Object.keys(tag).length;\n\n    if (\"charSet\" in tag || numTags > 1) {\n      // Not just a key and value\n      const meta = {};\n\n      for (let i = 0; i < numTags; i++) {\n        meta[Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"key\"])(tag, i)] = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"val\"])(tag, i);\n      }\n\n      return meta;\n    }\n\n    return {\n      name: Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"key\"])(tag),\n      content: Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"val\"])(tag)\n    };\n  });\n  return metaTags.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", _extends({}, item, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21\n    },\n    __self: undefined\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meta);\n\n//# sourceURL=webpack:///./src/components/meta.js?");

/***/ }),

/***/ "./src/components/navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/navbar/index.js ***!
  \****************************************/
/*! exports provided: Navbar, NavbarYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navbar\", function() { return Navbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavbarYamlType\", function() { return NavbarYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ \"./src/components/navbar/item.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/navbar/index.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Navbar extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const items = this.props.items;\n    const nav = items.map((item, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      item: item,\n      key: i.toString(),\n      id: i,\n      size: items.length,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }));\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n      \"aria-label\": \"main nav\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      role: \"menubar\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14\n      },\n      __self: this\n    }, nav));\n  }\n\n}\nconst NavbarYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!navbar\", {\n  kind: \"mapping\",\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar, {\n      items: data.items,\n      key: \"nav\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Navbar,\n\n  represent(data) {\n    const rtn = _objectSpread({\n      tag: \"!navbar\"\n    }, data);\n\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/navbar/index.js?");

/***/ }),

/***/ "./src/components/navbar/item.js":
/*!***************************************!*\
  !*** ./src/components/navbar/item.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./src/components/navbar/link.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ \"./src/components/util/index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/navbar/item.js\";\n\n\n\nclass NavItem extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const _this$props = this.props,\n          item = _this$props.item,\n          size = _this$props.size,\n          id = _this$props.id;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      role: \"none\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      to: Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"val\"])(item),\n      \"aria-setsize\": size,\n      \"aria-posinset\": id + 1,\n      role: \"menuitem\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }, Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"key\"])(item)));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/navbar/item.js?");

/***/ }),

/***/ "./src/components/navbar/link.js":
/*!***************************************!*\
  !*** ./src/components/navbar/link.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-hash-link */ \"../../node_modules/react-router-hash-link/lib/index.js\");\n/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-parse */ \"../../node_modules/url-parse/index.js\");\n/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _state_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/page */ \"./src/state/page.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ */ \"./index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/navbar/link.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\nclass Link extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      to: new url_parse__WEBPACK_IMPORTED_MODULE_5___default.a(props.to)\n    };\n    this.handleNav = this.handleNav.bind(this);\n  }\n\n  handleNav() {\n    const to = this.state.to;\n\n    if (to.pathname === \"\") {\n      return;\n    }\n\n    const _ref = window ? window.EXOTHERMIC : {\n      Dashboard: null\n    },\n          Dashboard = _ref.Dashboard;\n\n    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(\"/load\".concat(to.pathname === \"/\" ? \"/index\" : to.pathname)).then(response => response.text()).then(data => _state_page__WEBPACK_IMPORTED_MODULE_6__[\"default\"].setState({\n      data: js_yaml__WEBPACK_IMPORTED_MODULE_4___default.a.safeLoad(data, {\n        schema: Dashboard ? Dashboard.Schema() : Object(___WEBPACK_IMPORTED_MODULE_7__[\"Schema\"])()\n      }),\n      route: to.pathname\n    }));\n  }\n\n  render() {\n    const to = this.state.to;\n    const children = this.props.children;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38\n      },\n      __self: this\n    }, to.hash === \"\" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], _extends({\n      activeClassName: \"selected\",\n      to: to.pathname,\n      onClick: this.handleNav\n    }, this.props, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40\n      },\n      __self: this\n    }), children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__[\"NavHashLink\"], _extends({\n      smooth: true,\n      activeClassName: \"selected\",\n      to: to.href,\n      onClick: this.handleNav\n    }, this.props, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41\n      },\n      __self: this\n    }), children));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/navbar/link.js?");

/***/ }),

/***/ "./src/components/page.js":
/*!********************************!*\
  !*** ./src/components/page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/page.js\";\n\n\nconst Page = (_ref) => {\n  let data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: undefined\n  }, data && data.page, !data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6\n    },\n    __self: undefined\n  }, \"Page not found!\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\n//# sourceURL=webpack:///./src/components/page.js?");

/***/ }),

/***/ "./src/components/script.js":
/*!**********************************!*\
  !*** ./src/components/script.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/components/util/index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/script.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst Script = (_ref) => {\n  let scripts = _ref.scripts;\n\n  if (!scripts) {\n    return null;\n  }\n\n  const scriptTags = [];\n  const scriptBody = [];\n  scripts.forEach(tag => {\n    if (typeof tag === \"string\") {\n      scriptTags.push({\n        src: tag\n      });\n      scriptBody.push(\"\");\n    } else {\n      const numTags = Object.keys(tag).length;\n\n      if (numTags > 1) {\n        // Not just a key and value\n        const script = {};\n\n        for (let i = 0; i < numTags; i++) {\n          script[Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"key\"])(tag, i)] = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"val\"])(tag, i);\n        }\n\n        scriptTags.push(script);\n        scriptBody.push(\"\");\n      } else {\n        scriptTags.push({\n          src: Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"val\"])(tag)\n        });\n        scriptBody.push(\"\");\n      }\n    }\n  });\n  return scriptTags.map((item, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", _extends({}, item, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31\n    },\n    __self: undefined\n  }), scriptBody[i]));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Script);\n\n//# sourceURL=webpack:///./src/components/script.js?");

/***/ }),

/***/ "./src/components/util/Get.js":
/*!************************************!*\
  !*** ./src/components/util/Get.js ***!
  \************************************/
/*! exports provided: Get, GetYamlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Get\", function() { return Get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetYamlType\", function() { return GetYamlType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"../../node_modules/node-libs-browser/mock/empty.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner */ \"./src/components/util/spinner.js\");\n/* harmony import */ var _state_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/page */ \"./src/state/page.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ */ \"./index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/util/Get.js\";\n\n\n\n\n\n\n\nclass Get extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      data: fs__WEBPACK_IMPORTED_MODULE_3___default.a && typeof fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync === \"function\" ? js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.safeLoad(fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(\"\".concat(_state_page__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.pagesPath, \"/\").concat(props.data, \".exo\"), \"utf8\"), {\n        schema: Object(___WEBPACK_IMPORTED_MODULE_6__[\"Schema\"])()\n      }) : null,\n      loading: !(fs__WEBPACK_IMPORTED_MODULE_3___default.a && typeof fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync === \"function\")\n    };\n  }\n\n  componentDidMount() {\n    const fetchPath = this.props.data;\n\n    const _ref = window ? window.EXOTHERMIC : {\n      Dashboard: null\n    },\n          Dashboard = _ref.Dashboard;\n\n    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"/load/\".concat(fetchPath)).then(response => response.text()).then(data => this.setState({\n      data: js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.safeLoad(data, {\n        schema: Dashboard ? Dashboard.Schema() : Object(___WEBPACK_IMPORTED_MODULE_6__[\"Schema\"])()\n      }),\n      loading: false\n    }));\n  }\n\n  render() {\n    const _this$state = this.state,\n          loading = _this$state.loading,\n          _this$state$data = _this$state.data,\n          data = _this$state$data === void 0 ? {} : _this$state$data;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: loading ? \"get-loading\" : \"get-loaded\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: this\n    }, !loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39\n      },\n      __self: this\n    }, data.content, data.items), loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"folding-cube\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44\n      },\n      __self: this\n    }));\n  }\n\n}\nconst GetYamlType = new js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.Type(\"!get\", {\n  kind: \"scalar\",\n\n  resolve(data) {\n    return data !== null;\n  },\n\n  construct() {\n    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Get, {\n      data: data,\n      key: \"get\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56\n      },\n      __self: this\n    });\n  },\n\n  instanceOf: Get,\n\n  represent(data) {\n    const rtn = {\n      tag: \"!get \".concat(data)\n    };\n    return rtn;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/util/Get.js?");

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

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./spinner.css */ \"../../node_modules/css-loader/index.js!./src/components/util/spinner.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"../../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/util/spinner.css?");

/***/ }),

/***/ "./src/components/util/spinner.js":
/*!****************************************!*\
  !*** ./src/components/util/spinner.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.css */ \"./src/components/util/spinner.css\");\n/* harmony import */ var _spinner_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/components/util/spinner.js\";\n\n\n\nconst Spinner = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sk-folding-cube\",\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5\n  },\n  __self: undefined\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sk-cube1 sk-cube\",\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6\n  },\n  __self: undefined\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sk-cube2 sk-cube\",\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7\n  },\n  __self: undefined\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sk-cube4 sk-cube\",\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8\n  },\n  __self: undefined\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sk-cube3 sk-cube\",\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9\n  },\n  __self: undefined\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spinner);\n\n//# sourceURL=webpack:///./src/components/util/spinner.js?");

/***/ }),

/***/ "./src/dashboard.js":
/*!**************************!*\
  !*** ./src/dashboard.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst configBuilder = () => {\n  const def = __webpack_require__(/*! ../exothermic.config */ \"./exothermic.config.js\");\n\n  let user = {};\n\n  try {\n    user = __webpack_require__(/*! ../../../exothermic.config */ \"../../exothermic.config.js\");\n  } catch (e) {}\n\n  return _objectSpread({}, def, user);\n};\n\nconst conf = configBuilder();\nconst dashboard = conf.dashboard;\nmodule.exports = {\n  load: () => __webpack_require__(\"./.. sync recursive ^\\\\.\\\\/.*\\\\/src$\")(\"./\".concat(dashboard, \"/src\")),\n  config: () => __webpack_require__(\"./.. sync recursive ^\\\\.\\\\/.*\\\\/exothermic\\\\.config$\")(\"./\".concat(dashboard, \"/exothermic.config\"))\n};\n\n//# sourceURL=webpack:///./src/dashboard.js?");

/***/ }),

/***/ "./src/exothermic.js":
/*!***************************!*\
  !*** ./src/exothermic.js ***!
  \***************************/
/*! exports provided: get, render, hydrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hydrate\", function() { return hydrate; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"../../node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"../../node_modules/node-libs-browser/mock/empty.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"../../node_modules/js-yaml/index.js\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"../../node_modules/react-dom/server.browser.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ \"../../node_modules/react-router/es/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ */ \"./index.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state */ \"./src/state/index.js\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/head */ \"./src/components/head.js\");\n/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/base */ \"./src/components/base.js\");\n/* harmony import */ var _components_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/util */ \"./src/components/util/index.js\");\nvar _jsxFileName = \"/Users/msuhay/code/exothermicjs/packages/exothermicjs/src/exothermic.js\";\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\nlet Dashboard = null;\nlet dashboardConfig = null;\nconst get = (route, options) => {\n  try {\n    const pages = options.pages;\n    const baseTemplate = fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"\".concat(pages[0], \"/base.exo\"))) ? fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"\".concat(pages[0], \"/base.exo\")), \"utf8\") : fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"\".concat(pages[1], \"/base.exo\")), \"utf8\");\n    const pageTemplate = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(route, \"utf8\");\n    return [baseTemplate, pageTemplate];\n  } catch (e) {\n    console.error(e);\n    throw new Error(e);\n  }\n};\nconst render = (route, options) => {\n  const pages = options.pages,\n        dashboard = options.dashboard,\n        test = options.test;\n  const templates = get(route, options);\n  const base = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(templates[0]);\n\n  if (dashboard && !Dashboard) {\n    try {\n      const dash = __webpack_require__(/*! ./dashboard */ \"./src/dashboard.js\");\n\n      Dashboard = dash.load();\n      dashboardConfig = dash.config();\n    } catch (e) {\n      console.error(e);\n    }\n  }\n\n  const page = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(templates[1], {\n    schema: dashboard && Dashboard ? Dashboard.Schema() : Object(___WEBPACK_IMPORTED_MODULE_6__[\"Schema\"])()\n  });\n\n  const result = _objectSpread({}, base, page);\n\n  const context = {};\n  _state__WEBPACK_IMPORTED_MODULE_7__[\"pageState\"].setState({\n    pagesPath: pages[0]\n  });\n  let markup = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(dashboard && Dashboard ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n    location: route,\n    context: context,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Dashboard.OffCanvasContainer, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    data: result,\n    browser: test ? false : Object(_components_util__WEBPACK_IMPORTED_MODULE_10__[\"isBrowser\"])(),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61\n    },\n    __self: undefined\n  }))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n    location: route,\n    context: context,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    data: result,\n    browser: test ? false : Object(_components_util__WEBPACK_IMPORTED_MODULE_10__[\"isBrowser\"])(),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67\n    },\n    __self: undefined\n  })));\n  Object.keys(options).forEach(key => {\n    if (options[key] !== Object(options[key])) {\n      markup = markup.replace(\"{{\".concat(key, \"}}\"), options[key]);\n    }\n  });\n  const head = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    data: result,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79\n    },\n    __self: undefined\n  }));\n  const footerScripts = \"\\n    \".concat(process.env.SSR_ONLY === \"true\" || options.ssr_only ? \"\" :  true ? \"\\n        <script src=\\\"/browser.js\\\"></script>\\n        <script src=\\\"/vendors.browser.js\\\"></script>\\n      \" : undefined, \"\\n    \").concat(dashboard && dashboardConfig ? \"<script src=\\\"\".concat( true ? dashboardConfig.dev : undefined, \"\\\"></script>\") : \"\", \"\\n    <script>\\n        var config = {\\n          dashboard: \").concat(dashboard ? \"'endo'\" : null, \"\\n        };\\n        EXOTHERMIC.initialize(config);\\n     </script>\\n  \");\n  return \"\\n    <!doctype html>\\n    <html lang=\\\"en\\\">\\n      <head>\".concat(head, \"</head>\\n      <body>\\n        <div id=\\\"__exothermic\\\">\").concat(markup, \"</div>\\n        \").concat(footerScripts, \"\\n      </body>\\n    </html>\\n  \");\n};\nconst hydrate = (route, options) => {\n  let markup = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(route, \"utf8\");\n  Object.keys(options).forEach(key => {\n    if (options[key] !== Object(options[key])) {\n      markup = markup.replace(\"{{\".concat(key, \"}}\"), options[key]);\n    }\n  });\n  return markup;\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"../../node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/exothermic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Footer, Main, Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_layout_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/footer */ \"./src/components/layout/footer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _components_layout_footer__WEBPACK_IMPORTED_MODULE_0__[\"Footer\"]; });\n\n/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/main */ \"./src/components/layout/main.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return _components_layout_main__WEBPACK_IMPORTED_MODULE_1__[\"Main\"]; });\n\n/* harmony import */ var _components_layout_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/section */ \"./src/components/layout/section.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Section\", function() { return _components_layout_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
/*! exports provided: dragState, pageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _draggables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draggables */ \"./src/state/draggables.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dragState\", function() { return _draggables__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ \"./src/state/page.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pageState\", function() { return _page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/state/index.js?");

/***/ }),

/***/ "./src/state/page.js":
/*!***************************!*\
  !*** ./src/state/page.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! statable */ \"../../node_modules/statable/dist/index.js\");\n/* harmony import */ var statable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(statable__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pageState = new statable__WEBPACK_IMPORTED_MODULE_0__[\"State\"]({\n  page: \"\",\n  route: \"\",\n  pagesPath: \"\",\n  editing: false,\n  editingThis: \"\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageState);\n\n//# sourceURL=webpack:///./src/state/page.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///./streams_(ignored)?");

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///./extend-node_(ignored)?");

/***/ }),

/***/ 10:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ }),

/***/ 11:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 12:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///http_(ignored)?");

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 7:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 8:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///./streams_(ignored)?");

/***/ }),

/***/ 9:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///./extend-node_(ignored)?");

/***/ })

/******/ });