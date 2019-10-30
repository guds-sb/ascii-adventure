class GudsScene extends GudsComponent {

    components = [];
    selected = new GudsComponent({});

    constructor(options) {
        super(options);
        this.components = [];
        this.selected = undefined;
    }

    addComponent(component) {
        this.components.push(component);
        this.components.sort((a, b) => b.depth - a.depth);
    }

    removeComponent(id) {
        const index = this.components.findIndex(component => component.id === id);
        if (index >= 0) this.components.splice(index, 1);
        this.components.sort((a, b) => b.depth - a.depth);
    }

    drawComponents(screen) {
        screen.clear();
        this.draw(screen);
        this.components.forEach(component => {
            if (component.enabled) {
                component.draw(screen);
            }
        });
    }

}