exports.id = "main";
exports.modules = {

/***/ "./src/platform/constants/routes.js":
/*!******************************************!*\
  !*** ./src/platform/constants/routes.js ***!
  \******************************************/
/*! exports provided: to, routes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to", function() { return to; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/Home */ "./src/pages/Home/index.jsx");
/* harmony import */ var _pages_SignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/SignIn */ "./src/pages/SignIn/index.jsx");
/* harmony import */ var _pages_TopicSuggestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/TopicSuggestion */ "./src/pages/TopicSuggestion/index.jsx");



var to = {
  home: '/home',
  signIn: '/sign-in',
  topicSuggestion: '/topic-suggestion'
};
var routes = [{
  exact: true,
  component: _pages_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
  path: to.home
}, {
  exact: true,
  component: _pages_SignIn__WEBPACK_IMPORTED_MODULE_1__["default"],
  path: to.signIn
}, {
  exact: true,
  component: _pages_TopicSuggestion__WEBPACK_IMPORTED_MODULE_2__["default"],
  path: to.topicSuggestion
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

};
//# sourceMappingURL=main.dfc9526ee60507411e03.hot-update.js.map