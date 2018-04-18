(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("js-yaml"), require("react-markdown"), require("path"), require("fs"), require("object-assign"), require("fbjs/lib/emptyObject"), require("fbjs/lib/emptyFunction"), require("fbjs/lib/hyphenateStyleName"), require("fbjs/lib/memoizeStringOnly"), require("stream"), require("express"), require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define("reacty", ["react", "js-yaml", "react-markdown", "path", "fs", "object-assign", "fbjs/lib/emptyObject", "fbjs/lib/emptyFunction", "fbjs/lib/hyphenateStyleName", "fbjs/lib/memoizeStringOnly", "stream", "express", "react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["reacty"] = factory(require("react"), require("js-yaml"), require("react-markdown"), require("path"), require("fs"), require("object-assign"), require("fbjs/lib/emptyObject"), require("fbjs/lib/emptyFunction"), require("fbjs/lib/hyphenateStyleName"), require("fbjs/lib/memoizeStringOnly"), require("stream"), require("express"), require("react-dom/server"));
	else
		root["reacty"] = factory(root["react"], root["js-yaml"], root["react-markdown"], root["path"], root["fs"], root["object-assign"], root["fbjs/lib/emptyObject"], root["fbjs/lib/emptyFunction"], root["fbjs/lib/hyphenateStyleName"], root["fbjs/lib/memoizeStringOnly"], root["stream"], root["express"], root["react-dom/server"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("js-yaml");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = key;
/* harmony export (immutable) */ __webpack_exports__["d"] = val;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REACTY_SCHEMA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_navbar_Navbar__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_layout_Section__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_article_Article__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_util_Get__ = __webpack_require__(23);
var _jsxFileName = '/home/cabox/workspace/reacty/lib/components/Base.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Base = function (_Component) {
  _inherits(Base, _Component);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
  }

  _createClass(Base, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
        {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        this.props.children
      );
    }
  }]);

  return Base;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["b"] = (Base);


function key(item) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return Object.keys(item)[i];
}

function val(item) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return item[Object.keys(item)[i]];
}

var version = "v0.2.1";

