import { Ray } from './Ray';
import { Vec3 } from './Vec3';

export class HitRecord {
	t: number;
	p: Vec3;
	normal: Vec3;
	frontFace: boolean;

	constructor(t: number, p: Vec3, normal: Vec3) {
		this.t = t;
		this.p = p;
		this.normal = normal;
		this.frontFace = true;
	}

	setFaceNormal(ray: Ray, outwardNormal: Vec3) {
		this.frontFace = ray.direction.dotProduct(outwardNormal) < 0;
		if (this.frontFace) {
			this.normal = outwardNormal;
		} else {
			this.normal = outwardNormal.invert();
		}
	}
}
