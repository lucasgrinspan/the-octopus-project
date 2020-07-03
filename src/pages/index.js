import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiExternalLink } from "react-icons/fi"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.css"
import CovidAlert from "../components/covid-alert/covid-alert"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "landing.jpg" }) {
                childImageSharp {
                    fixed(width: 300, height: 300) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <SEO title="Home" />
            <CovidAlert />
            <h1>Welcome</h1>
            <div id="landing-content-container">
                <div id="landing-image">
                    <Img
                        alt="A cute crochet octopus"
                        fixed={data.file.childImageSharp.fixed}
                        style={{
                            borderRadius: 10,
                            boxShadow:
                                "0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),0 16px 16px rgba(0, 0, 0, 0.12)",
                        }}
                    />
                </div>

                <div>
                    <p>
                        The Octopus Project seeks to unite cute crochet octopi
                        to wonderful people who've donated to one of these BLM
                        or LGBTQ+ <Link to="/charities/">charities</Link>! These
                        octopi are hand-made with love by our talented team. We
                        also offer octopus themed bracelets, scrunchies, and
                        coasters for $5! Meet the octopi and other products at
                        our <Link to="/gallery/">gallery</Link>.
                    </p>
                    <p>
                        If you'd like to help in other ways, check out our{" "}
                        <Link to="/get-involved/">get involved</Link> page!
                        While we can't offer money, we can give you community
                        service hours, friendship and love! If you'd like to see
                        the faces behind the project,{" "}
                        <Link to="/the-team/">meet the team</Link>!
                    </p>
                    <p>Anyways, here's how this works:</p>
                </div>
            </div>
            <div id="steps-list">
                <p className="step" id="step-one">
                    1.
                </p>
                <p className="step-instruction">
                    <strong>Donate</strong> at least <strong>$5</strong> to one
                    of these BLM or LGBTQ+{" "}
                    <a
                        href="/charities/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        charities <FiExternalLink />
                    </a>
                    . Make sure to take a screenshot of your receipt, the
                    successful donation page, or an email confirmation.
                </p>
                <p className="step" id="step-two">
                    2.
                </p>
                <p className="step-instruction">
                    <strong>Let us know!</strong> Send us a picture of your
                    donation confirmation and let us know whether you want a
                    crochet octopus, bracelet, scrunchie, or a coaster, along
                    with the color you want it in. All of those are octopi
                    themed! You can do this through our Instagram{" "}
                    <a href="https://www.instagram.com/the_octopus_project">
                        @the_octopus_project
                    </a>
                    , email us at{" "}
                    <a href="mailto:contact@theoctopusproject.live">
                        contact@theoctopusproject.live
                    </a>
                    , or use our <a href="/contact/">contact page</a>.
                </p>
                <p className="step" id="step-three">
                    3.
                </p>
                <p className="step-instruction">
                    <strong>Sit tight</strong> and wait for a response from us!
                    We'll let you know when we send your octopus or bracelet as
                    well.
                </p>
                <p className="step" id="step-four">
                    4.
                </p>
                <p className="step-instruction">
                    <strong>Have fun</strong> with your gift! Send us a picture
                    of your octopus or bracelet and you could make it to our{" "}
                    <a href="/gallery/">gallery page</a>.
                </p>
                <p className="step" id="step-five">
                    5.
                </p>
                <p className="step-instruction">
                    <strong>Consider getting involved</strong>! Check out some
                    ways to <Link to="/get-involved/">get involved</Link>. We
                    could use your help!
                </p>
            </div>
        </Layout>
    )
}

export default IndexPage
