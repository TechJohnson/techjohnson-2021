import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import MediaQuery from "react-responsive"
import BlueBtn from "./blueBtn"

const Power = () => {
    const data = useStaticQuery(graphql`
    query {
        digiapps: file(absolutePath: { regex: "/digiapps-logo.png/" }) {
            childImageSharp {
                fixed(height: 75) {
                ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)

    return (

        <div>

            {/* Desktop view */}
            <MediaQuery minDeviceWidth={760} maxResolution="2dppx">
                <div className='power'>
                    <div className="container">
                        <div className="split" style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center'
                        }}>
                            <div className="column" style={{
                                width: '50%'
                            }}>
                                <Img fixed={data.digiapps.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                            </div>
                            <div className="column" style={{
                                width: '50%'
                            }}>
                                <h3>Knowledge is power</h3>
                                <h2>Everything you need to scale your business</h2>
                                <p>My name is Steven Johnson and I have a passion for creating websites to help grow and scale your company to make more sales by combining your goals with my decade-long experience in a fast growing industry.</p>
                                <BlueBtn buttonText="Learn More" />
                                <Link to={'/'}>Let's have a conversation</Link>
                            </div>
                        </div>
                    </div>
                </div>        
            </MediaQuery>

            {/* Mobile view */}
            <MediaQuery maxDeviceWidth={759} maxResolution="2dppx">
                <div className='power'>
                    <div className="container">
                        <div className="split" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div className="column">
                                <Img fixed={data.digiapps.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                            </div>
                            <div className="column">
                                <h3>Knowledge is power</h3>
                                <h2>Everything you need to scale your business</h2>
                                <p>My name is Steven Johnson and I have a passion for creating websites to help grow and scale your company to make more sales by combining your goals with my decade-long experience in a fast growing industry.</p>
                                <BlueBtn buttonText="Learn More" />
                                <Link to={'/'}>Let's have a conversation</Link>
                            </div>
                        </div>
                    </div>
                </div>             
            </MediaQuery>

      </div>

    )

}

export default Power