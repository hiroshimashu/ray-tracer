"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hittable_1 = __importDefault(require("./Hittable"));
const HitRecord_1 = __importDefault(require("./HitRecord"));
class Sphere extends Hittable_1.default {
    constructor(center, r) {
        super();
        this.center = center;
        this.radius = r;
    }
    hit(ray, tmin, tmax) {
        const fromRayToCenter = ray.origin.subtract(this.center);
        const a = ray.direction.squared_length();
        const b = fromRayToCenter.dotProduct(ray.direction);
        const c = fromRayToCenter.squared_length() - this.radius * this.radius;
        const discriminant = b * b - a * c;
        if (discriminant > 0) {
            const root = Math.sqrt(discriminant);
            let temp = (-b - root) / a;
            if (temp < tmax && temp > tmin) {
                const point = ray.pointAtParameter(temp);
                return new HitRecord_1.default(temp, point, point.subtract(this.center).scale(1 / this.radius));
            }
            temp = (-b + root) / a;
            if (temp < tmax && temp > tmin) {
                const point = ray.pointAtParameter(temp);
                return new HitRecord_1.default(temp, point, point.subtract(this.center).scale(1 / this.radius));
            }
        }
        return null;
    }
}
exports.default = Sphere;
//# sourceMappingURL=Sphere.js.map