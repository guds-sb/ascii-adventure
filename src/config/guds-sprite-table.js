const GudsSpriteTable = {
    load: () => {
        const sprites = [];
        for (let y = 0; y < GudsConstants.SCREEN_TABLE_HEIGHT; y++) {
            for (let x = 0; x < GudsConstants.SCREEN_TABLE_WIDTH; x++) {
                const sprite = new GudsSprite(x * 9, y * 16, 0, 0xC0C0C0, 0x000000);
                sprites.push(sprite);
            }
        }
        return sprites;
    }
}