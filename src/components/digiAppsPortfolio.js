import React from "react"
import Responsive from "react-responsive"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import OutlineBtn from "./outlineBtn"


const DigiAppsPortfolio = () => {
const Desktop = props => <Responsive {...props} minWidth={760} />;
const Mobile = props => <Responsive {...props} maxWidth={759} />;
const data = useStaticQuery(graphql`
query {
    digiwhite: file(absolutePath: { regex: "/digiapps-white.png/" }) {
        childImageSharp {
            fixed(width: 225, quality: 100) {
            ...GatsbyImageSharpFixed
            }
        }
    }
    digiappsdisplay: file(absolutePath: { regex: "/digiappsdisplay.png/" }) {
        childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
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
                {/* DigiApps Portfolio Section */}
                <div className="numberSection" style={{
                    backgroundColor: '#1f2f4f',
                    padding: '150px 0',
                    color: '#ffffff',
                }}>
                    <div className="container">
                        <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                width: '40%'
                            }}>
                                <Img fixed={data.digiwhite.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                                <h2 style={{
                                    fontSize: '1.5rem',
                                    padding: '50px 0 25px 0',
                                    margin: '0'
                                }}>Powerful Digital Applications</h2>
                                <hr style={{
                                    border: '2px solid #ffffff',
                                    width: '50px',
                                    padding: '0',
                                    margin: '0',
                                }} />
                                <p style={{
                                    lineHeight: '1.7',
                                    paddingTop: '25px',
                                    margin: '0'
                                }}>Message, track and drive your business like a pro. DigiApps provides easy, effective tools to reach new customers or interact with existing customers.</p>
                                {/* <Link to={'https://digiapps.net'}>

                                <OutlineBtn buttonText="Learn More" />
                                </Link> */}
                            </div>
                            <div style={{
                                width: '60%'
                            }}>
                                <Img fluid={data.digiappsdisplay.childImageSharp.fluid} style={{ padding: 0, margin: 0 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </Desktop>

            <Mobile>
                <div className="numberSection" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: '#1f2f4f',
                    padding: '150px 0',
                    margin: '0',
                    color: '#ffffff',
                }}>
                    <div className="container">
                        <Img fluid={data.digiappsdisplay.childImageSharp.fluid} style={{ padding: 0, margin: '0 0 50px 0' }} />
                        <Img fixed={data.digiwhite.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                        <h2 style={{
                            fontSize: '1.5rem',
                            padding: '50px 0 25px 0',
                            margin: '0'
                        }}>Powerful Digital Applications</h2>
                        <hr style={{
                            border: '2px solid #ffffff',
                            width: '50px',
                            padding: '0',
                            margin: '0 auto',
                        }} />
                        <p style={{
                            lineHeight: '1.7',
                            paddingTop: '25px',
                            margin: '0'
                        }}>Message, track and drive your business like a pro. DigiApps provides easy, effective tools to reach new customers or interact with existing customers.</p>
                    </div>
                </div>
            </Mobile>

        </div>

    )

}

export default DigiAppsPortfolio