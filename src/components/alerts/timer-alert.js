import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { IoIosHourglass } from "react-icons/io"
import "./alert.css"

const TimerAlert = () => {
    const [daysRemaining, setDaysRemaining] = useState("Few")

    useEffect(() => {
        let endDate = new Date("July 10, 2020")
        let now = new Date()
        var diff = Math.floor((endDate - now) / 86400000) + 1
        setDaysRemaining(diff)
    }, [])
    return (
        <div className="alert alert-success">
            <IoIosHourglass className="alert-icon" />
            <div className="alert-content">
                <p className="alert-title">{daysRemaining} days left!</p>
                <p className="alert-text">
                    This raffle will only last until July 10th!{" "}
                </p>
            </div>
        </div>
    )
}

export default TimerAlert
