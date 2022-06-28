import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import canvasState from "../store/canvasState";
import './../styles/canvas.sass'

const Canvas = observer(() => {

    const canvasRef = useRef(null)

    useEffect(()=> {
        canvasState.setCanvas(canvasRef.current)
    }, [])

    return (
        <div className="canvas">
            <canvas ref={canvasRef} width={800} height={600}/>
        </div>
    )
})

export default Canvas