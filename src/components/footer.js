import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"


const Footer = () => {
    const data = useStaticQuery(graphql`
query {
    twitter: file(absolutePath: { regex: "/twitter-icon.png/" }) {
        childImageSharp {
            fixed(width: 50, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    instagram: file(absolutePath: { regex: "/instagram-icon.png/" }) {
        childImageSharp {
            fixed(width: 50, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    github: file(absolutePath: { regex: "/github-icon.png/" }) {
        childImageSharp {
            fixed(width: 50, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    linkedin: file(absolutePath: { regex: "/linkedin-icon.png/" }) {
        childImageSharp {
            fixed(width: 50, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    youtube: file(absolutePath: { regex: "/youtube-icon.png/" }) {
        childImageSharp {
            fixed(width: 50, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
}
`)

    return (
        <div>

            <div className="socialMedia" style={{
                display: 'flex',
                justifyContent: 'center',
                background: '#f4f4f4'
            }}>
                <Link to={'https://www.twitter.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">
                    <Img fixed={data.twitter.childImageSharp.fixed} style={{margin: '25px 10px'}} />
                </Link>
                <Link to={'https://www.instagram.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">
                    <Img fixed={data.instagram.childImageSharp.fixed} style={{margin: '25px 10px'}} />
                </Link>                
                <Link to={'https://www.youtube.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">
                    <Img fixed={data.youtube.childImageSharp.fixed} style={{margin: '25px 10px'}} />
                </Link> 
                <Link to={'https://www.linkedin.com/in/techjohnson/'} target="_blank" rel="noopener noreferrer nofollow">
                    <Img fixed={data.linkedin.childImageSharp.fixed} style={{margin: '25px 10px'}} />
                </Link> 
                <Link to={'https://www.github.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">
                    <Img fixed={data.github.childImageSharp.fixed} style={{margin: '25px 10px'}} />
                </Link> 
            </div>

            <div className="container">
                <p style={{ textAlign: 'right' }}>© {new Date().getFullYear()} Steven Johnson </p>
            </div>
        </div>
    )

}

export default Footer