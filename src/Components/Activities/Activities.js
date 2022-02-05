import React from "react";

const Activities = ({ message }) => {
    return(
        <div 
            className='textHTML'
            dangerouslySetInnerHTML={{ __html: message }} 
        />
    )
}
export default Activities;
