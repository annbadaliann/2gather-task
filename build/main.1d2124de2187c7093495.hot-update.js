exports.id = "main";
exports.modules = {

/***/ "./src/components/layout/components/header/index.js":
/*!**********************************************************!*\
  !*** ./src/components/layout/components/header/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _platform_constants_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../platform/constants/routes */ "./src/platform/constants/routes.js");
/* harmony import */ var _platform_services_languages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../platform/services/languages */ "./src/platform/services/languages.js");
/* harmony import */ var _platform_constants_enums__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../platform/constants/enums */ "./src/platform/constants/enums.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ "./src/components/layout/components/header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _left_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./left-bar */ "./src/components/layout/components/header/left-bar/index.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../modal */ "./src/components/modal/index.js");







var _jsxFileName = "/Users/Grisho/Desktop/2gather/src/components/layout/components/header/index.js";








var _Languages$Translatio = _platform_services_languages__WEBPACK_IMPORTED_MODULE_10__["default"].Translations,
    language_label = _Languages$Translatio.language_label,
    home = _Languages$Translatio.home;

var Header =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Header, _PureComponent);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      isHidden: false,
      hasShadow: true,
      leftBar: false,
      selected: +window.localStorage.getItem("language") || _platform_constants_enums__WEBPACK_IMPORTED_MODULE_11__["LanguageEnum"].en
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "changeLanguage", function (shortCode) {
      window.localStorage.setItem("language", shortCode);
      window.location.reload();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "openLeftBar", function () {
      _this.setState({
        leftBar: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "closeLeftBar", function () {
      _this.setState({
        leftBar: false
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var home = _platform_services_languages__WEBPACK_IMPORTED_MODULE_10__["default"].Translations.home;
      var _this$state = this.state,
          isHidden = _this$state.isHidden,
          hasShadow = _this$state.hasShadow,
          leftBar = _this$state.leftBar,
          selected = _this$state.selected;

      if (window.location.pathname == "/auth/sign-in" || window.location.pathname == "/auth/sign-up" || window.location.pathname == "/auth/password-matches" || window.location.pathname == "/auth/password-recovery") {
        this.setState({
          isHidden: true,
          hasShadow: false
        });
      } else {
        this.setState({
          isHidden: false,
          hasShadow: true
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header-left-side G-flex G-justify-between G-align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sidebar-switcher",
        onClick: this.openLeftBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "select-city G-flex G-justify-between G-align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-ic_location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Yerevan"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-ic_arrowdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header-right-side G-flex G-justify-between G-align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "select-language G-flex G-justify-between G-align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "".concat(selected === _platform_constants_enums__WEBPACK_IMPORTED_MODULE_11__["LanguageEnum"].hy ? "selected-language" : ""),
        onClick: function onClick() {
          return _this2.changeLanguage(_platform_constants_enums__WEBPACK_IMPORTED_MODULE_11__["LanguageEnum"].hy);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "\u0570\u0561\u0575"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "".concat(selected === _platform_constants_enums__WEBPACK_IMPORTED_MODULE_11__["LanguageEnum"].ru ? "selected-language" : ""),
        onClick: function onClick() {
          return _this2.changeLanguage(_platform_constants_enums__WEBPACK_IMPORTED_MODULE_11__["LanguageEnum"].ru);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "en"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "".concat(selected === _platform_constants_enums__WEBPACK_IMPORTED_MODULE_11__["LanguageEnum"].en ? "selected-language" : ""),
        onClick: function onClick() {
          return _this2.changeLanguage(_platform_constants_enums__WEBPACK_IMPORTED_MODULE_11__["LanguageEnum"].en);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "\u0440\u0443\u0441")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "phone-num",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "tel:(374) 010555555",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "(374) 010555555"))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

};
//# sourceMappingURL=main.1d2124de2187c7093495.hot-update.js.map