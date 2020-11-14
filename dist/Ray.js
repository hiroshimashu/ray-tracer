"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ray {
    constructor(origin, direction) {
        this.origin = origin;
        this.direction = direction;
    }
    pointAtParameter(t) {
        return this.origin.add(this.direction.scale(t));
    }
}
exports.default = Ray;
//# sourceMappingURL=Ray.js.map