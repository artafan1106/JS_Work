import Tile from './tile_class.js';

class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 1440;
        this.canvas.height = 900;
        this.tiles = [];

        this.startTime = 0;
        this.endTime = 0;
        this.fps = 0;
    }

    generateTiles() {
        for (let tileCounter = 0; tileCounter < 25; tileCounter++) {
            let tile = new Tile(tileCounter, this.ctx);
            this.tiles.push(tile);
        }
    }
    animate() {
        this.startTime = performance.now();
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);

        for (let i = 0; i < 25; i++) {
            this.tiles[i].setAngle(45);
            this.tiles[i].update(i);
            this.tiles[i].draw();
        }
        //this.ctx.save();
        this.ctx.x = this.ctx.canvas.width / 2;
        this.ctx.y = this.ctx.canvas.height / 2;
        this.ctx.translate(this.ctx.x + 60 / 2,this.ctx.y + 60 / 2);
        this.ctx.rotate(0.01);
        this.ctx.translate(-(this.ctx.x + 60 / 2),-(this.ctx.y + 60 / 2));
        //this.ctx.restore();

        requestAnimationFrame(() => this.animate());
        this.endTime = performance.now();
        this.fps = (this.endTime - this.startTime) * 60;
        this.draw_fps();
    }
    draw_Grid() {
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(this.ctx.canvas.width / 2, 0);
        this.ctx.lineTo(this.ctx.canvas.width / 2, this.ctx.canvas.height);

        this.ctx.moveTo(0, this.ctx.canvas.height / 2);
        this.ctx.lineTo(this.ctx.canvas.width, this.ctx.canvas.height / 2);

        this.ctx.stroke();
    }
    draw_fps() {
        this.ctx.font = "24px Verdana";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(`FPS: ${this.fps}`, this.ctx.canvas.width - 110, 40);
    }
    run() {
        this.generateTiles();
        this.animate();
    }
}

new Application().run();