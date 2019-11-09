exports.id = "main";
exports.modules = {

/***/ "./src/pages/SignIn/index.jsx":
/*!************************************!*\
  !*** ./src/pages/SignIn/index.jsx ***!
  \************************************/
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
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/2gather.jpg */ "./src/assets/images/2gather.jpg");
/* harmony import */ var _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _platform_api_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../platform/api/auth */ "./src/platform/api/auth.js");
/* harmony import */ var _platform_services_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../platform/services/validator */ "./src/platform/services/validator.js");
/* harmony import */ var _platform_constants_enums__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../platform/constants/enums */ "./src/platform/constants/enums.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style.scss */ "./src/pages/SignIn/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_14__);









var _jsxFileName = "/Users/Grisho/Desktop/2gather/src/pages/SignIn/index.jsx";







var SignIn =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(SignIn, _React$Component);

  function SignIn() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SignIn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(SignIn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {
      form: {
        email: "",
        password: ""
      },
      focus: {
        email: false,
        password: false
      },
      passToggle: false,
      inputWarning: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "submit",
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var _this$state$form, email, password, res, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _this$state$form = _this.state.form, email = _this$state$form.email, password = _this$state$form.password;

                if (!(Object(_platform_services_validator__WEBPACK_IMPORTED_MODULE_12__["isValidEmail"])(email) && password)) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return fetch("https://2.evollai.com/api/auth/login", {
                  method: "POST",
                  body: JSON.stringify({
                    email: email,
                    password: password,
                    osType: "3"
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": "*",
                    language: 1,
                    deviceId: "string",
                    deviceToke: "string"
                  }
                });

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.json();

              case 9:
                data = _context.sent;
                console.log(data);
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);

              case 16:
                if (!Object(_platform_services_validator__WEBPACK_IMPORTED_MODULE_12__["isValidEmail"])(email) || !password) {
                  _this.setState({
                    inputWarning: true
                  });
                }

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 13]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "change", function (_ref2) {
      var _ref2$target = _ref2.target,
          name = _ref2$target.name,
          value = _ref2$target.value;
      console.log(name, value);
      var form = _this.state.form;
      form[name] = value;
      console.log(form);

      _this.setState({
        form: form
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onFocus", function (key) {
      _this.setState({
        focus: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, key, true)
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onBlur", function (e, key) {
      _this.setState({
        focus: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, key, e.target.value !== "")
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "togglePassword", function () {
      _this.setState({
        passToggle: !_this.state.passToggle
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SignIn, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          form = _this$state.form,
          focus = _this$state.focus,
          passToggle = _this$state.passToggle,
          inputWarning = _this$state.inputWarning;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "sign-in-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "sign-in-form-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "Enter your email and password and login in your ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), " account"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "G-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "G-form-label  ".concat(focus.email ? "G-label-animated" : ""),
        htmlFor: "signin-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "email",
        onChange: this.change,
        name: "email",
        onFocus: function onFocus() {
          return _this2.onFocus("email");
        },
        onBlur: function onBlur(e) {
          return _this2.onBlur(event, "email");
        },
        className: inputWarning ? "G-invalid-input" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "input-border ".concat(focus.email ? "input-border-animated" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "G-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "G-form-label  ".concat(focus.password ? "G-label-animated" : ""),
        htmlFor: "signin-password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "password",
        type: !passToggle ? "password" : "text",
        onChange: this.change,
        onFocus: function onFocus() {
          return _this2.onFocus("password");
        },
        onBlur: function onBlur() {
          return _this2.onBlur(event, "password");
        },
        className: inputWarning ? "G-invalid-input" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "input-border ".concat(focus.password ? "input-border-animated" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: !passToggle ? "icon-ic_eye" : "icon-ic_eyeclosed",
        onClick: this.togglePassword,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "G-button",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "Sign in")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "2gather",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      })));
    }
  }]);

  return SignIn;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ })

};
//# sourceMappingURL=main.1ec36a62443a4254294f.hot-update.js.map