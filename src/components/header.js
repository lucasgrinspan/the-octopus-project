import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Counter from "./counter/counter"

import { DONATIONS } from "../data/donations"

const Header = () => {
    let donationTotal = 0
    DONATIONS.forEach(donation => {
        donationTotal += donation.amount
    })
    return (
        <>
            <header>
                <div
                    className="header-container"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            color: `black`,
                            textDecoration: `none`,
                            fontWeight: "bolder",
                        }}
                    >
                        <img
                            alt="The Octopus Project"
                            src={require("../images/logo.png")}
                            id="op-logo"
                        />
                    </Link>
                    <Counter total={donationTotal} />
                </div>
                <nav
                    className="header-container"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingBottom: 0,
                        paddingTop: 0,
                    }}
                >
                    <Link activeClassName="active" className="nav-link" to="/">
                        Home
                    </Link>
                    <Link
                        activeClassName="active"
                        className="nav-link"
                        to="/charities/"
                    >
                        Charities
                    </Link>
                    <Link
                        activeClassName="active"
                        className="nav-link"
                        to="/contact/"
                    >
                        Contact
                    </Link>
                    <Link
                        activeClassName="active"
                        className="nav-link"
                        to="/stats/"
                    >
                        Stats
                    </Link>
                    <Link
                        activeClassName="active"
                        className="nav-link"
                        to="/gallery/"
                    >
                        Gallery
                    </Link>
                </nav>
            </header>
        </>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
