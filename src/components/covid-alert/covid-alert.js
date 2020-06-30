import React from "react"
import { IoIosAlert } from "react-icons/io"
import { Link } from "gatsby"
import "./covid-alert.css"
const CovidAlert = () => {
    return (
        <div id="covid-alert">
            <IoIosAlert id="covid-alert-icon" />
            <div id="covid-alert-content">
                <p id="covid-alert-title">Coronavirus Update</p>
                <p id="covid-alert-text">
                    We are taking all of the necessary precautions during the
                    COVID-19 epidemic to ensure your safety.{" "}
                    <Link to="/covid/">Read more</Link>.
                </p>
            </div>
        </div>
    )
}
export default CovidAlert
