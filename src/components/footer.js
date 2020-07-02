import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaInstagram, FaHeart } from "react-icons/fa"
const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo-dark.png" }) {
                childImageSharp {
                    fixed(width: 200, height: 83) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return (
        <footer>
            <div id="footer-border"></div>
            <div id="footer-content">
                <div id="footer-top-content">
                    <Img
                        id="footer-logo"
                        fixed={data.file.childImageSharp.fixed}
                        alt="The Octopus Project Logo"
                        style={{ marginRight: 30 }}
                        imgStyle={{ margin: 0 }}
                    />
                    <div id="footer-pages">
                        <Link to="/the-team/">Meet the Team</Link>
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
