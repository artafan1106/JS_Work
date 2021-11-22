class Square {
    constructor(id, ctx) {
        this.ctx = ctx;
        this.id = id;
        this.width = 1 + (Math.random() % 100 + 50);
        this.height = 1 + (Math.random() % 100 + 50);
        this.color = "#" + Math.round(Math.random() * 16777215).toString(16);
    }
    getId() {
        return this.id;
    }
    draw() {
        this.ctx.save(); // ругается здесь хз почему (this.ctx is undefined)
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect((this.width / 2),(this.height / 2),150,150);
        this.ctx.restore();
    }
}
export default Square;