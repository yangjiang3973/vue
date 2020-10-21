var _ = require('../util');

module.exports = {
    bind: function () {
        this.attr = this.el.nodeType === 3 ? 'nodeValue' : 'textContent'; //* difference between nodeValue and data for textNode
    },

    update: function (value) {
        this.el[this.attr] = _.toString(value);
    },
};
