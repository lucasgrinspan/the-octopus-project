import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const ProductsPage = () => {
    return (
        <Layout>
            <SEO title="Products" />
            <h1>Our Products</h1>
            <p>
                For a $5 donation to our <Link to="/charities/">charities</Link>
                , any of these products could be yours. We're always looking to
                expand our octopi themed goodies, so let us know if you have any
                ideas or if you can make some goodies for The Octopus Project.
            </p>
            <h3>Crochet Octopus</h3>
            <p>
                The one, the only. The original Octopus Project offering. These
                crochet octopi are made with love and can come in a variety of
                different colors.
            </p>
            <p>
                <strong>Made by:</strong> Erin Russell
            </p>
            <h3>Pride Bracelet</h3>
            <p></p>
        </Layout>
    )
}

export default ProductsPage
