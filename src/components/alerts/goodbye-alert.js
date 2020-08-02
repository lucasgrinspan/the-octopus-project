import React from "react";
import { Link } from "gatsby";
import { IoIosHeart } from "react-icons/io";
import "./alert.css";

const GoodbyeAlert = () => {
    return (
        <div className="alert alert-info">
            <IoIosHeart className="alert-icon" />
            <div className="alert-content">
                <p className="alert-title">Thank you for your contributions!</p>
                <p className="alert-text">
                    Unfortunately, we're not taking anymore orders. We're ready
                    to say goodbye. <Link to="/goodbye/">Read more</Link>.
                </p>
            </div>
        </div>
    );
};

export default GoodbyeAlert;
