"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ray_1 = __importDefault(require("../Ray"));
const Vec3_1 = __importDefault(require("../Vec3"));
describe('Ray class', () => {
    test('pointAtParameter correctly works', () => {
        const o = new Vec3_1.default(1, 2, 3);
        const d = new Vec3_1.default(2, 4, 6);
        const ray = new Ray_1.default(o, d);
        const expected = new Vec3_1.default(5, 10, 15);
        expect(ray.pointAtParameter(2)).toEqual(expected);
    });
});
//# sourceMappingURL=Ray.test.js.map