var REACTY_SCHEMA = __WEBPACK_IMPORTED_MODULE_1_js_yaml___default.a.Schema.create([__WEBPACK_IMPORTED_MODULE_3__modules_layout_Section__["a" /* LAYOUT_SCHEMA */]], [__WEBPACK_IMPORTED_MODULE_2__modules_navbar_Navbar__["a" /* NavbarYamlType */], __WEBPACK_IMPORTED_MODULE_4__modules_article_Article__["a" /* ArticleYamlType */], __WEBPACK_IMPORTED_MODULE_5__modules_util_Get__["a" /* GetYamlType */]]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyObject");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/hyphenateStyleName");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/memoizeStringOnly");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (undefined === 'production') {
  module.exports = __webpack_require__(14);
} else {
  module.exports = __webpack_require__(15);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(1),__webpack_require__(3),__webpack_require__(6),__webpack_require__(7),__webpack_require__(8),__webpack_require__(4),__webpack_require__(5),__webpack_require__(9),__webpack_require__(10),__webpack_require__(11),__webpack_require__(12)):"function"==typeof define&&define.amd?define("reacty",["js-yaml","react-markdown","object-assign","fbjs/lib/emptyObject","fbjs/lib/emptyFunction","path","fs","fbjs/lib/hyphenateStyleName","fbjs/lib/memoizeStringOnly","stream","express"],t):"object"==typeof exports?exports.reacty=t(require("js-yaml"),require("react-markdown"),require("object-assign"),require("fbjs/lib/emptyObject"),require("fbjs/lib/emptyFunction"),require("path"),require("fs"),require("fbjs/lib/hyphenateStyleName"),require("fbjs/lib/memoizeStringOnly"),require("stream"),require("express")):e.reacty=t(e["js-yaml"],e["react-markdown"],e["object-assign"],e["fbjs/lib/emptyObject"],e["fbjs/lib/emptyFunction"],e.path,e.fs,e["fbjs/lib/hyphenateStyleName"],e["fbjs/lib/memoizeStringOnly"],e.stream,e.express)}(this,function(e,t,r,n,o,i,a,u,l,s,c){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t){e.exports=__webpack_require__(1)},function(e,t){e.exports=__webpack_require__(3)},function(e,t){e.exports=__webpack_require__(6)},function(e,t){e.exports=__webpack_require__(7)},function(e,t){e.exports=__webpack_require__(8)},function(e,t){e.exports=__webpack_require__(4)},function(e,t){e.exports=__webpack_require__(5)},function(e,t){e.exports=__webpack_require__(9)},function(e,t){e.exports=__webpack_require__(10)},function(e,t){e.exports=__webpack_require__(11)},function(e,t){e.exports=__webpack_require__(12)},function(e,t,r){"use strict";e.exports=r(12)},function(e,t,r){!function(t,n){e.exports=n(r(0),r(1),r(2),r(3),r(4),r(5),r(6),r(7),r(8),r(9),r(10))}(0,function(e,t,n,o,i,a,u,l,s,c,f){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t){e.exports=r(0)},function(e,t){e.exports=r(1)},function(e,t){e.exports=r(2)},function(e,t){e.exports=r(3)},function(e,t){e.exports=r(4)},function(e,t){e.exports=r(5)},function(e,t){e.exports=r(6)},function(e,t){e.exports=r(7)},function(e,t){e.exports=r(8)},function(e,t){e.exports=r(9)},function(e,t){e.exports=r(10)},function(e,t,r){"use strict";var n=r(12);e.exports=n},function(e,t,r){!function(t,n){e.exports=function(e,t,n,o,i,a,u,l,s,c,f){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,r){"use strict";e.exports=r(11)},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object.keys(e)[t]}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e[Object.keys(e)[t]]}t.c=a,t.d=u,r.d(t,"e",function(){return b}),r.d(t,"a",function(){return _});var l=r(0),s=r.n(l),c=r(2),f=r.n(c),p=r(21),h=r(22),y=r(24),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),m=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,{__self:this,__source:{fileName:"/home/cabox/workspace/reacty/lib/components/Base.js",lineNumber:11}},this.props.children)}}]),t}(l.Component);t.b=m;var b="v0.1.1",_=f.a.Schema.create([h.a],[p.a,GetYamlType,y.a])},function(e,t){e.exports=r(0)},function(e,t){e.exports=r(1)},function(e,t){e.exports=r(2)},function(e,t){e.exports=r(3)},function(e,t){e.exports=r(4)},function(e,t,r){"use strict";var n=r(8);e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function n(t,r){var n=m()();n.use("./static",m.a.static(a.a.resolve(e,"./dist"))),n.get("/",function(e,t){t.send(o("index",r))}).get("/:page",function(e,t){t.send(o(e.params.page,r))}).listen(3001,function(){console.log("React app listening on port 3001!")})}function o(t,r){var n="",o=c.a.safeLoad(l.a.readFileSync(a.a.resolve(e,r+"/base.yml"),"utf8"));try{var i=c.a.safeLoad(l.a.readFileSync(a.a.resolve(e,r+"/"+t+".yml"),"utf8"),{schema:_.a});n=g({},o,i)}catch(e){n=o,n.data.description="404"}finally{var u=y.a.renderToString(p.a.createElement(v.a,{data:n})),s=y.a.renderToString(p.a.createElement(b.a,{data:n}));return l.a.readFileSync(a.a.resolve(e,r+"/../index.html")).toString().replace('<meta name="generator" content="reacty">',s).replace("$body-placeholder",u)}}t.build=n;var i=r(9),a=r.n(i),u=r(10),l=r.n(u),s=r(2),c=r.n(s),f=r(0),p=r.n(f),h=r(12),y=r.n(h),d=r(18),m=r.n(d),b=r(19),_=r(1),v=r(27),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}}.call(t,"lib")},function(e,t){e.exports=r(5)},function(e,t){e.exports=r(6)},function(e,t,r){"use strict";function n(e){for(var t=arguments.length-1,r="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);throw t=Error(r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function o(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||S}function i(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||S}function a(){}function u(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||S}function l(e,t,r){var n,o={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)F.call(t,n)&&!T.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:w,type:e,key:i,ref:a,props:o,_owner:C.current}}function s(e){return"object"==typeof e&&null!==e&&e.$$typeof===w}function c(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function f(e,t,r,n){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function p(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function h(e,t,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case w:case x:case j:case k:a=!0}}if(a)return r(o,e,""===t?"."+y(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){i=e[u];var l=t+y(i,u);a+=h(i,l,r,o)}else if(null===e||void 0===e?l=null:(l=N&&e[N]||e["@@iterator"],l="function"==typeof l?l:null),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)i=i.value,l=t+y(i,u++),a+=h(i,l,r,o);else"object"===i&&(r=""+e,n("31","[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return a}function y(e,t){return"object"==typeof e&&null!==e&&null!=e.key?c(e.key):t.toString(36)}function d(e,t){e.func.call(e.context,t,e.count++)}function m(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?b(e,n,r,g.thatReturnsArgument):null!=e&&(s(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r,e={$$typeof:w,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),n.push(e))}function b(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(R,"$&/")+"/"),t=f(t,i,n,o),null==e||h(e,"",m,t),p(t)}/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _=r(4),v=r(5),g=r(6),O="function"==typeof Symbol&&Symbol.for,w=O?Symbol.for("react.element"):60103,x=O?Symbol.for("react.call"):60104,j=O?Symbol.for("react.return"):60105,k=O?Symbol.for("react.portal"):60106,E=O?Symbol.for("react.fragment"):60107,N="function"==typeof Symbol&&Symbol.iterator,S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};o.prototype.isReactComponent={},o.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&n("85"),this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},a.prototype=o.prototype;var P=i.prototype=new a;P.constructor=i,_(P,o.prototype),P.isPureReactComponent=!0;var A=u.prototype=new a;A.constructor=u,_(A,o.prototype),A.unstable_isAsyncReactComponent=!0,A.render=function(){return this.props.children};var C={current:null},F=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0},R=/\/+/g,M=[],V={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return b(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;t=f(null,null,t,r),null==e||h(e,"",d,t),p(t)},count:function(e){return null==e?0:h(e,"",g.thatReturnsNull,null)},toArray:function(e){var t=[];return b(e,t,null,g.thatReturnsArgument),t},only:function(e){return s(e)||n("143"),e}},Component:o,PureComponent:i,unstable_AsyncComponent:u,Fragment:E,createElement:l,cloneElement:function(e,t,r){var n=_({},e.props),o=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=C.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)F.call(t,l)&&!T.hasOwnProperty(l)&&(n[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){u=Array(l);for(var s=0;s<l;s++)u[s]=arguments[s+2];n.children=u}return{$$typeof:w,type:e.type,key:o,ref:i,props:n,_owner:a}},createFactory:function(e){var t=l.bind(null,e);return t.type=e,t},isValidElement:s,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:_}},L=Object.freeze({default:V}),q=L&&V||L;e.exports=q.default?q.default:q},function(e,t,r){"use strict";e.exports=r(13)},function(e,t,r){"use strict";e.exports=r(14)},function(e,t,r){"use strict";function n(e){for(var t=arguments.length-1,r="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);throw t=Error(r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function o(e,t){return(e&t)===t}function i(e,t){if(E.hasOwnProperty(e)||2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))return!1;if(null===t)return!0;switch(typeof t){case"boolean":return u(e);case"undefined":case"number":case"string":case"object":return!0;default:return!1}}function a(e){return S.hasOwnProperty(e)?S[e]:null}function u(e){if(E.hasOwnProperty(e))return!0;var t=a(e);return t?t.hasBooleanValue||t.hasStringBooleanValue||t.hasOverloadedBooleanValue:"data-"===(e=e.toLowerCase().slice(0,5))||"aria-"===e}function l(e){return e[1].toUpperCase()}function s(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=H.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}function c(e){return!!W.hasOwnProperty(e)||!z.hasOwnProperty(e)&&(B.test(e)?W[e]=!0:(z[e]=!0,!1))}function f(e,t){var r=a(e);if(r){if(null==t||r.hasBooleanValue&&!t||r.hasNumericValue&&isNaN(t)||r.hasPositiveNumericValue&&1>t||r.hasOverloadedBooleanValue&&!1===t)return"";var n=r.attributeName;if(r.hasBooleanValue||r.hasOverloadedBooleanValue&&!0===t)return n+'=""';if("boolean"!=typeof t||u(e))return n+'="'+s(t)+'"'}else if(i(e,t))return null==t?"":e+'="'+s(t)+'"';return null}function p(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function h(e){return"string"==typeof e?e:"function"==typeof e?e.displayName||e.name:null}function y(e){var t="";return g.Children.forEach(e,function(e){null==e||"string"!=typeof e&&"number"!=typeof e||(t+=e)}),t}function d(e,t){if(e=e.contextTypes){var r,n={};for(r in e)n[r]=t[r];t=n}else t=w;return t}function m(e,t){void 0===e&&n("152",h(t)||"Component")}function b(e,t){for(;g.isValidElement(e);){var r=e,o=r.type;if("function"!=typeof o)break;e=d(o,t);var i=[],a=!1,u={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===i)return null},enqueueReplaceState:function(e,t){a=!0,i=[t]},enqueueSetState:function(e,t){if(null===i)return null;i.push(t)}};if(o.prototype&&o.prototype.isReactComponent)var l=new o(r.props,e,u);else if(null==(l=o(r.props,e,u))||null==l.render){e=l,m(e,o);continue}if(l.props=r.props,l.context=e,l.updater=u,u=l.state,void 0===u&&(l.state=u=null),l.componentWillMount)if(l.componentWillMount(),i.length){u=i;var s=a;if(i=null,a=!1,s&&1===u.length)l.state=u[0];else{var c=s?u[0]:l.state,f=!0;for(s=s?1:0;s<u.length;s++){var p=u[s];(p="function"==typeof p?p.call(l,c,r.props,e):p)&&(f?(f=!1,c=v({},c,p)):v(c,p))}l.state=c}}else i=null;if(e=l.render(),m(e,o),"function"==typeof l.getChildContext&&"object"==typeof(r=o.childContextTypes)){var y=l.getChildContext();for(var b in y)b in r||n("108",h(o)||"Unknown",b)}y&&(t=v({},t,y))}return{child:e,context:t}}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}/** @license React v16.2.0
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v=r(4),g=r(0),O=r(6),w=r(5),x=r(15),j=r(16),k=r(17),E={children:!0,dangerouslySetInnerHTML:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,suppressHydrationWarning:!0,style:!0},N={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=N,r=e.Properties||{},i=e.DOMAttributeNamespaces||{},a=e.DOMAttributeNames||{};e=e.DOMMutationMethods||{};for(var u in r){S.hasOwnProperty(u)&&n("48",u);var l=u.toLowerCase(),s=r[u];l={attributeName:l,attributeNamespace:null,propertyName:u,mutationMethod:null,mustUseProperty:o(s,t.MUST_USE_PROPERTY),hasBooleanValue:o(s,t.HAS_BOOLEAN_VALUE),hasNumericValue:o(s,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:o(s,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:o(s,t.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:o(s,t.HAS_STRING_BOOLEAN_VALUE)},1>=l.hasBooleanValue+l.hasNumericValue+l.hasOverloadedBooleanValue||n("50",u),a.hasOwnProperty(u)&&(l.attributeName=a[u]),i.hasOwnProperty(u)&&(l.attributeNamespace=i[u]),e.hasOwnProperty(u)&&(l.mutationMethod=e[u]),S[u]=l}}},S={},P=N,A=P.MUST_USE_PROPERTY,C=P.HAS_BOOLEAN_VALUE,F=P.HAS_NUMERIC_VALUE,T=P.HAS_POSITIVE_NUMERIC_VALUE,R=P.HAS_OVERLOADED_BOOLEAN_VALUE,M=P.HAS_STRING_BOOLEAN_VALUE,V={Properties:{allowFullScreen:C,async:C,autoFocus:C,autoPlay:C,capture:R,checked:A|C,cols:T,contentEditable:M,controls:C,default:C,defer:C,disabled:C,download:R,draggable:M,formNoValidate:C,hidden:C,loop:C,multiple:A|C,muted:A|C,noValidate:C,open:C,playsInline:C,readOnly:C,required:C,reversed:C,rows:T,rowSpan:F,scoped:C,seamless:C,selected:A|C,size:T,start:F,span:T,spellCheck:M,style:0,tabIndex:0,itemScope:C,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:M},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(e,t){if(null==t)return e.removeAttribute("value");"number"!==e.type||!1===e.hasAttribute("value")?e.setAttribute("value",""+t):e.validity&&!e.validity.badInput&&e.ownerDocument.activeElement!==e&&e.setAttribute("value",""+t)}}},L=P.HAS_STRING_BOOLEAN_VALUE,q={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},I={Properties:{autoReverse:L,externalResourcesRequired:L,preserveAlpha:L},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:q.xlink,xlinkArcrole:q.xlink,xlinkHref:q.xlink,xlinkRole:q.xlink,xlinkShow:q.xlink,xlinkTitle:q.xlink,xlinkType:q.xlink,xmlBase:q.xml,xmlLang:q.xml,xmlSpace:q.xml}},U=/[\-\:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(e){var t=e.replace(U,l);I.Properties[t]=0,I.DOMAttributeNames[t]=e}),P.injectDOMPropertyConfig(V),P.injectDOMPropertyConfig(I);var D="function"==typeof Symbol&&Symbol.for?Symbol.for("react.fragment"):60107,H=/["'&<>]/,B=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},W={},$={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},G={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Y=v({menuitem:!0},G),Z={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X=["Webkit","ms","Moz","O"];Object.keys(Z).forEach(function(e){X.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Z[t]=Z[e]})});var J=g.Children.toArray,K=O.thatReturns(""),Q={listing:!0,pre:!0,textarea:!0},ee=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,te={},re=j(function(e){return x(e)}),ne={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null},oe=function(){function e(t,r){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");g.isValidElement(t)?t.type!==D?t=[t]:(t=t.props.children,t=g.isValidElement(t)?[t]:J(t)):t=J(t),this.stack=[{domNamespace:$.html,children:t,childIndex:0,context:w,footer:""}],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=r}return e.prototype.read=function(e){if(this.exhausted)return null;for(var t="";t.length<e;){if(0===this.stack.length){this.exhausted=!0;break}var r=this.stack[this.stack.length-1];if(r.childIndex>=r.children.length){var n=r.footer;t+=n,""!==n&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===r.tag&&(this.currentSelectValue=null)}else n=r.children[r.childIndex++],t+=this.render(n,r.context,r.domNamespace)}return t},e.prototype.render=function(e,t,r){return"string"==typeof e||"number"==typeof e?""==(r=""+e)?"":this.makeStaticMarkup?s(r):this.previousWasTextNode?"\x3c!-- --\x3e"+s(r):(this.previousWasTextNode=!0,s(r)):(t=b(e,t),e=t.child,t=t.context,null===e||!1===e?"":g.isValidElement(e)?e.type===D?(e=J(e.props.children),this.stack.push({domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""):this.renderDOM(e,t,r):(e=J(e),this.stack.push({domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""))},e.prototype.renderDOM=function(e,t,r){var o=e.type.toLowerCase();r===$.html&&p(o),te.hasOwnProperty(o)||(ee.test(o)||n("65",o),te[o]=!0);var i=e.props;if("input"===o)i=v({type:void 0},i,{defaultChecked:void 0,defaultValue:void 0,value:null!=i.value?i.value:i.defaultValue,checked:null!=i.checked?i.checked:i.defaultChecked});else if("textarea"===o){var a=i.value;if(null==a){a=i.defaultValue;var u=i.children;null!=u&&(null!=a&&n("92"),Array.isArray(u)&&(1>=u.length||n("93"),u=u[0]),a=""+u),null==a&&(a="")}i=v({},i,{value:void 0,children:""+a})}else if("select"===o)this.currentSelectValue=null!=i.value?i.value:i.defaultValue,i=v({},i,{value:void 0});else if("option"===o){u=this.currentSelectValue;var l=y(i.children);if(null!=u){var h=null!=i.value?i.value+"":l;if(a=!1,Array.isArray(u)){for(var d=0;d<u.length;d++)if(""+u[d]===h){a=!0;break}}else a=""+u===h;i=v({selected:void 0,children:void 0},i,{selected:a,children:l})}}(a=i)&&(Y[o]&&(null!=a.children||null!=a.dangerouslySetInnerHTML)&&n("137",o,K()),null!=a.dangerouslySetInnerHTML&&(null!=a.children&&n("60"),"object"==typeof a.dangerouslySetInnerHTML&&"__html"in a.dangerouslySetInnerHTML||n("61")),null!=a.style&&"object"!=typeof a.style&&n("62",K())),a=i,u=this.makeStaticMarkup,l=1===this.stack.length,h="<"+e.type;for(w in a)if(a.hasOwnProperty(w)){var m=a[w];if(null!=m){if("style"===w){d=void 0;var b="",_="";for(d in m)if(m.hasOwnProperty(d)){var g=0===d.indexOf("--"),O=m[d];null!=O&&(b+=_+re(d)+":",_=d,g=null==O||"boolean"==typeof O||""===O?"":g||"number"!=typeof O||0===O||Z.hasOwnProperty(_)&&Z[_]?(""+O).trim():O+"px",b+=g,_=";")}m=b||null}d=null;e:if(g=o,O=a,-1===g.indexOf("-"))g="string"==typeof O.is;else switch(g){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":g=!1;break e;default:g=!0}g?ne.hasOwnProperty(w)||(d=w,d=c(d)&&null!=m?d+'="'+s(m)+'"':""):d=f(w,m),d&&(h+=" "+d)}}u||l&&(h+=' data-reactroot=""');var w=h;a="",G.hasOwnProperty(o)?w+="/>":(w+=">",a="</"+e.type+">");e:{if(null!=(u=i.dangerouslySetInnerHTML)){if(null!=u.__html){u=u.__html;break e}}else if("string"==typeof(u=i.children)||"number"==typeof u){u=s(u);break e}u=null}return null!=u?(i=[],Q[o]&&"\n"===u.charAt(0)&&(w+="\n"),w+=u):i=J(i.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?p(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,tag:o,children:i,childIndex:0,context:t,footer:a}),this.previousWasTextNode=!1,w},e}(),ie=function(e){function t(r,n){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function");var o=e.call(this,{});if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o=!o||"object"!=typeof o&&"function"!=typeof o?this:o,o.partialRenderer=new oe(r,n),o}return _(t,e),t.prototype._read=function(e){try{this.push(this.partialRenderer.read(e))}catch(e){this.emit("error",e)}},t}(k.Readable),ae={renderToString:function(e){return new oe(e,!1).read(1/0)},renderToStaticMarkup:function(e){return new oe(e,!0).read(1/0)},renderToNodeStream:function(e){return new ie(e,!1)},renderToStaticNodeStream:function(e){return new ie(e,!0)},version:"16.2.0"},ue=Object.freeze({default:ae}),le=ue&&ae||ue;e.exports=le.default?le.default:le},function(e,t){e.exports=r(7)},function(e,t){e.exports=r(8)},function(e,t){e.exports=r(9)},function(e,t){e.exports=r(10)},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(0),u=r.n(a),l=r(20),s=r(25),c=r(26),f=r(1),p="/home/cabox/workspace/reacty/lib/components/Head.js",h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),y=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"render",value:function(){var e=[{description:this.props.data.description}];return u.a.createElement(u.a.Fragment,{__self:this,__source:{fileName:p,lineNumber:11}},u.a.createElement(l.a,{tags:this.props.data.meta,__self:this,__source:{fileName:p,lineNumber:12}}),u.a.createElement("meta",{name:"generator",content:"ReactY Templator "+f.e,__self:this,__source:{fileName:p,lineNumber:13}}),u.a.createElement("title",{__self:this,__source:{fileName:p,lineNumber:14}},this.props.data.title),u.a.createElement(l.a,{tags:e,__self:this,__source:{fileName:p,lineNumber:15}}),u.a.createElement(s.a,{links:this.props.data.links,__self:this,__source:{fileName:p,lineNumber:16}}),u.a.createElement(c.a,{scripts:this.props.data.headScripts,__self:this,__source:{fileName:p,lineNumber:17}}))}}]),t}(a.Component);t.a=y},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(0),u=r.n(a),l=r(1),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this;if(!this.props.tags)return null;var t=[];return this.props.tags.forEach(function(e,r){var n=Object.keys(e).length;if("charSet"in e||n>1){for(var o={},i=0;i<n;i++)o[Object(l.c)(e,i)]=Object(l.d)(e,i);t.push(o)}else t.push({name:Object(l.c)(e),content:Object(l.d)(e)})}),t.map(function(t){return u.a.createElement("meta",s({},t,{__self:e,__source:{fileName:"/home/cabox/workspace/reacty/lib/modules/Meta.js",lineNumber:24}}))})}}]),t}(a.Component);t.a=f},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r.d(t,"a",function(){return d});var a=r(0),u=r.n(a),l=r(2),s=r.n(l),c=r(1),f="/home/cabox/workspace/reacty/lib/modules/navbar/Navbar.js",p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,r){return u.a.createElement(y,{item:t,key:r.toString(),id:r,size:e.props.items.length,__self:e,__source:{fileName:f,lineNumber:11}})});return u.a.createElement("nav",{"aria-label":"Top level site",__self:this,__source:{fileName:f,lineNumber:14}},u.a.createElement("ul",{role:"menubar",__self:this,__source:{fileName:f,lineNumber:15}},t))}}]),t}(a.Component),y=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"render",value:function(){return u.a.createElement("li",{role:"none",__self:this,__source:{fileName:f,lineNumber:26}},u.a.createElement("a",{href:Object(c.d)(this.props.item),role:"menuitem","aria-setsize":this.props.size,"aria-posinset":this.props.id+1,__self:this,__source:{fileName:f,lineNumber:27}},Object(c.c)(this.props.item)))}}]),t}(a.Component),d=new s.a.Type("!navbar",{kind:"mapping",construct:function(e){return e=e||{},u.a.createElement(h,{items:e.items,key:"nav",__self:this,__source:{fileName:f,lineNumber:37}})},instanceOf:h})},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r.d(t,"a",function(){return b});var a=r(0),u=r.n(a),l=r(23),s=r(3),c=r.n(s),f=r(2),p=r.n(f),h="/home/cabox/workspace/reacty/lib/modules/layout/Section.js",y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),y(t,[{key:"render",value:function(){var e=this.props.data.hasOwnProperty("class")?this.props.data.class:"";return u.a.createElement("section",{className:e,id:this.props.data.id,__self:this,__source:{fileName:h,lineNumber:11}},u.a.createElement(c.a,{source:this.props.data.title,renderers:{root:u.a.Fragment},__self:this,__source:{fileName:h,lineNumber:12}}),this.props.data.items)}}]),t}(a.Component),m=new p.a.Type("!section",{kind:"mapping",resolve:function(e){return null!==e&&null!==e.items&&null!==e.id&&null!==e.title},construct:function(e){return e=e||{},u.a.createElement(d,{data:e,key:e.id,__self:this,__source:{fileName:h,lineNumber:26}})},instanceOf:d}),b=p.a.Schema.create([m,l.a])},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r.d(t,"a",function(){return d});var a=r(0),u=r.n(a),l=r(3),s=r.n(l),c=r(2),f=r.n(c),p="/home/cabox/workspace/reacty/lib/modules/layout/Col.js",h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),y=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"render",value:function(){var e="col "+(this.props.data.hasOwnProperty("class")?this.props.data.class:"");return u.a.createElement("div",{className:e,__self:this,__source:{fileName:p,lineNumber:10}},u.a.createElement(s.a,{source:this.props.data.content,renderers:{root:u.a.Fragment},__self:this,__source:{fileName:p,lineNumber:11}}),this.props.data.items)}}]),t}(a.Component),d=new f.a.Type("!col",{kind:"mapping",resolve:function(e){return null!==e&&null!==e.id},construct:function(e){return e=e||{},u.a.createElement(y,{data:e,key:e.id,__self:this,__source:{fileName:p,lineNumber:25}})},instanceOf:y})},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r.d(t,"a",function(){return d});var a=r(0),u=r.n(a),l=r(3),s=r.n(l),c=r(2),f=r.n(c),p="/home/cabox/workspace/reacty/lib/modules/article/Article.js",h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),y=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"render",value:function(){var e=this.props.data.hasOwnProperty("class")?this.props.data.class:"";return this.props.data.hasOwnProperty("items")?u.a.createElement("article",{className:e,id:this.props.data.id,__self:this,__source:{fileName:p,lineNumber:11}},u.a.createElement(s.a,{source:this.props.data.title,renderers:{root:u.a.Fragment},__self:this,__source:{fileName:p,lineNumber:12}}),this.props.data.items):this.props.data.hasOwnProperty("content")?u.a.createElement("article",{className:e,id:this.props.data.id,__self:this,__source:{fileName:p,lineNumber:18}},u.a.createElement(s.a,{source:this.props.data.title,renderers:{root:u.a.Fragment},__self:this,__source:{fileName:p,lineNumber:19}}),u.a.createElement(s.a,{source:this.props.data.content,renderers:{root:u.a.Fragment},__self:this,__source:{fileName:p,lineNumber:20}})):void 0}}]),t}(a.Component),d=new f.a.Type("!article",{kind:"mapping",resolve:function(e){return null!==e&&null!==e.id&&null!==e.title},construct:function(e){return e=e||{},u.a.createElement(y,{data:e,key:e.id,__self:this,__source:{fileName:p,lineNumber:34}})},instanceOf:y})},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(0),u=r.n(a),l=r(1),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this;if(!this.props.links)return null;var t=[];return this.props.links.forEach(function(e,r){if("string"==typeof e)t.push({href:e,rel:"stylesheet",type:"text/css"});else{var n=Object.keys(e).length;if(n>1){for(var o={},i=0;i<n;i++)o[Object(l.c)(e,i)]=Object(l.d)(e,i);t.push(o)}else t.push({href:Object(l.d)(e),rel:Object(l.c)(e)})}}),t.map(function(t){return u.a.createElement("link",s({},t,{__self:e,__source:{fileName:"/home/cabox/workspace/reacty/lib/modules/Link.js",lineNumber:28}}))})}}]),t}(a.Component);t.a=f},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(0),u=r.n(a),l=r(1),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this;if(!this.props.scripts)return null;var t=[],r=[];return this.props.scripts.forEach(function(e,n){if("string"==typeof e)t.push({src:e}),r.push("");else{var o=Object.keys(e).length;if(o>1){for(var i={},a=0;a<o;a++)i[Object(l.c)(e,a)]=Object(l.d)(e,a);t.push(i),r.push("")}else t.push({src:Object(l.d)(e)}),r.push("")}}),t.map(function(t,n){return u.a.createElement("script",s({},t,{__self:e,__source:{fileName:"/home/cabox/workspace/reacty/lib/modules/Script.js",lineNumber:32}}),r[n])})}}]),t}(a.Component);t.a=f},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(0),u=r.n(a),l=r(1),s="/home/cabox/workspace/reacty/lib/components/Page.js",c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this;if(this.props.hasOwnProperty("data")&&this.props.data.hasOwnProperty("page")){var t=Object.keys(this.props.data.page).map(function(t,r){switch(t){case"header":return u.a.createElement("header",{key:r.toString(),__self:e,__source:{fileName:s,lineNumber:11}},e.props.data.page[t]);case"main":return u.a.createElement("main",{key:r.toString(),__self:e,__source:{fileName:s,lineNumber:18}},e.props.data.page[t]);case"footer":return u.a.createElement("footer",{key:r.toString(),__self:e,__source:{fileName:s,lineNumber:25}},e.props.data.page[t]);default:return u.a.createElement("div",{id:t,__self:e,__source:{fileName:s,lineNumber:32}},e.props.data.page[t])}});return u.a.createElement(l.b,{data:this.props.data,__self:this,__source:{fileName:s,lineNumber:41}},t)}return u.a.createElement("div",{__self:this,__source:{fileName:s,lineNumber:47}},u.a.createElement("p",{__self:this,__source:{fileName:s,lineNumber:48}},"Page not found!"))}}]),t}(a.Component);t.a=f}])}(r(0),r(1),r(2),r(3),r(4),r(5),r(6),r(7),r(8),r(9),r(10))}()}])})}])});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (immutable) */ __webpack_exports__["build"] = build;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Head__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Page__ = __webpack_require__(26);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };












