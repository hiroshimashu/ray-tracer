import { Hittable } from './Hittable';
import { HitRecord } from './HitRecord';
import { Ray } from './Ray';
import { Vec3 } from './Vec3';

export default class Sphere extends Hittable {
	public center: Vec3;
	public radius: number;

	constructor(center: Vec3, r: number) {
		super();
		this.center = center;
		this.radius = r;
	}

	hit(ray: Ray, tmin: number, tmax: number, rec: HitRecord): boolean {
		const RayToCenter = ray.origin.subtract(this.center);
		const a = ray.direction.squared_length();
		const b = RayToCenter.dotProduct(ray.direction);
		const c = RayToCenter.squared_length() - this.radius * this.radius;
		const discriminant = b * b - a * c;

		if (discriminant < 0) {
			return false;
		}
		const root = Math.sqrt(discriminant);
		let temp = (-b - root) / a;
		if (temp > tmax || temp < tmin) {
			temp = (-b + root) / a;
			if (temp > tmax || temp < tmin) {
				return false;
			}
		}
		rec.t = root;
		rec.p = ray.pointAtParameter(temp);
		const outwarodNormal = rec.p.subtract(this.center).scale(1 / this.radius);
		rec.setFaceNormal(ray, outwarodNormal);
	
		return true;
	}
}
