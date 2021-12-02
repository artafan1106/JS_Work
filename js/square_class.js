class Tile {
    constructor(id, ctx) {
        this.ctx = ctx;
        this.id = id;
        this.width = 90;
        this.height = 50; // Math.round(Math.random() * 100)
        this.ctx.x = 50;
        this.ctx.y = 50;
        this.color = "#" + Math.round(Math.random() * 16777215).toString(16);
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.ctx.x, this.ctx.y, this.width, this.height);
        this.ctx.translate(this.ctx.x + this.width / 2,this.ctx.y + this.height / 2);
        this.ctx.rotate(0.0003);
        this.ctx.translate(-(this.ctx.x + this.width / 2),-(this.ctx.y + this.height / 2));
    }
}
export default Tile;
