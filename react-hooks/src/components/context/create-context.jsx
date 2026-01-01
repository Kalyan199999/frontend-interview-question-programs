import { createContext } from "react";

// Create a context
export const MyContext = createContext();

// context provider
const ContextProvider = ( props )=>
{
    const phone = "+91 1234567890"

    const name = "kalyan"

    return(
        <MyContext.Provider 
            value={{phone,name}}
        >
            {props.children}
            
        </MyContext.Provider>
    )
}

export default ContextProvider;