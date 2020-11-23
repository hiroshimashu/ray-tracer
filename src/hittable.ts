import { Ray } from './Ray';
import { HitRecord } from './HitRecord';

export abstract class Hittable {
	abstract hit(ray: Ray, tmin: number, tmax: number, rec: HitRecord): boolean;
}
