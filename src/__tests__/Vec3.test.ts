import Vec3 from '../Vec3';

describe('Test Vec3 class', () => {
	test('negation correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const expected = new Vec3(-1, -2, -3);

		expect(a.negate()).toEqual(expected);
	});

	test('invert correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const expected = new Vec3(1, 1 / 2, 1 / 3);

		expect(a.invert()).toEqual(expected);
	});

	test('scale correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const expected = new Vec3(2, 4, 6);

		expect(a.scale(2)).toEqual(expected);
	});

	test('scale correctly works when scale is not integer', () => {
		const a = new Vec3(1, 1, 1);
		const expected = new Vec3(1 / Math.sqrt(3), 1 / Math.sqrt(3), 1 / Math.sqrt(3));

		expect(a.scale(1 / Math.sqrt(3))).toEqual(expected);
	});

	test('addition correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const b = new Vec3(1.1, 2.1, 3.1);

		const expected = new Vec3(2.1, 4.1, 6.1);

		expect(a.add(b)).toEqual(expected);
	});

	test('multiply correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const b = new Vec3(4, 5, 6);

		const expected = new Vec3(4, 10, 18);

		expect(a.mutiply(b)).toEqual(expected);
	});

	test('subtract correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const b = new Vec3(4, 5, 6);

		const expected = new Vec3(-3, -3, -3);

		expect(a.subtract(b)).toEqual(expected);
	});

	test('division correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const b = new Vec3(4, 5, 6);

		const expected = new Vec3(1 / 4, 2 / 5, 3 / 6);

		expect(a.division(b)).toEqual(expected);
	});

	test('dot product correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const b = new Vec3(4, 5, 6);

		const expected = 32;

		expect(a.dotProduct(b)).toBe(expected);
	});

	test('cross product correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const b = new Vec3(4, 5, 6);

		const expected = new Vec3(-3, 6, -3);

		expect(a.crossProduct(b)).toEqual(expected);
	});

	test('normalize correctly works', () => {
		const a = new Vec3(1, 1, 1);
		const length = a.length();
		const expected = new Vec3(1 / length, 1 / length, 1 / length);

		expect(a.normalize()).toEqual(expected);
	});

	test('length correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const expected = Math.sqrt(14);

		expect(a.length()).toBe(expected);
	});

	test('Squared length correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const expected = 14;

		expect(a.squared_length()).toBe(expected);
	});
});
