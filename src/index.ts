import { Color } from './Color';

export function Render() {
	let canvas: any = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');
	const ctxWidth = 300;
	const ctxHeight = 200;

	let ImageData = ctx.getImageData(0, 0, ctxWidth, ctxHeight);

	for (let x = 0; x < ctxWidth; x++) {
		for (let y = 0; y < ctxHeight; y++) {
			const r = x / ctxWidth;
			const g = y / ctxHeight;
			const b = 0.2;
			const color = new Color(r, g, b);
			const colorArray = color.toRGBArray();
			const index = (x + y * ctxWidth) * 4;
			ImageData.data[index + 0] = colorArray[0];
			ImageData.data[index + 1] = colorArray[1];
			ImageData.data[index + 2] = colorArray[2];
			ImageData.data[index + 3] = 255;
		}
	}
	ctx.putImageData(ImageData, 0, 0);
}
