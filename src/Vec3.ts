import { number } from 'prop-types';

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

	public scale(scale: number): Vec3 {
		return new Vec3(this.x * scale, this.y * scale, this.z * scale);
	}

	public add(another: Vec3): Vec3 {
		return new Vec3(this.x + another.x, this.y + another.y, this.z + another.z);
	}

	public subtract(another: Vec3): Vec3 {
		return new Vec3(this.x - another.x, this.y - another.y, this.z - another.z);
	}

	public mutiply(another: Vec3): Vec3 {
		return new Vec3(this.x * another.x, this.y * another.y, this.z * another.z);
	}

	public division(another: Vec3): Vec3 {
		return new Vec3(this.x / another.x, this.y / another.y, this.z / another.z);
	}

	public dotProduct(another: Vec3): number {
		return this.x * another.x + this.y * another.y + this.z * another.z;
	}

	public crossProduct(another: Vec3): Vec3 {
		return new Vec3(
			this.y * another.z - this.z * another.y,
			this.z * another.x - this.x * another.z,
			this.x * another.y - this.y * another.x
		);
	}

	public length(): number {
		return Math.sqrt(this.x * this.x + this.y + this.y + this.z * this.z);
	}

	public squared_length(): number {
		return this.x * this.x + this.y + this.y + this.z * this.z;
	}
}
