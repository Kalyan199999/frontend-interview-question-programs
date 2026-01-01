import { createContext , useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children})=>
{
    const [ theme , setTheme ] = useState("dark");

    const changeTheme = ()=>
    {
        if( theme === 'light' )
        {
            setTheme('dark');
        }
        else
        {
            setTheme('light');
        }
    }

    return(
        <ThemeContext.Provider value={{ theme , changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider;