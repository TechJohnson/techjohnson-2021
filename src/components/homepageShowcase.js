import React from "react"
import { Link } from "gatsby"
import Typewritter from 'typewriter-effect'
import BlueBtn from "./blueBtn"

const Showcase = (props) => {
    
    return (
        <div className="container">
            <div className='showcase'>
                <h2>
                    <Typewritter 
                        options={{
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("Design.")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Develop.")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Repeat.")
                            .pauseFor(1000)
                            .start();
                        }}
                        /> 
                </h2>
                <h1>
                    I create <span>modern</span> websites that help you grow
                </h1>
                <div className="connect">
                    <Link to={'/contact'}>
                    <BlueBtn buttonText="Let's Chat" />
                    </Link>
                    <Link className="showcase-project" to={'https://dribbble.com/techjohnson'} target="_blank" rel="noopener noreferrer nofollow">View my recent projects</Link>
                </div>
            </div>
        </div>
    )

}

export default Showcase