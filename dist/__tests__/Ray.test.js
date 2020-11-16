import Ray from '../Ray';
import Vec3 from '../Vec3';
describe('Ray class', () => {
    test('pointAtParameter correctly works', () => {
        const o = new Vec3(1, 2, 3);
        const d = new Vec3(2, 4, 6);
        const ray = new Ray(o, d);
        const expected = new Vec3(5, 10, 15);
        expect(ray.pointAtParameter(2)).toEqual(expected);
    });
});
//# sourceMappingURL=Ray.test.js.map