class GudsComponent {

    id = GudsUtils.gudsID();

    x = 0;
    y = 0;
    depth = 0;
    width = 0;
    height = 0;

    name = '';
    nameAlign = '';
    nameColor = 0x000000;

    border = new GudsBorder({});
    transparentBorder = false;

    backgroundColor = 0x000000;
    transparentBack = false;

    selected = false;
    enabled = false;

    constructor({
        x = 0,
        y = 0,
        depth = 0,
        width = 10,
        height = 10,
        name = '',
        nameAlign = 'left',
        nameColor = 0x808080,
        border = {h: 219, v: 219, tl: 219, tr: 219, bl: 219, br: 219},
        borderColor = 0xC0C0C0,
        borderBack = 0xC0C0C0,
        transparentBorder = false,
        backgroundColor = 0x000000,
        transparentBack = false,
        selected = false,
        enabled = true
    }) {
        this.x = x;
        this.y = y;
        this.depth = depth;
        this.width = width;
        this.height = height;
        this.name = name;
        this.nameAlign = nameAlign;
        this.nameColor = nameColor;
        this.border = new GudsBorder({ foregroundColor: borderColor, backgroundColor: borderBack, border });
        this.transparentBorder = transparentBorder;
        this.backgroundColor = backgroundColor;
        this.transparentBack = transparentBack;
        this.selected = selected;
        this.enabled = enabled;
    }

    draw(screen) {
        this.border.draw(screen, this.x, this.y, this.width, this.height);
        if (this.name && this.name.length <= this.width) this.drawName(screen);
    }

    drawName(screen) {
        screen.color({ foregroundColor: this.nameColor, backgroundColor: this.border.backgroundColor });
        if (this.nameAlign === 'left') {
            screen.write(this.x + 1, this.y, this.name);
        }
        else if (this.nameAlign === 'right') {
            screen.write(this.x + this.width + 1 - this.name.length, this.y, this.name);
        }
        else {
            screen.write(this.x + Math.round(this.width / 2) + 1 - Math.round(this.name.length / 2), this.y, this.name);
        }
    }

}