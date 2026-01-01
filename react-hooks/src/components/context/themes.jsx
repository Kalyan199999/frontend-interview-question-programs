import { useContext } from "react"
import { ThemeContext } from './theme-context'
import './style.css'

const Theme = ()=>
{
    const { theme , changeTheme } = useContext(ThemeContext)

    console.log(theme);

    const colors = {
        'light':'blue',
        dark:'black'
    }

    return(
        <div 
            className="theme-container"
            style={{backgroundColor:colors[theme]}}
        >

            <button onClick={changeTheme}>change</button>
        </div>
    )
    
}

export default Theme