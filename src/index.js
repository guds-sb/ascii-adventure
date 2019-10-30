const Guds = {};
Guds.textures = GudsTextureTable.load();
Guds.app = new PIXI.Application(
    {
        width: GudsConstants.SCREEN_TABLE_WIDTH * 9,
        height: GudsConstants.SCREEN_TABLE_HEIGHT * 16,
        backgroundColor: 0x000000
    }
);
document.getElementById('game').appendChild(Guds.app.view);
Guds.screen = new GudsScreen(GudsSpriteTable.load(), GudsConstants.SCREEN_TABLE_WIDTH, GudsConstants.SCREEN_TABLE_HEIGHT);
Guds.app.stage.addChild(Guds.screen);

const scene = new GudsScene({
    width: GudsConstants.SCREEN_TABLE_WIDTH - 2,
    height: GudsConstants.SCREEN_TABLE_HEIGHT - 2,
    name: 'Scene 1'
});

scene.drawComponents(Guds.screen);