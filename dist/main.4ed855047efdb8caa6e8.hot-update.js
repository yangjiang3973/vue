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
  el: "#app",
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
    }, ["custom header"]), h("div", {
      "slot": "body"
    }, ["this is the main body"]), h("div", {
      "slot": "footer"
    }, ["this is the footer"])]) : ""]);
  }
});

/***/ }),

/***/ "./node_modules/_process@0.11.10@process/browser.js":
false,

/***/ "./node_modules/_setimmediate@1.0.5@setimmediate/setImmediate.js":
false,

/***/ "./node_modules/_timers-browserify@2.0.12@timers-browserify/main.js":
false,

/***/ "./src/compiler/directives/model.js":
false,

/***/ "./src/compiler/helpers.js":
false,

/***/ "./src/compiler/parser/filter-parser.js":
false,

/***/ "./src/core/components/index.js":
false,

/***/ "./src/core/components/keep-alive.js":
false,

/***/ "./src/core/config.js":
false,

/***/ "./src/core/global-api/assets.js":
false,

/***/ "./src/core/global-api/extend.js":
false,

/***/ "./src/core/global-api/index.js":
false,

/***/ "./src/core/global-api/mixin.js":
false,

/***/ "./src/core/global-api/use.js":
false,

/***/ "./src/core/index.js":
false,

/***/ "./src/core/instance/events.js":
false,

/***/ "./src/core/instance/index.js":
false,

/***/ "./src/core/instance/init.js":
false,

/***/ "./src/core/instance/inject.js":
false,

/***/ "./src/core/instance/lifecycle.js":
false,

/***/ "./src/core/instance/proxy.js":
false,

/***/ "./src/core/instance/render-helpers/bind-object-listeners.js":
false,

/***/ "./src/core/instance/render-helpers/bind-object-props.js":
false,

/***/ "./src/core/instance/render-helpers/check-keycodes.js":
false,

/***/ "./src/core/instance/render-helpers/index.js":
false,

/***/ "./src/core/instance/render-helpers/render-list.js":
false,

/***/ "./src/core/instance/render-helpers/render-slot.js":
false,

/***/ "./src/core/instance/render-helpers/render-static.js":
false,

/***/ "./src/core/instance/render-helpers/resolve-filter.js":
false,

/***/ "./src/core/instance/render-helpers/resolve-slots.js":
false,

/***/ "./src/core/instance/render.js":
false,

/***/ "./src/core/instance/state.js":
false,

/***/ "./src/core/observer/array.js":
false,

/***/ "./src/core/observer/dep.js":
false,

/***/ "./src/core/observer/index.js":
false,

/***/ "./src/core/observer/scheduler.js":
false,

/***/ "./src/core/observer/traverse.js":
false,

/***/ "./src/core/observer/watcher.js":
false,

/***/ "./src/core/util/debug.js":
false,

/***/ "./src/core/util/env.js":
false,

/***/ "./src/core/util/error.js":
false,

/***/ "./src/core/util/index.js":
false,

/***/ "./src/core/util/lang.js":
false,

/***/ "./src/core/util/next-tick.js":
false,

/***/ "./src/core/util/options.js":
false,

/***/ "./src/core/util/perf.js":
false,

/***/ "./src/core/util/props.js":
false,

/***/ "./src/core/vdom/create-component.js":
false,

/***/ "./src/core/vdom/create-element.js":
false,

/***/ "./src/core/vdom/create-functional-component.js":
false,

/***/ "./src/core/vdom/helpers/extract-props.js":
false,

/***/ "./src/core/vdom/helpers/get-first-component-child.js":
false,

/***/ "./src/core/vdom/helpers/index.js":
false,

/***/ "./src/core/vdom/helpers/is-async-placeholder.js":
false,

/***/ "./src/core/vdom/helpers/merge-hook.js":
false,

/***/ "./src/core/vdom/helpers/normalize-children.js":
false,

/***/ "./src/core/vdom/helpers/normalize-scoped-slots.js":
false,

/***/ "./src/core/vdom/helpers/resolve-async-component.js":
false,

/***/ "./src/core/vdom/helpers/update-listeners.js":
false,

/***/ "./src/core/vdom/modules/directives.js":
false,

/***/ "./src/core/vdom/modules/index.js":
false,

/***/ "./src/core/vdom/modules/ref.js":
false,

/***/ "./src/core/vdom/patch.js":
false,

/***/ "./src/core/vdom/vnode.js":
false,

/***/ "./src/entries/web-runtime.js":
/*!************************************!*\
  !*** ./src/entries/web-runtime.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/yangjiang/dev/learn/vue/src/entries/web-runtime.js'");

/***/ }),

/***/ "./src/platforms/web/compiler/directives/model.js":
false,

/***/ "./src/platforms/web/entry-runtime.js":
false,

/***/ "./src/platforms/web/runtime/class-util.js":
false,

/***/ "./src/platforms/web/runtime/components/index.js":
false,

/***/ "./src/platforms/web/runtime/components/transition-group.js":
false,

/***/ "./src/platforms/web/runtime/components/transition.js":
false,

/***/ "./src/platforms/web/runtime/directives/index.js":
false,

/***/ "./src/platforms/web/runtime/directives/model.js":
false,

/***/ "./src/platforms/web/runtime/directives/show.js":
false,

/***/ "./src/platforms/web/runtime/index.js":
false,

/***/ "./src/platforms/web/runtime/modules/attrs.js":
false,

/***/ "./src/platforms/web/runtime/modules/class.js":
false,

/***/ "./src/platforms/web/runtime/modules/dom-props.js":
false,

/***/ "./src/platforms/web/runtime/modules/events.js":
false,

/***/ "./src/platforms/web/runtime/modules/index.js":
false,

/***/ "./src/platforms/web/runtime/modules/style.js":
false,

/***/ "./src/platforms/web/runtime/modules/transition.js":
false,

/***/ "./src/platforms/web/runtime/node-ops.js":
false,

/***/ "./src/platforms/web/runtime/patch.js":
false,

/***/ "./src/platforms/web/runtime/transition-util.js":
false,

/***/ "./src/platforms/web/util/attrs.js":
false,

/***/ "./src/platforms/web/util/class.js":
false,

/***/ "./src/platforms/web/util/element.js":
false,

/***/ "./src/platforms/web/util/index.js":
false,

/***/ "./src/platforms/web/util/style.js":
false,

/***/ "./src/platforms/weex/runtime/recycle-list/render-component-template.js":
false,

/***/ "./src/platforms/weex/runtime/recycle-list/virtual-component.js":
false,

/***/ "./src/platforms/weex/util/index.js":
false,

/***/ "./src/shared/constants.js":
false,

/***/ "./src/shared/util.js":
false

})
//# sourceMappingURL=main.4ed855047efdb8caa6e8.hot-update.js.map