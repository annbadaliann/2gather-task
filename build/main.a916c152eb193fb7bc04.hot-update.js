exports.id = "main";
exports.modules = {

/***/ "./src/assets/images/add.png":
/*!***********************************!*\
  !*** ./src/assets/images/add.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAABHNCSVQICAgIfAhkiAAAARlJREFUWIXtlj1qAzEQhd+TlcZgO6Vhi+wRcoPoGG4WNieJc4PkBNmQPYhyE1fGZdjCxsZ4UuRvYwgMEsEu5usGxOMTiNEjMtlMZ+V24J8IBgiayfLlNjfT5QbsnJ8TDAAAou6Kqj65lJDlr1mk/Ouslmyp/8CktJiUFpPSYlJaTEqLSWnhZjord+7iTpj6u/OawOXXJIIFKIukJEEcr/2j/yhoCATTnI6DiRJg2gWJ0A33dN8F7UwQMjiIPJ9apI8DGgJAV1R1amMUoCZ51ZtfKRKThA6Io1Ubsx/SW1FFAjc/lnI/WbbznMyzXAkmpcWktJiUFpPSYlJaTEpLttRxTXEHJNWWPj43YLz2D91w/9kY0YxWbbbUOxb4SGNFTY9JAAAAAElFTkSuQmCC"

/***/ }),

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
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
      // selectedFile: null,
      // file: "",
      // imagePreviewUrl: "",
      uploading: false,
      images: []
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Media, [{
    key: "_handleSubmit",
    // selectFileHandler = e => {
    //   console.log("hello world");
    //   this.setState({
    //     selectedFile: e.target.files[0]
    //   });
    // };
    // uploadFileHandler = () => {
    //   const fd = new FormData();
    //   fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    //   axios.post("https://2.evollai.com/api/topic", fd).then(res => {
    //     console.log(res);
    //   });
    // };
    value: function _handleSubmit(e) {
      e.preventDefault(); // TODO: do something with -> this.state.file

      console.log("handle uploading-", this.state.file);
    }
  }, {
    key: "_handleImageChange",
    value: function _handleImageChange(e) {
      var _this2 = this;

      e.preventDefault();
      var reader = new FileReader();
      var file = e.target.files[0];

      reader.onloadend = function () {
        _this2.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var imagePreviewUrl = this.state.imagePreviewUrl;
      var $imagePreview = null;

      if (imagePreviewUrl) {
        $imagePreview = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: imagePreviewUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        });
      } else {
        $imagePreview = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "previewText",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, "Please select an Image for Preview");
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Media"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Choose images for the overview section of your topic."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "previewComponent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this3._handleSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "fileInput",
        type: "file",
        onChange: function onChange(e) {
          return _this3._handleImageChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "submitButton",
        type: "submit",
        onClick: function onClick(e) {
          return _this3._handleSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Upload Image")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "imgPreview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, $imagePreview)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "G-button",
        onClick: this.props.moveNextPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Continue"));
    }
  }]);

  return Media;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

};
//# sourceMappingURL=main.a916c152eb193fb7bc04.hot-update.js.map