/**
 * Build page with templates.
 *
 * @param {string} route - The page route
 * @param {string} pages - Path to page template folder relative to index.html
 */
function build(route, pages) {
  var result = '';
  var base = __WEBPACK_IMPORTED_MODULE_2_js_yaml___default.a.safeLoad(__WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(__WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, pages + '/base.yml'), 'utf8'));
  try {
    var page = __WEBPACK_IMPORTED_MODULE_2_js_yaml___default.a.safeLoad(__WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(__WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, pages + '/' + route + '.yml'), 'utf8'), { schema: __WEBPACK_IMPORTED_MODULE_6__components_Base__["a" /* REACTY_SCHEMA */] });
    result = _extends({}, base, page);
  } catch (e) {
    console.error(e);
    result = base;
    result.data.description = "404";
    result.data.title = "Page not found!";
  } finally {
    var markup = __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Page__["a" /* default */], { data: result }));
    var head = __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Head__["a" /* default */], { data: result }));
    var html = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(__WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, pages + '/../index.html')).toString();
    return html.replace('<meta name="generator" content="reacty">', head).replace('$body-placeholder', markup);
  }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "lib"))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_Meta__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Link__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Script__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Base__ = __webpack_require__(2);
var _jsxFileName = '/home/cabox/workspace/reacty/lib/components/Head.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Head = function (_Component) {
  _inherits(Head, _Component);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  _createClass(Head, [{
    key: 'render',
    value: function render() {
      var description = [{ description: this.props.data.description }];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
        {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__modules_Meta__["a" /* default */], { tags: this.props.data.meta, __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'generator', content: "ReactY Templator " + __WEBPACK_IMPORTED_MODULE_4__Base__["e" /* version */], __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          this.props.data.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__modules_Meta__["a" /* default */], { tags: description, __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__modules_Link__["a" /* default */], { links: this.props.data.links, __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__modules_Script__["a" /* default */], { scripts: this.props.data.headScripts, __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        })
      );
    }
  }]);

  return Head;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Base__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/cabox/workspace/reacty/lib/modules/Meta.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Meta = function (_Component) {
  _inherits(Meta, _Component);

  function Meta() {
    _classCallCheck(this, Meta);

    return _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).apply(this, arguments));
  }

  _createClass(Meta, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.tags) {
        return null;
      }
      var metaTags = [];
      this.props.tags.forEach(function (tag, index) {
        var numTags = Object.keys(tag).length;
        if ('charSet' in tag || numTags > 1) {
          // Not just a key and value
          var meta = {};
          for (var i = 0; i < numTags; i++) {
            meta[Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["c" /* key */])(tag, i)] = Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["d" /* val */])(tag, i);
          }
          metaTags.push(meta);
        } else {
          metaTags.push({ 'name': Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["c" /* key */])(tag), 'content': Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["d" /* val */])(tag) });
        }
      });

      return metaTags.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', _extends({}, item, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }));
      });
    }
  }]);

  return Meta;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Meta);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Navbar */
