import {useLocalStorage} from './useLocalStorage'

const Themes = ()=>
{
    const [ mode , setMode ] = useLocalStorage( 'theme' , 'dark' )

    const chnageTheme = ()=>
    {
        setMode( mode === 'light' ? 'dark' : 'light' )
    }

    return(
        <div className={`w-full h-52 border-2 border-gray-400 ${ mode === 'light' ? 'bg-white':"bg-black" } flex flex-col items-center justify-center gap-2`}>

            <p className="text-2xl text-green-700">This is component theme change using custom hook</p>

            <button
                className={`outline-none text-blue-400 p-2 rounded-md ${ mode === 'light' ? 'bg-black':"bg-white" }`}
                onClick={chnageTheme}
            >
                change theme
            </button>

        </div>
    )
    
}

export default Themes