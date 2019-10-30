class GudsSprite extends PIXI.Container {

    charCode = 0;
    foregroundColor = 0;
    backgroundColor = 0;

    constructor(
        x = 0,
        y = 0,
        charCode = 0,
        foregroundColor = 0xC0C0C0,
        backgroundColor = 0x000000
    ) {
        super();
        this.charCode        = charCode;
        this.foregroundColor = foregroundColor;
        this.backgroundColor = backgroundColor;

        const foreground = new PIXI.Sprite(Guds.textures[charCode]);
        const background = new PIXI.Graphics();

        foreground.name = 'fore';
        background.name = 'back';
        foreground.tint = foregroundColor;
        background.tint = backgroundColor;
        foreground.zIndex = 5;
        background.zIndex = 1;
        background.beginFill(0xFFFFFF);
        background.drawRect(0, 0, 9, 16);
        background.endFill();

        this.addChild(background, foreground);
        this.x = x;
        this.y = y;
    }

    char(charCode) {
        if (charCode === undefined) return;
        if (typeof(charCode) === 'string') {
            charCode = charCode.charCodeAt(0);
        }
        this.charCode = charCode;
        this.getChildByName('fore').texture = Guds.textures[charCode];
    }

    color(foregroundColor) {
        if (foregroundColor === undefined) return this.foregroundColor;
        this.foregroundColor = foregroundColor;
        this.getChildByName('fore').tint = foregroundColor;
    }

    backColor(backgroundColor) {
        if (backgroundColor === undefined) return this.backgroundColor;
        this.backgroundColor = backgroundColor;
        this.getChildByName('back').tint = backgroundColor;
    }
}