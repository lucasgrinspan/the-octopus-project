import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import "../css/products.css"
import OctopusImage from "../components/product-images/octopus-image"
import ScrunchieImage from "../components/product-images/scrunchie-image"
import CoasterImage from "../components/product-images/coaster-image"
import ChonktopusImage from "../components/product-images/chonktopus-image"
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
                If your name already appears on this page, then thank you for
                your contribution!
            </p>
            <div className="product-container">
                <div className="product-content">
                    <h3>Crochet Octopus</h3>
                    <p>
                        The one, the only. The original Octopus Project
                        offering. These crochet octopi are made with love and
                        can come in a variety of different colors. They can even
                        just be something to hold on those nights (you know
                        those nights).
                    </p>
                    <p>
                        <strong>Made by:</strong> Erin, Maddie
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
                        <strong>Made by:</strong> Natalie
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
                        <strong>Made by:</strong> Brenna
                    </p>
                </div>
                <div className="product-image-wrapper">
                    <ScrunchieImage />
                </div>
            </div>
            <div className="product-container reverse">
                <div className="product-content">
                    <h3>Coasters</h3>
                    <p>
                        Functional and beautiful, this coaster will hold your
                        drink with intense loyalty. But don't worry if you don't
                        want to use it; we would totally understand if you just
                        want it so that you can look at that gorgeous art. You
                        might even choose to frame it.
                    </p>
                    <p>
                        <strong>Made by:</strong> Andrea
                    </p>
                </div>
                <div className="product-image-wrapper">
                    <CoasterImage />
                </div>
            </div>
            <div className="product-container">
                <div className="product-content">
                    <h3>The Beast</h3>
                    <p>
                        This isn't the type of octopus you would take to your
                        parent's house. You'll be arrested on sight with
                        possession of this monster. The Chonktopus. But don't
                        get used to seeing this here because this is part of a
                        limited time offer! This bad boy can only be received by
                        winning our <Link to="/raffle/">raffle</Link>!
                    </p>
                    <p>
                        <strong>Made by:</strong> Evil Scientists
                    </p>
                </div>
                <div className="product-image-wrapper">
                    <ChonktopusImage />
                </div>
            </div>
        </Layout>
    )
}

export default ProductsPage
