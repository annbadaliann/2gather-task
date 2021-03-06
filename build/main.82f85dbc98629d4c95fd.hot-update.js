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
/* harmony import */ var _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/delete.png */ "./src/assets/images/delete.png");
/* harmony import */ var _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_delete_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_add_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/images/add.png */ "./src/assets/images/add.png");
/* harmony import */ var _assets_images_add_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_add_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Slider */ "./src/pages/TopicSuggestion/tabs/components/Slider.jsx");







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
      uploading: false,
      imagesToPreview: [],
      imagesToUpload: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "selectFileHandler", function (e) {
      //   console.log("hello world");
      //   this.setState({
      //     selectedFile: e.target.files[0]
      //   });
      _this.state.imagesToPreview.push({
        url: URL.createObjectURL(e.target.files[0])
      });

      _this.state.imagesToUpload.push({
        url: e.target.files[0]
      });

      _this.setState({
        imagesToPreview: _this.state.imagesToPreview,
        imagesToUpload: _this.state.imagesToUpload
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "openSlider", function () {
      console.log("open slider");
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChange", function (e) {
      var files = Array.from(e.target.files);

      _this.setState({
        uploading: true
      });

      var formData = new FormData(); // files.forEach((file, i) => {
      //   formData.append(i, file);
      // });
      // fetch(`${url} `, {
      //   method: "POST",
      //   body: formData
      // })
      //   .then(res => res.json())
      //   .then(images => {
      //     this.setState({
      //       uploading: false,
      //       images
      //     });
      //   });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "deleteImage", function (index) {
      _this.state.imagesToPreview.splice(index, 1);

      console.log(1);

      _this.setState({
        imagesToPreview: _this.state.imagesToPreview // imagesToUpload: this.state.imagesToUpload

      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Media, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // let { imagePreviewUrl } = this.state;
      // let $imagePreview = null;
      // if (imagePreviewUrl) {
      //   $imagePreview = <img src={imagePreviewUrl} />;
      // } else {
      //   $imagePreview = (
      //     <div className="previewText">Please select an Image for Preview</div>
      //   );
      // }
      var _this$state = this.state,
          uploading = _this$state.uploading,
          images = _this$state.images;

      var content = function content() {
        switch (true) {
          case images.length > 0:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Images, {
              images: images,
              removeImage: _this2.removeImage,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            });

          default:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Buttons, {
              onChange: _this2.onChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            });
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Media"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Choose images for the overview section of your topic."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery upload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_images_add_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "add",
        onClick: this.uploadFileHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file",
        onChange: this.selectFileHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }))), this.state.imagesToPreview.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "gallery",
          style: {
            backgroundImage: "url(".concat(item ? item.url : null, ")")
          } // onClick={this.openSlider}
          ,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_8___default.a,
          alt: "delete",
          className: "delete-img",
          onClick: function onClick() {
            return _this2.deleteImage(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
          "for": "imageUpload",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "G-button",
        onClick: this.props.moveNextPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "Continue"));
    }
  }]);

  return Media;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ })

};
//# sourceMappingURL=main.82f85dbc98629d4c95fd.hot-update.js.map