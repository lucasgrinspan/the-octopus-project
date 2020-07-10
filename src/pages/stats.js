import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StatCard from "../components/stat-card/stat-card"
import ColorChart from "../components/chart/color-chart"
import OrgChart from "../components/chart/org-chart"
import CHARITIES from "../data/charities"
import { DONATIONS } from "../data/donations"

let generateDonationTable = (orgs, donations) => {
    // populate the donation table
    let donationTable = {}
    orgs.forEach(org => {
        if (org.noDonate) {
            return
        }
        donationTable[org.name] = 0
    })

    donations.forEach(donation => {
        if (!Object.keys(donationTable).includes(donation.org)) {
            return
        }
        donationTable[donation.org] += donation.amount
    })
    return donationTable
}

let generateIdDonationTable = donations => {
    let idDonationTable = {}
    donations.forEach(donation => {
        if (donation.id in idDonationTable) {
            idDonationTable[donation.id] += donation.amount
        } else {
            idDonationTable[donation.id] = donation.amount
        }
    })
    return idDonationTable
}

let generateOctopusColorTable = donations => {
    let octopusTable = {}
    donations.forEach(donation => {
        if (donation.order.includes("octopus")) {
            donation.octopusColor.forEach(color => {
                if (color in octopusTable) {
                    octopusTable[color]++
                } else {
                    octopusTable[color] = 1
                }
            })
        }
    })
    return octopusTable
}

let findLargestReceiver = donationTable => {
    let largestReceiver = ""
    let largestAmount = 0
    Object.keys(donationTable).forEach(org => {
        if (donationTable[org] > largestAmount) {
            largestAmount = donationTable[org]
            largestReceiver = org
        }
    })
    return largestReceiver
}

let findSmallestReceiver = donationTable => {
    let smallestReceiver = ""
    let smallestAmount = 1000000 // imagine if we hit this
    Object.keys(donationTable).forEach(org => {
        if (donationTable[org] < smallestAmount) {
            smallestAmount = donationTable[org]
            smallestReceiver = org
        }
    })
    return smallestReceiver
}

// finds the largest donation from a single person
let findLargestDonation = idDonationTable => {
    // loop through the donation table and find the largest donation
    let largestDonation = 0
    Object.keys(idDonationTable).forEach(id => {
        if (idDonationTable[id] > largestDonation) {
            largestDonation = idDonationTable[id]
        }
    })
    return largestDonation
}

let countNumDonators = idDonationTable => {
    return Object.keys(idDonationTable).length
}

let countOctopiSent = donations => {
    let numSent = 0
    donations.forEach(donation => {
        if (donation.sent && donation.order.includes("octopus")) {
            numSent += donation.octopusColor.length
        }
    })
    return numSent
}

// const calculateMostPopularOctopusColor = octopusTable => {
//     let mostPopularColor = ""
//     let maxColorRequested = 0
//     Object.keys(octopusTable).forEach(color => {
//         if (octopusTable[color] > maxColorRequested) {
//             maxColorRequested = octopusTable[color]
//             mostPopularColor = color
//         }
//     })
//     return mostPopularColor
// }

const calculateNumberOfStates = donations => {
    let statesArray = []
    donations.forEach(donation => {
        if (donation.sent) {
            if (!statesArray.includes(donation.state)) {
                statesArray.push(donation.state)
            }
        }
    })
    return statesArray.length
}

const StatsPage = () => {
    const donationTable = generateDonationTable(CHARITIES, DONATIONS)
    const idDonationTable = generateIdDonationTable(DONATIONS)
    const colorTable = generateOctopusColorTable(DONATIONS)
    let largestReceiver = findLargestReceiver(donationTable)
    let smallestReceiver = findSmallestReceiver(donationTable)
    let largestDonation = findLargestDonation(idDonationTable)
    let numDonators = countNumDonators(idDonationTable)
    let numOctopi = countOctopiSent(DONATIONS)
    let numStates = calculateNumberOfStates(DONATIONS)

    return (
        <Layout>
            <SEO title="Stats" />
            <h1>Stats</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "100%",
                }}
            >
                <StatCard
                    title="Who's received the most?"
                    value={largestReceiver}
                />
                <StatCard
                    title="Who needs more love?"
                    value={smallestReceiver}
                />
                <StatCard
                    title="Largest donation from a single person?"
                    value={largestDonation}
                    isNum
                    isMonetary
                />
                <StatCard
                    title="How many people have donated?"
                    value={numDonators}
                    isNum
                    unit="people"
                />
                <StatCard
                    title="How many octopi have been sent?"
                    value={numOctopi}
                    isNum
                    unit="octopi"
                />
                <StatCard
                    title="How many states have we delivered to?"
                    value={numStates}
                    isNum
                    unit="states"
                />
            </div>
            <ColorChart colorData={colorTable} />
            <OrgChart donationTable={donationTable} />
            <Link
                style={{
                    fontSize: "1.25rem",
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                }}
                to="/ledger/"
            >
                Check the raw data.
            </Link>
        </Layout>
    )
}

export default StatsPage
