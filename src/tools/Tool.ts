export default class Tool {
    canvas: any;
    ctx: any

    constructor(canvas:any) {
        this.canvas = canvas,
        this.ctx = canvas.getContext('2d')
    }
}