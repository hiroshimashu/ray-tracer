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
import Vec3 from './Vec3.js';
var Color = /** @class */ (function(_super) {
	__extends(Color, _super);
	function Color(r, g, b) {
		return _super.call(this, r, g, b) || this;
	}
	Object.defineProperty(Color.prototype, 'r', {
		get: function() {
			return this.x;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Color.prototype, 'g', {
		get: function() {
			return this.y;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Color.prototype, 'b', {
		get: function() {
			return this.z;
		},
		enumerable: false,
		configurable: true
	});
	Color.fromVec3 = function(vec3) {
		return new Color(vec3.x, vec3.y, vec3.z);
	};
	Color.prototype.toRGBArray = function() {
		var correctedR = Math.sqrt(this.r);
		var correctedG = Math.sqrt(this.g);
		var correctedB = Math.sqrt(this.b);
		var clampedR = clamp(correctedR, 0, 0.999);
		var clampedG = clamp(correctedG, 0, 0.999);
		var clampedB = clamp(correctedB, 0, 0.999);
		var ir = Math.floor(256 * clampedR);
		var ig = Math.floor(256 * clampedG);
		var ib = Math.floor(256 * clampedB);
		return [ir, ig, ib];
	};
	return Color;
})(Vec3);
export { Color };
function clamp(num, min, max) {
	if (num < min) {
		return min;
	}
	if (num > max) {
		return max;
	}
	return num;
}
//# sourceMappingURL=Color.js.map
