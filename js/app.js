import Tile from './tile_class.js';


class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 1440;
        this.canvas.height = 900;
        this.tiles = [];
    }

    generateTiles() {
        for (let tileCounter = 0; tileCounter < 25; tileCounter++) {
            let tile = new Tile(tileCounter, this.ctx);
            this.tiles.push(tile);
        }
    }
    animate() {
        for (let i = 0; i < 25; i++) {
            this.tiles[i].update(i,this.canvas.width,this.canvas.height);
            this.tiles[i].draw();
        }
        requestAnimationFrame(this.animate.bind(this));

    }
    run() {
        this.generateTiles();
        this.animate();
    }
}

new Application().run();