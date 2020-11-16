export default class Vec3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    negate() {
        return new Vec3(-this.x, -this.y, -this.z);
    }
    invert() {
        return new Vec3(1 / this.x, 1 / this.y, 1 / this.z);
    }
    scale(scale) {
        return new Vec3(this.x * scale, this.y * scale, this.z * scale);
    }
    add(another) {
        return new Vec3(this.x + another.x, this.y + another.y, this.z + another.z);
    }
    subtract(another) {
        return new Vec3(this.x - another.x, this.y - another.y, this.z - another.z);
    }
    mutiply(another) {
        return new Vec3(this.x * another.x, this.y * another.y, this.z * another.z);
    }
    division(another) {
        return new Vec3(this.x / another.x, this.y / another.y, this.z / another.z);
    }
    dotProduct(another) {
        return this.x * another.x + this.y * another.y + this.z * another.z;
    }
    crossProduct(another) {
        return new Vec3(this.y * another.z - this.z * another.y, this.z * another.x - this.x * another.z, this.x * another.y - this.y * another.x);
    }
    normalize() {
        return this.scale(1 / this.length());
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y + this.y + this.z * this.z);
    }
    squared_length() {
        return this.x * this.x + this.y + this.y + this.z * this.z;
    }
}
//# sourceMappingURL=Vec3.js.map