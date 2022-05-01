import React from "react";

const Card = ({children = null}) => { 

    console.log(children)

    return(
        <div className='phraseContainer'> 
        {children}
        </div>
    );
}

export default Card;