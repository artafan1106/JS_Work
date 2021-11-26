import Square from './square_class.js';


class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.lst_objects = [];
    }

    generateSquares() {
        for (let squareCnt = 1; squareCnt < 26; squareCnt++) {
            let square = new Square(squareCnt);
            let square_draw = new Square(this.ctx);
            this.lst_objects.push(square);
            square_draw.draw();
            if (squareCnt % 5 == 0) {
                this.ctx.translate(-360,70);
            } else {
                this.ctx.translate(70, 0);
            }
        }
    }
}
const app = new Application();
app.generateSquares();

let frameCount = function _fc(timeStart){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let now = performance.now();
    let duration = now - timeStart;

    if(duration < 1000){
        _fc.counter++;
    } else {

        _fc.fps = _fc.counter;
        _fc.counter = 0;
        timeStart = now;
        console.log(_fc.fps);
        ctx.clearRect(0, 0, 800, 800);
        ctx.font = "42px Arial";
        if (_fc.fps < 60) {
            ctx.fillStyle = 'red';
        } else {
            ctx.fillStyle = 'green';
        }
        ctx.fillText('FPS: ' + _fc.fps,630, 330);
    }
    requestAnimationFrame(() => frameCount(timeStart));
}

frameCount.counter = 0;
frameCount.fps = 0;
frameCount(performance.now());
