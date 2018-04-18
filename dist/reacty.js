(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("js-yaml"), require("react-markdown"), require("path"), require("fs"), require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define("reacty", ["react", "js-yaml", "react-markdown", "path", "fs", "react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["reacty"] = factory(require("react"), require("js-yaml"), require("react-markdown"), require("path"), require("fs"), require("react-dom/server"));
	else
		root["reacty"] = factory(root["react"], root["js-yaml"], root["react-markdown"], root["path"], root["fs"], root["react-dom/server"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = key;
/* harmony export (immutable) */ __webpack_exports__["d"] = val;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REACTY_SCHEMA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_navbar_Navbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_layout_Section__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_article_Article__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_util_Get__ = __webpack_require__(19);
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

var version = "v0.1.1";

var REACTY_SCHEMA = __WEBPACK_IMPORTED_MODULE_1_js_yaml___default.a.Schema.create([__WEBPACK_IMPORTED_MODULE_3__modules_layout_Section__["a" /* LAYOUT_SCHEMA */]], [__WEBPACK_IMPORTED_MODULE_2__modules_navbar_Navbar__["a" /* NavbarYamlType */], __WEBPACK_IMPORTED_MODULE_4__modules_article_Article__["a" /* ArticleYamlType */], __WEBPACK_IMPORTED_MODULE_5__modules_util_Get__["a" /* GetYamlType */]]);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("js-yaml");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Reacty = __webpack_require__(5);
module.exports = Reacty;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (immutable) */ __webpack_exports__["build"] = build;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Head__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Page__ = __webpack_require__(18);
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_Meta__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Script__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Base__ = __webpack_require__(1);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Base__ = __webpack_require__(1);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Navbar */
/* unused harmony export Navitem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarYamlType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Base__ = __webpack_require__(1);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Section */
/* unused harmony export SectionYamlType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LAYOUT_SCHEMA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Col__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_markdown__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_yaml__ = __webpack_require__(2);
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Col */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColYamlType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml__ = __webpack_require__(2);
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Article */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleYamlType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml__ = __webpack_require__(2);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Base__ = __webpack_require__(1);
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Base__ = __webpack_require__(1);
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Base__ = __webpack_require__(1);
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

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* unused harmony export Get */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetYamlType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Base__ = __webpack_require__(1);
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

/***/ })
/******/ ]);
});