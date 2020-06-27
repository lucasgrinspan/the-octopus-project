import React from "react"
import "./counter.css"
const Counter = ({ total }) => (
  <div id="charity-container">
    <p id="charity-total">${total}</p>
    <p id="charity-subtitle">raised so far!</p>
  </div>
)

export default Counter
