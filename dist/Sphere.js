var __extends =
	(this && this.__extends) ||
	(function() {
		var extendStatics = function(d, b) {
			extendStatics =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(d, b) {
						d.__proto__ = b;
					}) ||
				function(d, b) {
					for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
				};
			return extendStatics(d, b);
		};
		return function(d, b) {
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
		};
	})();
import { Hittable } from './Hittable.js';
var Sphere = /** @class */ (function(_super) {
	__extends(Sphere, _super);
	function Sphere(center, r) {
		var _this = _super.call(this) || this;
		_this.center = center;
		_this.radius = r;
		return _this;
	}
	Sphere.prototype.hit = function(ray, tmin, tmax, rec) {
		var RayToCenter = ray.origin.subtract(this.center);
		var a = ray.direction.squared_length();
		var b = RayToCenter.dotProduct(ray.direction);
		var c = RayToCenter.squared_length() - this.radius * this.radius;
		var discriminant = b * b - a * c;
		if (discriminant < 0) {
			return false;
		}
		var root = Math.sqrt(discriminant);
		var temp = (-b - root) / a;
		if (temp > tmax || temp < tmin) {
			temp = (-b + root) / a;
			if (temp > tmax || temp < tmin) {
				return false;
			}
		}
		rec.t = root;
		rec.p = ray.pointAtParameter(temp);
		var outwarodNormal = rec.p.subtract(this.center).scale(1 / this.radius);
		rec.setFaceNormal(ray, outwarodNormal);
		return true;
	};
	return Sphere;
})(Hittable);
export { Sphere };
//# sourceMappingURL=Sphere.js.map
