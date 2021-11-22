import Square from './square_class.js';


class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.lst = [];
    }

    generateSquares() {
        for (let squareCnt = 0; squareCnt < 25; squareCnt++) {
            let square = new Square(squareCnt);
            let square_draw = new Square(this.ctx);
            this.lst.push(square);
            square_draw.draw();
            console.log(square);
        }
    }
}
console.log(Square);

const app = new Application()
app.generateSquares();
console.log(app);