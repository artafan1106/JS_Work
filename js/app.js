import Tile from './tile_class.js';

class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 1440;
        this.canvas.height = 900;
        this.tiles = [];
    }

    generateTiles() {
        let max_depth = 7500;
        function positionX() {
            return (Math.floor(Math.random() * 1440));
        }
        function positionY() {
            return (Math.floor(Math.random() * 900));
        }

        for (let tileCounter = 0; tileCounter < 150; tileCounter++) {
            let tile = new Tile(this.ctx, positionX(), positionY(), tileCounter * (max_depth / 200));
            this.tiles.push(tile);
        }

    }
    animate() {
        requestAnimationFrame(() => this.animate());
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);

        for (let i = 0; i < 150; i++) {
            this.tiles[i].draw();
        }

    }
    run() {
        this.generateTiles();
        this.animate();
    }
}
new Application().run();