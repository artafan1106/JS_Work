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
        for (let squareCnt = 1; squareCnt < 11; squareCnt++) {
            let square = new Square(squareCnt);
            let square_draw = new Square(this.ctx);
            this.lst.push(square);
            square_draw.draw();
            if (squareCnt % 5 == 0) {
                this.ctx.translate(0,70);
            } else {
                this.ctx.translate(70, 0);
            }
        }
    }
}
const app = new Application();
app.generateSquares();
