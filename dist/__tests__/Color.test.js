"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __importDefault(require("../Color"));
test('Intialize color', () => {
    const color = new Color_1.default(0.2, 0.8, 0.6);
    expect(color.r).toBe(0.2);
    expect(color.g).toBe(0.8);
    expect(color.b).toBe(0.6);
});
test('Convert color to rgb string', () => {
    const color = new Color_1.default(0.2, 0.8, 0.6);
    expect(color.toRGBArray()).toEqual([114, 228, 198]);
});
//# sourceMappingURL=Color.test.js.map