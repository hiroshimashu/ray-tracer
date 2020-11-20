import { Color } from './Color';
import { Ray } from './Ray';
import { Vec3 } from "./Vec3";

export function Render() {
	// Setting related to Image.
	let canvas: any = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');
	const ctxWidth = 600;
	const ctxHeight = 400;
	const aspectRatio = 1.5;
	let ImageData = ctx.getImageData(0, 0, ctxWidth, ctxHeight);
	
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
			const colorArray = transformRayToColor(ray);
			const index = (x + y * ctxWidth) * 4;
			ImageData.data[index + 0] = colorArray[0];
			ImageData.data[index + 1] = colorArray[1];
			ImageData.data[index + 2] = colorArray[2];
			ImageData.data[index + 3] = 255;
		}
	}
	ctx.putImageData(ImageData, 0, 0);
}

export function transformRayToColor(ray: Ray): [number, number, number] {
	const unit_direction = ray.direction.normalize();
	const t = unit_direction.y * 0.5 + 0.5;
	const startColor = Color.fromVec3(new Vec3(1.0, 1.0, 1.0));
	const endColor = Color.fromVec3(new Vec3(0.5, 0.7, 1.0));
	return (startColor.scale(1 - t).add(endColor.scale(t)) as Color).toRGBArray();
}
