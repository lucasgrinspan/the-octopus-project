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
                wonderful people who've donated to one of these{" "}
                <Link to="/charities/">charities</Link>! Meet the octopi at our{" "}
                <Link to="/gallery/">gallery</Link>. We also now offer bracelets
                for a $5 donation!
            </p>
            <p>
                If you'd like to help in other ways, check out some of our ways
                to <Link to="/get-involved/">get involved</Link>!
            </p>
            <p>Anyways, here's how this works:</p>
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
                <p className="step" id="step-three">
                    2.
                </p>
                <p className="step-instruction">
                    <strong>Contact us!</strong> Send us a picture of your
                    donation confirmation and let us know whether you want a
                    crochet octopus or a bracelet and the color you want it in.
                    The bracelets come with octopi charms. You can do this
                    through our Instagram{" "}
                    <a href="https://www.instagram.com/the_octopus_project">
                        @the_octopus_project
                    </a>
                    , email us at{" "}
                    <a href="mailto:contact@theoctopusproject.live">
                        contact@theoctopusproject.live
                    </a>
                    , or use our <a href="/contact/">contact page</a>.
                </p>
                <p className="step" id="step-four">
                    3.
                </p>
                <p className="step-instruction">
                    <strong>Sit tight</strong> and wait for a response from us!
                    We'll let you know when we send your octopus or bracelet as
                    well.
                </p>
                <p className="step" id="step-five">
                    4.
                </p>
                <p className="step-instruction">
                    <strong>Have fun</strong> with your gift! Send us a picture
                    of your octopus or bracelet and you could make it to our{" "}
                    <a href="/gallery/">gallery page</a>.
                </p>
            </div>
        </Layout>
    )
}

export default IndexPage
