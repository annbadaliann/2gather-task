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
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! blob-util */ "./node_modules/blob-util/dist/blob-util.es.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./style.scss */ "./src/pages/TopicSuggestion/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "/Users/Grisho/Desktop/2gather filter/src/pages/TopicSuggestion/index.jsx";











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
      imagesToPreview: [],
      imagesToUpload: [],
      locationAndCategory: {
        form: {
          categories: [],
          address: "",
          lat: "44.55",
          lng: "45.55"
        }
      },
      topicContent: {
        form: {
          title: "hjhhj",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint aspernatur, voluptate adipisci ab qui laborum a veniam itaque error tempore sit impedit ullam veritatis? Atque nemo sequi cumque reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint aspernatur, voluptate adipisci ab qui laborum a veniam itaque error tempore sit impedit ullam veritatis? Atque nemo sequi cumque reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint aspernatur, voluptate adipisci ab qui laborum a veniam itaque error tempore sit impedit ullam veritatis? Atque nemo sequi cumque reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint aspernatur, voluptate adipisci ab qui laborum a veniam itaque error tempore sit impedit ullam veritatis? Atque nemo sequi cumque reiciendis.",
          amount: 888
        }
      },
      review: {},
      checkMarkOne: false,
      checkMarkTwo: false,
      checkMarkThree: false,
      checkMarkFour: false,
      submitted: false,
      typed: false,
      categoryId: null,
      lat: "",
      lng: ""
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "firstPageChange", function (e) {
      var form = _this.state.locationAndCategory.form;
      form[e.target.name] = e.target.value;

      _this.setState({
        form: form
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "secondPageChange", function (e) {
      var form = _this.state.topicContent.form;
      form[e.target.name] = e.target.value;

      _this.setState({
        form: form
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "moveToTopicContent", function () {
      var _this$state = _this.state,
          page = _this$state.page,
          submittedOne = _this$state.submittedOne,
          categoryId = _this$state.categoryId,
          address = _this$state.locationAndCategory.form.address;

      _this.setState({
        submittedOne: true
      });

      if (page === 1 && categoryId) {
        _this.setState({
          page: 2,
          checkMarkOne: true
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "moveToMedia", function () {
      var _this$state2 = _this.state,
          page = _this$state2.page,
          submittedTwo = _this$state2.submittedTwo,
          _this$state2$topicCon = _this$state2.topicContent.form,
          title = _this$state2$topicCon.title,
          description = _this$state2$topicCon.description,
          amount = _this$state2$topicCon.amount;

      _this.setState({
        submittedTwo: true
      });

      console.log(page, title, description.length, amount);

      if (page === 2 && title && description.length >= 500 && amount) {
        _this.setState({
          page: 3,
          checkMarkOne: true,
          checkMarkTwo: true
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "moveToReview", function () {
      var _this$state3 = _this.state,
          page = _this$state3.page,
          imagesToPreview = _this$state3.imagesToPreview;

      _this.setState({
        submittedThree: true
      });

      if (page === 3 && imagesToPreview.length >= 1) {
        _this.setState({
          page: 4,
          checkMarkOne: true,
          checkMarkTwo: true,
          checkMarkThree: true
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getFileBlob", function (file) {
      return new Promise(function (res) {
        var fileReader = new FileReader();

        fileReader.onloadend =
        /*#__PURE__*/
        function () {
          var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
            var arrayBuffer, blob;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    arrayBuffer = e.target.result;
                    _context.next = 3;
                    return Object(blob_util__WEBPACK_IMPORTED_MODULE_17__["arrayBufferToBlob"])(arrayBuffer, file.type);

                  case 3:
                    blob = _context.sent;
                    res(blob);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();

        fileReader.readAsArrayBuffer(file);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "publishHandler",
    /*#__PURE__*/
    function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var _this$state4, locationAndCategory, topicContent, media, token, formData, file, blob, res, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$state4 = _this.state, locationAndCategory = _this$state4.locationAndCategory, topicContent = _this$state4.topicContent, media = _this$state4.media;
                token = localStorage.getItem("authToken");
                formData = new FormData();
                file = _this.state.imagesToUpload[0].url;
                _context2.next = 6;
                return _this.getFileBlob(file);

              case 6:
                blob = _context2.sent;
                formData.append("address", locationAndCategory.form.address);
                formData.append("amount", topicContent.form.amount);
                formData.append("description", topicContent.form.description);
                formData.append("title", topicContent.form.title);
                formData.append("categoryId", _this.state.categoryId);
                formData.append("lat", _this.state.lat);
                formData.append("lng", _this.state.lng);
                formData.append("file", blob);
                console.log(formData.entries(), "++++++++++++++++++");
                _context2.prev = 16;
                _context2.next = 19;
                return fetch("https://2.evollai.com/api/topic", {
                  method: "POST",
                  body: JSON.stringify(formData),
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 19:
                res = _context2.sent;
                _context2.next = 22;
                return res.json();

              case 22:
                data = _context2.sent;
                _context2.next = 28;
                break;

              case 25:
                _context2.prev = 25;
                _context2.t0 = _context2["catch"](16);
                console.log(_context2.t0);

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[16, 25]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getCategories",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var categories, response, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              categories = _this.state.locationAndCategory.form.categories;
              _context3.prev = 1;
              _context3.next = 4;
              return fetch("https://2.evollai.com/api/topic/category", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Accept-Language": "*"
                }
              });

            case 4:
              response = _context3.sent;
              _context3.next = 7;
              return response.json();

            case 7:
              result = _context3.sent;
              console.log(result, "categories");

              if (result) {
                _this.setState({
                  categories: result.data
                });
              }

              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](1);
              console.log(_context3.t0);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 12]]);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "sendData", function (imagesToPreview, imagesToUpload) {
      console.log(imagesToUpload);

      _this.setState({
        imagesToPreview: imagesToPreview,
        imagesToUpload: imagesToUpload
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getLatLng", function (lat, lng) {
      _this.setState({
        lat: lat,
        lng: lng
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onCategoryChange", function (e) {
      _this.setState({
        categoryId: e.target.value
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
      var _this$state5 = this.state,
          _this$state5$location = _this$state5.locationAndCategory.form,
          address = _this$state5$location.address,
          categories = _this$state5$location.categories,
          categoryId = _this$state5$location.categoryId,
          _this$state5$topicCon = _this$state5.topicContent.form,
          title = _this$state5$topicCon.title,
          description = _this$state5$topicCon.description,
          amount = _this$state5$topicCon.amount;
      console.log(title, description, amount);
      var _this$state6 = this.state,
          checkMarkOne = _this$state6.checkMarkOne,
          checkMarkTwo = _this$state6.checkMarkTwo,
          checkMarkThree = _this$state6.checkMarkThree,
          page = _this$state6.page,
          submittedOne = _this$state6.submittedOne,
          submittedTwo = _this$state6.submittedTwo,
          submittedThree = _this$state6.submittedThree,
          submittedFour = _this$state6.submittedFour;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_semantics_header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "suggest-topic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: checkMarkOne ? "done-tab" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, "Category and ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, "location"), checkMarkOne && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: checkMarkOne && checkMarkTwo ? "done-tab" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, "Topic content", checkMarkOne && checkMarkTwo && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: checkMarkOne && checkMarkTwo && checkMarkThree ? "done-tab" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, "Media", checkMarkOne && checkMarkTwo && checkMarkThree && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, "Preview"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, page === 1 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_10__["default"], {
        moveNextPage: this.moveToTopicContent,
        onChange: this.firstPageChange,
        onCategoryChange: this.onCategoryChange,
        address: address,
        categories: this.state.categories,
        submitted: submittedOne,
        categoryId: this.state.categoryId,
        getLatLng: this.getLatLng,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }) : page === 2 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_TopicContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onChange: this.secondPageChange,
        moveNextPage: this.moveToMedia,
        title: title,
        description: description,
        amount: amount,
        submitted: submittedTwo,
        typed: this.state.typed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }) : page === 3 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Media__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sendData: this.sendData,
        moveNextPage: this.moveToReview,
        submitted: submittedThree,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }) : page === 4 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Preview__WEBPACK_IMPORTED_MODULE_13__["default"], {
        images: this.state.imagesToPreview,
        publish: this.publishHandler,
        submitted: submittedFour,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_10__["default"], {
        moveNextPage: this.moveToTopicContent,
        onChange: this.firstPageChange,
        onCategoryChange: this.onCategoryChange,
        address: address,
        categories: this.state.categories,
        submitted: submittedOne,
        categoryId: this.state.categoryId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_semantics_footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }));
    }
  }]);

  return TopicSuggestion;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopicSuggestion);

/***/ })

};
//# sourceMappingURL=main.2bc655eb7424e10d853e.hot-update.js.map