import { Color } from './Color';
export function Render(ctxWidth, ctxHeight, data) {
    for (let x = 0; x < ctxWidth; x++) {
        for (let y = 0; y < ctxHeight; y++) {
            const r = x / ctxWidth;
            const g = y / ctxHeight;
            const b = 0.2;
            const color = new Color(r, g, b);
            const colorArray = color.toRGBArray();
            const index = (x + y * ctxWidth) * 4;
            data[index + 0] = colorArray[0];
            data[index + 1] = colorArray[1];
            data[index + 2] = colorArray[2];
            data[index + 3] = 255;
        }
    }
    return data;
}
//# sourceMappingURL=index.js.map