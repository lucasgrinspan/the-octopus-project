import React from "react"
import { IoIosAlert } from "react-icons/io"
import { Link } from "gatsby"
import "./alert.css"
const CovidAlert = () => {
    return (
        <div className="alert alert-warn full-width">
            <IoIosAlert className="alert-icon" />
            <div className="alert-content">
                <p className="alert-title">COVID-19</p>
                <p className="alert-text">
                    Check our <Link to="/covid/">precautions</Link>.
                </p>
            </div>
        </div>
    )
}
export default CovidAlert
