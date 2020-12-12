import React from "react"

const OutlineBtn = (props) => {

    return (
        <button style={{
            background: 'none',
            padding: '1.25rem 4rem',
            marginTop: '25px',
            borderRadius: '5px',
            border: '2px solid #fff',
            color: '#fff',
            fontWeight: '600',
            fontSize: '1rem',
            textTransform: 'uppercase',
        }}>
            {props.buttonText}
        </button>
    )

}

export default OutlineBtn