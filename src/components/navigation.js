import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BlueBtn from "./blueBtn"

const Navigation = () => {
    alert("Before moving forward, understand this website is still under production. If you wish to connect with me, please send me an email: steven@techjohnson.com");
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
                    <Link className='menuItem' to={'/'}>About</Link>
                    <Link className='menuItem' to={'/'}>Projects</Link>
                    <Link className='menuItem' to={'/'}>Services</Link>
                    <Link className='menuItem' to={'/'}>Blog</Link>
                    <Link className='menuItemBtn' to={'/'}>
                        <BlueBtn buttonText='Hire Me' />
                    </Link>
                </div>
            </div>
        </div>
    )
    
}

export default Navigation