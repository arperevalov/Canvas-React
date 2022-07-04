import { makeAutoObservable } from "mobx";
import Tool from "../tools/Tool";

class ToolState {
    tool: null | Tool
    constructor(){
        makeAutoObservable(this)
        this.tool = null
    }

    setToolStrokeWidth(width: number) {
        this.tool?.setStrokeWidth(width)
    }

    setToolStrokeColor(color: string) {
        this.tool?.setStrokeColor(color)
    }

    setToolFillColor(color: string) {
        this.tool?.setFillColor(color)
    }

    setTool(tool: any) {
        this.tool = tool
    }
}

export default new ToolState()