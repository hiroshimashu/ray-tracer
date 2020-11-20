import { Vec3 } from './Vec3';
import { Ray } from './Ray';

export default class Camera {
	origin: Vec3;
	lowerLeftCorner: Vec3;
	horizontal: Vec3;
	vertical: Vec3;

	constructor(origin: Vec3, lowerLeftCorner: Vec3, horizontal: Vec3, vertical: Vec3) {
		this.origin = origin;
		this.lowerLeftCorner = lowerLeftCorner;
		this.horizontal = horizontal;
		this.vertical = vertical;
	}

	getRay(u: number, v: number): Ray {
		const direction = this.lowerLeftCorner
			.add(this.horizontal.scale(u))
			.add(this.vertical.scale(v))
			.subtract(this.origin);
		return new Ray(this.origin, direction);
	}
}
