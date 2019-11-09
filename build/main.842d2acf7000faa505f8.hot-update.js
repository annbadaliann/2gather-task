exports.id = "main";
exports.modules = {

/***/ "./src/assets/images/2gather.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/2gather.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2gather.103d215b.jpg";

/***/ }),

/***/ "./src/pages/SignIn/index.jsx":
/*!************************************!*\
  !*** ./src/pages/SignIn/index.jsx ***!
  \************************************/
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
/* harmony import */ var _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/2gather.jpg */ "./src/assets/images/2gather.jpg");
/* harmony import */ var _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _platform_api_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../platform/api/auth */ "./src/platform/api/auth.js");
/* harmony import */ var _platform_services_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../platform/services/validator */ "./src/platform/services/validator.js");
/* harmony import */ var _platform_constants_enums__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../platform/constants/enums */ "./src/platform/constants/enums.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ "./src/pages/SignIn/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/Grisho/Desktop/2gather/src/pages/SignIn/index.jsx";







var SignIn =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SignIn, _React$Component);

  function SignIn() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SignIn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SignIn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      form: {
        email: "",
        password: ""
      },
      focus: {
        email: false,
        password: false
      },
      passToggle: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "focusHandler", function (key) {
      var item = _this.state.form;

      _this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, item, true));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "blurHandler", function (key) {
      _this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, key, false));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "togglePassword", function () {
      _this.setState({
        passToggle: true
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SignIn, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          form = _this$state.form,
          focus = _this$state.focus,
          passToggle = _this$state.passToggle;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sign-in-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sign-in-form-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Enter your email and password and login in your ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), " account"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "G-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "G-form-label  ".concat(focus.email ? "G-label-animated" : ""),
        htmlFor: "signin-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "email",
        onFocus: function onFocus() {
          return focusHandler("email");
        },
        onBlur: function onBlur() {
          return blurHandler("email");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "input-border ".concat(focus.email ? "input-border-animated" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "G-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "G-form-label  ".concat(focus.password ? "G-label-animated" : ""),
        htmlFor: "signin-password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: !passToggle ? "password" : "text",
        onFocus: function onFocus() {
          return focusHandler("password");
        },
        onBlur: function onBlur() {
          return blurHandler("password");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "input-border ".concat(focus.password ? "input-border-animated" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: !passToggle ? "icon-ic_eye" : "icon-ic_eyeclosed",
        onClick: this.togglePassword,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "G-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Sign in")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "2gather",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })));
    }
  }]);

  return SignIn;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./src/pages/SignIn/style.scss":
/*!*************************************!*\
  !*** ./src/pages/SignIn/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/platform/api/auth.js":
/*!**********************************!*\
  !*** ./src/platform/api/auth.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/connection */ "./src/platform/services/connection.js");



var controllerName = 'auth';

