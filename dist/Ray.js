export default class Ray {
    constructor(origin, direction) {
        this.origin = origin;
        this.direction = direction;
    }
    pointAtParameter(t) {
        return this.origin.add(this.direction.scale(t));
    }
}
//# sourceMappingURL=Ray.js.map