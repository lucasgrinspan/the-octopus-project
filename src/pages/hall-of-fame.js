import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HallOfFamePage = () => {
    return (
        <Layout>
            <SEO title="Hall of Fame" />
            <h1>Hall of Fame</h1>
            <p>
                This is where we memorialize the great winners of our raffles,
                giveaways, or anything like that.
            </p>
            <h3>The Chonktopus</h3>
            <p>
                <strong>Winner:</strong> Rachel Alexander
            </p>
        </Layout>
    )
}

export default HallOfFamePage
