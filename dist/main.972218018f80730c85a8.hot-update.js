webpackHotUpdate("main",{

/***/ "./src/core/instance/init.js":
/*!***********************************!*\
  !*** ./src/core/instance/init.js ***!
  \***********************************/
/*! exports provided: initMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMixin", function() { return initMixin; });
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy */ "./src/core/instance/proxy.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/core/instance/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/core/instance/render.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/core/instance/events.js");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lifecycle */ "./src/core/instance/lifecycle.js");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/index */ "./src/core/util/index.js");
/* @flow */






var uid = 0;
function initMixin(Vue
/*: Class<Component>*/
) {
  Vue.prototype._init = function (options
  /*:: ?: Object*/
  ) {
    var vm
    /*: Component*/
    = this; // a uid

    vm._uid = uid++; // a flag to avoid this being observed

    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      //* NOTE: come here
      vm.$options = Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["mergeOptions"])(resolveConstructorOptions(vm), options || {}, vm);
    }
    /* istanbul ignore else */


    if (true) {
      Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["initProxy"])(vm);
    } else {} // expose real self


    vm._self = vm;
    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_4__["initLifecycle"])(vm);
    Object(_events__WEBPACK_IMPORTED_MODULE_3__["initEvents"])(vm);
    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_4__["callHook"])(vm, 'beforeCreate');
    Object(_state__WEBPACK_IMPORTED_MODULE_1__["initState"])(vm);
    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_4__["callHook"])(vm, 'created');
    Object(_render__WEBPACK_IMPORTED_MODULE_2__["initRender"])(vm); //* NOTE: call vm.$mount() here!!
  }; //* use for component


  function initInternalComponent(vm
  /*: Component*/
  , options
  /*: InternalComponentOptions*/
  ) {
    var opts = vm.$options = Object.create(resolveConstructorOptions(vm)); // doing this because it's faster than dynamic enumeration.

    opts.parent = options.parent;
    opts.propsData = options.propsData;
    opts._parentVnode = options._parentVnode;
    opts._parentListeners = options._parentListeners;
    opts._renderChildren = options._renderChildren;
    opts._componentTag = options._componentTag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(vm
  /*: Component*/
  ) {
    var Ctor = vm.constructor; //   Vue.options = {
    //     components: {
    //         KeepAlive,
    //         Transition,
    //         TransitionGroup
    //     },
    //     directives: {
    //         model,
    //         show
    //     },
    //     filters: {},
    //     _base: Vue
    // }

    var options = Ctor.options; //* Vue.options

    if (Ctor["super"]) {
      var superOptions = Ctor["super"].options;
      var cachedSuperOptions = Ctor.superOptions;

      if (superOptions !== cachedSuperOptions) {
        // super option changed
        Ctor.superOptions = superOptions;
        options = Ctor.options = Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["mergeOptions"])(superOptions, Ctor.extendOptions);

        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }

    return options;
  }
}

/***/ })

})
//# sourceMappingURL=main.972218018f80730c85a8.hot-update.js.map