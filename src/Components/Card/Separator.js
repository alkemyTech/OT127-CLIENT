import React from 'react'
import "../../sass/components/_separator.scss"

const Separator = (props) => {
    return (
        <div className='separator' style={{ backgroundImage: `url(${props.image})` }} >
            {props.children}
        </div >
    )
}

export default Separator