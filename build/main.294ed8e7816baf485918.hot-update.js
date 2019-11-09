exports.id = "main";
exports.modules = {

/***/ "./src/components/select/index.js":
/*!****************************************!*\
  !*** ./src/components/select/index.js ***!
  \****************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../click-outside */ "./src/components/click-outside/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.scss */ "./src/components/select/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/Grisho/Desktop/2gather/src/components/select/index.js";





var Select =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Select, _PureComponent);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      isOpen: false,
      value: null
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toggleState", function (isOpen) {
      return _this.setState({
        isOpen: isOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "chooseItem", function (item) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          withoutChange = _this$props.withoutChange;

      if (item.value === "//cr") {
        _this.setState({
          value: null,
          isOpen: false
        });

        onChange && onChange(null);
      } else {
        _this.setState({
          value: !withoutChange ? item : null,
          isOpen: false
        });

        onChange && onChange(item);
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Select, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          placeholderOpacity = _this$props2.placeholderOpacity,
          withoutChange = _this$props2.withoutChange,
          placeholder = _this$props2.placeholder,
          onNewClick = _this$props2.onNewClick,
          className = _this$props2.className,
          options = _this$props2.options,
          useValue = _this$props2.useValue,
          withNew = _this$props2.withNew;
      var isOpen = this.state.isOpen;
      var value = useValue ? options.find(function (item) {
        return item.value === _this2.props.value;
      }) : this.state.value;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_click_outside__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: className,
        onClickOutside: function onClickOutside() {
          return _this2.toggleState(false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "M-select ".concat(isOpen ? "M-select-open" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "M-select-header",
        onClick: function onClick() {
          return _this2.toggleState(!isOpen);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: !value && placeholderOpacity ? "M-select-placeholder" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, value && !withoutChange ? value.name : placeholder), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: isOpen ? "icon-arrow_top" : "icon-arrow_down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), isOpen && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "M-select-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, console.log(options), options.map(function (item) {
        return (value ? value.value !== item.value : item.value !== "//cr") && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: item.value,
          onClick: function onClick() {
            return _this2.chooseItem(item);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, item.name);
      }), withNew && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "M-select-new-label",
        onClick: onNewClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "New"))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, _ref) {
      var value = _ref.value;

      if (nextProps.defaultValue && nextProps.options && !value) {
        var _value = null;
        nextProps.options.map(function (item) {
          if (!_value && item.value === nextProps.defaultValue) _value = item;
          return true;
        });
        return _value ? {
          value: _value
        } : null;
      }

      return null;
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Select, "propTypes", {
  placeholderOpacity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  withoutChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  onNewClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  withNew: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]),
  options: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.element]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number])
  }))
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Select, "defaultProps", {
  placeholder: "Choose",
  className: "",
  onChange: null,
  onNewClick: null,
  withNew: false,
  withoutChange: false,
  options: []
});

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ })

};
//# sourceMappingURL=main.294ed8e7816baf485918.hot-update.js.map