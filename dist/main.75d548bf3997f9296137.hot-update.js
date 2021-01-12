webpackHotUpdate("main",{

/***/ "./demo/modal/modalComponent.js":
/*!**************************************!*\
  !*** ./demo/modal/modalComponent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return (// <transition name="modal">
      h("div", {
        "class": "modal-mask"
      }, [h("div", {
        "class": "modal-wrapper"
      }, [h("div", {
        "class": "modal-container"
      }, [h("div", {
        "class": "modal-header"
      }, [this.$slots.header]), h("div", {
        "class": "modal-body"
      }, [this.$slots.body]), h("div", {
        "class": "modal-footer"
      }, [this.$slots.footer, h("button", {
        "class": "modal-default-button",
        "on": {
          "click": function click() {
            return _this.$emit("close");
          }
        }
      }, ["OK"])])])])]) // </transition>

    );
  }
});

/***/ })

})
//# sourceMappingURL=main.75d548bf3997f9296137.hot-update.js.map