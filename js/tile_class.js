class Tile {
    constructor(id, ctx) {
        this.ctx = ctx;
        this.id = id;
        this.width = 90;
        this.height = 50;
        this.ctx.x = 450;
        this.ctx.y = 250;
    }
    rndColor() {
        return "#" + Math.round(Math.random() * 16777215).toString(16);
    }
    update(cnt) {
        this.ctx.x += cnt + 10;
        this.ctx.y += cnt + 5;
        if (cnt % 25 == 0) {
            this.ctx.x = 450;
            this.ctx.y = 250;
            this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        }


    }
    draw() {
        this.ctx.fillStyle = this.rndColor();
        this.ctx.fillRect(this.ctx.x, this.ctx.y, this.width, this.height);
        this.ctx.translate(this.ctx.x + this.width / 2,this.ctx.y + this.height / 2);
        this.ctx.rotate(0.0002);
        this.ctx.translate(-(this.ctx.x + this.width / 2),-(this.ctx.y + this.height / 2));
    }
}
export default Tile;
