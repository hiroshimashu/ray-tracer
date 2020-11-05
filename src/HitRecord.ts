import Vec3 from './Vec3';

export default class HitRecord {
	t: number;
	p: Vec3;
	normal: Vec3;

	constructor(t: number, p: Vec3, normal: Vec3) {
		this.t = t;
		this.p = p;
		this.normal = normal;
	}
}