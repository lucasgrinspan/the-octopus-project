import React, { useState, useEffect } from "react"
import { ResponsivePie } from "@nivo/pie"

const OrgChart = ({ donationTable }) => {
    const [windowWidth, setWindowWidth] = useState(0)
    useEffect(() => {
        setWindowWidth(window.innerWidth)
    })

    let sideMargin = 80
    if (windowWidth < 680) {
        sideMargin = 100
    }

    let nivoData = []

    let keysArray = Object.keys(donationTable).sort((a, b) => {
        if (donationTable[a] < donationTable[b]) {
            return 1
        }
        return -1
    })

    let otherTotal = 0
    let beginOtherCouting = ""
    // This function ensures that other is the smallest datum
    keysArray.reverse().forEach((org, index) => {
        if (beginOtherCouting) {
            return
        }
        let nextAmount = donationTable[keysArray[index + 1]]
        // check if adding to other total would make it larger than the next amount
        if (otherTotal + donationTable[org] > nextAmount) {
            beginOtherCouting = org
        } else {
            // increment othertotal
            otherTotal += donationTable[donationTable[org]]
        }
    })

    otherTotal = 0
    let countingForOther = false
    // we have to change the array back to the original
    keysArray.reverse().forEach((org, index) => {
        if (index === keysArray.length - 1) {
            if (otherTotal + donationTable[org] === 0) {
                return
            }
            nivoData.push({
                id: "Other",
                value: otherTotal + donationTable[org],
            })
        } else if (countingForOther) {
            otherTotal += donationTable[org]
        } else if (org === beginOtherCouting) {
            countingForOther = true
            otherTotal += donationTable[org]
        } else {
            if (donationTable[org] > 0) {
                nivoData.push({
                    id: org, //color name
                    value: donationTable[org], // color total
                })
            }
        }
    })

    return (
        <div style={{ marginTop: 20, height: 400, width: "100%" }}>
            <h3 style={{ marginBottom: 0 }}>Donation Recipients</h3>
            <ResponsivePie
                data={nivoData}
                cornerRadius={3}
                colors={[
                    "#ffb1be",
                    "#f8aadd",
                    "#ba93df",
                    "#6cd1ef",
                    "#78e6d0",
                    "#efee9d",
                    "#d1eaa3",
                    "#dbc6eb",
                    "#abc2e8",
                    "#a8e6cf",
                    "#dcedc1",
                    "#ffd3b6",
                    "#ffaaa5",
                ]}
                sortByValue
                margin={{
                    top: 40,
                    right: 80,
                    bottom: sideMargin,
                    left: sideMargin,
                }}
                borderWidth={5}
                borderColor={{ from: "color", modifiers: [["darker", 2]] }}
                innerRadius={0.5}
                padAngle={0.7}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                sliceLabel={d => `$${d.value}`}
                radialLabel={d => {
                    if (
                        d.id ===
                        "National Queer and Trans Therapists of Color Network (NQTTCN)"
                    ) {
                        return "NQTTCN"
                    } else {
                        return d.id
                    }
                }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={10}
                radialLabelsLinkHorizontalLength={10}
                radialLabelsLinkStrokeWidth={2}
                radialLabelsLinkColor={{ from: "color" }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                // legends={[
                //     {
                //         anchor: "bottom",
                //         direction: "row",
                //         translateY: 56,
                //         itemWidth: 100,
                //         itemHeight: 18,
                //         itemTextColor: "#999",
                //         symbolSize: 18,
                //         symbolShape: "circle",
                //         effects: [
                //             {
                //                 on: "hover",
                //                 style: {
                //                     itemTextColor: "#000",
                //                 },
                //             },
                //         ],
                //     },
                // ]}
            />
        </div>
    )
}

export default OrgChart
