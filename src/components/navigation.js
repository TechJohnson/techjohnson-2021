import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BlueBtn from "./blueBtn"

const Navigation = () => {
    const data = useStaticQuery(graphql`
    query {
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
        <div className='container'>
            <div className='navigation'>
                <div>
                    <Link to={'/'} className='siteTitle'>
                        <Img fixed={data.avatar.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                        <p className='myName'>Steven Johnson</p>
                    </Link>
                </div>
                <div className='navLinks'>
                    <Link className='menuItem' to={'https://twitter.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">About</Link>
                    <Link className='menuItem' to={'https://dribbble.com/TechJohnson'} target="_blank" rel="noopener noreferrer nofollow">Projects</Link>
                    <Link className='menuItem' to={'/'}>Services</Link>
                    <Link className='menuItem' to={'/'}>Blog</Link>
                    <Link className='menuItemBtn' to={'https://twitter.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">
                        <BlueBtn buttonText='Hire Me' />
                    </Link>
                </div>
            </div>
        </div>
    )
    
}

export default Navigation