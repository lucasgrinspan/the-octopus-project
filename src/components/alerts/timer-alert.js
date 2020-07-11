import React, { useEffect, useState } from "react"
import { IoIosHourglass } from "react-icons/io"
import "./alert.css"

const TimerAlert = () => {
    return (
        <div className="alert alert-error">
            <IoIosHourglass className="alert-icon" />
            <div className="alert-content">
                <p className="alert-title">Congrats to the winner!</p>
                <p className="alert-text">
                    This raffle has ended! Stay posted for any future raffles!
                </p>
            </div>
        </div>
    )
}

export default TimerAlert
