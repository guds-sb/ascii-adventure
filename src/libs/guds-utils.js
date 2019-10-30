const GudsUtils = {

    gudsID: () => {
        return Date.now().toString() + Math.round(Math.random() * 1000000).toString();
    },

    isIterable: (value) => {
        return Symbol.iterator in Object(value);
    },

    sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    logSpriteTable: (screen) => {
        console.log(screen.sprites.map(spr => ({
            color: spr.getChildByName('fore').tint,
            char: spr.getChildByName('fore').texture
        })));
    }
    
}