import React from "react";

const Header = (  )=>
{
    
    console.log("Call back HEADER is rendered!");
    
    return(
        <header>
            <h1>Header</h1>
        </header>
    )
}

// this will make sure only this component is rendered once 
export default React.memo( Header )