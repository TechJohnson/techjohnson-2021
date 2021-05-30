import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"


const Footer = () => {
    const data = useStaticQuery(graphql`
query {
    twitter: file(absolutePath: { regex: "/twitter-icon.png/" }) {
        childImageSharp {
            fixed(width: 35, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    instagram: file(absolutePath: { regex: "/instagram-icon.png/" }) {
        childImageSharp {
            fixed(width: 35, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    github: file(absolutePath: { regex: "/github-icon.png/" }) {
        childImageSharp {
            fixed(width: 35, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    linkedin: file(absolutePath: { regex: "/linkedin-icon.png/" }) {
        childImageSharp {
            fixed(width: 35, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    youtube: file(absolutePath: { regex: "/youtube-icon.png/" }) {
        childImageSharp {
            fixed(width: 35, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    avatar: file(absolutePath: { regex: "/steven.png/" }) {
        childImageSharp {
            fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
            }
        }
    }
}
`)

    return (
        <div>

            <div style={{
                background: '#f4f4f4',
                margin: '0',
                paddingTop: '50px',
                paddingBottom: '25px'
            }}>
                <Link to={'/'} className='siteTitle' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'none'
                }}>
                    <Img fixed={data.avatar.childImageSharp.fixed} style={{ padding: '0', margin: '0' }} />
                    <p style={{
                        fontWeight: '600',
                        fontSize: '1.125rem',
                        color: '#2b2b2b',
                        marginLeft: '10px'
                    }}>Steven Johnson</p>
                </Link>
            </div>
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

            <div className='navLinks' style={{
                display: 'flex',
                justifyContent: 'center',
                background: '#f4f4f4',
                paddingTop: '25px',
                paddingBottom: '50px'
            }}>
                <Link style={{ padding: '0 15px', fontWeight: '600', color: '#999999', textDecoration: 'none' }} className='menuItem' to={'/'}>About</Link>
                <Link style={{ padding: '0 15px', fontWeight: '600', color: '#999999', textDecoration: 'none' }} className='menuItem' to={'/'}>Projects</Link>
                <Link style={{ padding: '0 15px', fontWeight: '600', color: '#999999', textDecoration: 'none' }} className='menuItem' to={'/'}>Services</Link>
                <Link style={{ padding: '0 15px', fontWeight: '600', color: '#999999', textDecoration: 'none' }} className='menuItem' to={'/'}>Blog</Link>
                <Link style={{ padding: '0 15px', fontWeight: '600', color: '#999999', textDecoration: 'none' }} className='menuItem' to={'/contact'}>Hire Me</Link>
            </div>

            <div style={{
                background: '#f4f4f4',
                paddingBottom: '50px',
                margin: '0'
            }}>
                <div className="container">
                    <p style={{ padding: '0', margin: '0', textAlign: 'center', color: '#999999' }}>© {new Date().getFullYear()} Steven Johnson </p>
                </div>
            </div>
        </div>
    )

}

export default Footer