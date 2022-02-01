import React from "react";

const Activities = ({mensage}) => {
    return(
        <div 
            className='textHTML'
            dangerouslySetInnerHTML={{ __html: mensage }} 
        />
    )
}
export default Activities;