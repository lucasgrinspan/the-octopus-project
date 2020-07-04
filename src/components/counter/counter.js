import React from "react"
import { Link } from "gatsby"
import "./counter.css"
const Counter = ({ total }) => {
    let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    })
    return (
        <Link to="/stats/" style={{ textDecoration: "none" }}>
            <div id="charity-container">
                <p id="charity-total">{formatter.format(total)}</p>
                <p id="charity-subtitle">raised so far!</p>
            </div>
        </Link>
    )
}

export default Counter
