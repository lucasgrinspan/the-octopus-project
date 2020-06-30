import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form/contact-form"

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <h1>Contact</h1>
            <p>
                If you've donated and would like to receive an octopus or
                bracelet, send a DM to{" "}
                <a href="https://www.instagram.com/the_octopus_project/">
                    @the_octopus_project
                </a>{" "}
                , email us at{" "}
                <a href="mailto:contact@theoctopusproject.live">
                    contact@theoctopusproject.live
                </a>{" "}
                or fill out this form with proof of your donation! Feel free to
                share your comments or concerns with us as well!
            </p>
            <p>
                If you're ordering an octopus, make sure you provide us with an
                email address so that we can contact you back for the order and
                shipping details.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ContactForm />
            </div>
        </Layout>
    )
}

export default ContactPage
