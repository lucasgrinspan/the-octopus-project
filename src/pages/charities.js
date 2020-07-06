import React, { useState } from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import Charity from "../components/charity/charity"
import SEO from "../components/seo"

import charities from "../data/charities"
import CharityFilter from "../components/charity-filter/charity-filter"

const CharitiesPage = () => {
    const [charitiesFilter, setCharitiesFilter] = useState(["blm", "lgbt"])

    const filterCharities = filter => {
        if (filter.length === 0) {
            setCharitiesFilter(["blm", "lgbt"])
        } else {
            setCharitiesFilter(filter)
        }
    }
    return (
        <Layout>
            <SEO title="Charities" />
            <h1>Charities</h1>
            <p>
                <strong>
                    Donate at least $5 to one of these charities and receive a
                    crochet octopus or bracelet in return!
                </strong>{" "}
                If you have an unlisted charity that you feel strongly about,
                contact let us know so we can work it out. Once you have
                verification of your donation, contact{" "}
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
                <CharityFilter showOnly={filterCharities} />
                {charities.map(charity => {
                    let intersection = charity.movements.filter(x =>
                        charitiesFilter.includes(x)
                    )
                    if (intersection.length > 0) {
                        return (
                            <Charity
                                key={charity.name}
                                title={charity.name}
                                desc={charity.desc}
                                link={charity.link}
                                movements={charity.movements}
                            />
                        )
                    }
                })}
            </div>
        </Layout>
    )
}

export default CharitiesPage
