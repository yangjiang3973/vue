self["webpackHotUpdatevue"]("main",{

/***/ "./src/watcher.js":
/*!************************!*\
  !*** ./src/watcher.js ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 280:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! ./util */ "./src/util/index.js");

var config = __webpack_require__(/*! ./config */ "./src/config.js");

var Observer = __webpack_require__(/*! ./observer */ "./src/observer/index.js");

var expParser = __webpack_require__(/*! ./parsers/expression */ "./src/parsers/expression.js");

var batcher = __webpack_require__(/*! ./batcher */ "./src/batcher.js");

var uid = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String} expression
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 * @constructor
 */

function Watcher(vm, expression, cb, options) {
  this.vm = vm;

  vm._watcherList.push(this);

  this.expression = expression;
  this.cbs = [cb];
  this.id = ++uid; // uid for batching

  this.active = true;
  options = options || {};
  this.deep = !!options.deep;
  this.user = !!options.user;
  this.deps = Object.create(null); // setup filters if any.
  // We delegate directive filters here to the watcher
  // because they need to be included in the dependency
  // collection process.

  if (options.filters) {
    this.readFilters = options.filters.read;
    this.writeFilters = options.filters.write;
  } // parse expression for getter/setter


  var res = expParser.parse(expression, options.twoWay); //* NOTE: need to read this part

  this.getter = res.get;
  this.setter = res.set;
  this.value = this.get(); //* NOTE: access to observer's get to register as sub
}

var p = Watcher.prototype;
/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */
//* NOTE: why have 2 queues? newDeps and desp??

p.addDep = function (dep) {
  var id = dep.id;

  if (!this.newDeps[id]) {
    this.newDeps[id] = dep;

    if (!this.deps[id]) {
      this.deps[id] = dep;
      dep.addSub(this);
    }
  }
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


p.get = function () {
  this.beforeGet(); //* NOTE: Observer.target = this;

  var vm = this.vm;
  var value;

  try {
    value = this.getter.call(vm, vm); //* NOTE: need to understand this line
  } catch (e) {
    if (config.warnExpressionErrors) {
      _.warn('Error when evaluating expression "' + this.expression + '":\n   ' + e);
    }
  } // "touch" every property so they are all tracked as
  // dependencies for deep watching


  if (this.deep) {
    traverse(value);
  }

  value = _.applyFilters(value, this.readFilters, vm);
  this.afterGet(); //* NOTE: Observer.target = null;

  return value;
};
/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */


p.set = function (value) {
  var vm = this.vm;
  value = _.applyFilters(value, this.writeFilters, vm, this.value);

  try {
    this.setter.call(vm, vm, value);
  } catch (e) {
    if (config.warnExpressionErrors) {
      _.warn('Error when evaluating setter "' + this.expression + '":\n   ' + e);
    }
  }
};
/**
 * Prepare for dependency collection.
 */


p.beforeGet = function () {
  Observer.target = this;
  this.newDeps = {};
};
/**
 * Clean up for dependency collection.
 */


p.afterGet = function () {
  Observer.target = null;

  for (var id in this.deps) {
    if (!this.newDeps[id]) {
      this.deps[id].removeSub(this);
    }
  }

  this.deps = this.newDeps;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
//* Watcher's update just add watcher instance to batcher array


p.update = function () {
  if (!config.async || config.debug) {
    this.run();
  } else {
    batcher.push(this);
  }
};
/**
 * Batcher job interface.
 * Will be called by the batcher.
 */


p.run = function () {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || Array.isArray(value) || this.deep) {
      var oldValue = this.value;
      this.value = value;
      var cbs = this.cbs;

      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i](value, oldValue); // if a callback also removed other callbacks,
        // we need to adjust the loop accordingly.

        var removed = l - cbs.length;

        if (removed) {
          i -= removed;
          l -= removed;
        }
      }
    }
  }
};
/**
 * Add a callback.
 *
 * @param {Function} cb
 */


p.addCb = function (cb) {
  this.cbs.push(cb);
};
/**
 * Remove a callback.
 *
 * @param {Function} cb
 */


p.removeCb = function (cb) {
  var cbs = this.cbs;

  if (cbs.length > 1) {
    var i = cbs.indexOf(cb);

    if (i > -1) {
      cbs.splice(i, 1);
    }
  } else if (cb === cbs[0]) {
    this.teardown();
  }
};
/**
 * Remove self from all dependencies' subcriber list.
 */


p.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // we can skip this if the vm if being destroyed
    // which can improve teardown performance.
    if (!this.vm._isBeingDestroyed) {
      var list = this.vm._watcherList;
      var i = list.indexOf(this);

      if (i > -1) {
        list.splice(i, 1);
      }
    }

    for (var id in this.deps) {
      this.deps[id].removeSub(this);
    }

    this.active = false;
    this.vm = this.cbs = this.value = null;
  }
};
/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {Object} obj
 */


function traverse(obj) {
  var key, val, i;

  for (key in obj) {
    val = obj[key];

    if (_.isArray(val)) {
      i = val.length;

      while (i--) {
        traverse(val[i]);
      }
    } else if (_.isObject(val)) {
      traverse(val);
    }
  }
}

module.exports = Watcher;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "5cdc8d719f3793ae2ca0"
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=main.80203bdeb49484a32e23.hot-update.js.map