import { Color } from './Color';
import { Ray } from './Ray';
import { Vec3 } from "./Vec3";
import { Hittables } from "./Hittables";
import { Sphere } from "./Sphere";
import { HitRecord } from './HitRecord';
import { INFINITY } from './utils';

export function Render() {
	// Setting related to Image.
	let canvas: any = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');
	const ctxWidth = 600;
	const ctxHeight = 400;
	const aspectRatio = 1.5;
	let ImageData = ctx.getImageData(0, 0, ctxWidth, ctxHeight);


	// Setting world 
	const world = new Hittables();
	const Sphere1Center = new Vec3(0, 0, -1);
	const Sphere1Radius = 0.5;
	const Sphere2Center = new Vec3(0, -100.5, -1);
	const Sphere2Radius = 100;
	world!.add(new Sphere(Sphere1Center, Sphere1Radius));
	world!.add(new Sphere(Sphere2Center, Sphere2Radius));
	
	// Setting related to Camera
	const viewPortHeight = 2.0;
	const viewPortWidth = viewPortHeight * aspectRatio;
	const focalLength = 1.0;

	const origin = new Vec3(0, 0, 0);
    const horizontal = new Vec3(viewPortWidth, 0, 0);
	const vertical = new Vec3(0, viewPortHeight, 0);
	const lowerLeftCorner = ((origin.subtract(horizontal.scale(0.5))).subtract(vertical.scale(0.5))).subtract(new Vec3(0, 0, focalLength));

	for (let x = 0; x < ctxWidth; x++) {
		for (let y = 0; y < ctxHeight; y++) {
			const u = x / ctxWidth;
			const v = y / ctxHeight;
			const b = 0.2;
			const ray = new Ray(origin, lowerLeftCorner.add(horizontal.scale(u)).add(vertical.scale(v)).subtract(origin))
			const colorArray = transformRayToColor(ray, world!);
			const index = (x + y * ctxWidth) * 4;
			ImageData.data[index + 0] = colorArray[0];
			ImageData.data[index + 1] = colorArray[1];
			ImageData.data[index + 2] = colorArray[2];
			ImageData.data[index + 3] = 255;
		}
	}
	console.log(ImageData.data);
	ctx.putImageData(ImageData, 0, 0);
}

export function transformRayToColor(ray: Ray, world: Hittables): [number, number, number] {
	const hitRecord: HitRecord | null = null;

	if (world.hit(ray, 0, INFINITY, hitRecord!)) {
		return Color.fromVec3(hitRecord!.normal.add(new Vec3(1, 1, 1)).scale(0.5)).toRGBArray();
	}
	const unit_direction = ray.direction.normalize();
	const t = (unit_direction.y + 1.0) * 0.5;
	return Color.fromVec3(new Vec3(1.0, 1.0, 1.0).scale(1 - t).add(new Vec3(0.5, 0.7, 1.0).scale(t))).toRGBArray();
}

function hitSphere(center: Vec3, radius: number, ray: Ray): number {
	const p = ray.origin.subtract(center);
	const a = ray.direction.dotProduct(ray.direction);
	const half_b = p.dotProduct(ray.direction);
	const c = p.dotProduct(p) - radius * radius;
	const discriminant = half_b * half_b - a * c;
	if (discriminant < 0) {
		return -1;
	} else {
		return (-half_b - Math.sqrt(discriminant)) / a;
	}
}
