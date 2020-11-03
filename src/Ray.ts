class Vec3 {
	origin: Vec3;
	direction: Vec3;

	constructor(origin: Vec3, direction: Vec3) {
		this.origin = origin;
		this.direction = direction;
	}

	public pointAtParameter(t: number): Vec3 {
		return new Vec3(this.origin);
	}
}
