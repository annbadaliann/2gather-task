exports.id = "main";
exports.modules = {

/***/ "./src/pages/TopicSuggestion/tabs/Preview.jsx":
/*!****************************************************!*\
  !*** ./src/pages/TopicSuggestion/tabs/Preview.jsx ***!
  \****************************************************/
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
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/modal */ "./src/components/modal/index.js");
/* harmony import */ var _components_PublishModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PublishModal */ "./src/pages/TopicSuggestion/tabs/components/PublishModal.jsx");
/* harmony import */ var _assets_images_user_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/images/user.png */ "./src/assets/images/user.png");
/* harmony import */ var _assets_images_user_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_preview1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/images/preview1.png */ "./src/assets/images/preview1.png");
/* harmony import */ var _assets_images_preview1_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_preview1_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_preview2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/images/preview2.png */ "./src/assets/images/preview2.png");
/* harmony import */ var _assets_images_preview2_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_preview2_png__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/Grisho/Desktop/2gather/src/pages/TopicSuggestion/tabs/Preview.jsx";







var Preview =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Preview, _React$Component);

  function Preview() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Preview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Preview)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      publishModal: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "openModal", function () {
      _this.setState({
        publishModal: true
      });

      _this.props.publish();
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Preview, [{
    key: "render",
    value: function render() {
      var publishModal = this.state.publishModal;
      var images = this.props.images;
      console.log(images);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "preview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Preview"), images && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "galleries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery one",
        style: {
          background: "url(".concat(images[0].url, ") center/cover no-repeat")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, images.length === 2 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery two ".concat(images.length === 2 ? "big" : ""),
        style: {
          background: "url(".concat(images[1].url, ") center/cover no-repeat")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), images.lengt === 3 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery three ".concat(images.length > 3 ? "show-more" : ""),
        style: {
          background: "url(".concat(images[2].url, ") center/cover no-repeat")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_images_user_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Anna Smith")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Lets help Abovyan secondary school and start main building reconstraction"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "G-button",
        onClick: this.openModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Publish"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isOpen: publishModal,
        className: "publish-modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_PublishModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })));
    }
  }]);

  return Preview;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Preview);

/***/ })

};
//# sourceMappingURL=main.ac04c0c1c6cba4ec511b.hot-update.js.map