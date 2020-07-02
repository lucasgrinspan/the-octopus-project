import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ErinImage = () => (
    <StaticQuery
        query={graphql`
            query {
                file(relativePath: { eq: "headshots/erin.jpg" }) {
                    childImageSharp {
                        # Specify a fluid image and fragment
                        # The default maxWidth is 800 pixels
                        fixed(width: 292, height: 292) {
                            ...GatsbyImageSharpFixed_tracedSVG
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img
                fixed={data.file.childImageSharp.fixed}
                className="person-image"
            />
        )}
    />
)
export default ErinImage
