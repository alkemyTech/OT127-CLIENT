import React from "react";

const Activity = ({ message }) => {
    return(
        <div 
            className='textHTML'
            dangerouslySetInnerHTML={{ __html: message }} 
        />
    )
}
export default Activity;
