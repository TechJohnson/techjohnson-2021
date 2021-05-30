import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactHeader from "../components/contactHeader"

const ContactPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Hire Me" />

            <ContactHeader />

        </Layout>
    )
}

export default ContactPage 

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`