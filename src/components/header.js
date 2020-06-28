import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Counter from "./counter"

import { DONATIONS } from "../data/donations"

const Header = () => {
  let donationTotal = 0
  DONATIONS.forEach(donation => {
    donationTotal += donation.amount
  })
  return (
    <>
      <header
        style={{
          background: "rgb(255,177,190)",
          background:
            "linear-gradient(90deg, rgba(255,177,190,1) 0%, rgba(248,170,221,1) 25%, rgba(186,147,223,1) 50%, rgba(108,209,239,1) 75%, rgba(120,230,208,1) 100%)",
          marginBottom: `1.45rem`,
        }}
      >
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
          style={{ display: "flex", flexDirection: "row", paddingBottom: 0 }}
        >
          <Link activeClassName="active" className="nav-link" to="/">
            Charities
          </Link>
          <Link activeClassName="active" className="nav-link" to="/stats/">
            Stats
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
