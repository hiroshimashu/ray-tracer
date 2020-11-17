"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
const Vec3_1 = __importDefault(require("./Vec3"));
class Color extends Vec3_1.default {
    constructor(r, g, b) {
        super(r, g, b);
    }
    get r() {
        return this.x;
    }
    get g() {
        return this.y;
    }
    get b() {
        return this.z;
    }
    static fromVec3(vec3) {
        return new Color(vec3.x, vec3.y, vec3.z);
    }
    toRGBArray() {
        const correctedR = Math.sqrt(this.r);
        const correctedG = Math.sqrt(this.g);
        const correctedB = Math.sqrt(this.b);
        const clampedR = clamp(correctedR, 0, 0.999);
        const clampedG = clamp(correctedG, 0, 0.999);
        const clampedB = clamp(correctedB, 0, 0.999);
        const ir = Math.floor(256 * clampedR);
        const ig = Math.floor(256 * clampedG);
        const ib = Math.floor(256 * clampedB);
        return [ir, ig, ib];
    }
}
exports.Color = Color;
function clamp(num, min, max) {
    if (num < min) {
        return min;
    }
    if (num > max) {
        return max;
    }
    return num;
}
//# sourceMappingURL=Color.js.map