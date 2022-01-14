class Tile {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.size = 1.5;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.z = Math.random() * (this.canvas.width + this.canvas.height);
        this.speed = 2.5;

        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;

    }
    drawPosition() {
        this.z -= this.speed;
        if (this.z < 0) {
            this.z = this.canvas.width;
        }
        let x,y,s;

        x = (this.x - this.centerX) * (this.canvas.width / this.z);
        x = x + this.centerX;

        y = (this.y - this.centerY) * (this.canvas.width / this.z);
        y = y + this.centerY;

        s = this.size * (this.canvas.width / this.z);

        this.ctx.beginPath();
        this.ctx.fillStyle = '#cd5700';
        this.ctx.fillRect(x, y, s, s);
        this.ctx.fill();
    }

}
export default Tile;