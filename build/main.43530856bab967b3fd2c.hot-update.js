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
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! blob-util */ "blob-util");
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(blob_util__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./style.scss */ "./src/pages/TopicSuggestion/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "/Users/Grisho/Desktop/2gather 2v zip/src/pages/TopicSuggestion/index.jsx";











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
      // location and category
      categories: [],
      categoryId: null,
      lat: "",
      lng: "",
      address: "",
      // topic content
      topicContent: {
        title: "rtrt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint aspernatur, voluptate adipisci ab qui laborum a veniam itaque error tempore sit impedit ullam veritatis? Atque nemo sequi cumque reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint aspernatur, voluptate adipisci ab qui laborum a veniam itaque error tempore sit impedit ullam veritatis? Atque nemo sequi cumque reiciendis.",
        amount: "4545"
      },
      // media
      imagesToPreview: [],
      imagesToUpload: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getCategories",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.test();

              _context.prev = 1;
              _context.next = 4;
              return fetch("https://2.evollai.com/api/topic/category", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Accept-Language": "*"
                }
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              result = _context.sent;

              if (result) {
                _this.setState({
                  categories: result.data
                });
              }

              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "topicContentFormChange", function (e) {
      var topicContent = _this.state.topicContent;
      topicContent[e.target.name] = e.target.value;

      _this.setState({
        topicContent: topicContent
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "moveToTopicContent", function () {
      var _this$state = _this.state,
          page = _this$state.page,
          categoryId = _this$state.categoryId,
          address = _this$state.address;

      _this.setState({
        submittedOne: true
      });

      if (page === 1 && categoryId && address) {
        _this.setState({
          page: 2,
          checkMarkOne: true
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "moveToMedia", function () {
      var _this$state2 = _this.state,
          page = _this$state2.page,
          _this$state2$topicCon = _this$state2.topicContent,
          title = _this$state2$topicCon.title,
          description = _this$state2$topicCon.description;

      _this.setState({
        submittedTwo: true
      });

      if (page === 2 && title && description.length >= 500) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "test",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var token, formData, res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //const { topicContent } = this.state;
              token = localStorage.getItem("authToken");
              formData = new FormData();
              formData.append("address", "sss");
              formData.append("amount", "sddd");
              formData.append("description", "sddssdsdds");
              formData.append("title", "sddssdsdsd");
              formData.append("categoryId", "w5535");
              formData.append("lat", "55");
              formData.append("lng", "55"); //for (let i = 0; i < this.state.imagesToUpload.length; i++) {
              //formData.append(`file`, this.state.imagesToUpload[i]);
              //}
              //console.log formData.values());

              _context2.prev = 9;
              _context2.next = 12;
              return fetch("https://2.evollai.com/api/topic", {
                method: "POST",
                body: formData,
                headers: {
                  //"Content-Type": "multipart/form-data",
                  "Accept-Language": "*",
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 12:
              res = _context2.sent;
              _context2.next = 15;
              return res.json();

            case 15:
              data = _context2.sent;
              _context2.next = 21;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](9);
              console.log(_context2.t0);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[9, 18]]);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "publishHandler",
    /*#__PURE__*/
    function () {
      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
        var topicContent, token, formData, res, data, f1, _res, _data, f2, _res2, _data2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                topicContent = _this.state.topicContent;
                token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDgzODc0MzMxOTA1NDUwOWQzMDljMjciLCJyb2xlIjoxLCJwcm92aWRlciI6MSwiaWF0IjoxNTczMjkxMDM5LCJleHAiOjE2MDQzOTUwMzl9.q70aCOw7llwSuYv32GUGTJ6zkmkXlZHjNhAWhjkBSQQ";
                formData = new FormData();
                formData.append("address", _this.state.address);
                formData.append("amount", topicContent.amount);
                formData.append("description", topicContent.description);
                formData.append("title", topicContent.title);
                formData.append("categoryId", _this.state.categoryId);
                formData.append("lat", _this.state.lat);
                formData.append("lng", _this.state.lng);
                formData.append("file", _this.state.imagesToUpload[0]);
                _context3.prev = 11;
                _context3.next = 14;
                return fetch("https://2.evollai.com/api/topic", {
                  method: "POST",
                  body: formData,
                  headers: {
                    //"Content-Type": "multipart/form-data",
                    "Accept-Language": "*",
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 14:
                res = _context3.sent;
                _context3.next = 17;
                return res.json();

              case 17:
                data = _context3.sent;
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](11);
                console.log(_context3.t0);

              case 23:
                f1 = new FormData();
                f1.append("address", _this.state.address);
                f1.append("amount", topicContent.amount);
                f1.append("description", topicContent.description);
                f1.append("title", topicContent.title);
                f1.append("categoryId", _this.state.categoryId);
                f1.append("lat", _this.state.lat);
                f1.append("lng", _this.state.lng);
                f1.append("file[]", _this.state.imagesToUpload[0]);
                _context3.prev = 32;
                _context3.next = 35;
                return fetch("https://2.evollai.com/api/topic", {
                  method: "POST",
                  body: f1,
                  headers: {
                    // "Content-Type": "multipart/form-data",
                    "Accept-Language": "*",
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 35:
                _res = _context3.sent;
                _context3.next = 38;
                return _res.json();

              case 38:
                _data = _context3.sent;
                _context3.next = 44;
                break;

              case 41:
                _context3.prev = 41;
                _context3.t1 = _context3["catch"](32);
                console.log(_context3.t1);

              case 44:
                // hamberutyun - is the key, hima noric petqa anenq, nu save reload
                f2 = new FormData();
                f2.append("address", _this.state.address);
                f2.append("amount", topicContent.amount);
                f2.append("description", topicContent.description);
                f2.append("title", topicContent.title);
                f2.append("categoryId", _this.state.categoryId);
                f2.append("lat", _this.state.lat);
                f2.append("lng", _this.state.lng);
                f2.append("file[0]", _this.state.imagesToUpload[0]);
                _context3.prev = 53;
                _context3.next = 56;
                return fetch("https://2.evollai.com/api/topic", {
                  method: "POST",
                  body: f2,
                  headers: {
                    // "Content-Type": "multipart/form-data",
                    "Accept-Language": "*",
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 56:
                _res2 = _context3.sent;
                _context3.next = 59;
                return _res2.json();

              case 59:
                _data2 = _context3.sent;
                _context3.next = 65;
                break;

              case 62:
                _context3.prev = 62;
                _context3.t2 = _context3["catch"](53);
                console.log(_context3.t2);

              case 65:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[11, 20], [32, 41], [53, 62]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getImages", function (imagesToPreview, imagesToUpload) {
      _this.setState({
        imagesToPreview: imagesToPreview,
        imagesToUpload: imagesToUpload
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getAddress", function (lat, lng, address) {
      _this.setState({
        lat: lat,
        lng: lng,
        address: address
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
      var _this$state4 = this.state,
          checkMarkOne = _this$state4.checkMarkOne,
          checkMarkTwo = _this$state4.checkMarkTwo,
          checkMarkThree = _this$state4.checkMarkThree,
          page = _this$state4.page,
          submittedOne = _this$state4.submittedOne,
          submittedTwo = _this$state4.submittedTwo,
          submittedThree = _this$state4.submittedThree,
          submittedFour = _this$state4.submittedFour,
          address = _this$state4.address,
          categories = _this$state4.categories,
          categoryId = _this$state4.categoryId,
          _this$state4$topicCon = _this$state4.topicContent,
          title = _this$state4$topicCon.title,
          description = _this$state4$topicCon.description,
          amount = _this$state4$topicCon.amount,
          imagesToPreview = _this$state4.imagesToPreview;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_semantics_header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "suggest-topic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: checkMarkOne ? "done-tab" : "active-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, "Category and ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, "location"), checkMarkOne && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: checkMarkOne && checkMarkTwo ? "done-tab" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, "Topic content", checkMarkOne && checkMarkTwo && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: checkMarkOne && checkMarkTwo && checkMarkThree ? "done-tab" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, "Media", checkMarkOne && checkMarkTwo && checkMarkThree && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, "Preview"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, page === 1 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_10__["default"], {
        moveNextPage: this.moveToTopicContent,
        onCategoryChange: this.onCategoryChange,
        address: address,
        categories: categories,
        submitted: submittedOne,
        categoryId: categoryId,
        getAddress: this.getAddress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }) : page === 2 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_TopicContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onChange: this.topicContentFormChange,
        moveNextPage: this.moveToMedia,
        title: title,
        description: description,
        amount: amount,
        submitted: submittedTwo,
        typed: this.state.typed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }) : page === 3 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Media__WEBPACK_IMPORTED_MODULE_12__["default"], {
        getImages: this.getImages,
        moveNextPage: this.moveToReview,
        submitted: submittedThree,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }) : page === 4 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Preview__WEBPACK_IMPORTED_MODULE_13__["default"], {
        images: imagesToPreview,
        publish: this.publishHandler,
        submitted: submittedFour,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_10__["default"], {
        moveNextPage: this.moveToTopicContent,
        onCategoryChange: this.onCategoryChange,
        address: address,
        categories: categories,
        submitted: submittedOne,
        categoryId: categoryId,
        getAddress: this.getAddress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_semantics_footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }));
    }
  }]);

  return TopicSuggestion;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopicSuggestion);

/***/ })

};
//# sourceMappingURL=main.43530856bab967b3fd2c.hot-update.js.map