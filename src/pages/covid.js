import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const CovidPage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "masks.jpg" }) {
                childImageSharp {
                    fixed(width: 373, height: 300) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <SEO title="COVID-19" />
            <h1>COVID-19</h1>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Here at The Octopus Project, we are
                taking coronavirus very seriously. Each octopus is sanitized
                with both a Clorox wipe and rubbing alcohol before it's
                packaged. The packaging is then sanitized with a rubbing alcohol
                spray before it is sent out.
            </p>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Please continue to wear masks and
                socially distance. While coronavirus is having a significant
                impact on the world, The Octopus Project recognizes that
                epidemics are both biological and social. The virus is having a
                disproportionately larger impact on lower income communities,
                older people, and those with autoimmune diseases. It's our duty
                to wear masks to keep these people safe.{" "}
                <a href="https://www.aamc.org/news-insights/new-coronavirus-affects-us-all-some-groups-may-suffer-more">
                    Read more
                </a>
                .
            </p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 10,
                }}
            >
                <Img
                    alt="Crochet octopi wearing medical masks"
                    fixed={data.file.childImageSharp.fixed}
                    style={{
                        borderRadius: 10,
                        boxShadow:
                            "0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),0 16px 16px rgba(0, 0, 0, 0.12)",
                    }}
                />
            </div>
        </Layout>
    )
}

export default CovidPage
