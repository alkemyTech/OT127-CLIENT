import React from "react";

const Activities = ({Activity}) => {
    return(
        <div 
            className='textHTML'
            dangerouslySetInnerHTML={{ __html: Activity }} 
        />
    )
}
export default Activities;