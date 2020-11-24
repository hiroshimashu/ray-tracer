import { Color } from './Color.js';
import { Ray } from './Ray.js';
import { Vec3 } from './Vec3.js';
import { Hittables } from './Hittables.js';
import { Sphere } from './Sphere.js';
import { INFINITY } from './utils.js';
export function Render() {
	// Setting related to Image.
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var ctxWidth = 600;
	var ctxHeight = 400;
	var aspectRatio = 1.5;
	var ImageData = ctx.getImageData(0, 0, ctxWidth, ctxHeight);
	// Setting world
	var world = new Hittables();
	var Sphere1Center = new Vec3(0, 0, -1);
	var Sphere1Radius = 0.5;
	var Sphere2Center = new Vec3(0, -100.5, -1);
	var Sphere2Radius = 100;
	world.add(new Sphere(Sphere1Center, Sphere1Radius));
	world.add(new Sphere(Sphere2Center, Sphere2Radius));
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
			var colorArray = transformRayToColor(ray, world);
			var index = (x + y * ctxWidth) * 4;
			ImageData.data[index + 0] = colorArray[0];
			ImageData.data[index + 1] = colorArray[1];
			ImageData.data[index + 2] = colorArray[2];
			ImageData.data[index + 3] = 255;
		}
	}
	console.log(ImageData.data);
	ctx.putImageData(ImageData, 0, 0);
}
export function transformRayToColor(ray, world) {
	var hitRecord = null;
	if (world.hit(ray, 0, INFINITY, hitRecord)) {
		return Color.fromVec3(hitRecord.normal.add(new Vec3(1, 1, 1)).scale(0.5)).toRGBArray();
	}
	var unit_direction = ray.direction.normalize();
	var t = (unit_direction.y + 1.0) * 0.5;
	return Color.fromVec3(new Vec3(1.0, 1.0, 1.0).scale(1 - t).add(new Vec3(0.5, 0.7, 1.0).scale(t))).toRGBArray();
}
function hitSphere(center, radius, ray) {
	var p = ray.origin.subtract(center);
	var a = ray.direction.dotProduct(ray.direction);
	var half_b = p.dotProduct(ray.direction);
	var c = p.dotProduct(p) - radius * radius;
	var discriminant = half_b * half_b - a * c;
	if (discriminant < 0) {
		return -1;
	} else {
		return (-half_b - Math.sqrt(discriminant)) / a;
	}
}
//# sourceMappingURL=index.js.map
