import { useState } from "react";

const LightDarkMode = ()=>
{
    const [color , setColor ] = useState("light")

    const chnageTheme = ()=>
    {
        setColor( color === 'light' ? 'dark':'light' )
    }

    return(
        <div className={`w-full h-52 border-2 border-gray-400 ${ color === 'light' ? 'bg-white':"bg-black" } flex flex-col items-center justify-center gap-2`}>

            <p className="text-2xl text-green-700">This is component theme change</p>

            <button
                className={`outline-none text-blue-400 p-2 rounded-md ${ color === 'light' ? 'bg-black':"bg-white" }`}
                onClick={chnageTheme}
            >
                change theme
            </button>

        </div>
    )
}

export default LightDarkMode;