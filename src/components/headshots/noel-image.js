import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NoelImage = () => (
    <StaticQuery
        query={graphql`
            query {
                file(relativePath: { eq: "headshots/noel.jpg" }) {
                    childImageSharp {
                        # Specify a fluid image and fragment
                        # The default maxWidth is 800 pixels
                        fluid {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img
                fluid={data.file.childImageSharp.fluid}
                className="person-image first"
            />
        )}
    />
)
export default NoelImage
