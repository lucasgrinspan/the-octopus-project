import React, { useEffect, useState } from "react"
import { ResponsiveBar } from "@nivo/bar"
import "./chart.css"

import { COLORS } from "../../data/colors"

// sorts array based on order variable
function mapOrder(array, order, key) {
    array.sort(function (a, b) {
        var A = a[key],
            B = b[key]

        if (order.indexOf(A) > order.indexOf(B)) {
            return 1
        } else {
            return -1
        }
    })

    return array
}

function getWindowWidth() {
    return window.innerWidth
}

const theme = {
    axis: {
        legend: {
            text: {
                fontWeight: "bold",
                fontSize: "16px",
            },
        },
        ticks: {
            text: {
                fontWeight: "bold",
                fontSize: "12px",
            },
        },
    },
}

const ColorChart = ({ colorData }) => {
    const [windowWidth, setWindowWidth] = useState(0)
    useEffect(() => {
        setWindowWidth(getWindowWidth())
    })

    // convert color data to nivo structure
    let nivoColorData = []
    Object.keys(colorData).forEach(color => {
        nivoColorData.push({
            name: color, //color name
            [color]: colorData[color], // color total
            color: COLORS[color], // color definition
        })
    })

    // place in rainbow order
    let rainbowOrder = mapOrder(nivoColorData, Object.keys(COLORS), "name")
    let xLabelRotation = 0
    let legendOffset = 37
    let bottomMargin = 50

    if (windowWidth < 507) {
        xLabelRotation = 90
        legendOffset = 78
        bottomMargin = 85
    } else if (windowWidth < 945) {
        xLabelRotation = 30
        legendOffset = 55
        bottomMargin = 72
    }

    return (
        <div
            style={{
                marginTop: 20,
                marginBottom: 60,
                height: 300,
                width: "100%",
            }}
        >
            <h3 style={{ marginBottom: 0 }}>Octopus Colors Ordered</h3>
            <ResponsiveBar
                isInteractive={false}
                data={rainbowOrder}
                indexBy="name"
                theme={theme}
                keys={Object.keys(COLORS)}
                colors={d => {
                    return d.data.color
                }}
                borderRadius={2}
                borderWidth={3}
                borderColor={{ from: "color", modifiers: [["darker", "2"]] }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    tickValues: 2,
                    legend: "Amount ordered",
                    legendPosition: "middle",
                    legendOffset: -40,
                }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: xLabelRotation,
                    legend: "Octopus Color",
                    legendPosition: "middle",
                    legendOffset: legendOffset,
                }}
                gridYValues={2}
                margin={{ top: 10, right: 0, bottom: bottomMargin, left: 60 }}
                padding={0.3}
                axisTop={null}
                axisRight={null}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={"black"}
                minValue={0}
                defs={[
                    {
                        id: "rainbow",
                        type: "linearGradient",
                        colors: [
                            { offset: 0, color: "rgba(255,69,69,1)" },
                            { offset: 18, color: "rgba(237,177,58,1)" },
                            { offset: 37, color: "rgba(237,240,70,1)" },
                            { offset: 56, color: "rgba(48,236,99,1)" },
                            { offset: 73, color: "rgba(48,164,236,1)" },
                            { offset: 100, color: "rgba(226,48,236,1)" },
                        ],
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: "multicolored",
                        },
                        id: "rainbow",
                    },
                ]}
            />
        </div>
    )
}

export default ColorChart
