import Color from './Color';

function Render(ctxWidth: number, ctxHeight: number): number[][] {
	const colorPixelArray = [];
	for (let i = 0; i < ctxWidth - 1; i++) {
		for (let j = 0; j < ctxHeight - 1; j++) {
			const r = Math.random();
			const g = Math.random();
			const b = Math.random();
			const color = new Color(r, g, b);

			colorPixelArray.push([...color.toRGBArray(), 1]);
		}
	}
	return colorPixelArray;
}
