var Ray = /** @class */ (function () {
    function Ray(origin, direction) {
        this.origin = origin;
        this.direction = direction;
    }
    Ray.prototype.pointAtParameter = function (t) {
        return this.origin.add(this.direction.scale(t));
    };
    return Ray;
}());
export default Ray;
//# sourceMappingURL=Ray.js.map