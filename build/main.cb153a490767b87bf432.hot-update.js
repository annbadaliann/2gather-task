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
/* harmony import */ var _tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/LocationAndCategory */ "./src/pages/TopicSuggestion/tabs/LocationAndCategory.jsx");
/* harmony import */ var _tabs_TopicContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabs/TopicContent */ "./src/pages/TopicSuggestion/tabs/TopicContent.jsx");
/* harmony import */ var _tabs_Media__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs/Media */ "./src/pages/TopicSuggestion/tabs/Media.jsx");
/* harmony import */ var _tabs_Preview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabs/Preview */ "./src/pages/TopicSuggestion/tabs/Preview.jsx");
/* harmony import */ var _semantics_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../semantics/header */ "./src/semantics/header/index.jsx");
/* harmony import */ var _semantics_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../semantics/footer */ "./src/semantics/footer/index.jsx");
/* harmony import */ var _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/images/check-mark.png */ "./src/assets/images/check-mark.png");
/* harmony import */ var _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./style.scss */ "./src/pages/TopicSuggestion/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_17__);









var _jsxFileName = "/Users/Grisho/Desktop/2gather/src/pages/TopicSuggestion/index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var TopicSuggestion =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(TopicSuggestion, _React$Component);

  function TopicSuggestion() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TopicSuggestion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(TopicSuggestion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {
      page: 1,
      locationAndCategory: {
        form: {
          category: null,
          location: ""
        }
      },
      topicContent: {
        form: {
          title: "",
          description: "",
          amount: ""
        }
      },
      media: {
        form: {
          file: null
        }
      },
      review: {
        form: {
          category: null,
          location: ""
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "firstPageChange", function (_ref) {
      var _ref$target = _ref.target,
          name = _ref$target.name,
          value = _ref$target.value;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          locationAndCategory: _objectSpread({}, prevState.locationAndCategory, {
            form: _objectSpread({}, prevState.locationAndCategory.form, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, name, value))
          })
        });
      }); // const { locationAndCategory } = this.state;
      // locationAndCategory[e.target.name] = e.target.value;
      // this.setState({ locationAndCategory });

    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "secondPageChange", function (_ref2) {
      var _ref2$target = _ref2.target,
          name = _ref2$target.name,
          value = _ref2$target.value;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          topicContent: _objectSpread({}, prevState.topicContent, {
            form: _objectSpread({}, prevState.topicContent.form, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, name, value))
          })
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onCategoryChange", function (value) {
      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          locationAndCategory: _objectSpread({}, prevState.locationAndCategory, {
            form: _objectSpread({}, prevState.locationAndCategory.form, {
              category: value
            })
          })
        });
      });

      console.log(_this.state.topicContent.form.title);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "moveNextPage", function (page) {
      var _this$state = _this.state,
          _this$state$locationA = _this$state.locationAndCategory,
          category = _this$state$locationA.form,
          location = _this$state$locationA.location,
          _this$state$topicCont = _this$state.topicContent,
          title = _this$state$topicCont.form,
          description = _this$state$topicCont.description,
          amount = _this$state$topicCont.amount;

      if (category && location && page === 1) {
        _this.setState({
          page: 2,
          checkMark: true
        });
      } else {
        console.log(" fill form");
      }

      if (title && description && location && page === 2) {
        _this.setState({
          page: 3,
          checkMark: true
        });
      } else {
        console.log(" fill form");
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "publishHandler",
    /*#__PURE__*/
    function () {
      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var _this$state$form, email, password, res, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _this$state$form = _this.state.form, email = _this$state$form.email, password = _this$state$form.password;

                if (!(email && password)) {
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
                    osType: "3",
                    language: 1
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": "*"
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
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 13]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TopicSuggestion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state$locationA2 = this.state.locationAndCategory.form,
          location = _this$state$locationA2.location,
          category = _this$state$locationA2.category;
      var _this$state$locationA3 = this.state.locationAndCategory.form,
          title = _this$state$locationA3.title,
          description = _this$state$locationA3.description,
          amount = _this$state$locationA3.amount;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_semantics_header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "suggest-topic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "Category and ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), "location"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, "Topic content"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, "Media"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "Preview"), "ew")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, this.state.page === 1 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_10__["default"], {
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(1);
        },
        onChange: this.firstPageChange,
        onCategoryChange: this.onCategoryChange,
        location: location,
        category: category,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }) : this.state.page === 2 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_TopicContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onChange: this.secondPageChange,
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(2);
        },
        title: title,
        description: description,
        amount: amount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }) : this.state.page === 3 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Media__WEBPACK_IMPORTED_MODULE_12__["default"], {
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Preview__WEBPACK_IMPORTED_MODULE_13__["default"], {
        publish: this.publishHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_semantics_footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }));
    }
  }]);

  return TopicSuggestion;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopicSuggestion);

/***/ })

};
//# sourceMappingURL=main.cb153a490767b87bf432.hot-update.js.map