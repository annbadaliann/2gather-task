exports.id = "main";
exports.modules = {

/***/ "./src/pages/TopicSuggestion/tabs/Media.jsx":
/*!**************************************************!*\
  !*** ./src/pages/TopicSuggestion/tabs/Media.jsx ***!
  \**************************************************/
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
/* harmony import */ var _assets_images_preview1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/preview1.png */ "./src/assets/images/preview1.png");
/* harmony import */ var _assets_images_preview1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_preview1_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_add_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/images/add.png */ "./src/assets/images/add.png");
/* harmony import */ var _assets_images_add_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_add_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/Grisho/Desktop/2gather/src/pages/TopicSuggestion/tabs/Media.jsx";





var Media =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Media, _React$Component);

  function Media() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Media);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Media)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      selectedFile: null
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "selectFileHandler", function (e) {
      _this.setState({
        selectedFile: e.target.files[0]
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "uploadFileHandler", function () {
      var fd = new FormData();
      fd.append("image", _this.state.selectedFile, _this.state.selectedFile.name);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Media, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Media"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Choose images for the overview section of your topic."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery upload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_images_add_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "add",
        onClick: this.uploadFileHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file",
        onChange: this.selectFileeHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_images_preview1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_images_preview1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_images_preview1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "G-button",
        onClick: this.props.moveNextPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Continue"));
    }
  }]);

  return Media;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ })

};
//# sourceMappingURL=main.8aacae58fdca25959fc7.hot-update.js.map