import React from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Eraser from "../tools/Eraser";
import Oval from "../tools/Oval";
import Path from "../tools/Path";
import Rectangle from "../tools/Rectangle";
import './../styles/toolbar.sass'

const Toolbar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn" onClick={()=>{toolState.setTool(new Brush(canvasState.canvas))}}>Brush</button>
            <button className="toolbar__btn" onClick={()=>{toolState.setTool(new Rectangle(canvasState.canvas))}}>Rect</button>
            <button className="toolbar__btn" onClick={()=>{toolState.setTool(new Oval(canvasState.canvas))}}>Oval</button>
            <button className="toolbar__btn" onClick={()=>{toolState.setTool(new Eraser(canvasState.canvas))}}>Eraser</button>
            <button className="toolbar__btn" onClick={()=>{toolState.setTool(new Path(canvasState.canvas))}}>Line</button>
            <button className="toolbar__btn" style={{'marginLeft': 'auto'}}>Undo</button>
            <button className="toolbar__btn">Redo</button>
            <button className="toolbar__btn">Save</button>
        </div>
    )
}

export default Toolbar