import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Solutions = () => {
    const data = useStaticQuery(graphql`
    query {
        digiapps: file(absolutePath: { regex: "/digiapps-logo.png/" }) {
            childImageSharp {
                fixed(height: 75) {
                ...GatsbyImageSharpFixed
                }
            }
        }
        hemp: file(absolutePath: { regex: "/hemp-logo.png/" }) {
            childImageSharp {
                fixed(height: 75) {
                ...GatsbyImageSharpFixed
                }
            }
        }
        jdi: file(absolutePath: { regex: "/jdi-logo.png/" }) {
            childImageSharp {
                fixed(height: 75) {
                ...GatsbyImageSharpFixed
                }
            }
        }
        number: file(absolutePath: { regex: "/number-logo.png/" }) {
            childImageSharp {
                fixed(height: 75) {
                ...GatsbyImageSharpFixed
                }
            }
        }
        rev: file(absolutePath: { regex: "/rev-logo.png/" }) {
            childImageSharp {
                fixed(height: 75) {
                ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)

    return (
        <div className="solutionSection">
            <div className="container">
                <div className="solutions">
                    <p>Solutions built for:</p>
                    <Img fixed={data.digiapps.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                    <Img fixed={data.rev.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                    <Img fixed={data.hemp.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                    <Img fixed={data.number.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                    <Img fixed={data.jdi.childImageSharp.fixed} style={{ padding: 0, margin: 0 }} />
                </div>
            </div>
        </div>
    )

}

export default Solutions