/* unused harmony export Navitem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarYamlType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Base__ = __webpack_require__(2);
var _jsxFileName = '/home/cabox/workspace/reacty/lib/modules/navbar/Navbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*eslint-disable no-console*/






var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var nav = this.props.items.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Navitem, { item: item, key: i.toString(), id: i, size: _this2.props.items.length, __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        { 'aria-label': 'Top level site', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { role: 'menubar', __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          nav
        )
      );
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Navitem = function (_Component2) {
  _inherits(Navitem, _Component2);

  function Navitem() {
    _classCallCheck(this, Navitem);

    return _possibleConstructorReturn(this, (Navitem.__proto__ || Object.getPrototypeOf(Navitem)).apply(this, arguments));
  }

  _createClass(Navitem, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { role: 'none', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: Object(__WEBPACK_IMPORTED_MODULE_2__components_Base__["d" /* val */])(this.props.item), role: 'menuitem', 'aria-setsize': this.props.size, 'aria-posinset': this.props.id + 1, __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          Object(__WEBPACK_IMPORTED_MODULE_2__components_Base__["c" /* key */])(this.props.item)
        )
      );
    }
  }]);

  return Navitem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var NavbarYamlType = new __WEBPACK_IMPORTED_MODULE_1_js_yaml___default.a.Type('!navbar', {
  kind: 'mapping',
  construct: function construct(data) {
    data = data || {}; // in case of empty node
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Navbar, { items: data.items, key: 'nav', __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    });
  },
  instanceOf: Navbar
});



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Section */
/* unused harmony export SectionYamlType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LAYOUT_SCHEMA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Col__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_markdown__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_yaml__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_js_yaml__);
/* unused harmony reexport Col */
/* unused harmony reexport ColYamlType */
var _jsxFileName = '/home/cabox/workspace/reacty/lib/modules/layout/Section.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Section = function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  _createClass(Section, [{
    key: 'render',
    value: function render() {
      var classes = this.props.data.hasOwnProperty('class') ? this.props.data.class : '';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: classes, id: this.props.data.id, __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_markdown___default.a, { source: this.props.data.title, renderers: { root: __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment }, __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }),
        this.props.data.items
      );
    }
  }]);

  return Section;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var SectionYamlType = new __WEBPACK_IMPORTED_MODULE_3_js_yaml___default.a.Type('!section', {
  kind: 'mapping',
  resolve: function resolve(data) {
    return data !== null && data.items !== null && data.id !== null && data.title !== null;
  },
  construct: function construct(data) {
    data = data || {}; // in case of empty node
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Section, { data: data, key: data.id, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    });
  },
  instanceOf: Section
});

