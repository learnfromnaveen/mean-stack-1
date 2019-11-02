import React from 'react';  

export default function BoilingVerdict({temperature}) { 

    console.log(temperature);

    const message = temperature >= 100 
                    ?"The water would boil" 
                    : "The water would not boil";
    return(
        <p>{message}</p>
    )
}