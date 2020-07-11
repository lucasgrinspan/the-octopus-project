import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ChonktopusImage from "../components/product-images/chonktopus-image"
const HallOfFamePage = () => {
    return (
        <Layout>
            <SEO title="Hall of Fame" />
            <h1>Hall of Fame</h1>
            <p>
                This is where we memorialize the great winners of our raffles,
                giveaways, or anything like that.
            </p>
            <div className="product-container">
                <div className="product-content">
                    <h3>The Chonktopus</h3>
                    <p>
                        Our very first raffle! We've had some great times with
                        the Chonktopus and now we're excited that he's moving on
                        and seeing the world (another town in Florida). We will
                        miss him dearly.
                    </p>
                    <p>
                        <strong>Winner:</strong> Rachel Alexander
                    </p>
                </div>
                <div className="product-image-wrapper">
                    <ChonktopusImage />
                </div>
            </div>
        </Layout>
    )
}

export default HallOfFamePage
