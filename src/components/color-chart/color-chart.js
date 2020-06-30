import React from "react"
import "./color-chart.css"
const ColorChart = ({ colors, colorsContrast }) => (
    <div id="color-chart">
        {Object.keys(colors).map(color => {
            return (
                <div
                    key={color}
                    className="color-card"
                    style={{ backgroundColor: colors[color] }}
                >
                    <p className={colorsContrast[color] ? "" : "light"}>
                        {color}
                    </p>
                </div>
            )
        })}
    </div>
)

export default ColorChart
