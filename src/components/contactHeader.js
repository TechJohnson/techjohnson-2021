import React from "react"
import Responsive from "react-responsive"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"


const ContactHeader = () => {
const Desktop = props => <Responsive {...props} minWidth={760} />;
// const Mobile = props => <Responsive {...props} maxWidth={759} />;

const data = useStaticQuery(graphql`
query {
    portrait: file(absolutePath: { regex: "/steven-portrait.webp/" }) {
        childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
    }
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

}
`)

    return (

        <div>

            <Desktop>   
                <div className="contactPage" style={{
                    background: 'linear-gradient(#ffffff, #f4f4f4)',
                }}>
                    <div className="container">
                        {/* Let's Connect */}
                        <div className="contactHeader" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '100px 0'
                        }}>
                            <div className="half" style={{
                                width: '40%'
                            }}>
                                <Img fluid={data.portrait.childImageSharp.fluid} style={{
                                    borderRadius: '550px',
                                    boxShadow: '0 15px 25px rgba(0, 0, 0, 0.10)'
                                }} />
                            </div>
                            <div className="half" style={{
                                width: '60%'
                            }}>
                                <h1>Let's Connect!</h1>
                                <h2>I'm a firm believer in making connections.</h2>
                                <p>Early on in my career, I made it my goal to make connections with everyone I work with. The world is becoming so steril in business communications and I wanted to change that. My goal is to make all my connections personable and friendly. I hate feeling official!</p>
                                <p>With that said, I do like to seperate my general question inquiries from my business inquiries. If you have a general question regarding my services, or if you would like to just connect and have a chat, I would highly encourage you to reach out to me on any social platform.</p>
                                <div className="socialMedia" style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                }}>
                                    <Link to={'https://www.twitter.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">
                                        <Img fixed={data.twitter.childImageSharp.fixed} style={{margin: '10px 20px 0 0px'}} />
                                    </Link>
                                    <Link to={'https://www.instagram.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">
                                        <Img fixed={data.instagram.childImageSharp.fixed} style={{margin: '10px 20px 0 0px'}} />
                                    </Link>                
                                    <Link to={'https://www.youtube.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">
                                        <Img fixed={data.youtube.childImageSharp.fixed} style={{margin: '10px 20px 0 0px'}} />
                                    </Link> 
                                    <Link to={'https://www.linkedin.com/in/techjohnson/'} target="_blank" rel="noopener noreferrer nofollow">
                                        <Img fixed={data.linkedin.childImageSharp.fixed} style={{margin: '10px 20px 0 0px'}} />
                                    </Link> 
                                    <Link to={'https://www.github.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">
                                        <Img fixed={data.github.childImageSharp.fixed} style={{margin: '10px 20px 0 0px'}} />
                                    </Link> 
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Section */}
                    <div className="form">
                        <div className="container">
                            <div style={{
                                background: '#ffffff',
                                boxShadow: '0 15px 25px rgba(0, 0, 0, 0.10)',
                                borderRadius: '10px',
                                padding: '50px',
                            }}>
                                <h2 style={{textAlign: 'center', paddingBottom: '15px'}}>Project Submission Form</h2>
                                <p style={{textAlign: 'center'}}>Are you looking to get started on a new project? If so, fill out the form below and I'll be in contact shortly!</p>
                                
                                <form name="business-inquiry" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field">
                                    <input type="hidden" name="Business Inquiry" value="business_inquiry" />
                                    <div style={{display:'flex', justifyContent: 'space-between', padding: '50px 0 0 0'}}>
                                        <div style={{width: '49%'}}>   
                                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                                <label style={{display: 'flex', flexDirection: 'column', width: '48%', fontSize: '14px', fontWeight: '700'}}>What is your name?<input type="text" name="name" placeholder="John Smith" style={{marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #999999'}} /></label>
                                                <label style={{display: 'flex', flexDirection: 'column', width: '48%', fontSize: '14px', fontWeight: '700'}}>What is your email address?<input type="email" name="email" placeholder="email@email.com" style={{marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #999999'}} /></label>
                                            </div>
                                            <p style={{display: 'flex', flexDirection: 'column', fontSize: '14px', fontWeight: '700', padding: '25px 0 10px 0'}}>What type of work are you inquiring about?</p>
                                            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                                                <div style={{width: '33%', margin: '15px 0'}}>
                                                    <label style={{background: '#fafafa', padding: '10px', borderRadius: '5px'}}><input type="checkbox" name="branding" value="Branding" style={{marginRight: 10}} />Branding</label>
                                                </div>
                                                <div style={{width: '33%', margin: '15px 0'}}>
                                                    <label style={{background: '#fafafa', padding: '10px', borderRadius: '5px'}}><input type="checkbox" name="graphic_design" value="Graphic Design" style={{marginRight: '5px'}} />Graphic Design</label>
                                                </div>
                                                <div style={{width: '33%', margin: '15px 0'}}>
                                                    <label style={{background: '#fafafa', padding: '10px', borderRadius: '5px'}}><input type="checkbox" name="web_development" value="Web Development" style={{marginRight: '5px'}} />Web Development</label>
                                                </div>
                                                <div style={{width: '33%', margin: '15px 0'}}>
                                                    <label style={{background: '#fafafa', padding: '10px', borderRadius: '5px'}}><input type="checkbox" name="strategy" value="Strategy" style={{marginRight: '5px'}} />Strategy</label>
                                                </div>
                                                <div style={{width: '33%', margin: '15px 0'}}>
                                                    <label style={{background: '#fafafa', padding: '10px', borderRadius: '5px'}}><input type="checkbox" name="security" value="Security" style={{marginRight: '5px'}} />Security</label>
                                                </div>
                                                <div style={{width: '33%', margin: '15px 0'}}>
                                                    <label style={{background: '#fafafa', padding: '10px', borderRadius: '5px'}}><input type="checkbox" name="marketing" value="Marketing" style={{marginRight: '5px'}} />Marketing</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{width: '45%'}}>
                                            <p style={{padding: '0 0 25px 0'}}>Tell me as much as you possibly can about your project. The more detail, the better I can serve you!</p>
                                            <label style={{display: 'flex', flexDirection: 'column', fontSize: '14px', fontWeight: '700', margin: '0 0 20px 0'}}>What is your project about?<textarea type="text" name="name" rows="5" placeholder="Hi Steven, I'd love to talk to you about my new project, Web Dev AI. The project is about..." style={{marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #999999'}} /></label>
                                            <input type="file" id="myfile" name="attachment" multiple></input>
                                        </div>
                                    </div>
                                    <button type="submit" style={{width: '100%', textAlign: 'center', background: '#3396EB', border: 'none', color: '#ffffff', borderRadius: '5px', padding: '15px 0', marginTop: '25px'}}>Send</button>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </Desktop>

        </div>

    )

}

export default ContactHeader