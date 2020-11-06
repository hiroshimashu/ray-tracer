import Hittable from './Hittable';
import HitRecord from './HitRecord';
import Ray from './Ray';
import Vec3 from './Vec3';

export default class Sphere extends Hittable {
	public center: Vec3;
	public radius: number;

	constructor(center: Vec3, r: number) {
		super();
		this.center = center;
		this.radius = r;
	}

	hit(ray: Ray, tmin: number, tmax: number): HitRecord | null {
		const fromRayToCenter = ray.origin.subtract(this.center);
		const a = ray.direction.squared_length();
		const b = fromRayToCenter.dotProduct(ray.direction);
		const c = fromRayToCenter.squared_length() - this.radius * this.radius;
		const discriminant = b * b - a * c;
		if (discriminant > 0) {
			const root = Math.sqrt(discriminant);
			let temp = (-b - root) / a;
			if (temp < tmax && temp > tmin) {
				const point = ray.pointAtParameter(temp);
				return new HitRecord(temp, point, point.subtract(this.center).scale(1 / this.radius));
			}
			temp = (-b + root) / a;
			if (temp < tmax && temp > tmin) {
				const point = ray.pointAtParameter(temp);
				return new HitRecord(temp, point, point.subtract(this.center).scale(1 / this.radius));
			}
		}
		return null;
	}
}
