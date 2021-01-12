webpackHotUpdate("main",{

/***/ "./demo/modal/main.js":
/*!****************************!*\
  !*** ./demo/modal/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_entries_web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/entries/web-runtime */ "./src/entries/web-runtime.js");
/* harmony import */ var _modalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalComponent */ "./demo/modal/modalComponent.js");


var vm = new _src_entries_web_runtime__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  data: {
    showModal: false
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", [h("button", {
      "attrs": {
        "id": "show-modal"
      },
      "on": {
        "click": function click() {
          _this.showModal = true;
        }
      }
    }, ["Show Modal"]), this.showModal ? h(_modalComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
      "on": {
        "close": function close() {
          _this.showModal = false;
        }
      }
    }, [h("h3", {
      "slot": "header"
    }, ["custom header1"]), h("h3", {
      "slot": "header"
    }, ["custom header2"]), h("h3", {
      "slot": "header"
    }, ["custom header3"]), h("div", {
      "slot": "body"
    }, ["this is the main body"]), h("div", {
      "slot": "footer"
    }, ["this is the footer"])]) : '']);
  }
});

/***/ })

})
//# sourceMappingURL=main.45f697a8d88c198b56c4.hot-update.js.map