import React from "react"
import { Link } from "gatsby"
import "./counter.css"
const Counter = ({ total }) => (
    <Link to="/stats/" style={{ textDecoration: "none" }}>
        <div id="charity-container">
            <p id="charity-total">${total}</p>
            <p id="charity-subtitle">raised so far!</p>
        </div>
    </Link>
)

export default Counter
