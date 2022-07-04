import Tool from "./Tool";

export default class Path extends Tool {
    mouseDown: boolean;
    startX: number;
    startY: number;
    saved: ReturnType<typeof this.canvas.toDataURL> | null;

    constructor(canvas: any) {
        super(canvas);
        this.listen()
        this.mouseDown = false;
        this.startX = 0;
        this.startY = 0;
        this.saved = null;
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }

    mouseUpHandler(e: any) {
        this.mouseDown = false
    }

    mouseDownHandler(e: any) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(e: any) {
        if (this.mouseDown) {
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            this.draw(currentX, currentY)
        }
    }

    draw(x: number, y:number) {
        const img: any = new Image()
        img.src = this.saved
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.moveTo(this.startX, this.startY)
            this.ctx.lineTo(x,y)
            this.ctx.stroke()
        }
    }

}