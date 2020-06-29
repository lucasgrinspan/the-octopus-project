import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import Charity from "../components/charity/charity"
import SEO from "../components/seo"

import charities from "../data/charities"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Charities</h1>
        <p>
            <strong>
                Donate at least $5 to one of these charities and receive a
                crochet octopus in return!
            </strong>{" "}
            If you have an unlisted charity that you feel strongly about,
            contact{" "}
            <a href="https://www.instagram.com/the_octopus_project/">
                @the_octopus_project
            </a>
            . Once you have verification of your donation, contact{" "}
            <a href="https://www.instagram.com/the_octopus_project/">
                @the_octopus_project
            </a>
            , email us at{" "}
            <a href="mailto:contact@theoctopusproject.live">
                contact@theoctopusproject.live
            </a>{" "}
            or head to our <Link to="/contact/">contact page</Link>.
        </p>
        <div style={{ maxWidth: "60ch" }}>
            {charities.map(charity => (
                <Charity
                    key={charity.name}
                    title={charity.name}
                    desc={charity.desc}
                    link={charity.link}
                    blm={charity.blm}
                    lgbt={charity.lgbt}
                />
            ))}
        </div>
    </Layout>
)

export default IndexPage
