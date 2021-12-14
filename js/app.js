import Tile from './tile_class.js';

class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 1440;
        this.canvas.height = 900;
        this.tiles = [];

        this.startTime = 0;
        this.endTime = 0;
        this.fps = 0;
        this.debug = false;

        this.currentTime = 0;
    }

    generateTiles() {
        for (let tileCounter = 0; tileCounter < 25; tileCounter++) {
            let tile = new Tile(tileCounter, this.ctx);
            this.tiles.push(tile);
        }
    }
    animate(debug) {
        this.debug = debug;
        this.startTime = Date.now();
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        if (this.debug === true) {
            this.drawGrid();
            this.drawFps();
        }
        for (let i = 0; i < 25; i++) {
            this.tiles[i].update(i);
            this.tiles[i].draw();
        }
        requestAnimationFrame(() => this.animate(this.debug));
        this.endTime = Date.now();
        this.fps = (this.endTime - this.startTime) * 10;
        this.currentTime += 1;
    }
    drawGrid() {
        this.ctx.strokeStyle = "green";
        this.ctx.moveTo(this.ctx.canvas.width / 2, 0);
        this.ctx.lineTo(this.ctx.canvas.width / 2, this.ctx.canvas.height);

        this.ctx.moveTo(0, this.ctx.canvas.height / 2);
        this.ctx.lineTo(this.ctx.canvas.width, this.ctx.canvas.height / 2);

        this.ctx.stroke();
    }
    drawFps() {
        this.ctx.font = "24px Verdana";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(`FPS: ${this.fps}`, this.ctx.canvas.width - 180, 40);
        this.ctx.fillText(`Time: ${this.currentTime / 60}`, this.ctx.canvas.width - 180, 70);
    }
    run(debug) {
        this.debug = debug;
        this.generateTiles();
        if (this.debug === false) {
            this.animate(false);
        } else {
            this.animate(true);
        }
    }
}
new Application().run(true);