import Vec3 from '../Vec3';
describe('Test Vec3 class', function () {
    test('negation correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var expected = new Vec3(-1, -2, -3);
        expect(a.negate()).toEqual(expected);
    });
    test('invert correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var expected = new Vec3(1, 1 / 2, 1 / 3);
        expect(a.invert()).toEqual(expected);
    });
    test('scale correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var expected = new Vec3(2, 4, 6);
        expect(a.scale(2)).toEqual(expected);
    });
    test('scale correctly works when scale is not integer', function () {
        var a = new Vec3(1, 1, 1);
        var expected = new Vec3(1 / Math.sqrt(3), 1 / Math.sqrt(3), 1 / Math.sqrt(3));
        expect(a.scale(1 / Math.sqrt(3))).toEqual(expected);
    });
    test('addition correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var b = new Vec3(1.1, 2.1, 3.1);
        var expected = new Vec3(2.1, 4.1, 6.1);
        expect(a.add(b)).toEqual(expected);
    });
    test('multiply correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var b = new Vec3(4, 5, 6);
        var expected = new Vec3(4, 10, 18);
        expect(a.mutiply(b)).toEqual(expected);
    });
    test('subtract correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var b = new Vec3(4, 5, 6);
        var expected = new Vec3(-3, -3, -3);
        expect(a.subtract(b)).toEqual(expected);
    });
    test('division correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var b = new Vec3(4, 5, 6);
        var expected = new Vec3(1 / 4, 2 / 5, 3 / 6);
        expect(a.division(b)).toEqual(expected);
    });
    test('dot product correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var b = new Vec3(4, 5, 6);
        var expected = 32;
        expect(a.dotProduct(b)).toBe(expected);
    });
    test('cross product correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var b = new Vec3(4, 5, 6);
        var expected = new Vec3(-3, 6, -3);
        expect(a.crossProduct(b)).toEqual(expected);
    });
    test('normalize correctly works', function () {
        var a = new Vec3(1, 1, 1);
        var length = a.length();
        var expected = new Vec3(1 / length, 1 / length, 1 / length);
        expect(a.normalize()).toEqual(expected);
    });
    test('length correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var expected = Math.sqrt(14);
        expect(a.length()).toBe(expected);
    });
    test('Squared length correctly works', function () {
        var a = new Vec3(1, 2, 3);
        var expected = 14;
        expect(a.squared_length()).toBe(expected);
    });
});
//# sourceMappingURL=Vec3.test.js.map