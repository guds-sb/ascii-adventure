class GudsScreen extends PIXI.Container {

    foregroundColor = 0xC0C0C0;
    backgroundColor = 0x000000;
    screenWidth = 0;
    screenHeight = 0;

    constructor(sprites, width = 1, height = 1) {
        super();
        this.foregroundColor = 0xC0C0C0;
        this.backgroundColor = 0x000000;
        this.screenWidth  = width;
        this.screenHeight = height;
        this.sprites = sprites;
        this.addChild(...sprites);
    }

    clear() {
        this.sprites.forEach(sprite => {
            sprite.char(0);
            sprite.backColor(0x000000);
        });
    }

    color({foregroundColor, backgroundColor}) {
        if (foregroundColor) this.foregroundColor = foregroundColor;
        if (backgroundColor) this.backgroundColor = backgroundColor;
    }

    writeChar(x, y, char) {
        if (this.validPosition(x, y)) {
            const spritePosition = (y * this.screenWidth) + x;
            this.sprites[spritePosition].char(char);
            this.sprites[spritePosition].color(this.foregroundColor);
            this.sprites[spritePosition].backColor(this.backgroundColor);
        }
    }

    write(x, y, sequence, wrap = false) {
        if (!GudsUtils.isIterable(sequence)) {
            this.writeChar(x, y, sequence);
        }
        else {
            for (let char of sequence) {
                if (this.validPosition(x, y)) {
                    const spritePosition = (y * this.screenWidth) + x;
                    this.sprites[spritePosition].char(char);
                    this.sprites[spritePosition].color(this.foregroundColor);
                    this.sprites[spritePosition].backColor(this.backgroundColor);
                    x++;
                }
                else {
                    if (x >= this.screenWidth) {
                        if (wrap && (x < (this.screenHeight - 1))) {
                            x = 0;
                            y += 1;
                        } else break;
                    }
                    else x++;
                }
            }
        }
    }

    vwrite(x, y, sequence, wrap = false) {
        if (!GudsUtils.isIterable(sequence)) {
            this.writeChar(x, y, sequence);
        }
        else {
            for (let char of sequence) {
                if (this.validPosition(x, y)) {
                    const spritePosition = (y * this.screenWidth) + x;
                    this.sprites[spritePosition].char(char);
                    this.sprites[spritePosition].color(this.foregroundColor);
                    this.sprites[spritePosition].backColor(this.backgroundColor);
                    y++;
                }
                else {
                    if (y >= this.screenHeight) {
                        if (wrap && (x < (this.screenWidth - 1))) {
                            y = 0;
                            x += 1;
                        } else break;
                    }
                    else y++;
                }
            }
        }
    }

    validPosition(x, y) {
        return ((x >= 0) && (x < this.screenWidth)) && ((y >= 0) && (y < this.screenHeight));
    }

};