import { Color } from './Color.js';
import { Ray } from './Ray.js';
import { Vec3 } from './Vec3.js';
export function Render() {
	// Setting related to Image.
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var ctxWidth = 600;
	var ctxHeight = 400;
	var aspectRatio = 1.5;
	var ImageData = ctx.getImageData(0, 0, ctxWidth, ctxHeight);
	// Setting related to Camera
	var viewPortHeight = 2.0;
	var viewPortWidth = viewPortHeight * aspectRatio;
	var focalLength = 1.0;
	var origin = new Vec3(0, 0, 0);
	var horizontal = new Vec3(viewPortWidth, 0, 0);
	var vertical = new Vec3(0, viewPortHeight, 0);
	var lowerLeftCorner = origin
		.subtract(horizontal.scale(0.5))
		.subtract(vertical.scale(0.5))
		.subtract(new Vec3(0, 0, focalLength));
	for (var x = 0; x < ctxWidth; x++) {
		for (var y = 0; y < ctxHeight; y++) {
			var u = x / ctxWidth;
			var v = y / ctxHeight;
			var b = 0.2;
			var ray = new Ray(
				origin,
				lowerLeftCorner
					.add(horizontal.scale(u))
					.add(vertical.scale(v))
					.subtract(origin)
			);
			var colorArray = transformRayToColor(ray);
			var index = (x + y * ctxWidth) * 4;
			ImageData.data[index + 0] = colorArray[0];
			ImageData.data[index + 1] = colorArray[1];
			ImageData.data[index + 2] = colorArray[2];
			ImageData.data[index + 3] = 255;
		}
	}
	ctx.putImageData(ImageData, 0, 0);
}
function transformRayToColor(ray) {
	var unit_direction = ray.direction.normalize();
	var t = unit_direction.y * 0.5 + 0.5;
	var startColor = Color.fromVec3(new Vec3(1.0, 1.0, 1.0));
	var endColor = Color.fromVec3(new Vec3(0.5, 0.7, 1.0));
	return startColor
		.scale(1 - t)
		.add(endColor.scale(t))
		.toRGBArray();
}
//# sourceMappingURL=index.js.map
