export default class Vec3 {
	x: number;
	y: number;
	z: number;
	constructor(x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public negate(): Vec3 {
		return new Vec3(-this.x, -this.y, -this.z);
	}

	public invert(): Vec3 {
		return new Vec3(1 / this.x, 1 / this.y, 1 / this.z);
	}

	public add(another: Vec3): Vec3 {
		return new Vec3(this.x + another.x, this.y + another.y, this.z + another.z);
	}
}
