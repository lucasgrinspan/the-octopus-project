import React from "react"
import "./stat-card.css"
const StatCard = ({ title, value, unit }) => {
  let valueClassName =
    unit === "$" ? "stat-card-value dollar-amount" : "stat-card-value"
  return (
    <div className="stat-card-container">
      <p className="stat-card-title">{title}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {unit ? <p className="stat-card-unit">{unit}</p> : null}
        <p className={valueClassName}>{value}</p>
      </div>
    </div>
  )
}

export default StatCard
