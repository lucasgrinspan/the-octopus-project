import React from "react"
import "../css/global.css"
const Charity = ({ title, link, desc, lgbt, blm }) => (
  <div style={{ display: "flex", flexDirection: "column", marginBottom: 40 }}>
    <h3 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 5 }}>
      {title} {blm ? "✊🏿" : ""} {lgbt ? "🏳️‍🌈" : ""}
    </h3>
    <p style={{ marginBottom: 0 }}>{desc}</p>
    <a href={link} className="rainbow">
      Visit
    </a>
  </div>
)

export default Charity
