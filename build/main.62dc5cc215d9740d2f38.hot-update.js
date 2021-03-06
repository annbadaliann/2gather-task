exports.id = "main";
exports.modules = {

/***/ "./src/pages/TopicSuggestion/tabs/LocationAndCategory.jsx":
/*!****************************************************************!*\
  !*** ./src/pages/TopicSuggestion/tabs/LocationAndCategory.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_google_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-autocomplete */ "react-google-autocomplete");
/* harmony import */ var react_google_autocomplete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_autocomplete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/dropdown */ "primereact/dropdown");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_location_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/images/location.png */ "./src/assets/images/location.png");
/* harmony import */ var _assets_images_location_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_location_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_resources_themes_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primereact/resources/themes/nova-light/theme.css */ "./node_modules/primereact/resources/themes/nova-light/theme.css");
/* harmony import */ var primereact_resources_themes_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_themes_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primereact/resources/primereact.min.css */ "./node_modules/primereact/resources/primereact.min.css");
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeicons/primeicons.css */ "./node_modules/primeicons/primeicons.css");
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/Users/Grisho/Desktop/2gather filter/src/pages/TopicSuggestion/tabs/LocationAndCategory.jsx";









var LocationAndCategory =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(LocationAndCategory, _React$Component);

  function LocationAndCategory() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LocationAndCategory);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LocationAndCategory)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      city: null,
      lat: 40.1872023,
      lng: 44.55820900000003
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onContinue", function () {
      _this.props.moveNextPage();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "exampleMapStyles", [{
      featureType: "poi",
      elementType: "geometry",
      stylers: [{
        color: "red"
      }]
    }, {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#ccc"
      }]
    }]);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "icon", {
      url: _assets_images_location_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      // url
      scaledSize: new google.maps.Size(30, 40),
      // scaled size
      origin: new google.maps.Point(0, 0),
      // origin
      anchor: new google.maps.Point(0, 0) // anchor

    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "placeSelectHandler", function (place) {
      _this.setState({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });

      _this.props.getLatLng(_this.state.lat, _this.state.lng);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LocationAndCategory, [{
    key: "renderMarkers",
    value: function renderMarkers(map, maps) {
      var marker = new maps.Marker({
        position: {
          lat: this.state.lat,
          lng: this.state.lng
        },
        map: map,
        icon: this.icon
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          form = _this$state.form,
          error = _this$state.error;
      var _this$props = this.props,
          onChange = _this$props.onChange,
          categories = _this$props.categories,
          address = _this$props.address,
          submitted = _this$props.submitted,
          categoryId = _this$props.categoryId,
          onCategoryChange = _this$props.onCategoryChange;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "location-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Location and category"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Please select your project category and choose location of your", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), "proposed project"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Category"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(primereact_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        optionLabel: "name",
        value: categoryId,
        options: categories,
        onChange: onCategoryChange,
        placeholder: "Choose category",
        className: submitted && !categoryId ? "G-invalid-input" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Location")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_google_autocomplete__WEBPACK_IMPORTED_MODULE_8___default.a, {
        style: {
          width: "100%"
        },
        onPlaceSelected: this.placeSelectHandler,
        types: ["establishment", "geocode"],
        placeholder: "Choose location",
        className: submitted && !address ? "G-invalid-input" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          height: "450px",
          width: "100%",
          marginTop: "30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_9___default.a, {
        bootstrapURLKeys: {
          key: "AIzaSyBpKF69rgtgYwZWCPeqYhdmD-ARYWMBdQE"
        },
        center: {
          lat: this.state.lat,
          lng: this.state.lng
        },
        defaultZoom: 16,
        options: {
          styles: this.exampleMapStyles
        },
        yesIWantToUseGoogleMapApiInternals: true,
        onGoogleApiLoaded: function onGoogleApiLoaded(_ref) {
          var map = _ref.map,
              maps = _ref.maps;
          return _this2.renderMarkers(map, maps);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "G-button",
        onClick: this.onContinue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "Continue"));
    }
  }]);

  return LocationAndCategory;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LocationAndCategory);

/***/ })

};
//# sourceMappingURL=main.62dc5cc215d9740d2f38.hot-update.js.map