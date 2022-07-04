import React, { useState } from "react";
import toolState from "../store/toolState";
import './../styles/toolbar.sass'

const SettingBar = () => {

    const [strokeWidth, setStrokeWidth] = useState<number>(1),
    [strokeColor, setStrokeColor] = useState<string>('#000000'),
    [fillColor, setFillColor] = useState<string>('#000000')

    return (
        <div className="toolbar">

            <label htmlFor="strokeWidth">
                Stroke Width
                <input onChange={e => {
                    setStrokeWidth(parseInt(e.target.value))
                    toolState.setToolStrokeWidth(strokeWidth)
                }} type='number' value={strokeWidth} id="strokeWidth"/>
            </label>

            <label htmlFor="strokeColor">
                Stroke Color
                <input onChange={e => {
                    setStrokeColor(e.target.value)
                    toolState.setToolStrokeColor(strokeColor)
                }} type='color' value={strokeColor} id="strokeColor"/>
            </label>

            <label htmlFor="fillColor">
                Fill Color
                <input onChange={e => {
                    setFillColor(e.target.value)
                    toolState.setToolFillColor(fillColor)
                }} type='color' value={fillColor} id="fillColor"/>
            </label>

        </div>
    )
}

export default SettingBar