var AuthController = function AuthController() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AuthController);
};

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(AuthController, "Login", function (body) {
  var result = _services_connection__WEBPACK_IMPORTED_MODULE_2__["default"].POST(controllerName, 'login', body);
  return result;
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(AuthController, "Register", function (body) {
  var result = _services_connection__WEBPACK_IMPORTED_MODULE_2__["default"].POST(controllerName, 'register', body);
  return result;
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(AuthController, "Email", function (query) {
  var result = _services_connection__WEBPACK_IMPORTED_MODULE_2__["default"].POST(controllerName, 'email', query);
  return result;
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(AuthController, "RestoreEmail", function (query) {
  var result = _services_connection__WEBPACK_IMPORTED_MODULE_2__["default"].POST(controllerName, 'restore/email', query);
  return result;
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(AuthController, "Restore", function (query) {
  var result = _services_connection__WEBPACK_IMPORTED_MODULE_2__["default"].POST(controllerName, 'restore', query);
  return result;
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(AuthController, "SocialLogin", function (query) {
  var result = _services_connection__WEBPACK_IMPORTED_MODULE_2__["default"].POST(controllerName, 'socialLogin', query);
  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (AuthController);

/***/ }),

/***/ "./src/platform/services/connection.js":
/*!*********************************************!*\
  !*** ./src/platform/services/connection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/routes */ "./src/platform/constants/routes.js");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-notifications */ "react-notifications");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/enums */ "./src/platform/constants/enums.js");









var Connection = function Connection() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Connection);
};

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "BASE_URL", 'https://2.evollai.com/api');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "queryFromObject", function (obj) {
  var str = [];

  for (var query in obj) {
    if (obj.hasOwnProperty(query) && obj[query]) {
      var string = encodeURIComponent(query) + "=" + encodeURIComponent(obj[query]);
      str.push(string);
    }
  }

  return str.join("&");
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "createHeaders", function (isUpload) {
  var language = 1;
  var HEADERS = new Headers();
  var shortLanguage = localStorage.getItem('language');
  if (shortLanguage === 'hy') language = _constants_enums__WEBPACK_IMPORTED_MODULE_7__["LanguageEnum"].hy;else if (shortLanguage === 'ru') language = _constants_enums__WEBPACK_IMPORTED_MODULE_7__["LanguageEnum"].ru;else if (shortLanguage === 'en') language = _constants_enums__WEBPACK_IMPORTED_MODULE_7__["LanguageEnum"].en;
  !isUpload && HEADERS.append('Content-Type', 'application/json');
  HEADERS.append('language', language);
  return HEADERS;
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "responseRestructure", function (response) {
  if (response.status === 401 || response.status === 403) {
    window.routerHistory.push(_constants_routes__WEBPACK_IMPORTED_MODULE_5__["default"].HOME);
    react_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationManager"].error('Something is wrong with permission or authentication');
  }

  ;
  return response.ok ? response.json() : {};
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "stringifyUrlEncoded", function (obj) {
  var urlEncoded = '';

  for (var key in obj) {
    urlEncoded += "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(obj[key]), "&");
  }

  return urlEncoded;
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "POST",
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(controllerName, actionName, body, queryConfig) {
    var onlyQuery, HEADERS, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            onlyQuery = !actionName && queryConfig;
            HEADERS = Connection.createHeaders();
            window.pendingRequest = true;
            _context.next = 5;
            return fetch("".concat(Connection.BASE_URL, "/").concat(controllerName).concat(!onlyQuery ? '/' : '').concat(actionName).concat(queryConfig ? "?".concat(Connection.queryFromObject(queryConfig)) : ''), {
              body: JSON.stringify(body),
              method: 'POST',
              headers: HEADERS
            });

          case 5:
            response = _context.sent;
            window.pendingRequest = false;
            return _context.abrupt("return", Connection.responseRestructure(response));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "PUT",
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(controllerName, actionName, body, queryConfig) {
    var onlyQuery, HEADERS, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            onlyQuery = !actionName && queryConfig;
            HEADERS = Connection.createHeaders();
            window.pendingRequest = true;
            _context2.next = 5;
            return fetch("".concat(Connection.BASE_URL, "/").concat(controllerName).concat(!onlyQuery ? '/' : '').concat(actionName).concat(queryConfig ? "?".concat(Connection.queryFromObject(queryConfig)) : ''), {
              body: JSON.stringify(body),
              method: 'PUT',
              headers: HEADERS
            });

          case 5:
            response = _context2.sent;
            window.pendingRequest = false;
            return _context2.abrupt("return", Connection.responseRestructure(response));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}());

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "DELETE",
/*#__PURE__*/
function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(controllerName, actionName, queryConfig) {
    var onlyQuery, HEADERS, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            onlyQuery = !actionName && queryConfig;
            HEADERS = Connection.createHeaders();
            window.pendingRequest = true;
            _context3.next = 5;
            return fetch("".concat(Connection.BASE_URL, "/").concat(controllerName).concat(!onlyQuery ? '/' : '').concat(actionName).concat(queryConfig ? "?".concat(Connection.queryFromObject(queryConfig)) : ''), {
              method: 'DELETE',
              headers: HEADERS
            });

          case 5:
            response = _context3.sent;
            window.pendingRequest = false;
            return _context3.abrupt("return", Connection.responseRestructure(response));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x9, _x10, _x11) {
    return _ref3.apply(this, arguments);
  };
}());

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "GET",
/*#__PURE__*/
function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(controllerName, actionName, queryConfig) {
    var onlyQuery, HEADERS, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            onlyQuery = !actionName && queryConfig;
            HEADERS = Connection.createHeaders();
            window.pendingRequest = true;
            _context4.next = 5;
            return fetch("".concat(Connection.BASE_URL, "/").concat(controllerName).concat(!onlyQuery ? '/' : '').concat(actionName).concat(queryConfig ? "?".concat(Connection.queryFromObject(queryConfig)) : ''), {
              method: 'GET',
              headers: HEADERS
            });

          case 5:
            response = _context4.sent;
            window.pendingRequest = false;
            return _context4.abrupt("return", Connection.responseRestructure(response));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x12, _x13, _x14) {
    return _ref4.apply(this, arguments);
  };
}());

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "UPLOAD",
/*#__PURE__*/
function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(controllerName, actionName, body, queryConfig) {
    var onlyQuery, HEADERS, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            onlyQuery = !actionName && queryConfig;
            HEADERS = Connection.createHeaders(true);
            window.pendingRequest = true;
            _context5.next = 5;
            return fetch("".concat(Connection.BASE_URL, "/api/").concat(controllerName).concat(!onlyQuery ? '/' : '').concat(actionName).concat(queryConfig ? "?".concat(Connection.queryFromObject(queryConfig)) : ''), {
              body: body,
              method: 'POST',
              headers: HEADERS
            });

          case 5:
            response = _context5.sent;
            window.pendingRequest = false;
            return _context5.abrupt("return", Connection.responseRestructure(response));

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x15, _x16, _x17, _x18) {
    return _ref5.apply(this, arguments);
  };
}());

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "Custom",
/*#__PURE__*/
function () {
  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(_ref6) {
    var url, method, body, queryConfig, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            url = _ref6.url, method = _ref6.method, body = _ref6.body, queryConfig = _ref6.queryConfig;
            _context6.next = 3;
            return node_fetch__WEBPACK_IMPORTED_MODULE_4__("".concat(url).concat(queryConfig ? "?".concat(Connection.queryFromObject(queryConfig)) : ''), {
              body: body,
              method: method
            });

          case 3:
            response = _context6.sent;
            return _context6.abrupt("return", response.ok ? response.json() : {});

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x19) {
    return _ref7.apply(this, arguments);
  };
}());

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Connection, "ServerRequest",
/*#__PURE__*/
function () {
  var _ref9 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(_ref8) {
    var method, controllerName, actionName, body, queryConfig, onlyQuery, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            method = _ref8.method, controllerName = _ref8.controllerName, actionName = _ref8.actionName, body = _ref8.body, queryConfig = _ref8.queryConfig;
            onlyQuery = !actionName && queryConfig;
            _context7.next = 4;
            return fetch("".concat(Connection.BASE_URL, "/api/").concat(controllerName).concat(!onlyQuery ? '/' : '').concat(actionName).concat(queryConfig ? "?".concat(Connection.queryFromObject(queryConfig)) : ''), {
              body: body,
              method: method
            });

          case 4:
            response = _context7.sent;
            return _context7.abrupt("return", response.ok ? response.json() : {});

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x20) {
    return _ref9.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (Connection);

/***/ }),

/***/ "./src/platform/services/validator.js":
/*!********************************************!*\
  !*** ./src/platform/services/validator.js ***!
  \********************************************/
/*! exports provided: isValidEmail, isValidPassword, isValidPhoneNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEmail", function() { return isValidEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPassword", function() { return isValidPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPhoneNum", function() { return isValidPhoneNum; });
var isValidEmail = function isValidEmail(value) {
  if (!value && value !== '') return false;
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};
var isValidPassword = function isValidPassword(value) {
  if (!value && value !== "") return false;
  var regex = /^.{6,}$/;
  return regex.test(value);
};
var isValidPhoneNum = function isValidPhoneNum(value) {
  if (!value && value !== "") return false;
  var regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  return regex.test(value);
};

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react-notifications":
/*!**************************************!*\
  !*** external "react-notifications" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-notifications");

/***/ })

};
//# sourceMappingURL=main.842d2acf7000faa505f8.hot-update.js.map