import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql, Link } from "gatsby"
import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

const GalleryPage = ({ data }) => {
    const images = data.images.edges.map(({ node }) => node.childImageSharp)
    return (
        <Layout>
            <SEO title="Gallery" />
            <h1>Gallery</h1>
            <p>
                If you'd like one of your images to be featured in our gallery,
                DM it to our{" "}
                <a href="https://www.instagram.com/the_octopus_project">
                    instagram account
                </a>
                , email it to us at{" "}
                <a href="mailto:contact@theoctopusproject.live">
                    contact@theoctopusproject.live
                </a>
                , or use our <Link to="/contact/">contact page</Link>.
            </p>
            <Gallery images={images} />
        </Layout>
    )
}

export const query = graphql`
    query ImagesForGallery {
        images: allFile(
            filter: { relativeDirectory: { eq: "gallery" } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    childImageSharp {
                        thumb: fluid(maxWidth: 270, maxHeight: 270) {
                            ...GatsbyImageSharpFluid
                        }
                        full: fluid(maxWidth: 1024) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default GalleryPage
