import Ray from './Ray';
export default class Camera {
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
        return new Ray(this.origin, direction);
    }
}
//# sourceMappingURL=Camera.js.map