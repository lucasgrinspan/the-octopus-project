import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ErinImage from "../components/headshots/erin-image"
import LianneImage from "../components/headshots/lianne-image"

import "../css/the-team.css"
import LucasImage from "../components/headshots/lucas-image"
import PennyImage from "../components/headshots/penny-image"
import NoelImage from "../components/headshots/noel-image"

const TheTeamPage = () => {
    return (
        <Layout>
            <SEO title="The Team" />
            <h1>Meet the Team</h1>
            <p>Here are the wonderful people behind The Octopus Project.</p>
            <div className="person-section">
                <div className="person-content">
                    <h3>Erin Russell</h3>
                    <p>
                        The founder herself. She created The Octopus Project
                        during the quarantine to spread the message of
                        craftivism and to do her part in solving some of the
                        issues that plague our society today. Each crochet
                        octopus she makes is an agent of change, fighting for
                        justice.
                    </p>
                    <p>
                        Armed with needles and yarn, Erin crocheted her way to
                        the hearts of many, fighting the ugly of the present
                        with the beauty of her crafts.
                    </p>
                </div>
                <div className="person-image-wrapper">
                    <ErinImage />
                    <p id="erin-caption" className="caption">
                        Thank you for stopping by!
                    </p>
                </div>
            </div>
            <div className="person-section">
                <div className="person-content">
                    <h3>Lianne D'Arcy</h3>
                    <p>
                        Lianne is instrumental in expanding the reach of our
                        project. With training in marketing, communications, and
                        social media, she spends her day editing, demanding
                        love, creating graphics, and making Instagram posts for
                        the cause.
                    </p>
                    <p>
                        You'll often find her surrounded by plants as she does
                        her edits. She might even be editing this sentence right
                        now.
                    </p>
                </div>
                <div className="person-image-wrapper first">
                    <LianneImage />
                    <p id="lianne-caption" className="caption">
                        Babbo babbo.
                    </p>
                </div>
            </div>
            <div className="person-section">
                <div className="person-content">
                    <h3>Lucas Grinspan</h3>
                    <p>
                        Lucas converts coffee into code. He designed the logo
                        and coded the website you're reading this on. I am
                        writing about myself. Setting up a database for Erin to
                        manage her orders, Lucas sought to introduce a sense of
                        professionalism to the project.
                    </p>
                    <p>
                        Lucas loves to check how many people visit the website
                        he made, so thank you for your part in making him smile
                        at our analytics report.
                    </p>
                </div>
                <div className="person-image-wrapper">
                    <LucasImage />
                    <p className="caption" id="lucas-caption">
                        *schlorp*
                    </p>
                </div>
            </div>
            <div className="person-section">
                <div className="person-content">
                    <h3>Noel Griffith</h3>
                    <p>
                        Noel. His dedication to doing anything that Erin doesn't
                        want to do is unmatched. Crocheting 90 octopi per day is
                        mentally gruelling, so Noel provides comfort and support
                        to Erin while she does that. He supplies her with
                        everything she needs, including supplies and love.
                    </p>
                    <p>
                        Noel delivers Erin's octopi, making sure Erin's crafts
                        reach the world where they belong. Without Noel, we're
                        not sure Erin would have had the will to accomplish what
                        she has done.
                    </p>
                </div>
                <div className="person-image-wrapper first">
                    <NoelImage />
                    <p className="caption" id="noel-caption">
                        Little Mac main
                    </p>
                </div>
            </div>
            <div className="person-section">
                <div className="person-content">
                    <h3>Penelope</h3>
                    <p>
                        Looking uncharacteristically elegant in this picture,
                        Penelope likes to spend her time clawing our sofa and
                        eating from our leftovers. Even though she will knock
                        over cups of water, she will apologize in advance.
                        Probably.
                    </p>
                    <p>
                        Sounding more like a frog than a cat, Penelope works
                        tirelessly doing literally nothing all day so that Erin
                        can easily pet her during Erin's 6 hour long crochet
                        sessions. Thank you Penny.
                    </p>
                </div>
                <div className="person-image-wrapper">
                    <PennyImage />
                    <p className="caption" id="penelope-caption">
                        *vomits profusely*
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default TheTeamPage
