import { Color } from './Color.js';
export function Render() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var ctxWidth = 300;
	var ctxHeight = 200;
	var ImageData = ctx.getImageData(0, 0, ctxWidth, ctxHeight);
	for (var x = 0; x < ctxWidth; x++) {
		for (var y = 0; y < ctxHeight; y++) {
			var r = x / ctxWidth;
			var g = y / ctxHeight;
			var b = 0.2;
			var color = new Color(r, g, b);
			var colorArray = color.toRGBArray();
			var index = (x + y * ctxWidth) * 4;
			ImageData.data[index + 0] = colorArray[0];
			ImageData.data[index + 1] = colorArray[1];
			ImageData.data[index + 2] = colorArray[2];
			ImageData.data[index + 3] = 255;
		}
	}
	ctx.putImageData(ImageData, 0, 0);
}
//# sourceMappingURL=index.js.map
