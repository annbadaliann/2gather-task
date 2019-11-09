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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/LocationAndCategory */ "./src/pages/TopicSuggestion/tabs/LocationAndCategory.jsx");
/* harmony import */ var _tabs_TopicContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/TopicContent */ "./src/pages/TopicSuggestion/tabs/TopicContent.jsx");
/* harmony import */ var _tabs_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/Media */ "./src/pages/TopicSuggestion/tabs/Media.jsx");
/* harmony import */ var _tabs_Preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/Preview */ "./src/pages/TopicSuggestion/tabs/Preview.jsx");
/* harmony import */ var _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/check-mark.png */ "./src/assets/images/check-mark.png");
/* harmony import */ var _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/pages/TopicSuggestion/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "/Users/Grisho/Desktop/2gather/src/pages/TopicSuggestion/index.jsx";









var TopicSuggestion = function TopicSuggestion() {
  // moveNextPage = page => {
  //   const { firstPageForm } = this.state;
  //   if (page === 1) {
  //     this.setState({
  //       page: 2,
  //       checkMark: true
  //     });
  //     if (firstPageForm.category === null && location === "") {
  //       this.setState({
  //         inputEroor: true
  //       });
  //     }
  //   } else if (page === 2) {
  //     this.setState({
  //       page: 3,
  //       checkMark: true
  //     });
  //   } else if (page === 3) {
  //     this.setState({
  //       page: 4,
  //       checkMark: true
  //     });
  //   } else {
  //     this.setState({
  //       page: 5,
  //       checkMark: true
  //     });
  //   }
  // };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "suggest-topic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "Category and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), "location", _this.state.page === 2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "check-mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Topic content", _this.state.page === 3 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "check-mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "Media", _this.state.page === 4 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "check-mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "Preview", _this.state.page === 4 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "check-mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tabs_TopicContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tabs_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tabs_Preview__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }), ")}"));
};

/* harmony default export */ __webpack_exports__["default"] = (TopicSuggestion);

/***/ })

};
//# sourceMappingURL=main.44bd846946efd3909d97.hot-update.js.map