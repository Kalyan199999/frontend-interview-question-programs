import { useState,useRef } from "react";
import useOnClickOutside from './use-onclick-out-side'

const ShowHideData = ()=>
{
    const [ showData , setShowData ] = useState(false);
    const reference = useRef();

    useOnClickOutside( reference , ()=> setShowData(false)  )

    return(
        <div className="flex flex-col  items-center w-full h-52 border-2 border-red-600">
            {
                showData ? 
                    <div ref={ reference } className="border-2 border-blue-500 p-3">

                        <h1 className="font-bold text-2xl">Showing the data by clicking the button!</h1>
                        <p className="font-thin text-sm">Some random rapargraph about the brain tumors</p>
                        <span>Click anywhere to test the functionality</span>

                    </div>:
                    <button 
                        className="outline-none p-2 bg-blue-500 text-white h-14 w-16 rounded-lg"
                        onClick={()=>setShowData(true)}
                    >Show</button>
            }
        </div>
    )
}

export default ShowHideData