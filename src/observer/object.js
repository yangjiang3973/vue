var _ = require('../util');
var objProto = Object.prototype;

//* NOTE: included in observer/index.js, so all functions will run
//* seems to add $add $set $delete to Object's prototype
//* need to learn these methods' meaning

/**
 * Add a new property to an observed object
 * and emits corresponding event
 *
 * @param {String} key
 * @param {*} val
 * @public
 */

_.define(objProto, '$add', function $add(key, val) {
    if (this.hasOwnProperty(key)) return;
    var ob = this.__ob__;
    //* if it is not observed or key is reserved
    //* I feel it is not necessary now
    if (!ob || _.isReserved(key)) {
        this[key] = val;
        return;
    }
    ob.convert(key, val);
    //* what is vms? used to proxy the new data entry if it is added at root level of data
    if (ob.vms) {
        var i = ob.vms.length;
        while (i--) {
            var vm = ob.vms[i];
            vm._proxy(key);
            vm._digest();
        }
    } else {
        ob.notify();
    }
});

/**
 * Set a property on an observed object, calling add to
 * ensure the property is observed.
 *
 * @param {String} key
 * @param {*} val
 * @public
 */

_.define(objProto, '$set', function $set(key, val) {
    this.$add(key, val);
    this[key] = val;
});

/**
 * Deletes a property from an observed object
 * and emits corresponding event
 *
 * @param {String} key
 * @public
 */

_.define(objProto, '$delete', function $delete(key) {
    if (!this.hasOwnProperty(key)) return;
    delete this[key];
    var ob = this.__ob__;
    //* if it is not observed or key is reserved
    //* I feel it is not necessary now
    if (!ob || _.isReserved(key)) {
        return;
    }
    if (ob.vms) {
        var i = ob.vms.length;
        while (i--) {
            var vm = ob.vms[i];
            vm._unproxy(key);
            vm._digest();
        }
    } else {
        ob.notify();
    }
});
