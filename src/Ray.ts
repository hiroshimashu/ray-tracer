import { Vec3 } from './Vec3';
import { Color } from "./Color";

export class Ray {
	origin: Vec3;
	direction: Vec3;

	constructor(origin: Vec3, direction: Vec3) {
		this.origin = origin;
		this.direction = direction;
	}

	public pointAtParameter(t: number): Vec3 {
		return this.origin.add(this.direction.scale(t));
	}
}
