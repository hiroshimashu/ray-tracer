"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("../Color");
test('Intialize color', () => {
    const color = new Color_1.Color(0.2, 0.8, 0.6);
    expect(color.r).toBe(0.2);
    expect(color.g).toBe(0.8);
    expect(color.b).toBe(0.6);
});
test('Convert color to rgb string', () => {
    const color = new Color_1.Color(0.2, 0.8, 0.6);
    expect(color.toRGBArray()).toEqual([114, 228, 198]);
});
//# sourceMappingURL=Color.test.js.map