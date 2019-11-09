exports.id = "main";
exports.modules = {

/***/ "./src/pages/SignIn/style.scss":
/*!*************************************!*\
  !*** ./src/pages/SignIn/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\n@import \"src\";\n^\n      File to import not found or unreadable: src.\n      in /Users/Grisho/Desktop/2gather/src/pages/SignIn/style.scss (line 1, column 1)");

/***/ }),

/***/ "./src/platform/services/validator.js":
/*!********************************************!*\
  !*** ./src/platform/services/validator.js ***!
  \********************************************/
/*! exports provided: isValidEmail, isValidPassword, isValidPhoneNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEmail", function() { return isValidEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPassword", function() { return isValidPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPhoneNum", function() { return isValidPhoneNum; });
var isValidEmail = function isValidEmail(value) {
  if (!value && value !== "") return false;
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};
var isValidPassword = function isValidPassword(value) {
  if (!value && value !== "") return false;
  var regex = /^.{6,}$/;
  return regex.test(value);
};
var isValidPhoneNum = function isValidPhoneNum(value) {
  if (!value && value !== "") return false;
  var regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  return regex.test(value);
};

/***/ })

};
//# sourceMappingURL=main.c6db732d0e2d8abfaf46.hot-update.js.map