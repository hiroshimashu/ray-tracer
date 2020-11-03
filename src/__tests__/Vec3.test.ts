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

	test('addition correctly works', () => {
		const a = new Vec3(1, 2, 3);
		const b = new Vec3(1.1, 2.1, 3.1);

		const expected = new Vec3(2.1, 4.1, 6.1);

		expect(a.add(b)).toEqual(expected);
	});
});
