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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/2gather.jpg */ "./src/assets/images/2gather.jpg");
/* harmony import */ var _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _platform_api_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../platform/api/auth */ "./src/platform/api/auth.js");
/* harmony import */ var _platform_services_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../platform/services/validator */ "./src/platform/services/validator.js");
/* harmony import */ var _platform_constants_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../platform/constants/enums */ "./src/platform/constants/enums.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./src/pages/SignIn/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "/Users/Grisho/Desktop/2gather/src/pages/SignIn/index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var SignIn = function SignIn() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: "",
    password: ""
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: false,
    password: false
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      passToggle = _useState6[0],
      setPassToggle = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      submitted = _useState8[0],
      setSubmitted = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    hits: []
  }),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),
      data = _useState10[0],
      setData = _useState10[1];

  var change = function change(_ref) {
    var _ref$target = _ref.target,
        name = _ref$target.name,
        value = _ref$target.value;
    return setFields(function (prevState) {
      return _objectSpread({}, prevState, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, name, value));
    });
  }; //   submit = async e => {
  //     if (e) e.preventDefault();
  //     const { email, password } = this.state.form;
  //     this.setState({
  //       submited: true
  //     });
  //     if (isValidEmail(email) && isValidPassword(password)) {
  //       const response = await AuthController.Login({
  //         email,
  //         password,
  //         osType: 3,
  //         language: 1
  //       });
  //       if (response && response.success) {
  //         console.log("welcome");
  //         localStorage.setItem("authToken", response.data.authToken);
  //         window.routerHistory.push("/home");
  //       } else {
  //         console.log(response);
  //         NotificationManager.error(response.message);
  //       }
  //     }
  //   };


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://2gatherapi.abmdemo.me/?language='en");

          case 2:
            response = _context.sent;
            console.log(response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []); //   checkForSend = () => {
  //     const { form } = this.state;
  //     if (form.firstName && form.lastName &&
  //       isValidEmail(form.email) &&
  //       form.subject && form.message) this.setState({ submitLoading: true }, async () => {
  //       const result = await ContactController.Send(form);
  //       if (result.Success) {
  //         NotificationManager.success('Message successfully sent');
  //         window.routerHistory.push(ROUTES.HOME);
  //       } else NotificationManager.error('Failed to send the message');
  //       this.setState({ submitLoading: false });
  //     });
  //   }

  var togglePassword = function togglePassword() {
    return setPassToggle(!passToggle);
  };

  var focusHandler = function focusHandler(key) {
    return setFocus(function (prevState) {
      return _objectSpread({}, prevState, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, !prevState[key]));
    });
  };

  var blurHandler = function blurHandler(key) {
    return setFocus(function (prevState) {
      return _objectSpread({}, prevState, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, !prevState[key]));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "sign-in-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "sign-in-form-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, "Enter your email and password and login in your ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }), " account"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "G-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    className: "G-form-label  ".concat(focus.email ? "G-label-animated" : ""),
    htmlFor: "signin-email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "email",
    onFocus: function onFocus() {
      return focusHandler("email");
    },
    onBlur: function onBlur() {
      return blurHandler("email");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "input-border ".concat(focus.email ? "input-border-animated" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "G-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    className: "G-form-label  ".concat(focus.password ? "G-label-animated" : ""),
    htmlFor: "signin-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: !passToggle ? "password" : "text",
    onFocus: function onFocus() {
      return focusHandler("password");
    },
    onBlur: function onBlur() {
      return blurHandler("password");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "input-border ".concat(focus.password ? "input-border-animated" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: !passToggle ? "icon-ic_eye" : "icon-ic_eyeclosed",
    onClick: togglePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    className: "G-button",
    onClick: send,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, "Sign in")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "2gather",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ })

};
//# sourceMappingURL=main.820ad4819547dd2791ab.hot-update.js.map