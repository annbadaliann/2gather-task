exports.id = "main";
exports.modules = {

/***/ "./node_modules/blob-util/dist/blob-util.es.js":
false,

/***/ "./node_modules/primeicons/fonts/primeicons.eot":
false,

/***/ "./node_modules/primeicons/fonts/primeicons.svg":
false,

/***/ "./node_modules/primeicons/fonts/primeicons.ttf":
false,

/***/ "./node_modules/primeicons/fonts/primeicons.woff":
false,

/***/ "./node_modules/primeicons/primeicons.css":
false,

/***/ "./node_modules/primereact/resources/images/color.png":
false,

/***/ "./node_modules/primereact/resources/images/hue.png":
false,

/***/ "./node_modules/primereact/resources/images/line.gif":
false,

/***/ "./node_modules/primereact/resources/images/loading.gif":
false,

/***/ "./node_modules/primereact/resources/images/password-meter.png":
false,

/***/ "./node_modules/primereact/resources/primereact.min.css":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-300.eot":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-300.svg":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-300.ttf":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-300.woff":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-300.woff2":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-700.eot":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-700.svg":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-700.ttf":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-700.woff":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-700.woff2":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-regular.eot":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-regular.svg":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-regular.ttf":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-regular.woff":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/fonts/open-sans-v15-latin-regular.woff2":
false,

/***/ "./node_modules/primereact/resources/themes/nova-light/theme.css":
false,

/***/ "./node_modules/slick-carousel/slick/ajax-loader.gif":
false,

/***/ "./node_modules/slick-carousel/slick/fonts/slick.eot":
false,

/***/ "./node_modules/slick-carousel/slick/fonts/slick.svg":
false,

/***/ "./node_modules/slick-carousel/slick/fonts/slick.ttf":
false,

/***/ "./node_modules/slick-carousel/slick/fonts/slick.woff":
false,

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
false,

/***/ "./node_modules/slick-carousel/slick/slick.css":
false,

/***/ "./src/assets/images/add.png":
false,

/***/ "./src/assets/images/check-mark.png":
false,

/***/ "./src/assets/images/delete.png":
false,

/***/ "./src/assets/images/direct.png":
false,

/***/ "./src/assets/images/facebook.png":
false,

/***/ "./src/assets/images/instagram.png":
false,

/***/ "./src/assets/images/linkedin.png":
false,

/***/ "./src/assets/images/location.png":
false,

/***/ "./src/assets/images/notification.png":
false,

/***/ "./src/assets/images/right-arrow.png":
false,

/***/ "./src/assets/images/search.png":
false,

/***/ "./src/assets/images/twitter.png":
false,

/***/ "./src/assets/images/user.png":
false,

/***/ "./src/components/click-outside/index.js":
false,

/***/ "./src/components/modal/index.js":
false,

/***/ "./src/components/modal/style.scss":
false,

/***/ "./src/pages/TopicSuggestion/index.jsx":
/*!*********************************************!*\
  !*** ./src/pages/TopicSuggestion/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/Grisho/Desktop/2gather filter/src/pages/TopicSuggestion/index.jsx: Can not use keyword 'await' outside an async function (138:19)\n\n\u001b[0m \u001b[90m 136 | \u001b[39m    fileReader\u001b[33m.\u001b[39monloadend \u001b[33m=\u001b[39m (e) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 137 | \u001b[39m      \u001b[36mconst\u001b[39m arrayBuffer \u001b[33m=\u001b[39m e\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39mresult\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 138 | \u001b[39m      \u001b[36mconst\u001b[39m blob \u001b[33m=\u001b[39m await arrayBufferToBlob(arrayBuffer\u001b[33m,\u001b[39m file\u001b[33m.\u001b[39mtype)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 139 | \u001b[39m      console\u001b[33m.\u001b[39mlog(blob)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 140 | \u001b[39m    }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 141 | \u001b[39m    fileReader\u001b[33m.\u001b[39mreadAsArrayBuffer(file)\u001b[33m;\u001b[39m\u001b[0m\n    at Object.raise (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:6387:17)\n    at Object.checkReservedWord (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:9624:14)\n    at Object.parseIdentifierName (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:9596:12)\n    at Object.parseIdentifier (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:9570:23)\n    at Object.parseExprAtom (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:8772:27)\n    at Object.parseExprAtom (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:3609:20)\n    at Object.parseExprSubscripts (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:8483:23)\n    at Object.parseMaybeUnary (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:8463:21)\n    at Object.parseExprOps (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:8329:23)\n    at Object.parseMaybeConditional (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:8302:23)\n    at Object.parseMaybeAssign (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:8249:21)\n    at Object.parseVar (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:10551:26)\n    at Object.parseVarStatement (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:10370:10)\n    at Object.parseStatementContent (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:9967:21)\n    at Object.parseStatement (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:9900:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/Grisho/Desktop/2gather filter/node_modules/@babel/parser/lib/index.js:10476:25)");

/***/ }),

/***/ "./src/pages/TopicSuggestion/style.scss":
false,

/***/ "./src/pages/TopicSuggestion/tabs/LocationAndCategory.jsx":
false,

/***/ "./src/pages/TopicSuggestion/tabs/Media.jsx":
false,

/***/ "./src/pages/TopicSuggestion/tabs/Preview.jsx":
false,

/***/ "./src/pages/TopicSuggestion/tabs/TopicContent.jsx":
false,

/***/ "./src/pages/TopicSuggestion/tabs/components/PublishModal.jsx":
false,

/***/ "./src/pages/TopicSuggestion/tabs/components/Slider.jsx":
false,

/***/ "./src/semantics/footer/index.jsx":
false,

/***/ "./src/semantics/footer/style.scss":
false,

/***/ "./src/semantics/header/index.jsx":
false,

/***/ "./src/semantics/header/style.scss":
false,

/***/ "@babel/runtime/helpers/extends":
false,

/***/ "@babel/runtime/helpers/objectWithoutProperties":
false,

/***/ "google-map-react":
false,

/***/ "primereact/dropdown":
false,

/***/ "prop-types":
false,

/***/ "react-dom":
false,

/***/ "react-google-autocomplete":
false,

/***/ "react-slick":
false

};
//# sourceMappingURL=main.f5672cff8bd7551f0eca.hot-update.js.map