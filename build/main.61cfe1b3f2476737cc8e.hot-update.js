exports.id = "main";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./src/app.js");
var _jsxFileName = "/Users/Grisho/Desktop/2gather filter/src/server.js";






var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = express__WEBPACK_IMPORTED_MODULE_2___default()();
server.disable("x-powered-by").use(express__WEBPACK_IMPORTED_MODULE_2___default.a["static"]("/Users/Grisho/Desktop/2gather filter/public")).get("/*", function (req, res) {
  setTimeout(function () {
    var context = {};
    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["StaticRouter"], {
      context: context,
      location: req.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    })));

    if (context.url) {
      res.redirect(context.url);
    } else {
      var html = "<!doctype html>\n        <html lang=\"en\">\n          <head>\n              <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n              <meta charset=\"utf-8\" />\n              <title>2gather</title>\n              <meta name=\"keywoard\" content=\"shopping store move like zaza clothes tshirt\" />\n              <meta name=\"description\" content=\"Move Like Zaza\">\n              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n              // <script type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyAoAvMTGXJzUFLy7jokRvWGBoA8kgYtO5c&libraries=places\"></script> \n              <script type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBbpiFVdy5UIPua2fDDq4TPoBBAZx79feU&libraries=places\"></script> \n              ".concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : "", "\n              ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n          </head>\n          <body>\n              <div id=\"root\">").concat(markup, "</div>\n              <div id=\"modal\"></div>\n          </body>\n        </html>");
      res.status(200).send(html);
    }
  }, 2000);
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.61cfe1b3f2476737cc8e.hot-update.js.map