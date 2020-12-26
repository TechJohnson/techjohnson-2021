import React from "react"

const MyTech = () => {

    return (
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
                    <p>this will be an image</p>
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
                </div>
            </div>

        </div>
    )

}

export default MyTech