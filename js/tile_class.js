class Tile {
    constructor(id, ctx) {
        this.ctx = ctx;
        this.id = id;
        this.width = 60;
        this.height = 60;
        this.ctx.x = 720;
        this.ctx.y = 450;
        this.angle = 0;
    }
    rndColor() {
        return "#" + Math.round(Math.random() * 16777215).toString(16);
    }
    update(cnt) {
        if (cnt === 0) {
            this.ctx.y = 150;
        } if (cnt % 5 === 0) {
            this.ctx.y += 90;
            this.ctx.x = 530;
        } else {
            this.ctx.x += 80;
        }
    }
    draw() {
        this.angle += 0.1;
        if (this.angle >= 360) {
            this.angle = 0;
        }
        this.ctx.save();
        this.ctx.fillStyle = this.rndColor();
        this.ctx.translate(this.ctx.x + this.width / 2,this.ctx.y + this.height / 2);
        this.ctx.rotate(this.angle * 0.1);
        this.ctx.translate(-(this.ctx.x + this.width / 2),-(this.ctx.y + this.height / 2));
        this.ctx.fillRect(this.ctx.x, this.ctx.y, this.width, this.height);

        this.ctx.restore();
    }
}
export default Tile;