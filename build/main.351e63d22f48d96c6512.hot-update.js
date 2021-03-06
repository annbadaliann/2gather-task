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
      categories: [],
      page: 1,
      locationAndCategory: {
        form: {
          categories: [],
          categoryId: null,
          location: "",
          lat: "",
          lng: ""
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
      review: {},
      checkMarkOne: false,
      checkMarkTwo: false,
      checkMarkThree: false,
      checkMarkFour: false,
      submittedOne: false,
      submittedTwo: false,
      submittedThree: false,
      submittedFour: false,
      typed: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "firstPageChange", function (e) {
      // { target: { name, value } }
      // this.setState(prevState => ({
      //   ...prevState,
      //   locationAndCategory: {
      //     ...prevState.locationAndCategory,
      //     form: { ...prevState.locationAndCategory.form, [name]: value }
      //   }
      // }));
      var form = _this.state.locationAndCategory.form;
      form[e.target.name] = e.target.value;

      _this.setState({
        form: form
      });

      console.log(form, "form change"); // const { locationAndCategory.form } = this.state;
      // locationAndCategory[e.target.name] = e.target.value;
      // this.setState({ locationAndCategory.form });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "secondPageChange", function (_ref) {
      var _ref$target = _ref.target,
          name = _ref$target.name,
          value = _ref$target.value;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          topicContent: _objectSpread({}, prevState.topicContent, {
            form: _objectSpread({}, prevState.topicContent.form, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, name, value))
          })
        });
      }); // if (e.target.value) {
      //   this.setState({
      //     typed: true
      //   });
      // }

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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "moveNextPage", function (pageNum) {
      var _this$state = _this.state,
          submittedOne = _this$state.submittedOne,
          submittedTwo = _this$state.submittedTwo,
          submittedThree = _this$state.submittedThree,
          submittedFour = _this$state.submittedFour,
          page = _this$state.page;
      var _this$state2 = _this.state,
          _this$state2$location = _this$state2.locationAndCategory.form,
          category = _this$state2$location.category,
          location = _this$state2$location.location,
          _this$state2$topicCon = _this$state2.topicContent.form,
          title = _this$state2$topicCon.title,
          description = _this$state2$topicCon.description,
          amount = _this$state2$topicCon.amount;

      if (page === 1) {
        _this.setState({
          submittedOne: true
        });

        if (submittedOne && location) {
          _this.setState({
            page: 2,
            checkMarkOne: true
          });
        }
      }

      if (page === 2) {
        _this.setState({
          submittedTwo: true
        });

        if (submittedTwo && title && description.length >= 500 && amount) {
          _this.setState({
            page: 3,
            checkMarkOne: true,
            checkMarkTwo: true
          });
        }
      } // topic content
      // media


      if (page === 3) {
        _this.setState({
          submittedThree: true
        });

        if (submittedThree) {
          _this.setState({
            page: 4,
            checkMarkOne: true,
            checkMarkTwo: true,
            checkMarkThree: true
          });
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "publishHandler",
    /*#__PURE__*/
    function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var _this$state3, locationAndCategory, topicContent, media, review, token, formData, res, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("publishhh");
                _this$state3 = _this.state, locationAndCategory = _this$state3.locationAndCategory, topicContent = _this$state3.topicContent, media = _this$state3.media, review = _this$state3.review;
                token = localStorage.getItem("authToken");
                formData = new FormData(); // formData.append("address", loc.address); +
                // formData.append("amount", topicContent.amount); +
                // formData.append("description", topicContent.description); +
                // formData.append("title", topicContent.title); +
                // formData.append("categoryId", dataCollected.categoryId);
                // for (let i = 0; i < dataCollected.filesToUpload.length; i++) {
                //   formData.append("file", dataCollected.filesToUpload[i]);
                // }
                // formData.append("lat", dataCollected.lat);
                // formData.append("lng", dataCollected.lng);

                console.log(locationAndCategory.form.location, "address ");
                console.log(topicContent.form.title, "title");
                console.log(topicContent.form.description, "description");
                console.log(topicContent.form.amount, "amount");
                _context.prev = 8;

                if (!token) {
                  _context.next = 19;
                  break;
                }

                _context.next = 12;
                return fetch("https://2.evollai.com/api/topic", {
                  method: "POST",
                  formData: formData,
                  // body: JSON.stringify({
                  //   osType: 3,
                  //   categoryId: "1",
                  //   addres: "dfads",
                  //   lat: 1,
                  //   lng: "1",
                  //   title: "dfd",
                  //   description: "dfdå",
                  //   file: null
                  // }),
                  headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": "*",
                    language: 1,
                    authToken: token
                  }
                });

              case 12:
                res = _context.sent;
                _context.next = 15;
                return res.json();

              case 15:
                data = _context.sent;
                console.log(data);
                _context.next = 20;
                break;

              case 19:
                console.log("no token");

              case 20:
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](8);
                console.log(_context.t0);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[8, 22]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getCategories",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var categories, response, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              categories = _this.state.locationAndCategory.form.categories;
              _context2.prev = 1;
              _context2.next = 4;
              return fetch("https://2.evollai.com/api/topic/category", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Accept-Language": "*"
                }
              });

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              result = _context2.sent;
              console.log(result, "categories");

              if (result) {
                _this.setState({
                  categories: result.data
                });
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 12]]);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "sendData", function (images) {
      console.log(images);

      _this.setState({
        imagesToPreview: images
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TopicSuggestion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCategories();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state.imagesToPreview);
      var _this$state$locationA = this.state.locationAndCategory.form,
          location = _this$state$locationA.location,
          categories = _this$state$locationA.categories,
          categoryId = _this$state$locationA.categoryId;
      var _this$state$locationA2 = this.state.locationAndCategory.form,
          title = _this$state$locationA2.title,
          description = _this$state$locationA2.description,
          amount = _this$state$locationA2.amount;
      var _this$state4 = this.state,
          checkMarkOne = _this$state4.checkMarkOne,
          checkMarkTwo = _this$state4.checkMarkTwo,
          checkMarkThree = _this$state4.checkMarkThree,
          checkMarkFour = _this$state4.checkMarkFour,
          page = _this$state4.page,
          submittedOne = _this$state4.submittedOne,
          submittedTwo = _this$state4.submittedTwo,
          submittedThree = _this$state4.submittedThree,
          submittedFour = _this$state4.submittedFour;
      console.log(this.state.categories, "catttegories");
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_semantics_header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "suggest-topic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, "Category and ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, "location"), checkMarkOne && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, "Topic content", checkMarkOne && checkMarkTwo && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, "Media", checkMarkOne && checkMarkTwo && checkMarkThree && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, "Preview"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, page === 1 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_10__["default"], {
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(1);
        },
        onChange: this.firstPageChange,
        onCategoryChange: this.onCategoryChange,
        location: location,
        categories: this.state.categories,
        submitted: submittedOne,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }) : page === 2 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_TopicContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onChange: this.secondPageChange,
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(2);
        },
        title: title,
        description: description,
        amount: amount,
        submitted: submittedTwo,
        typed: this.state.typed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }) : page === 3 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Media__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sendData: this.sendData,
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(3);
        },
        submitted: submittedThree,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Preview__WEBPACK_IMPORTED_MODULE_13__["default"], {
        images: this.state.imagesToPreview,
        publish: this.publishHandler,
        submitted: submittedFour,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_semantics_footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }));
    }
  }]);

  return TopicSuggestion;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopicSuggestion);

/***/ })

};
//# sourceMappingURL=main.351e63d22f48d96c6512.hot-update.js.map