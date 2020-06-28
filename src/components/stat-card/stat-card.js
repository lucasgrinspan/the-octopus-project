import React from "react"
import "./stat-card.css"
const StatCard = ({ title, value, unit, isNum }) => {
  let valueClassName = isNum
    ? "stat-card-value dollar-amount"
    : "stat-card-value"
  return (
    <div className="stat-card-container">
      <p className="stat-card-title">{title}</p>
      <div className="stat-card-value-wrapper">
        {unit ? <p className="stat-card-unit">{unit}</p> : null}
        <p className={valueClassName}>{value}</p>
      </div>
    </div>
  )
}

export default StatCard
