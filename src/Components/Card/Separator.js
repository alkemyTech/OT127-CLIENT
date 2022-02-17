import React from 'react'

const Separator = (props) => {
    return (
        <div className='separator' style={{ backgroundImage: `url(${props.image})` }} >
            {props.children}
        </div >
    )
}

export default Separator