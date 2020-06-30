import React from "react"
import { Link } from "gatsby"
import { FiExternalLink } from "react-icons/fi"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.css"

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Welcome</h1>
            <p>
                The Octopus Project seeks to unite cute crochet octopi to
                wonderful people who've donated to our{" "}
                <Link to="/charities/">charities</Link>!
            </p>
            <p>Here's how this works:</p>
            <div id="steps-list">
                <p className="step" id="step-one">
                    1.
                </p>
                <p className="step-instruction">
                    Donate to one of these{" "}
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
                    Contact us! Send us a picture of your donation confirmation
                    and the octopus color that you want. You can do this through
                    our Instagram{" "}
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
                    Sit tight and wait for a response from us! We'll let you
                    know when we send your octopus!.
                </p>
                <p className="step" id="step-four">
                    4.
                </p>
                <p className="step-instruction">
                    Profit! Have fun with your octopus! Send us a picture of
                    your octopus and you could make it to our{" "}
                    <a href="/gallery/">gallery page</a>.
                </p>
            </div>
        </Layout>
    )
}

export default IndexPage
