var HitRecord = /** @class */ (function () {
    function HitRecord(t, p, normal) {
        this.t = t;
        this.p = p;
        this.normal = normal;
        this.frontFace = true;
    }
    HitRecord.prototype.setFaceNormal = function (ray, outwardNormal) {
        this.frontFace = ray.direction.dotProduct(outwardNormal) < 0;
        if (this.frontFace) {
            this.normal = outwardNormal;
        }
        else {
            this.normal = outwardNormal.invert();
        }
    };
    return HitRecord;
}());
export { HitRecord };
//# sourceMappingURL=HitRecord.js.map