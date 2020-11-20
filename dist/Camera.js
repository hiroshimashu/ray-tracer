import { Ray } from './Ray';
var Camera = /** @class */ (function () {
    function Camera(origin, lowerLeftCorner, horizontal, vertical) {
        this.origin = origin;
        this.lowerLeftCorner = lowerLeftCorner;
        this.horizontal = horizontal;
        this.vertical = vertical;
    }
    Camera.prototype.getRay = function (u, v) {
        var direction = this.lowerLeftCorner
            .add(this.horizontal.scale(u))
            .add(this.vertical.scale(v))
            .subtract(this.origin);
        return new Ray(this.origin, direction);
    };
    return Camera;
}());
export default Camera;
//# sourceMappingURL=Camera.js.map