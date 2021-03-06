import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OctopusImage = () => (
    <StaticQuery
        query={graphql`
            query {
                file(relativePath: { eq: "products/octopus.jpeg" }) {
                    childImageSharp {
                        # Specify a fluid image and fragment
                        # The default maxWidth is 800 pixels
                        fixed(width: 320, height: 240) {
                            ...GatsbyImageSharpFixed_tracedSVG
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Crochet octopus"
                style={{
                    borderRadius: 10,
                    boxShadow:
                        "0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),0 16px 16px rgba(0, 0, 0, 0.12)",
                }}
            />
        )}
    />
)
export default OctopusImage
