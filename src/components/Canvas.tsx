import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import './../styles/canvas.sass'

const Canvas = observer(() => {

    const canvasRef = useRef<any>()

    useEffect(()=> {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])

    return (
        <div className="canvas">
            <canvas ref={canvasRef} width={800} height={600}/>
        </div>
    )
})

export default Canvas