import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LucasImage = () => (
    <StaticQuery
        query={graphql`
            query {
                file(relativePath: { eq: "headshots/lucas.jpg" }) {
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
                alt="Lucas drinking coffee and working on the website"
            />
        )}
    />
)
export default LucasImage
