import React, { useState } from "react"
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { DONATIONS } from "../data/donations"
import "../css/ledger.css"

const LedgerPage = () => {
    const [sort, setSort] = useState({ col: "date", down: true })

    const sortTable = col => {
        if (col === sort.col) {
            // reverse the sort order
            setSort({ col, down: !sort.down })
        } else {
            setSort({ col, down: true })
        }
    }

    const tableData = DONATIONS.reverse().sort((a, b) => {
        if (sort.col === "date") {
            let firstDate = new Date(a.date)
            let secondDate = new Date(b.date)
            if (firstDate < secondDate) {
                return sort.down ? 1 : -1
            } else if (firstDate > secondDate) {
                return sort.down ? -1 : 1
            } else {
                return 0
            }
        } else if (sort.col === "org") {
            let firstOrg = a.org
            let secondOrg = b.org
            if (firstOrg < secondOrg) {
                return sort.down ? -1 : 1
            } else if (firstOrg > secondOrg) {
                return sort.down ? 1 : -1
            } else {
                return 0
            }
        } else if (sort.col === "amount") {
            return sort.down ? b.amount - a.amount : a.amount - b.amount
        }
    })

    const SortIcon = ({ col }) => {
        if (col === sort.col) {
            if (sort.down) {
                return <FaSortDown style={{ marginBottom: -3 }} />
            } else {
                return <FaSortUp style={{ marginBottom: -3 }} />
            }
        } else {
            return <FaSort style={{ marginBottom: -3 }} />
        }
    }

    const formatDate = date => {
        return `${date.toLocaleString("en-US", {
            timeZone: "UTC",
            month: "long",
            day: "numeric",
            year: "numeric",
        })}`
    }

    return (
        <Layout>
            <SEO title="Ledger" />
            <h1>Ledger</h1>
            <p>
                There have been {DONATIONS.length} total donations. Thank you
                all!
            </p>
            <div style={{ overflow: "scroll" }}>
                <table id="ledger">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="amount-th"
                                onClick={() => sortTable("amount")}
                            >
                                <SortIcon col="amount" /> $
                            </th>
                            <th scope="col" onClick={() => sortTable("org")}>
                                <SortIcon col="org" /> Organization
                            </th>
                            <th scope="col" onClick={() => sortTable("date")}>
                                <SortIcon col="date" /> Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((donation, index) => {
                            return (
                                <tr key={index}>
                                    <td>${donation.amount}</td>
                                    <td>{donation.org}</td>
                                    <td>
                                        {formatDate(new Date(donation.date))}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default LedgerPage
