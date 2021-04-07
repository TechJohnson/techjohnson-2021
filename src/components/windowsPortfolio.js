import React from "react"
import Responsive from "react-responsive"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import OutlineBtn from "./outlineBtn"


const WindowsPortfolio = () => {
const Desktop = props => <Responsive {...props} minWidth={760} />;
const Mobile = props => <Responsive {...props} maxWidth={759} />;
const data = useStaticQuery(graphql`
query {
    windowwhite: file(absolutePath: { regex: "/logo-white.png/" }) {
        childImageSharp {
            fixed(width: 225, quality: 100) {
            ...GatsbyImageSharpFixed
            }
        }
    }
    replacementdisplay: file(absolutePath: { regex: "/replacement-windows-display.png/" }) {
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
                {/* DigiApps Portfolio Section */}
                <div className="numberSection" style={{
                    backgroundColor: '#71808E',
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
                                <Img fixed={data.windowwhite.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                                <h2 style={{
                                    fontSize: '1.5rem',
                                    padding: '50px 0 25px 0',
                                    margin: '0'
                                }}>Windows for Every Budget</h2>
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
                                }}>Receive new windows with no long demo, no pushy salesman and no huge markeup. No matter your financial situation, they have a pricing structure that works for you!</p>
                                <Link to={'https://replacementwindowsonline.com/'}>

                                <OutlineBtn buttonText="Learn More" />
                                </Link>
                            </div>
                            <div style={{
                                width: '60%'
                            }}>
                                <Img fluid={data.replacementdisplay.childImageSharp.fluid} style={{ padding: 0, margin: 0 }} />
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
                    backgroundColor: '#091841',
                    padding: '150px 0',
                    margin: '0',
                    color: '#ffffff',
                }}>
                    <div className="container">
                        <Img fluid={data.replacementdisplay.childImageSharp.fluid} style={{ padding: 0, margin: '0 0 50px 0' }} />
                        <Img fixed={data.windowwhite.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                        <h2 style={{
                            fontSize: '1.5rem',
                            padding: '50px 0 25px 0',
                            margin: '0'
                        }}>Windows for Every Budget</h2>
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
                        }}>Receive new windows with no long demo, no pushy salesman and no huge markeup. No matter your financial situation, they have a pricing structure that works for you!</p>
                                <Link to={'https://replacementwindowsonline.com/'}>

<OutlineBtn buttonText="Learn More" />
</Link>                    </div>
                </div>
            </Mobile>

        </div>

    )

}

export default WindowsPortfolio