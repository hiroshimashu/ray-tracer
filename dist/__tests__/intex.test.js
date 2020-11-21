import { Ray } from "../Ray";
import { transformRayToColor } from "../index";
import { Vec3 } from "../Vec3";
describe('test index', function () {
    test('transformRayToColor correctly works', function () {
        var viewPortHeight = 2.0;
        var viewPortWidth = viewPortHeight * 1.5;
        var origin = new Vec3(0, 0, 0);
        var horizontal = new Vec3(viewPortWidth, 0, 0);
        var vertical = new Vec3(0, viewPortHeight, 0);
        var u = 1;
        var v = 1;
        var lowerLeftCorner = ((origin.subtract(horizontal.scale(0.5))).subtract(vertical.scale(0.5))).subtract(new Vec3(0, 0, 1));
        var ray = new Ray(origin, lowerLeftCorner.add(horizontal.scale(u)).add(vertical.scale(v)).subtract(origin));
        var color = transformRayToColor(ray);
        var expectedColor = [204, 226, 255];
        expect(color).toEqual(expectedColor);
    });
});
//# sourceMappingURL=intex.test.js.map