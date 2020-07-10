import React from "react"
import "./stat-card.css"
const StatCard = ({ title, value, unit, isNum, isMonetary }) => {
    let valueClassName = isNum
        ? "stat-card-value dollar-amount"
        : "stat-card-value"
    return (
        <div className="stat-card-container">
            <p className="stat-card-title">{title}</p>
            <div className="stat-card-unit-value-wrapper">
                <div className="stat-card-value-wrapper">
                    {isMonetary ? <p className="stat-card-unit">$</p> : null}
                    <p className={valueClassName}>{value}</p>
                </div>
                {unit ? <p className="stat-card-unit">{unit}</p> : null}
            </div>
        </div>
    )
}

export default StatCard
