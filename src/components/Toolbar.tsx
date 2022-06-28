import React from "react";
import './../styles/toolbar.sass'

const Toolbar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn">Brush</button>
            <button className="toolbar__btn">Rect</button>
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