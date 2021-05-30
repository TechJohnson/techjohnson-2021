import React from "react"
import Responsive from "react-responsive"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import BlueBtn from "./blueBtn"

const AboutMe = () => {
const Desktop = props => <Responsive {...props} minWidth={760} />;
const Mobile = props => <Responsive {...props} maxWidth={759} />;
const data = useStaticQuery(graphql`
query {
    steven: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
            fluid(maxHeight: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
    }
}
`)


    return (

        <div>
            <Desktop>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '100px 0'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '50%'
                        }}>
                            <Img fluid={data.steven.childImageSharp.fluid} style={{ width: '100%', borderRadius: '50px' }}/>
                        </div>
                        <div style={{
                            width: '50%'
                        }}>
                            <h3 style={{
                            fontSize: '0.895rem',
                            fontWeight: '500',
                            textTransform: 'uppercase',
                            letterSpacing: '.15rem',
                            borderLeft: '3px solid #3396EB',
                            color: '#999999',
                            padding: '5px 0 5px 10px',
                            margin: '0'
                        }}>Steven Johnson</h3>
                        <h2 style={{
                            fontSize: '1.5rem',
                            color: '#2b2b2b',
                            padding: '15px 0 25px 0',
                            margin: '0'
                        }}>Did you know I play guitar?</h2>
                        <p style={{
                            lineHeight: '1.7',
                            color: '#2b2b2b',
                            paddingBottom: '25px',
                            margin: '0'
                        }}>That's right! I'm a huge guitar enthusiast. If I'm not advancing my skills within development and design, I'm probably practicing the guitar. Why do I say this? Simple! I take great pride in making connections with my clients and do my best to not make it feel so steril.</p>
                        <BlueBtn buttonText="About Me" />
                        <Link to={'http://twitter.com/techjohnson'} style={{
                            color: '#999999',
                            textDecoration: 'none',
                            marginLeft: '20px'
                        }}>Follow me on Twitter</Link>
                        </div>
                    </div>
                </div>
            </Desktop>

            
            <Mobile>
                <div className="container">
                    <p>mobile</p>
                </div>
            </Mobile>
        </div>

    )

}

export default AboutMe