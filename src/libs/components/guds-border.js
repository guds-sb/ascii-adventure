// BORDER = {
//     h: HORIZONTAL,
//     v: VERTICAL,
//     tl: TOP_LEFT,
//     tr: TOP_RIGHT,
//     bl: BOTTOM_LEFT,
//     br: BOTTOM_RIGHT
// }

class GudsBorder {

    foregroundColor = 0x000000;
    backgroundColor = 0x000000;
    transparentBack = false;
    border = {};

    constructor({
        foregroundColor = 0xC0C0C0,
        backgroundColor = 0x000000,
        transparentBack = true,
        border = {h: 219, v: 219, tl: 219, tr: 219, bl: 219, br: 219}
    }) {
        this.foregroundColor = foregroundColor;
        this.backgroundColor = backgroundColor;
        this.transparentBack = transparentBack;
        this.border = border;
    }

    draw(screen, x, y, width, height) {
        const hArray = new Array(width).fill(this.border.h);
        const vArray = new Array(height).fill(this.border.v);
        screen.color({ foregroundColor: this.foregroundColor, backgroundColor: this.backgroundColor });

        screen.write(x + 1, y, hArray);
        screen.write(x + 1, y + height + 1, hArray);
        screen.vwrite(x, y + 1, vArray);
        screen.vwrite(x + width + 1, y + 1, vArray);

        screen.write(x, y, this.border.tl);
        screen.write(x + width + 1, y, this.border.tr);
        screen.write(x, y + height + 1, this.border.bl);
        screen.write(x + width + 1, y + height + 1, this.border.br);
    }

}