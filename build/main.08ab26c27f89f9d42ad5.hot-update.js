exports.id = "main";
exports.modules = {

/***/ "./src/pages/TopicSuggestion/index.jsx":
/*!*********************************************!*\
  !*** ./src/pages/TopicSuggestion/index.jsx ***!
  \*********************************************/
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
/* harmony import */ var _tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/LocationAndCategory */ "./src/pages/TopicSuggestion/tabs/LocationAndCategory.jsx");
/* harmony import */ var _tabs_TopicContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/TopicContent */ "./src/pages/TopicSuggestion/tabs/TopicContent.jsx");
/* harmony import */ var _tabs_Media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/Media */ "./src/pages/TopicSuggestion/tabs/Media.jsx");
/* harmony import */ var _tabs_Preview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabs/Preview */ "./src/pages/TopicSuggestion/tabs/Preview.jsx");
/* harmony import */ var _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/images/check-mark.png */ "./src/assets/images/check-mark.png");
/* harmony import */ var _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.scss */ "./src/pages/TopicSuggestion/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/Grisho/Desktop/2gather/src/pages/TopicSuggestion/index.jsx";








var TopicSuggestion =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TopicSuggestion, _React$Component);

  function TopicSuggestion() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TopicSuggestion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TopicSuggestion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      "continue": false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "moveNextPage", function (id) {
      if (id === 1) {
        _this.setState({
          "continue": true
        });
      } else if (id === 2) {
        _this.setState({
          "continue": true
        });
      } else if (id === 3) {
        _this.setState({
          "continue": true
        });
      } else {
        _this.setState({
          "continue": true
        });
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TopicSuggestion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "suggest-topic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Category and ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), "location ", this.state["continue"] && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Topic content", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Media", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Preview", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, !this.state["continue"] ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_8__["default"], {
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tabs_TopicContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tabs_Media__WEBPACK_IMPORTED_MODULE_10__["default"], {
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tabs_Preview__WEBPACK_IMPORTED_MODULE_11__["default"], {
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(4);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })));
    }
  }]);

  return TopicSuggestion;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopicSuggestion);

/***/ })

};
//# sourceMappingURL=main.08ab26c27f89f9d42ad5.hot-update.js.map