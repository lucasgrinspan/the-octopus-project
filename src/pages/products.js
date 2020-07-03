import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import "../css/products.css"
import OctopusImage from "../components/product-images/octopus-image"

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
            <div className="product-container">
                <div className="product-content">
                    <h3>Crochet Octopus</h3>
                    <p>
                        The one, the only. The original Octopus Project
                        offering. These crochet octopi are made with love and
                        can come in a variety of different colors.
                    </p>
                    <p>
                        <strong>Made by:</strong> Erin Russell
                    </p>
                </div>
                <div className="product-image-wrapper">
                    <OctopusImage />
                </div>
            </div>
            <div className="product-container reverse">
                <div className="product-content">
                    <h3>Pride Bracelet</h3>
                    <p>
                        Proudly wear the pride rainbow colors on your wrist with
                        these bracelets. If you want a different pride flag, you
                        can also get these in the bi, trans, or any other
                        colors. As a cherry on top, they also come with cute
                        octopi charms.
                    </p>
                    <p>
                        <strong>Made by:</strong> Lorem Ipsum
                    </p>
                </div>
                <div className="product-image-wrapper">
                    <OctopusImage />
                </div>
            </div>
            <div className="product-container">
                <div className="product-content">
                    <h3>Scrunchies</h3>
                    <p>
                        Use it around your hair, wrist, or lend it to a friend
                        and never see it again. Wherever it goes, it will always
                        be the cutest scrunchie in its proximity. It goes
                        without saying that there will be octopi on them.
                    </p>
                    <p>
                        <strong>Made by:</strong> Lorem Ipsum
                    </p>
                </div>
                <div className="product-image-wrapper">
                    <OctopusImage />
                </div>
            </div>
        </Layout>
    )
}

export default ProductsPage
