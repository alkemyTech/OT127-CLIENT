import React from 'react'

const Separator = (props) => {
    return (
        <div className='separator' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`
        }} >
            {props.children}
        </div >
    )
}

export default Separator