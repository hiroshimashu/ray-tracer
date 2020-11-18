var Vec3 = /** @class */ (function () {
    function Vec3(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vec3.prototype.negate = function () {
        return new Vec3(-this.x, -this.y, -this.z);
    };
    Vec3.prototype.invert = function () {
        return new Vec3(1 / this.x, 1 / this.y, 1 / this.z);
    };
    Vec3.prototype.scale = function (scale) {
        return new Vec3(this.x * scale, this.y * scale, this.z * scale);
    };
    Vec3.prototype.add = function (another) {
        return new Vec3(this.x + another.x, this.y + another.y, this.z + another.z);
    };
    Vec3.prototype.subtract = function (another) {
        return new Vec3(this.x - another.x, this.y - another.y, this.z - another.z);
    };
    Vec3.prototype.mutiply = function (another) {
        return new Vec3(this.x * another.x, this.y * another.y, this.z * another.z);
    };
    Vec3.prototype.division = function (another) {
        return new Vec3(this.x / another.x, this.y / another.y, this.z / another.z);
    };
    Vec3.prototype.dotProduct = function (another) {
        return this.x * another.x + this.y * another.y + this.z * another.z;
    };
    Vec3.prototype.crossProduct = function (another) {
        return new Vec3(this.y * another.z - this.z * another.y, this.z * another.x - this.x * another.z, this.x * another.y - this.y * another.x);
    };
    Vec3.prototype.normalize = function () {
        return this.scale(1 / this.length());
    };
    Vec3.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y + this.y + this.z * this.z);
    };
    Vec3.prototype.squared_length = function () {
        return this.x * this.x + this.y + this.y + this.z * this.z;
    };
    return Vec3;
}());
export default Vec3;
//# sourceMappingURL=Vec3.js.map