import React from "react"

const Showcase = (props) => {

    return (
        <div className='showcase'>
            <h2>
                {props.pageSubTitle}
            </h2>
            <h1>
                I create <span>modern</span> websites that help you grow
            </h1>
        </div>
    )

}

export default Showcase