self["webpackHotUpdatevue"]("main",{

/***/ "./src/observer/array.js":
/*!*******************************!*\
  !*** ./src/observer/array.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 81:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! ../util */ "./src/util/index.js");

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
/**
 * Intercept mutating methods and emit events
 */

['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];

  _.define(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);

    while (i--) {
      args[i] = arguments[i];
    }

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
        inserted = args;
        break;

      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) ob.observeArray(inserted); // notify change

    ob.notify();
    return result;
  });
});
/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

_.define(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = index + 1;
  }

  return this.splice(index, 1, val)[0];
});
/**
 * Convenience method to remove the element at given index.
 *
 * @param {Number} index
 * @param {*} val
 */


_.define(arrayProto, '$remove', function $remove(index) {
  if (typeof index !== 'number') {
    index = this.indexOf(index);
  }

  if (index > -1) {
    return this.splice(index, 1)[0];
  }
});

module.exports = arrayMethods;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "84060237ddd08a12a812"
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=main.e7b9c294aa26d46c1541.hot-update.js.map