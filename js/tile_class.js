class Tile {
    constructor(ctx, x, y, z) {
        this.ctx = ctx;
        this.width = 30;
        this.height = 30;
        this.ctx.x = x;
        this.ctx.y = y;
        this.ctx.z = z;

    }
    draw() {
        this.ctx.clearRect(0,0,1440,900);
        if (this.ctx.z < 0) {
            this.ctx.z = 7500;
            this.ctx.x,this.ctx.y = Math.random() * 1440, Math.random() * 900;
        }

        let translate_x = this.ctx.canvas.width * 0.5;
        let translate_y = this.ctx.canvas.height * 0.5;

        let field_of_view = (this.ctx.canvas.height + this.ctx.canvas.width) * 0.2;

        let star_x = (this.ctx.x - translate_x) / (this.ctx.z / field_of_view) + translate_x;
        let star_y = (this.ctx.y - translate_y) / (this.ctx.z / field_of_view) + translate_y;

        let scale = field_of_view / (field_of_view + this.ctx.z);

        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(star_x, star_y, this.width * scale, this.height * scale);
        this.ctx.z -= 0.5;
    }
}
export default Tile;