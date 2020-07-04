import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form/contact-form"
import ColorChart from "../components/color-chart/color-chart"

import { COLORS, COLORS_CONTRAST } from "../data/colors"

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <h1>Contact</h1>
            <p>
                We can be reached at our Instagram,{" "}
                <a href="https://www.instagram.com/the_octopus_project/">
                    @the_octopus_project
                </a>
                , our email at{" "}
                <a href="mailto:contact@theoctopusproject.live">
                    contact@theoctopusproject.live
                </a>{" "}
                or through the form on this page! Feel free to share your
                comments or concerns with us. We'd love to hear from you!
            </p>
            <p>
                If you're ordering an octopus, bracelet, scrunchie, or coaster
                make sure you provide us with a valid email address so that we
                can contact you back for the order and shipping details.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ContactForm />
            </div>
            <h1>Colors</h1>
            <p>
                These are the colors of yarn for the octopi we have available at
                this moment.
            </p>
            <ColorChart colors={COLORS} colorsContrast={COLORS_CONTRAST} />
        </Layout>
    )
}

export default ContactPage
