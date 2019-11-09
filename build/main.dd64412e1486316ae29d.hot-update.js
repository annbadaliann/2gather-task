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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/2gather.jpg */ "./src/assets/images/2gather.jpg");
/* harmony import */ var _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _platform_api_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../platform/api/auth */ "./src/platform/api/auth.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/pages/SignIn/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "/Users/Grisho/Desktop/2gather/src/pages/SignIn/index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var SignIn = function SignIn() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: "",
    password: ""
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  state = {
    form: {
      email: "",
      password: ""
    },
    password: false,
    focus: {
      email: false,
      password: false
    },
    submited: false
  };

  validateEmail = function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  change = function change(e) {
    var form = _this.state.form;
    form[e.target.name] = e.target.value;

    _this.setState({
      form: form
    });
  };

  send = function send(e) {
    e.preventDefault();
    var submited = _this.state.submited;
    if (!submited) _this.setState({
      submited: true
    }, _this.checkForSend);else _this.checkForSend();
  }; //   checkForSend = () => {
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


  togglePassword = function togglePassword() {
    _this.setState({
      password: !_this.state.password
    });
  };

  focusHandler = function focusHandler(key) {
    _this.setState(function (prevState) {
      return _objectSpread({}, prevState, {
        focus: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, !prevState.focus[key])
      });
    }); // const focus = { ...this.state.focus };
    // focus[key] = !this.state.focus[key];
    // this.setState({ focus });

  };

  blurHandler = function blurHandler() {
    console.log("focused");

    _this.setState({
      focused: false
    });
  };

  var _this$state = _this.state,
      password = _this$state.password,
      focus = _this$state.focus;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sign-in-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sign-in-form-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, "Enter your email and password and login in your ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }), " account"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "G-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "G-form-label  ".concat(focus.email ? "G-label-animated" : ""),
    htmlFor: "signin-email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "email",
    onFocus: function onFocus() {
      return _this.focusHandler("email");
    },
    onBlur: _this.blurHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "input-border ".concat(focus.email ? "input-border-animated" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "G-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "G-form-label  ".concat(focus.password ? "G-label-animated" : ""),
    htmlFor: "signin-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: !password ? "password" : "text",
    onFocus: function onFocus() {
      return _this.focusHandler("password");
    },
    onBlur: _this.blurHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "input-border ".concat(focus.password ? "input-border-animated" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: !password ? "icon-ic_eye" : "icon-ic_eyeclosed",
    onClick: _this.togglePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "G-button",
    onClick: _this.handleSignIn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }, "Sign in")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _assets_images_2gather_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "2gather",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ })

};
//# sourceMappingURL=main.dd64412e1486316ae29d.hot-update.js.map