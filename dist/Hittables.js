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
var Hittables = /** @class */ (function(_super) {
	__extends(Hittables, _super);
	function Hittables() {
		var _this = (_super !== null && _super.apply(this, arguments)) || this;
		_this.objects = [];
		return _this;
	}
	Hittables.prototype.clear = function() {
		this.objects = [];
	};
	Hittables.prototype.add = function(object) {
		this.objects.push(object);
	};
	Hittables.prototype.hit = function(ray, minTime, maxTime, hitRecord) {
		var tempRec = null;
		var hitAnything = false;
		var clsestSoFar = maxTime;
		for (var _i = 0, _a = this.objects; _i < _a.length; _i++) {
			var object = _a[_i];
			if (object.hit(ray, minTime, clsestSoFar, tempRec)) {
				hitAnything = true;
				clsestSoFar = tempRec.t;
				hitRecord = tempRec;
			}
		}
		return hitAnything;
	};
	return Hittables;
})(Hittable);
export { Hittables };
//# sourceMappingURL=Hittables.js.map
