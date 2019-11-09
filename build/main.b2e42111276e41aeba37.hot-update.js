exports.id = "main";
exports.modules = {

/***/ "./src/platform/routes.js":
/*!********************************!*\
  !*** ./src/platform/routes.js ***!
  \********************************/
/*! exports provided: to, routes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to", function() { return to; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
!(function webpackMissingModule() { var e = new Error("Cannot find module './pages/SignIn'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './pages/TopicSuggestion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var to = {
  signIn: "/sign-in",
  topicSuggestion: "/topic-suggestion"
};
var routes = [{
  exact: true,
  component: !(function webpackMissingModule() { var e = new Error("Cannot find module './pages/SignIn'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  path: to.signIn
}, {
  exact: true,
  component: !(function webpackMissingModule() { var e = new Error("Cannot find module './pages/TopicSuggestion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  path: to.topicSuggestion
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

};
//# sourceMappingURL=main.b2e42111276e41aeba37.hot-update.js.map