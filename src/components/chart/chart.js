import React, { useState, useEffect } from "react"
import { ResponsiveBar } from "@nivo/bar"
import "./chart.css"

import { COLORS } from "../../data/colors"

function getWindowDimensions() {
    if (window) {
        const { innerWidth: width, innerHeight: height } = window
    }
    return {
        width,
        height,
    }
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowDimensions
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

const Chart = ({ colorData }) => {
    let windowWidth = 0
    useEffect(() => {
        windowWidth = useWindowDimensions().width
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

    let xLabelRotation = 0
    let legendOffset = 32
    let bottomMargin = 50

    if (windowWidth < 507) {
        xLabelRotation = 90
        legendOffset = 73
        bottomMargin = 80
    } else if (windowWidth < 945) {
        xLabelRotation = 30
        legendOffset = 50
        bottomMargin = 68
    }

    return (
        <div style={{ height: 300, width: "100%" }}>
            <h3 style={{ marginBottom: 0 }}>Octopus Colors Ordered</h3>
            <ResponsiveBar
                isInteractive={false}
                data={nivoColorData}
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
            />
        </div>
    )
}

export default Chart
