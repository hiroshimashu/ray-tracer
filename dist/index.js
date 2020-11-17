"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Render = void 0;
const Color_1 = require("./Color");
function Render() {
    let canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const ctxWidth = 300;
    const ctxHeight = 200;
    let ImageData = ctx.getImageData(0, 0, ctxWidth, ctxHeight);
    let data = ImageData;
    for (let x = 0; x < ctxWidth; x++) {
        for (let y = 0; y < ctxHeight; y++) {
            const r = x / ctxWidth;
            const g = y / ctxHeight;
            const b = 0.2;
            const color = new Color_1.Color(r, g, b);
            const colorArray = color.toRGBArray();
            const index = (x + y * ctxWidth) * 4;
            data[index + 0] = colorArray[0];
            data[index + 1] = colorArray[1];
            data[index + 2] = colorArray[2];
            data[index + 3] = 255;
        }
    }
    ImageData.data = data;
    ctx.putImageData(ImageData, 0, 0);
}
exports.Render = Render;
//# sourceMappingURL=index.js.map