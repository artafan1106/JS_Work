class Square {
    constructor(id) {
        this.ctx = canvas.getContext('2d');
        this.id = id;
        this.width = 60;
        this.height = 60;
        this.ctx.x = 10;
        this.ctx.y = 10;
        this.color = "#" + Math.round(Math.random() * 16777215).toString(16);
    }
    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.ctx.x,this.ctx.y, this.width, this.height);
        this.ctx.restore();
    }
}
export default Square;
