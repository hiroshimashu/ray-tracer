"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ray_1 = __importDefault(require("./Ray"));
class Camera {
    constructor(origin, lowerLeftCorner, horizontal, vertical) {
        this.origin = origin;
        this.lowerLeftCorner = lowerLeftCorner;
        this.horizontal = horizontal;
        this.vertical = vertical;
    }
    getRay(u, v) {
        const direction = this.lowerLeftCorner
            .add(this.horizontal.scale(u))
            .add(this.vertical.scale(v))
            .subtract(this.origin);
        return new Ray_1.default(this.origin, direction);
    }
}
exports.default = Camera;
//# sourceMappingURL=Camera.js.map