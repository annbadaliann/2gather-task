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
/* harmony import */ var _pages_Notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/Notes */ "./src/pages/Notes/index.jsx");
/* harmony import */ var _pages_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/Cart */ "./src/pages/Cart/index.js");
/* harmony import */ var _pages_Search_medicine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/Search-medicine */ "./src/pages/Search-medicine/index.jsx");




var to = {
  home: '/home',
  signIn: '/sign-in'
};
var routes = [{
  exact: true,
  component: _pages_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
  path: to.home
}, {
  exact: true,
  component: SignIn,
  path: to.signIn
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

};
//# sourceMappingURL=main.60638f1acde75fcf702b.hot-update.js.map