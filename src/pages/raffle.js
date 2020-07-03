import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import TimerAlert from "../components/alerts/timer-alert"

const RafflePage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "raffle.jpg" }) {
                childImageSharp {
                    fixed(width: 300, height: 446) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <SEO title="Raffle" />
            <TimerAlert />
            <h1>Raffle!</h1>

            <p>
                Well, it's finally here. Our scientists warned us it wouldn't be
                possible. Our friends feared for our safety. Our landlord almost
                kicked us out. But none of that stopped us from crocheting the
                largest octopus ever (please don't fact check that). This
                activist beast could be yours! Donate at least{" "}
                <strong>$3</strong> to one of our{" "}
                <Link to="/charities/">charities</Link> and you'll be entered
                into our raffle! Make sure to let us know when you do this.
            </p>
            <p>
                <strong>What can you do to increase your chances?</strong> For
                every $3 you donate, you earn another ticket for our raffle!
                These donations are separate from our regular orders, so no
                double dipping.
            </p>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div id="raffle-image">
                    <Img
                        fixed={data.file.childImageSharp.fixed}
                        style={{
                            borderRadius: 10,
                            boxShadow:
                                "0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),0 16px 16px rgba(0, 0, 0, 0.12)",
                        }}
                    />
                    <p>Do I look like a hat to you?</p>
                </div>
            </div>
            <h2 style={{ marginTop: 50 }}>FAQ</h2>
            <p
                className="raffle-question"
                style={{ marginBottom: 3, fontSize: "1.25rem" }}
            >
                <strong>When does this end?</strong>
            </p>
            <p>This ends July 10th, 2020 at midnight</p>
            <p
                className="raffle-question"
                style={{ marginBottom: 3, fontSize: "1.25rem" }}
            >
                <strong>When will the winner be determined?</strong>
            </p>
            <p>
                The winner will be determined once the raffle closes, but the
                winner will be announced the morning of the next day (Saturday,
                July 11th).
            </p>

            <p
                className="raffle-question"
                style={{ marginBottom: 3, fontSize: "1.25rem" }}
            >
                <strong>How will the winner be determined?</strong>
            </p>
            <p>
                All of the tickets will be folded and placed into a large bowl.
                We will then choose a ticket randomly from that bowl.
            </p>

            <p
                className="raffle-question"
                style={{ marginBottom: 3, fontSize: "1.25rem" }}
            >
                <strong>Can I buy more than one raffle ticket?</strong>
            </p>
            <p>
                Yes! Each ticket costs $3 and the more you buy, the higher your
                chances.
            </p>
            <p style={{ marginBottom: 3, fontSize: "1.25rem" }}>
                <strong>Does Erin come with the octopus?</strong>
            </p>
            <p>No! She's just for scale. She would require a $6 donation.</p>
            <p style={{ marginTop: 100 }}>
                Good luck!! This guy was made with lots of love (and 3 spools of
                giant yarn) and he is looking forward to going to his new home!
                If you have other questions,{" "}
                <Link to="/contact/">contact us</Link>.
            </p>
        </Layout>
    )
}

export default RafflePage
