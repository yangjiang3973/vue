webpackHotUpdate("main",{

/***/ "./src/platforms/web/runtime/patch.js":
/*!********************************************!*\
  !*** ./src/platforms/web/runtime/patch.js ***!
  \********************************************/
/*! exports provided: patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony import */ var web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web/runtime/node-ops */ "./src/platforms/web/runtime/node-ops.js");
/* harmony import */ var core_vdom_patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/vdom/patch */ "./src/core/vdom/patch.js");
/* harmony import */ var core_vdom_modules_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/vdom/modules/index */ "./src/core/vdom/modules/index.js");
/* harmony import */ var web_runtime_modules_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web/runtime/modules/index */ "./src/platforms/web/runtime/modules/index.js");
/* @flow */



 // the directive module should be applied last, after all
// built-in modules have been applied.

var modules = web_runtime_modules_index__WEBPACK_IMPORTED_MODULE_3__["default"].concat(core_vdom_modules_index__WEBPACK_IMPORTED_MODULE_2__["default"]);
var patch
/*: Function*/
= Object(core_vdom_patch__WEBPACK_IMPORTED_MODULE_1__["createPatchFunction"])({
  nodeOps: web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__,
  modules: modules
}); // return patch function and assign to patch

/***/ })

})
//# sourceMappingURL=main.c1736358d83721625515.hot-update.js.map