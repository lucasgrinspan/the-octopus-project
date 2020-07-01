import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
    FaPencilRuler,
    FaBullhorn,
    FaHandHoldingHeart,
    FaBookOpen,
    FaGlassCheers,
} from "react-icons/fa"

const GetInvolvedPage = () => {
    return (
        <Layout>
            <SEO title="Get Involved" />
            <h1>Get Involved</h1>
            <p>
                We're always looking for more people to help with our cause!
                Here are some ways to get involved!
            </p>
            <div id="steps-list">
                <div id="step-one" className="step icon">
                    <FaPencilRuler />
                </div>
                <p className="step-instruction">
                    <strong>Donate your crafts!</strong> If you can make octopi
                    themed arts and crafts, we could use your help! We're also
                    happy to sign hours for community service if your
                    school/organization approves!{" "}
                    <Link to="/contact/">Contact us</Link> if you'd like to go
                    this route.
                </p>
                <div id="step-two" className="step icon">
                    <FaBullhorn />
                </div>
                <p className="step-instruction">
                    <strong>Spread the word!</strong> Post about us and link to
                    our website or Instagram page,{" "}
                    <a href="https://www.instagram.com/the_octopus_project">
                        @the_octopus_project
                    </a>
                    . Tell your friends and share images of the gifts you
                    receive from us!
                </p>
                <div id="step-three" className="step icon">
                    <FaBookOpen />
                </div>
                <p className="step-instruction">
                    <strong>Educate others!</strong>{" "}
                    <a href="https://craftivist-collective.com">Craftivism</a>{" "}
                    is at the heart of our project, and we encourage you to
                    participate! We'd love it if you learn and educate others
                    about the issues we care about, like{" "}
                    <a href="https://blacklivesmatter.com">
                        Black Lives Matter
                    </a>
                    ,{" "}
                    <a href="https://ok2bme.ca/resources/kids-teens/what-does-lgbtq-mean/">
                        LGBTQ+
                    </a>
                    , and{" "}
                    <a href="https://www.vox.com/the-highlight/2019/5/20/18542843/intersectionality-conservatism-law-race-gender-discrimination">
                        Intersectionality
                    </a>
                    .
                </p>
                <div id="step-four" className="step icon">
                    <FaHandHoldingHeart />
                </div>
                <p className="step-instruction">
                    <strong>Donate supplies!</strong> Did you have a crochet
                    habit that didn't work out? Do you just have a bunch of
                    envelopes laying around? Send them to us and we'll put them
                    to good use! <Link to="/contact/">Contact us</Link> and let
                    us know if you'd like to do this. If you'd prefer to donate
                    with money, we ask that you send that to one of these{" "}
                    <Link to="/charities/">charities</Link> instead.
                </p>
                <div id="step-five" className="step icon">
                    <FaGlassCheers />
                </div>
                <p className="step-instruction">
                    <strong>Send us love!</strong> We are a small team working
                    out of a college apartment, crocheting, coding, performing
                    outreach, and sharing all the time.{" "}
                    <Link to="/contact/">Contact</Link> us and let us know what
                    you think. Your words mean a lot!
                </p>
            </div>
        </Layout>
    )
}

export default GetInvolvedPage
