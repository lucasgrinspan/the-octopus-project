import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StatCard from "../components/stat-card"
import charities from "../data/charities"
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
      console.log(donation)
    }
  })
  return donationTable
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

let findLargestDonation = donations => {
  let largestDonation = 0
  donations.forEach(donation => {
    if (donation.sum > largestDonation) {
      largestDonation = donation.sum
    }
  })
  return largestDonation
}

const StatsPage = () => {
  const orgs = charities.map(charity => charity.name)
  const donationTable = calculateDonationTable(orgs, DONATIONS)
  let largestReceiver = findLargestReceiver(donationTable)
  let smallestReceiver = findSmallestReceiver(donationTable)
  let largestDonation = findLargestDonation(DONATIONS)

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
        <StatCard title="Who's received the most?" value={largestReceiver} />
        <StatCard title="Who needs more love?" value={smallestReceiver} />
        <StatCard
          title="Largest donation so far?"
          value={largestDonation}
          unit="$"
        />
      </div>
    </Layout>
  )
}

export default StatsPage
