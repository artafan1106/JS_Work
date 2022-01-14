import Tile from './tile_class.js';

class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        this.tiles = [];

        this.numTiles = 1500;
    }

    generateTiles() {

        for (let tileCounter = 0; tileCounter < this.numTiles; tileCounter++) {
            this.tiles[tileCounter] = new Tile();
        }
        return this.tiles

    }
    animate() {
        requestAnimationFrame(() => this.animate());
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);

        for (let i = 0; i < this.numTiles; i++) {
            this.tiles[i].drawPosition();
        }

    }
    run() {
        this.generateTiles();
        this.animate();
    }
}
new Application().run();