import React from "react"
import { Link } from "gatsby"
import { IoIosRocket } from "react-icons/io"
import "./alert.css"

const RaffleAlert = () => {
    return (
        <div className="alert alert-success">
            <IoIosRocket className="alert-icon" />
            <div className="alert-content">
                <p className="alert-title">Raffle Raffle!</p>
                <p className="alert-text">
                    We are starting a raffle for the largest crochet octopus
                    you've probably ever seen! $3 to enter!{" "}
                    <Link to="/raffle/">Read more</Link>.
                </p>
            </div>
        </div>
    )
}

export default RaffleAlert
