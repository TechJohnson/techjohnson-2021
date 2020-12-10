import React from "react"
import Typewritter from 'typewriter-effect'

const Showcase = (props) => {
    
    return (
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
        </div>
    )

}

export default Showcase
