var Dep = require('../../../../src/observer/dep');

describe('Dep', function () {
    var d;
    beforeEach(function () {
        d = new Dep();
    });

    // added
    it('addSub', function () {
        var sub = {};
        d.addSub(sub);
        expect(d.subs.length).toBe(1);
        expect(d.subs.indexOf(sub)).toBe(0);
    });

    //* NOTE: when to removeSub? need to understand and implement
    it('removeSub', function () {
        var sub = {};
        d.addSub(sub);
        d.removeSub(sub);
        expect(d.subs.length).toBe(0);
        expect(d.subs.indexOf(sub)).toBe(-1);
    });

    // added
    it('notify', function () {
        var sub = {
            update: jasmine.createSpy('sub'),
        };
        d.addSub(sub);
        d.notify();
        expect(sub.update).toHaveBeenCalled();
    });
});
