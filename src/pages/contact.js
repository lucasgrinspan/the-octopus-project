import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form/contact-form"
const ContactPage = ({}) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>
        If you've donated and would like to receive an octopus, send a DM to{" "}
        <a href="https://www.instagram.com/the_octopus_project/">
          @the_octopus_project
        </a>{" "}
        or email us at{" "}
        <a href="mailto:contact@theoctopusproject.live">
          contact@theoctopusproject.live
        </a>
        ! You can also contact us if you have any comments or concerns as well.
        Additionally, you can use this form below if you prefer.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ContactForm />
      </div>
    </Layout>
  )
}

export default ContactPage
