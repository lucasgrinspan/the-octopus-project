import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StatCard from "../components/stat-card/stat-card"
import ColorChart from "../components/chart/color-chart"
import OrgChart from "../components/chart/org-chart"
import CHARITIES from "../data/charities"
import { DONATIONS } from "../data/donations"

let calculateDonationTable = (orgs, donations) => {
    // populate the donation table
    let donationTable = {}
    orgs.forEach(org => {
        donationTable[org] = 0
    })

    donations.forEach(donation => {
        if (orgs.includes(donation.org)) {
            donationTable[donation.org] += donation.amount
        } else {
        }
    })
    return donationTable
}

let calculateIdDonationTable = donations => {
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

let calculateColorTable = donations => {
    let octopusTable = {}
    donations.forEach(donation => {
        donation.color.forEach(color => {
            if (color in octopusTable) {
                octopusTable[color]++
            } else {
                octopusTable[color] = 1
            }
        })
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
        if (donation.sent) {
            numSent += donation.color.length
        }
    })
    return numSent
}

let calculateMostPopularOctopusColor = octopusTable => {
    let mostPopularColor = ""
    let maxColorRequested = 0
    Object.keys(octopusTable).forEach(color => {
        if (octopusTable[color] > maxColorRequested) {
            maxColorRequested = octopusTable[color]
            mostPopularColor = color
        }
    })
    return mostPopularColor
}

const StatsPage = () => {
    const orgs = CHARITIES.map(charity => charity.name)
    const donationTable = calculateDonationTable(orgs, DONATIONS)
    const idDonationTable = calculateIdDonationTable(DONATIONS)
    const colorTable = calculateColorTable(DONATIONS)
    let largestReceiver = findLargestReceiver(donationTable)
    let smallestReceiver = findSmallestReceiver(donationTable)
    let largestDonation = findLargestDonation(idDonationTable)
    let numDonators = countNumDonators(idDonationTable)
    let numOctopi = countOctopiSent(DONATIONS)
    let mostPopularColor = calculateMostPopularOctopusColor(colorTable)

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
                    unit="$"
                    isNum
                />
                <StatCard
                    title="How many have donated?"
                    value={numDonators}
                    isNum
                />
                <StatCard
                    title="How many octopi have been sent?"
                    value={numOctopi}
                    isNum
                />
                <StatCard
                    title="Most popular octopus color?"
                    value={mostPopularColor}
                />
            </div>
            <ColorChart colorData={colorTable} />
            <OrgChart donationTable={donationTable} />
        </Layout>
    )
}

export default StatsPage
