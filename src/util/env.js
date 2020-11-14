/**
 * Can we use __proto__?
 *
 * @type {Boolean}
 */

exports.hasProto = '__proto__' in {};

/**
 * Indicates we have a window
 *
 * @type {Boolean}
 */

var toString = Object.prototype.toString;
var inBrowser = (exports.inBrowser =
    typeof window !== 'undefined' &&
    toString.call(window) !== '[object Object]');

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

exports.nextTick = (function () {
    var callbacks = [];
    var pending = false;
    var timerFunc;
    function handle() {
        pending = false;
        // 之所以要slice复制一份出来是因为有的cb执行过程中又会往callbacks中加入内容
        // 比如$nextTick的回调函数里又有$nextTick
        // 这些是应该放入到下一个轮次的nextTick去执行的,
        // 所以拷贝一份当前的,遍历执行完当前的即可,避免无休止的执行下去
        var copies = callbacks.slice(0);
        callbacks = [];
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
    /* istanbul ignore if */
    if (typeof MutationObserver !== 'undefined') {
        var counter = 1;
        var observer = new MutationObserver(handle);
        //* NOTE: why create a textNode here?
        var textNode = document.createTextNode(counter);
        observer.observe(textNode, {
            characterData: true,
        });
        //* change the textNode content here, either 0/1
        timerFunc = function () {
            counter = (counter + 1) % 2;
            textNode.data = counter;
        };
    } else {
        timerFunc = setTimeout;
    }
    return function (cb, ctx) {
        var func = ctx
            ? function () {
                  cb.call(ctx);
              }
            : cb;
        callbacks.push(func);
        if (pending) return;
        pending = true;
        timerFunc(handle, 0); // pass arguments just in case of using setTimeout instead of MutationObserver
    };
})();

/**
 * Detect if we are in IE9...
 *
 * @type {Boolean}
 */

exports.isIE9 = inBrowser && navigator.userAgent.indexOf('MSIE 9.0') > 0;

/**
 * Sniff transition/animation events
 */

if (inBrowser && !exports.isIE9) {
    var isWebkitTrans =
        window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined;
    var isWebkitAnim =
        window.onanimationend === undefined &&
        window.onwebkitanimationend !== undefined;
    exports.transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
    exports.transitionEndEvent = isWebkitTrans
        ? 'webkitTransitionEnd'
        : 'transitionend';
    exports.animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
    exports.animationEndEvent = isWebkitAnim
        ? 'webkitAnimationEnd'
        : 'animationend';
}
