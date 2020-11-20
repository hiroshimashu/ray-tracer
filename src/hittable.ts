import { Ray } from './Ray';
import HitRecord from './HitRecord';

export default abstract class Hittable {
	abstract hit(ray: Ray, tmin: number, tmax: number): HitRecord | null;
}
