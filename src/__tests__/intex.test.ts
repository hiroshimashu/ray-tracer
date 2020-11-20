import { Ray } from "../Ray";
import { transformRayToColor } from "../index";
import { Vec3 } from "../Vec3";
import { Color } from "../Color";

describe('test index', () => {
    test('transformRayToColor correctly works', () => {
        const viewPortHeight = 2.0;
        const viewPortWidth = viewPortHeight * 1.5;

        const origin = new Vec3(0, 0, 0);
        const horizontal = new Vec3(viewPortWidth, 0, 0);
        const vertical = new Vec3(0, viewPortHeight, 0);
        const u = 1;
        const v = 1;
        const lowerLeftCorner = ((origin.subtract(horizontal.scale(0.5))).subtract(vertical.scale(0.5))).subtract(new Vec3(0, 0, 1));
        const ray = new Ray(origin, lowerLeftCorner.add(horizontal.scale(u)).add(vertical.scale(v)).subtract(origin));
    

        const color = transformRayToColor(ray);
        const expectedColor = [204,226,255];

        expect(color).toEqual(expectedColor);
    });
});