var LAYOUT_SCHEMA = __WEBPACK_IMPORTED_MODULE_3_js_yaml___default.a.Schema.create([SectionYamlType, __WEBPACK_IMPORTED_MODULE_1__Col__["a" /* ColYamlType */]]);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Col */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColYamlType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_yaml__);
var _jsxFileName = '/home/cabox/workspace/reacty/lib/modules/layout/Col.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var classes = 'col ' + (this.props.data.hasOwnProperty('class') ? this.props.data.class : '');
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: classes, __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_markdown___default.a, { source: this.props.data.content, renderers: { root: __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment }, __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }),
        this.props.data.items
      );
    }
  }]);

  return Col;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var ColYamlType = new __WEBPACK_IMPORTED_MODULE_2_js_yaml___default.a.Type('!col', {
  kind: 'mapping',
  resolve: function resolve(data) {
    return data !== null && data.id !== null;
  },
  construct: function construct(data) {
    data = data || {}; // in case of empty node
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Col, { data: data, key: data.id, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    });
  },
  instanceOf: Col
});



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Article */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleYamlType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_yaml__);
var _jsxFileName = '/home/cabox/workspace/reacty/lib/modules/article/Article.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Article = function (_Component) {
  _inherits(Article, _Component);

  function Article() {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
  }

  _createClass(Article, [{
    key: 'render',
    value: function render() {
      var classes = this.props.data.hasOwnProperty('class') ? this.props.data.class : '';
      if (this.props.data.hasOwnProperty('items')) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'article',
          { className: classes, id: this.props.data.id, __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_markdown___default.a, { source: this.props.data.title, renderers: { root: __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment }, __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          }),
          this.props.data.items
        );
      } else if (this.props.data.hasOwnProperty('content')) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'article',
          { className: classes, id: this.props.data.id, __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_markdown___default.a, { source: this.props.data.title, renderers: { root: __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment }, __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_markdown___default.a, { source: this.props.data.content, renderers: { root: __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment }, __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          })
        );
      }
    }
  }]);

  return Article;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var ArticleYamlType = new __WEBPACK_IMPORTED_MODULE_2_js_yaml___default.a.Type('!article', {
  kind: 'mapping',
  resolve: function resolve(data) {
    return data !== null && data.id !== null && data.title !== null;
  },
  construct: function construct(data) {
    data = data || {}; // in case of empty node
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Article, { data: data, key: data.id, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    });
  },
  instanceOf: Article
});



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* unused harmony export Get */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetYamlType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Base__ = __webpack_require__(2);
var _jsxFileName = '/home/cabox/workspace/reacty/lib/modules/util/Get.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Get = function (_Component) {
  _inherits(Get, _Component);

  function Get() {
    _classCallCheck(this, Get);

    return _possibleConstructorReturn(this, (Get.__proto__ || Object.getPrototypeOf(Get)).apply(this, arguments));
  }

  _createClass(Get, [{
    key: 'render',
    value: function render() {
      var data = __WEBPACK_IMPORTED_MODULE_2_js_yaml___default.a.safeLoad(__WEBPACK_IMPORTED_MODULE_3_fs___default.a.readFileSync(__WEBPACK_IMPORTED_MODULE_4_path___default.a.resolve(__dirname, '../../../' + this.props.data), 'utf8'), { schema: __WEBPACK_IMPORTED_MODULE_5__components_Base__["a" /* REACTY_SCHEMA */] });
      if (data.hasOwnProperty('items')) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
          {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          data.items
        );
      } else if (data.hasOwnProperty('content')) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
          {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_markdown___default.a, { source: data.content, renderers: { root: __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment }, __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          })
        );
      }
    }
  }]);

  return Get;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var GetYamlType = new __WEBPACK_IMPORTED_MODULE_2_js_yaml___default.a.Type('!get', {
  kind: 'scalar',
  resolve: function resolve(data) {
    return data !== null;
  },
  construct: function construct(data) {
    data = data || {}; // in case of empty node
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Get, { data: data, key: 'get', __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    });
  },
  instanceOf: Get
});


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "lib/modules/util"))

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Base__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/cabox/workspace/reacty/lib/modules/Link.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.links) {
        return null;
      }
      var linkTags = [];
      this.props.links.forEach(function (tag, index) {
        if (typeof tag === "string") {
          linkTags.push({ 'href': tag, 'rel': 'stylesheet', 'type': "text/css" });
        } else {
          var numTags = Object.keys(tag).length;
          if (numTags > 1) {
            // Not just a key and value
            var link = {};
            for (var i = 0; i < numTags; i++) {
              link[Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["c" /* key */])(tag, i)] = Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["d" /* val */])(tag, i);
            }
            linkTags.push(link);
          } else {
            linkTags.push({ 'href': Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["d" /* val */])(tag), 'rel': Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["c" /* key */])(tag) });
          }
        }
      });

      return linkTags.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', _extends({}, item, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }));
      });
    }
  }]);

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Base__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/cabox/workspace/reacty/lib/modules/Script.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Script = function (_Component) {
  _inherits(Script, _Component);

  function Script() {
    _classCallCheck(this, Script);

    return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
  }

  _createClass(Script, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.scripts) {
        return null;
      }
      var scriptTags = [],
          scriptBody = [];
      this.props.scripts.forEach(function (tag, index) {
        if (typeof tag === "string") {
          scriptTags.push({ 'src': tag });
          scriptBody.push('');
        } else {
          var numTags = Object.keys(tag).length;
          if (numTags > 1) {
            // Not just a key and value
            var script = {};
            for (var i = 0; i < numTags; i++) {
              script[Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["c" /* key */])(tag, i)] = Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["d" /* val */])(tag, i);
            }
            scriptTags.push(script);
            scriptBody.push('');
          } else {
            scriptTags.push({ 'src': Object(__WEBPACK_IMPORTED_MODULE_1__components_Base__["d" /* val */])(tag) });
            scriptBody.push('');
          }
        }
      });

      return scriptTags.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'script',
          _extends({}, item, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }),
          scriptBody[i]
        );
      });
    }
  }]);

  return Script;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Script);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Base__ = __webpack_require__(2);
var _jsxFileName = '/home/cabox/workspace/reacty/lib/components/Page.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.hasOwnProperty('data') && this.props.data.hasOwnProperty('page')) {
        var page = Object.keys(this.props.data.page).map(function (obj, i) {
          switch (obj) {
            case 'header':
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'header',
                { key: i.toString(), __self: _this2,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                  }
                },
                _this2.props.data.page[obj]
              );
              break;
            case 'main':
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'main',
                { key: i.toString(), __self: _this2,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  }
                },
                _this2.props.data.page[obj]
              );
              break;
            case 'footer':
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'footer',
                { key: i.toString(), __self: _this2,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                },
                _this2.props.data.page[obj]
              );
              break;
            default:
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { id: obj, __self: _this2,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  }
                },
                _this2.props.data.page[obj]
              );
          }
        });

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Base__["b" /* default */],
          { data: this.props.data, __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          page
        );
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            'Page not found!'
          )
        );
      }
    }
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ })
/******/ ]);
});