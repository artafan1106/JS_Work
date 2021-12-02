import Square from './square_class.js';


class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.lst_objects = [];
    }

    generateTiles() {
        for (let tileCounter = 0; tileCounter < 25; tileCounter++) {
            let tile = new Tile(tileCounter, this.ctx);
            this.tiles.push(tile);
        }
    }
    run() {
        this.generateTiles();
        let counter = 1;
        for (let i = 0; i < 25; i++) {
            let tile = this.tiles[i];
            tile.draw();
            if (counter % 5 != 0) {
                this.ctx.y += 80;
            } else {
                this.ctx.x += 150;
                this.ctx.y -= 320;
            }
            counter += 1;
        }
    }
}
const app = new Application();

frameCount.counter = 0;
frameCount.fps = 0;
frameCount(performance.now());

requestAnimationFrame(tick);

function tick(timestamp) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    requestAnimationFrame(tick);
    const diff = timestamp - pTimestamp;
    pTimestamp = timestamp;
    ctx.clearRect(0,0,800,800);
    ctx.beginPath();
    app.run();
}
