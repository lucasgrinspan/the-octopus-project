import React from "react"

import Layout from "../components/layout"
import Charity from "../components/charity"
import SEO from "../components/seo"

import charities from "../data/charities"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Charities</h1>
    <p>
      Donate $5 to one of these charities and receive a crochet octopus in
      return! If you have a charity that you feel strongly towards, contact{" "}
      <a href="https://www.instagram.com/the_octopus_project/">
        @the_octopus_project
      </a>
      .
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
