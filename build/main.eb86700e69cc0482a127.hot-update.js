exports.id = "main";
exports.modules = {

/***/ "./src/pages/TopicSuggestion/tabs/TopicContent.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/TopicSuggestion/tabs/TopicContent.jsx ***!
  \*********************************************************/
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







var _jsxFileName = "/Users/Grisho/Desktop/2gather filter/src/pages/TopicSuggestion/tabs/TopicContent.jsx";


var TopicContent =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TopicContent, _React$Component);

  function TopicContent() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TopicContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TopicContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      checked: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleCheck", function () {
      _this.setState({
        checked: !_this.state.checked
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TopicContent, [{
    key: "render",
    value: function render() {
      var checked = this.state.checked;
      var _this$props = this.props,
          onChange = _this$props.onChange,
          title = _this$props.title,
          description = _this$props.description,
          amount = _this$props.amount,
          submitted = _this$props.submitted,
          typed = _this$props.typed;
      console.log(submitted, checked);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "topic-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Topic Content"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint aspernatur, voluptate adipisci ab qui laborum a veniam itaque error tempore sit impedit ullam veritatis? Atque nemo sequi cumque reiciendis."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        placeholder: "title",
        name: "title",
        value: title,
        className: submitted && !title ? "G-invalid-input" : "",
        onChange: onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "description-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Description"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "min 500 symbols")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        placeholder: "Topic description",
        className: submitted && !description && !description.length < 500 ? "G-invalid-input" : "",
        name: "description",
        value: description,
        onChange: onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Rough project budget"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "number",
        placeholder: "Write amount",
        name: "amount",
        value: checked ? "" : amount,
        disabled: checked ? true : false,
        className: submitted && !amount ? "G-invalid-input" : submitted && checked ? "helloworld" : checked ? "opacity" : "",
        onChange: onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        onChange: this.handleCheck,
        checked: checked,
        disabled: typed ? true : false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "checkmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "I am not sure how much amount is required"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "G-button",
        onClick: this.props.moveNextPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Continue"));
    }
  }]);

  return TopicContent;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopicContent);

/***/ })

};
//# sourceMappingURL=main.eb86700e69cc0482a127.hot-update.js.map