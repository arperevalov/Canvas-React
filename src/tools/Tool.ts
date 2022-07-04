export default class Tool {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(canvas:any) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.destroyEvents()
    }

    setStrokeWidth(width: number) {
        this.ctx.lineWidth = width
    }

    setStrokeColor(color: string) {
        this.ctx.strokeStyle = color
    }

    setFillColor(color: string) {
        this.ctx.fillStyle = color
    }

    destroyEvents() {
        this.canvas.onmousemove = null;
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
    }
}