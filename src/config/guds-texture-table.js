const GudsTextureTable = {
    load: () => {
        const textures = [];
        const texture = PIXI.Texture.from('./assets/ascii.png');
        for (let y = 0; y < GudsConstants.ASCII_IMAGE_HEIGHT; y++) {
            for (let x = 0; x < GudsConstants.ASCII_IMAGE_WIDTH; x++) {
                textures.push(new PIXI.Texture(texture, new PIXI.Rectangle(x * 9, y * 16, 9, 16)));
            }
        }
        return textures;
    }
}