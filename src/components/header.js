import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import Counter from "./counter/counter"

import { DONATIONS } from "../data/donations"

const Header = () => {
    let donationTotal = 0
    DONATIONS.forEach(donation => {
        donationTotal += donation.amount
    })
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 244, height: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
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
                        <Img
                            fixed={data.file.childImageSharp.fixed}
                            alt="The Octopus Project Logo"
                            className="op-logo"
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

export default Header
