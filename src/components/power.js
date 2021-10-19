import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import Responsive from "react-responsive"
import BlueBtn from "./blueBtn"

const Power = () => {
    const Desktop = props => <Responsive {...props} minWidth={760} />;
    const Mobile = props => <Responsive {...props} maxWidth={759} />;
    const data = useStaticQuery(graphql`
    query {
        powerlarge: file(absolutePath: { regex: "/power-img.png/" }) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
                }
            }
        }
        powersmall: file(absolutePath: { regex: "/power-img.png/" }) {
            childImageSharp {
                fixed(width: 320, quality: 100) {
                ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)

    return (

        <div>

            {/* Desktop view */}
            <Desktop>
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
                                <Img fluid={data.powerlarge.childImageSharp.fluid} style={{ padding: 0, margin: 0 }} />
                            </div>
                            <div className="column" style={{
                                width: '50%'
                            }}>
                                <h3>Knowledge is power</h3>
                                <h2>Everything you need to scale your business</h2>
                                <p>My name is Steven Johnson and I have a passion for creating websites to grow and scale your company by combining your goals with my decade-long experience in a fast growing industry.</p>
                                <Link to={'#'} style={{
                                    padding: '0',
                                    margin: '0'
                                }}>
                                    <BlueBtn buttonText="Learn More" />
                                </Link>
                                <Link to={'/contact'} target="_blank" rel="noopener noreferrer nofollow">Let's have a conversation</Link>
                            </div>
                        </div>
                    </div>
                </div>        
            </Desktop>

            {/* Mobile view */}
            <Mobile>
                <div className='power'>
                    <div className="container">
                        <div className="split" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div className="column">
                                <Img fixed={data.powersmall.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                            </div>
                            <div className="column">
                                <h3>Knowledge is power</h3>
                                <h2>Everything you need to scale your business</h2>
                                <p>My name is Steven Johnson and I have a passion for creating websites to help grow and scale your company to make more sales by combining your goals with my decade-long experience in a fast growing industry.</p>
                                <Link to={'#'} style={{
                                    padding: '0',
                                    margin: '0'
                                }}>
                                    <BlueBtn buttonText="Learn More" />
                                </Link>
                                <Link to={'/contact'} target="_blank" rel="noopener noreferrer nofollow">Let's have a conversation</Link>
                            </div>
                        </div>
                    </div>
                </div>             
            </Mobile>

      </div>

    )

}

export default Power