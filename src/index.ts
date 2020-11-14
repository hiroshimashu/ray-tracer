import Color from './Color';

function Render(ctxWidth: number, ctxHeight: number, data: Uint8ClampedArray): Uint8ClampedArray {
	for (let x = 0; x < ctxWidth; x++) {
		for (let y = 0; y < ctxHeight; y++) {
			const index = (x + y * ctxWidth) * 4;
			data[index + 0] = x;
			data[index + 1] = y;
			data[index + 2] = Math.floor((x + y) / 255);
			data[index + 3] = 255;
		}
	}
	return data;
}
