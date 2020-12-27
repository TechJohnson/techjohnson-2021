import React from "react"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"

const MyTech = () => {
    const data = useStaticQuery(graphql `
    query {
        desksit: file(absolutePath: { regex: "/sitting-on-deck.png/" }) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                }
            }
        }
        htmls: file(absolutePath: { regex: "/sitting-on-deck.png/" }) {
            childImageSharp {
                fixed(width: 75, quality: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
    `)

    return (
        <div style={{
            background: '#fafafa'
        }}>
            <div className="container">

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '100px 0',
                    margin: '0'
                }}>
                    <div style={{
                        width: '50%'
                    }}>
                        <Img fluid={data.desksit.childImageSharp.fluid} style={{ marginRight: '40px' }}/>
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
                        }}>
                            Design & Development
                        </h3>
                        <h2 style={{
                            fontSize: '1.5rem',
                            color: '#2b2b2b',
                            padding: '15px 0 25px 0',
                            margin: '0'
                        }}>My Preferred Stack</h2>
                        <p style={{
                            lineHeight: '1.7',
                            color: '#2b2b2b',
                            padding: '0',
                            margin: '0'
                        }}>As full-time graphic designers and web developers, I feel the technology in which we use to get a job done is always changing. Technology moves so rapidly it's almost impossible to keep up. I take great pride in sticking to a few technologies and truly learning the ins-and-outs of each.</p>
                    
                        <div style={{ 
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                marginTop: '15px'
                            }}>
                            <div className="column">
                                <div className="item">
                                    <Img fixed={data.htmls.childImageSharp.fixed} style={{ marginRight: '10px' }} />
                                    <p>HTML</p>
                                </div>
                                <div className="item">
                                    <Img fixed={data.htmls.childImageSharp.fixed} style={{ marginRight: '10px' }} />
                                    <p>CSS</p>
                                </div>
                                <div className="item">
                                    <Img fixed={data.htmls.childImageSharp.fixed} style={{ marginRight: '10px' }} />
                                    <p>SCSS</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="item">
                                    <Img fixed={data.htmls.childImageSharp.fixed} style={{ marginRight: '10px' }} />
                                    <p>JavaScript</p>
                                </div>
                                <div className="item">
                                    <Img fixed={data.htmls.childImageSharp.fixed} style={{ marginRight: '10px' }} />
                                    <p>React</p>
                                </div>
                                <div className="item">
                                    <Img fixed={data.htmls.childImageSharp.fixed} style={{ marginRight: '10px' }} />
                                    <p>Gatsby</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}

export default MyTech