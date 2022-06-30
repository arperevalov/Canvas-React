import React from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Rectangle from "../tools/Rectangle";
import './../styles/toolbar.sass'

const Toolbar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn" onClick={()=>{toolState.setTool(new Brush(canvasState.canvas))}}>Brush</button>
            <button className="toolbar__btn" onClick={()=>{toolState.setTool(new Rectangle(canvasState.canvas))}}>Rect</button>
            <button className="toolbar__btn">Circle</button>
            <button className="toolbar__btn">Eraser</button>
            <button className="toolbar__btn">Line</button>
            <input type="color" />
            <button className="toolbar__btn" style={{'marginLeft': 'auto'}}>Undo</button>
            <button className="toolbar__btn">Redo</button>
            <button className="toolbar__btn">Save</button>
        </div>
    )
}

export default Toolbar