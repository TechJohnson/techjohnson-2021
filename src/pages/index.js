import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageShowcase from "../components/homepageshowcase"
import Solutions from "../components/solutions"

const Index = ({ data, location }) => {

  return (
    <Layout location={location}>

      <SEO title="Steven Johnson" />
      
      <div className='tdg-gray'>
        <HomepageShowcase />
      </div>
      
      <Solutions />

    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
