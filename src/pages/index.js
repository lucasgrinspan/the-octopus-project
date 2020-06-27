import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Charity from "../components/charity"
import SEO from "../components/seo"

import charities from "../data/charities"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Charities</h1>
    <p>
      Donate $5 to one of these charities and receive a crochet octopus in
      return! If you have a charity that you feel strongly towards, contact Erin
      and let her know.
    </p>
    <div style={{ maxWidth: "60ch" }}>
      {charities.map(charity => (
        <Charity
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
