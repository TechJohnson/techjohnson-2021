import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactHeader from "../components/contactHeader"
import Solutions from "../components/solutions"
import Power from "../components/power"
import MyTech from "../components/myTech"
import WindowsPortfolio from "../components/windowsPortfolio"
import AboutMe from "../components/aboutMe"
import DigiAppsPortfolio from "../components/digiAppsPortfolio"

const ContactPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Hire Me" />

            <ContactHeader />

            <Solutions />

            <Power />

            <DigiAppsPortfolio />

            <MyTech />

            <WindowsPortfolio />

            <AboutMe />

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