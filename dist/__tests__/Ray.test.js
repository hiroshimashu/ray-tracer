import { Ray } from '../Ray';
import { Vec3 } from '../Vec3';
describe('Ray class', function () {
    test('pointAtParameter correctly works', function () {
        var o = new Vec3(1, 2, 3);
        var d = new Vec3(2, 4, 6);
        var ray = new Ray(o, d);
        var expected = new Vec3(5, 10, 15);
        expect(ray.pointAtParameter(2)).toEqual(expected);
    });
});
//# sourceMappingURL=Ray.test.js.map