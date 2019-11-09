exports.id = "main";
exports.modules = {

/***/ "./src/pages/TopicSuggestion/index.jsx":
/*!*********************************************!*\
  !*** ./src/pages/TopicSuggestion/index.jsx ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs_LocationAndCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/LocationAndCategory */ "./src/pages/TopicSuggestion/tabs/LocationAndCategory.jsx");
/* harmony import */ var _tabs_TopicContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/TopicContent */ "./src/pages/TopicSuggestion/tabs/TopicContent.jsx");
/* harmony import */ var _tabs_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/Media */ "./src/pages/TopicSuggestion/tabs/Media.jsx");
/* harmony import */ var _tabs_Preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/Preview */ "./src/pages/TopicSuggestion/tabs/Preview.jsx");
/* harmony import */ var _semantics_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../semantics/header */ "./src/semantics/header/index.jsx");
/* harmony import */ var _semantics_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../semantics/footer */ "./src/semantics/footer/index.jsx");
/* harmony import */ var _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/check-mark.png */ "./src/assets/images/check-mark.png");
/* harmony import */ var _assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_check_mark_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/pages/TopicSuggestion/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);








 // class TopicSuggestion extends React.Component {
//   state = {
//     page: 1,
//     first: {
//       form: {
//         category: null,
//         location: ""
//       },
//       error: false,
//       page: 1
//     }
//   };
//   firstPageChange = ({ target: { name, value } }) => {
//     this.setState(prevState => ({
//       ...prevState,
//       first: {
//         ...prevState.first,
//         form: { ...prevState.first.form, [name]: value }
//       }
//     }));
//   };
//   onCategoryChange = value => {
//     this.setState(prevState => ({
//       ...prevState,
//       first: {
//         ...prevState.first,
//         form: { ...prevState.first.form, category: value }
//       }
//     }));
//   };
//   moveNextPage = page => {
//     const { firstPageForm } = this.state;
//     if (page === 1) {
//       this.setState({
//         page: 2,
//         checkMark: true
//       });
//     } else if (page === 2) {
//       this.setState({
//         page: 3,
//         checkMark: true
//       });
//     } else if (page === 3) {
//       this.setState({
//         page: 4,
//         checkMark: true
//       });
//     } else {
//       this.setState({
//         page: 5,
//         checkMark: true
//       });
//     }
//   };
//   render() {
//     console.log(this.state.first);
//     const { category, location } = this.state.first;
//     return (
//       <>
//         <Header />
//         <div className="suggest-topic">
//           <div className="tabs">
//             <ul>
//               <li>
//                 Category and <br />
//                 location
//                 {/* {this.state.page === 2 && <img src={checkMark} alt="check-mark" />} */}
//               </li>
//               <li>
//                 Topic content
//                 {/* {this.state.page === 3 && <img src={checkMark} alt="check-mark" />} */}
//               </li>
//               <li>
//                 Media
//                 {/* {this.state.page === 4 && <img src={checkMark} alt="check-mark" />} */}
//               </li>
//               <li>
//                 Preview
//                 {/* {this.state.page === 4 && <img src={checkMark} alt="check-mark" />} */}
//               </li>
//               ew
//             </ul>
//           </div>
//           <div className="tab-content">
//             {this.state.page === 1 ? (
//               <LocationAndCategory
//                 moveNextPage={this.moveNextPage}
//                 onChange={this.firstPageChange}
//                 onCategoryChange={this.onCategoryChange}
//                 location={location}
//                 category={category}
//               />
//             ) : this.state.page === 2 ? (
//               <TopicContent moveNextPage={this.moveNextPage} />
//             ) : this.state.page === 3 ? (
//               <Media moveNextPage={this.moveNextPage} />
//             ) : (
//               <Preview moveNextPage={this.moveNextPage} />
//             )}
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }
// }
// export default TopicSuggestion;

/***/ })

};
//# sourceMappingURL=main.c51ed9f5bd5b6370417d.hot-update.js.map