exports.id = "main";
exports.modules = {

/***/ "./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js ***!
  \*********************************************************************************/
/*! exports provided: withYMaps, YMaps, Map, Panorama, Button, FullscreenControl, GeolocationControl, ListBox, ListBoxItem, RouteButton, RouteEditor, RoutePanel, RulerControl, SearchControl, TrafficControl, TypeSelector, ZoomControl, Clusterer, ObjectManager, GeoObject, Circle, Placemark, Polygon, Polyline, Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withYMaps", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YMaps", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panorama", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenControl", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationControl", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBox", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBoxItem", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteButton", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteEditor", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePanel", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulerControl", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchControl", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficControl", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeSelector", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomControl", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clusterer", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectManager", function() { return et; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoObject", function() { return rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return st; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placemark", function() { return it; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return ct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return ut; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function o(t,e){return t(e={exports:{}},e.exports),e.exports}var r=o(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,l=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116;function y(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case p:case f:case s:case a:case i:case d:return t;default:switch(t=t&&t.$$typeof){case u:case l:case c:return t;default:return e}}case h:case m:case r:return e}}}function v(t){return y(t)===f}e.typeOf=y,e.AsyncMode=p,e.ConcurrentMode=f,e.ContextConsumer=u,e.ContextProvider=c,e.Element=o,e.ForwardRef=l,e.Fragment=s,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=a,e.StrictMode=i,e.Suspense=d,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===s||t===f||t===a||t===i||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===m||t.$$typeof===c||t.$$typeof===u||t.$$typeof===l)},e.isAsyncMode=function(t){return v(t)||y(t)===p},e.isConcurrentMode=v,e.isContextConsumer=function(t){return y(t)===u},e.isContextProvider=function(t){return y(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return y(t)===l},e.isFragment=function(t){return y(t)===s},e.isLazy=function(t){return y(t)===h},e.isMemo=function(t){return y(t)===m},e.isPortal=function(t){return y(t)===r},e.isProfiler=function(t){return y(t)===a},e.isStrictMode=function(t){return y(t)===i},e.isSuspense=function(t){return y(t)===d}});n(r),n(o(function(t,e){})),o(function(t){t.exports=r}),Object,Object,Object,function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()&&Object;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function i(){}function a(){}Function.call.bind(Object.prototype.hasOwnProperty),a.resetWarningCache=i;var c=o(function(t){t.exports=function(){function t(t,e,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}()}),u=n(o(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.displayName||t.name||("string"==typeof t&&t.length>0?t:"Unknown")}})),p=function(t,e){var n={};for(var o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n},f="__global_unique_id__",l=function(){return e[f]=(e[f]||0)+1};function d(t){return function(){return t}}var m=function(){};m.thatReturns=d,m.thatReturnsFalse=d(!1),m.thatReturnsTrue=d(!0),m.thatReturnsNull=d(null),m.thatReturnsThis=function(){return this},m.thatReturnsArgument=function(t){return t};var h=m,y=o(function(e,n){n.__esModule=!0;var o=s(c),r=s(l);function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}s(h),n.default=function(e,n){var s,c,p="__create-react-context-"+(0,r.default)()+"__",f=function(t){function e(){var n,o,r,s;i(this,e);for(var c=arguments.length,u=Array(c),p=0;p<c;p++)u[p]=arguments[p];return n=o=a(this,t.call.apply(t,[this].concat(u))),o.emitter=(r=o.props.value,s=[],{on:function(t){s.push(t)},off:function(t){s=s.filter(function(e){return e!==t})},get:function(){return r},set:function(t,e){r=t,s.forEach(function(t){return t(r,e)})}}),a(o,n)}return u(e,t),e.prototype.getChildContext=function(){var t;return(t={})[p]=this.emitter,t},e.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e=this.props.value,o=t.value,r=void 0;((s=e)===(i=o)?0!==s||1/s==1/i:s!=s&&i!=i)?r=0:(r="function"==typeof n?n(e,o):1073741823,0!=(r|=0)&&this.emitter.set(t.value,r))}var s,i},e.prototype.render=function(){return this.props.children},e}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);f.childContextTypes=((s={})[p]=o.default.object.isRequired,s);var l=function(t){function n(){var e,o;i(this,n);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return e=o=a(this,t.call.apply(t,[this].concat(s))),o.state={value:o.getValue()},o.onUpdate=function(t,e){0!=((0|o.observedBits)&e)&&o.setState({value:o.getValue()})},a(o,e)}return u(n,t),n.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},n.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);return l.contextTypes=((c={})[p]=o.default.object,c),{Provider:f,Consumer:l}},e.exports=n.default});n(y);var v=n(o(function(e,n){n.__esModule=!0;var o=s(react__WEBPACK_IMPORTED_MODULE_0___default.a),r=s(y);function s(t){return t&&t.__esModule?t:{default:t}}n.default=o.default.createContext||r.default,e.exports=n.default})),b=v(null),j=function(e){var n=u(e);return function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b.Consumer,null,function(r){if(null===r)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that <"+n+" /> is inside <YMaps /> provider");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(e,Object.assign({},{ymaps:r},o))})}},O=v(null),g=function(e){return function(n){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(O.Consumer,null,function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(e,Object.assign({},{parent:o},n))})}};function _(e,n,o){void 0===n&&(n=!1),void 0===o&&(o=[]);var r=function(r){function s(){r.call(this),this.state={loading:!0},this._isMounted=!1}return r&&(s.__proto__=r),(s.prototype=Object.create(r&&r.prototype)).constructor=s,s.prototype.componentDidMount=function(){var t=this;this._isMounted=!0,this.props.ymaps.load().then(function(e){return Promise.all(o.concat(t.props.modules).map(e.loadModule)).then(function(){!0===t._isMounted&&t.setState({loading:!1},function(){t.props.onLoad(e)})})}).catch(function(e){!0===t._isMounted&&t.props.onError(e)})},s.prototype.componentWillUnmount=function(){this._isMounted=!1},s.prototype.render=function(){var o=this.props.ymaps,r=!1===n||!1===this.state.loading,s=p(this.props,["onLoad","onError","modules","ymaps"]);return r&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(e,Object.assign({},{ymaps:o.getApi()},s))},s}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);return r.defaultProps={onLoad:Function.prototype,onError:Function.prototype,modules:[]},j(r)}var E={lang:"ru_RU",load:"",ns:"",mode:"release"},w={},C=function(t){var e=Date.now().toString(32);this.options=t,this.namespace=t.query.ns||E.ns,this.onload="__yandex-maps-api-onload__$$"+e,this.onerror="__yandex-maps-api-onerror__$$"+e};C.prototype.getApi=function(){return"undefined"!=typeof window&&this.namespace?window[this.namespace]:this.api},C.prototype.setApi=function(t){return this.api=t},C.prototype.getPromise=function(){return this.namespace?w[this.namespace]:this.promise},C.prototype.setPromise=function(t){return this.namespace?w[this.namespace]=this.promise=t:this.promise=t},C.prototype.load=function(){var t=this;if(this.getApi())return Promise.resolve(this.setApi(this.getApi()));if(this.getPromise())return this.setPromise(this.getPromise());var e=Object.assign({onload:this.onload,onerror:this.onerror},E,this.options.query),n=Object.keys(e).map(function(t){return t+"="+e[t]}).join("&"),o=["https://"+(this.options.enterprise?"enterprise.":"")+"api-maps.yandex.ru",this.options.version,"?"+n].join("/"),r=new Promise(function(e,n){window[t.onload]=function(n){delete window[t.onload],n.loadModule=t.loadModule.bind(t),n.ready(function(){return e(t.setApi(n))})},window[t.onerror]=function(e){delete window[t.onerror],n(e)},t.fetchScript(o).catch(window[t.onerror])});return this.setPromise(r)},C.prototype.fetchScript=function(t){var e=this;return new Promise(function(n,o){e.script=document.createElement("script"),e.script.type="text/javascript",e.script.onload=n,e.script.onerror=o,e.script.src=t,e.script.async="async",document.head.appendChild(e.script)})},C.prototype.loadModule=function(t){var e=this;return new Promise(function(n,o){e.getApi().modules.require(t,function(o){!function(t,e,n,o){void 0===o&&(o=!1),e="string"==typeof e?e.split("."):e.slice();for(var r,s=t;e.length>1;)s[r=e.shift()]||(s[r]={}),s=s[r];s[e[0]]=!0===o&&s[e[0]]||n}(e.api,t,o,!0),n(o)},o,e.getApi())})},C._name="__react-yandex-maps__";var P=function(e){function n(t){e.call(this,t),this.ymaps=new C(t)}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){!0===this.props.preload&&this.ymaps.load()},n.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b.Provider,{value:this.ymaps},this.props.children)},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);P.defaultProps={version:"2.1",enterprise:!1,query:{lang:"ru_RU",load:"",ns:""},preload:!1};var R=/^on(?=[A-Z])/;function S(t){return Object.keys(t).reduce(function(e,n){if(R.test(n)){var o=n.replace(R,"").toLowerCase();e._events[o]=t[n]}else e[n]=t[n];return e},{_events:{}})}function M(t,e,n){"function"==typeof n&&t.events.add(e,n)}function x(t,e,n){"function"==typeof n&&t.events.remove(e,n)}function T(t,e,n){Object.keys(Object.assign({},e,n)).forEach(function(o){e[o]!==n[o]&&(x(t,o,e[o]),M(t,o,n[o]))})}var k=function(t){return"default"+t.charAt(0).toUpperCase()+t.slice(1)};function A(t,e){return void 0!==t[e]||void 0===t[k(e)]}function U(t,e,n){return(A(t,e)?t[e]:t[k(e)])||n}function $(t,e,n){void 0===n&&(n=null),t&&t!==e&&(t.hasOwnProperty("current")?t.current=null:"function"==typeof t&&t(null)),e&&(e.hasOwnProperty("current")?e.current=n:"function"==typeof e&&e(n))}var B=function(e){function n(){var t=this;e.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(e){t._parentElement=e}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=n.mountObject(this._parentElement,this.props.ymaps.Map,this.props);this.setState({instance:t})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateObject(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){n.unmountObject(this.state.instance,this.props)},n.prototype.render=function(){var e=n.getParentElementSize(this.props),o=S(this.props),r=p(o,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(O.Provider,{value:this.state.instance},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",Object.assign({},{ref:this._getRef},e,r),this.props.children))},n.getParentElementSize=function(t){var e=t.width,n=t.height,o=t.style,r=t.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:e,height:n}}},n.mountObject=function(t,e,n){var o=S(n),r=o.instanceRef,s=o._events,i=new e(t,U(n,"state"),U(n,"options"));return Object.keys(s).forEach(function(t){return M(i,t,s[t])}),$(null,r,i),i},n.updateObject=function(t,e,n){var o=S(n),r=o._events,s=o.instanceRef,i=S(e),a=i._events,c=i.instanceRef;if(A(n,"state")){var u=U(e,"state",{}),p=U(n,"state",{});u.type!==p.type&&t.setType(p.type),u.behaviors!==p.behaviors&&(u.behaviors&&t.behaviors.disable(u.behaviors),p.behaviors&&t.behaviors.enable(p.behaviors)),u.zoom!==p.zoom&&t.setZoom(p.zoom),u.center!==p.center&&t.setCenter(p.center),p.bounds&&u.bounds!==p.bounds&&t.setBounds(p.bounds)}if(A(n,"options")){var f=U(e,"options"),l=U(n,"options",{});f!==l&&t.options.set(l)}U(e,"width")===U(n,"width")&&U(e,"height")===U(n,"height")||t.container.fitToViewport(),T(t,a,r),$(c,s,t)},n.unmountObject=function(t,e){var n=S(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach(function(e){return x(t,e,r[e])}),t.destroy(),$(o))},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);B.defaultProps={width:320,height:240};var D=_(B,!0,["Map"]),L=function(e){function n(){var t=this;e.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(e){t._parentElement=e}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=this;this._mounted=!0,this.props.ymaps.panorama.isSupported()&&n.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(function(e){return t._mounted&&t.setState({instance:e})})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateObject(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){this._mounted=!1,n.unmountObject(this.state.instance,this.props)},n.prototype.render=function(){var e=n.getParentElementSize(this.props);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",Object.assign({},{ref:this._getRef},e))},n.getParentElementSize=function(t){var e=t.width,n=t.height,o=t.style,r=t.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:e,height:n}}},n.mountObject=function(t,e,n){var o=S(n),r=o.instanceRef,s=o._events,i=U(n,"point"),a=U(n,"locateOptions"),c=U(n,"options");return new Promise(function(n,o){e.locate(i,a).done(function(o){if(o.length>0){var i=new e.Player(t,o[0],c);$(null,r,i),Object.keys(s).forEach(function(t){return M(i,t,s[t])}),n(i)}},o)})},n.updateObject=function(t,e,n){var o=S(n),r=o._events,s=o.instanceRef,i=S(e),a=i._events,c=i.instanceRef;if(A(n,"options")){var u=U(e,"options"),p=U(n,"options");u!==p&&t.options.set(p)}if(A(n,"point")){var f=U(n,"point"),l=U(e,"point"),d=U(n,"locateOptions");f!==l&&t.moveTo(f,d)}T(t,a,r),$(c,s,t)},n.unmountObject=function(t,e){var n=S(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach(function(e){return x(t,e,r[e])}),$(o))},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);L.defaultProps={width:320,height:240};var N=_(L,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]),F=function(e){function n(){e.call(this),this.state={instance:null}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=n.mountControl(this.props.ymaps.control[this.props.name],this.props);this.setState({instance:t})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateControl(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){n.unmountControl(this.state.instance,this.props)},n.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(O.Provider,{value:this.state.instance},this.props.children)},n.mountControl=function(t,e){var n=S(e),o=n.instanceRef,r=n.parent,s=n.lazy,i=n._events,a=new t({data:U(e,"data"),options:U(e,"options"),state:U(e,"state"),mapTypes:U(e,"mapTypes"),lazy:s});if(Object.keys(i).forEach(function(t){return M(a,t,i[t])}),r&&r.controls&&"function"==typeof r.controls.add)r.controls.add(a);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(a)}return $(null,o,a),a},n.updateControl=function(t,e,n){var o=S(n),r=o._events,s=o.instanceRef,i=S(e),a=i._events,c=i.instanceRef;if(A(n,"options")){var u=U(e,"options"),p=U(n,"options");u!==p&&t.options.set(p)}if(A(n,"data")){var f=U(e,"data"),l=U(n,"data");f!==l&&t.data.set(l)}if(A(n,"state")){var d=U(e,"state"),m=U(n,"state");d!==m&&t.state.set(m)}if(A(n,"mapTypes")){var h=U(e,"mapTypes"),y=U(n,"mapTypes");h!==y&&(t.removeAllMapTypes(),y.forEach(function(e){return t.addMapType(e)}))}T(t,a,r),$(c,s,t)},n.unmountControl=function(t,e){var n=S(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return x(t,e,s[e])}),r.controls&&"function"==typeof r.controls.remove?r.controls.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),$(o))},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),W=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"Button"}))},!0,["control.Button"])),z=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"FullscreenControl"}))},!0,["control.FullscreenControl"])),q=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"GeolocationControl"}))},!0,["control.GeolocationControl"])),I=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"ListBox"}))},!0,["control.ListBox"])),Z=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"ListBoxItem"}))},!0,["control.ListBoxItem"])),G=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"RouteButton"}))},!0,["control.RouteButton"])),V=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"RouteEditor"}))},!0,["control.RouteEditor"])),Y=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"RoutePanel"}))},!0,["control.RoutePanel"])),H=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"RulerControl"}))},!0,["control.RulerControl"])),J=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"SearchControl"}))},!0,["control.SearchControl"])),K=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"TrafficControl"}))},!0,["control.TrafficControl"])),Q=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"TypeSelector"}))},!0,["control.TypeSelector"])),X=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(F,Object.assign({},e,{name:"ZoomControl"}))},!0,["control.ZoomControl"])),tt=g(_(function(e){function n(){e.call(this),this.state={instance:null}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=n.mountObject(this.props.ymaps.Clusterer,this.props);this.setState({instance:t})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateObject(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){n.unmountObject(this.state.instance,this.props)},n.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(O.Provider,{value:this.state.instance},this.props.children)},n.mountObject=function(t,e){var n=S(e),o=n.instanceRef,r=n.parent,s=n._events,i=new t(U(e,"options"));if(Object.keys(s).forEach(function(t){return M(i,t,s[t])}),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(i);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount Clusterer");r.add(i)}return $(null,o,i),i},n.updateObject=function(t,e,n){var o=S(n),r=o._events,s=o.instanceRef,i=S(e),a=i._events,c=i.instanceRef;if(A(n,"options")){var u=U(e,"options"),p=U(n,"options");u!==p&&t.options.set(p)}T(t,a,r),$(c,s,t)},n.unmountObject=function(t,e){var n=S(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return x(t,e,s[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),$(o))},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),!0,["Clusterer"])),et=g(_(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.ObjectManager,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=S(e),o=n.instanceRef,r=n.parent,s=n._events,i=U(e,"options"),a=U(e,"features"),c=U(e,"filter"),u=U(e,"objects"),p=U(e,"clusters"),f=new t(i);if(f.add(a||[]),f.setFilter(c),f.objects.options.set(u),f.clusters.options.set(p),Object.keys(s).forEach(function(t){return M(f,t,s[t])}),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(f);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount ObjectManager");r.add(f)}return $(null,o,f),f},e.updateObject=function(t,e,n){var o=S(n),r=o._events,s=o.instanceRef,i=S(e),a=i._events,c=i.instanceRef;if(A(n,"options")){var u=U(e,"options"),p=U(n,"options");u!==p&&t.options.set(p)}if(A(n,"objects")){var f=U(e,"objects"),l=U(n,"objects");f!==l&&t.objects.options.set(l)}if(A(n,"clusters")){var d=U(e,"clusters"),m=U(n,"clusters");d!==m&&t.clusters.options.set(m)}if(A(n,"filter")){var h=U(e,"filter"),y=U(n,"filter");h!==y&&t.options.set(y)}if(A(n,"features")){var v=U(e,"features"),b=U(n,"features");v!==b&&(t.remove(v),t.add(b))}T(t,a,r),$(c,s,t)},e.unmountObject=function(t,e){var n=S(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return x(t,e,s[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),$(o))},e}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),!0,["ObjectManager"])),nt=function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this.props,n=t.name,o=t.ymaps,r=t.dangerZone,s=e.mountObject(r&&"function"==typeof r.modifyConstructor?r.modifyConstructor(o[n]):o[n],this.props);this.setState({instance:s})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=S(e),o=n.instanceRef,r=n.parent,s=n._events,i=new t(U(e,"geometry"),U(e,"properties"),U(e,"options"));if(Object.keys(s).forEach(function(t){return M(i,t,s[t])}),r&&r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(i);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(i)}return $(null,o,i),i},e.updateObject=function(t,e,n){var o=S(n),r=o._events,s=o.instanceRef,i=S(e),a=i._events,c=i.instanceRef;if(A(n,"geometry")){var u=U(e,"geometry",{}),p=U(n,"geometry",{});Array.isArray(p)&&p!==u?Array.isArray(p[0])&&"number"==typeof p[1]?(t.geometry.setCoordinates(p[0]),t.geometry.setRadius(p[1])):t.geometry.setCoordinates(p):"object"==typeof p&&(p.coordinates!==u.coordinates&&t.geometry.setCoordinates(p.coordinates),p.radius!==u.radius&&t.geometry.setRadius(p.radius))}if(A(n,"properties")){var f=U(e,"properties"),l=U(n,"properties");f!==l&&t.properties.set(l)}if(A(n,"options")){var d=U(e,"options"),m=U(n,"options");d!==m&&t.options.set(m)}T(t,a,r),$(c,s,t)},e.unmountObject=function(t,e){var n=S(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return x(t,e,s[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),$(o))},e}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),ot={modifyConstructor:function(t){function e(e,n,o){t.call(this,{geometry:e,properties:n},o)}return e.prototype=t.prototype,e}},rt=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nt,Object.assign({},e,{name:"GeoObject",dangerZone:ot}))},!0,["GeoObject"])),st=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nt,Object.assign({},e,{name:"Circle"}))},!0,["Circle"])),it=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nt,Object.assign({},e,{name:"Placemark"}))},!0,["Placemark"])),at=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nt,Object.assign({},e,{name:"Polygon"}))},!0,["Polygon"])),ct=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nt,Object.assign({},e,{name:"Polyline"}))},!0,["Polyline"])),ut=g(_(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nt,Object.assign({},e,{name:"Rectangle"}))},!0,["Rectangle"]));
//# sourceMappingURL=react-yandex-maps.esm.js.map


/***/ }),

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
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-yandex-maps */ "./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./style.scss */ "./src/pages/TopicSuggestion/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "/Users/Grisho/Desktop/2gather/src/pages/TopicSuggestion/index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












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
      locationAndCategory: {
        form: {
          categories: [],
          categoryId: null,
          location: ""
        }
      },
      topicContent: {
        form: {
          title: "",
          description: "",
          amount: ""
        }
      },
      media: {
        form: {
          file: null
        }
      },
      review: {
        form: {
          category: null,
          location: ""
        }
      },
      checkMarkOne: false,
      checkMarkTwo: false,
      checkMarkThree: false,
      checkMarkFour: false,
      submittedOne: false,
      submittedTwo: false,
      submittedThree: false,
      submittedFour: false,
      typed: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "firstPageChange", function (_ref) {
      var _ref$target = _ref.target,
          name = _ref$target.name,
          value = _ref$target.value;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          locationAndCategory: _objectSpread({}, prevState.locationAndCategory, {
            form: _objectSpread({}, prevState.locationAndCategory.form, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, name, value))
          })
        });
      }); // const { locationAndCategory } = this.state;
      // locationAndCategory[e.target.name] = e.target.value;
      // this.setState({ locationAndCategory });

    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "secondPageChange", function (_ref2) {
      var _ref2$target = _ref2.target,
          name = _ref2$target.name,
          value = _ref2$target.value;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          topicContent: _objectSpread({}, prevState.topicContent, {
            form: _objectSpread({}, prevState.topicContent.form, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, name, value))
          })
        });
      }); // if (e.target.value) {
      //   this.setState({
      //     typed: true
      //   });
      // }

    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onCategoryChange", function (value) {
      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          locationAndCategory: _objectSpread({}, prevState.locationAndCategory, {
            form: _objectSpread({}, prevState.locationAndCategory.form, {
              category: value
            })
          })
        });
      });

      console.log(_this.state.topicContent.form.title);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "moveNextPage", function (page) {
      var _this$state = _this.state,
          submittedOne = _this$state.submittedOne,
          submittedTwo = _this$state.submittedTwo,
          submittedThree = _this$state.submittedThree,
          submittedFour = _this$state.submittedFour; // this.setState({
      //   submitted: true
      // });

      var _this$state2 = _this.state,
          _this$state2$location = _this$state2.locationAndCategory.form,
          category = _this$state2$location.category,
          location = _this$state2$location.location,
          _this$state2$topicCon = _this$state2.topicContent.form,
          title = _this$state2$topicCon.title,
          description = _this$state2$topicCon.description,
          amount = _this$state2$topicCon.amount;
      console.log(submitted, location); // location and category

      if (submitted && location) {
        _this.setState({
          page: 2,
          checkMarkOne: true
        });
      } // topic content


      if (submitted && title && description && amount) {
        _this.setState({
          page: 3,
          checkMarkOne: true,
          checkMarkTwo: true
        });
      } // media


      if (submitted) {
        _this.setState({
          page: 4,
          checkMarkOne: true,
          checkMarkTwo: true,
          checkMarkThree: true
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "publishHandler",
    /*#__PURE__*/
    function () {
      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var token, res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("publishhh");
                token = localStorage.getItem("authToken");
                _context.prev = 2;

                if (!token) {
                  _context.next = 13;
                  break;
                }

                _context.next = 6;
                return fetch("https://2.evollai.com/api/topic", {
                  method: "POST",
                  body: JSON.stringify({
                    authToken: token,
                    osType: 3,
                    categoryId: "",
                    addres: "",
                    lat: 1,
                    lng: "1",
                    title: "",
                    description: "",
                    file: null
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": "*",
                    language: 1
                  }
                });

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.json();

              case 9:
                data = _context.sent;
                console.log(data);
                _context.next = 14;
                break;

              case 13:
                console.log("no token");

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 16]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getCategories",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var categories, response, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              categories = _this.state.locationAndCategory.form.categories;
              _context2.prev = 1;
              _context2.next = 4;
              return fetch("https://2.evollai.com/api/topic/category", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Accept-Language": "*"
                }
              });

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              result = _context2.sent;
              console.log(result, "categories");

              if (result) {
                _this.setState({
                  categories: result.data
                });
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 12]]);
    })));

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
      var _this2 = this;

      var _this$state$locationA = this.state.locationAndCategory.form,
          location = _this$state$locationA.location,
          categories = _this$state$locationA.categories,
          categoryId = _this$state$locationA.categoryId;
      var _this$state$locationA2 = this.state.locationAndCategory.form,
          title = _this$state$locationA2.title,
          description = _this$state$locationA2.description,
          amount = _this$state$locationA2.amount;
      var _this$state3 = this.state,
          checkMarkOne = _this$state3.checkMarkOne,
          checkMarkTwo = _this$state3.checkMarkTwo,
          checkMarkThree = _this$state3.checkMarkThree,
          checkMarkFour = _this$state3.checkMarkFour,
          page = _this$state3.page;
      console.log(this.state.categories, "catttegories");
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_semantics_header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "suggest-topic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, "Category and ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "location"), checkMarkOne && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, "Topic content", checkMarkOne && checkMarkTwo && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, "Media", checkMarkOne && checkMarkTwo && checkMarkThree && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "check-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, "Preview"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, page === 1 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_10__["default"], {
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(1);
        },
        onChange: this.firstPageChange,
        onCategoryChange: this.onCategoryChange,
        location: location,
        categories: this.state.categories,
        categoryId: categoryId,
        submitted: this.state.submitted,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }) : page === 2 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_TopicContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onChange: this.secondPageChange,
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(2);
        },
        title: title,
        description: description,
        amount: amount,
        submitted: this.state.submitted,
        typed: this.state.typed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }) : page === 3 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Media__WEBPACK_IMPORTED_MODULE_12__["default"], {
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Preview__WEBPACK_IMPORTED_MODULE_13__["default"], {
        publish: this.publishHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tabs_Media__WEBPACK_IMPORTED_MODULE_12__["default"], {
        moveNextPage: function moveNextPage() {
          return _this2.moveNextPage(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_semantics_footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }));
    }
  }]);

  return TopicSuggestion;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopicSuggestion);

/***/ })

};
//# sourceMappingURL=main.5c07d0500365c81ff253.hot-update.js.map