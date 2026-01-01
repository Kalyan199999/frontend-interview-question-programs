import { MyContext  }  from "./create-context"
import ContextProvider from './create-context'

import ThemeProvider from './theme-context'
import Theme from './themes'

import { useContext } from "react"

const WrapContext = ()=>
{
    const {phone,name} = useContext(MyContext)

    console.log(phone);
    
    return(
        <>
            <h1>use Context</h1>
            <h3>Phone:{phone}</h3>
            <h3>name:{name}</h3>
        </>
    )
}

const Wrap = ()=>
{
    return(
        <ContextProvider>
            <ThemeProvider>
                <div className='wrapper'>
                    <WrapContext />
                    <Theme />
                </div>
            </ThemeProvider>
        </ContextProvider>
    )
}

export default Wrap