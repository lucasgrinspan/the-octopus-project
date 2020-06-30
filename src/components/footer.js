import React from "react"
import { Link } from "gatsby"
import { FaInstagram, FaHeart } from "react-icons/fa"
const Footer = () => {
    return (
        <footer>
            <div id="footer-border"></div>
            <div id="footer-content">
                <div id="footer-top-content">
                    <img
                        id="footer-logo"
                        src={require("../images/logo-dark.png")}
                    />
                    <div id="footer-pages">
                        <Link to="/get-involved/">Get Involved</Link>
                        <Link to="/contact/">Contact</Link>
                        <Link to="/stats/">Statistics</Link>
                        <Link to="/gallery/">Gallery</Link>
                    </div>
                </div>
                <div id="footer-bottom-text">
                    <p>
                        © {new Date().getFullYear()}, Made with{" "}
                        <FaHeart
                            style={{
                                marginBottom: -3,
                                marginLeft: 1,
                                marginRight: 1,
                            }}
                        />{" "}
                        by The Octopus Project
                    </p>
                    <a
                        href="https://www.instagram.com/the_octopus_project"
                        className="social-link"
                    >
                        <FaInstagram className="social-link" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
