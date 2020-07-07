import React from "react"
import "./color-chart.css"
import { COLORS_AVAILABILITY } from "../../data/colors"

const ColorChart = ({ colors, colorsContrast }) => (
    <div id="color-chart">
        {Object.keys(colors).map(color => {
            if (!COLORS_AVAILABILITY[color]) {
                return
            }
            return (
                <div
                    key={color}
                    className="color-card"
                    style={{ background: colors[color] }}
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
