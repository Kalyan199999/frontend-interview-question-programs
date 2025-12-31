import { useRef } from "react"
import './style.css'

const InputFocus = ()=>
{
    const ref = useRef(null);

    console.log(ref);
    // console.log("kalyan");
    

    const handleClick = ()=>
    {
        console.log(ref);
        ref.current.focus();
        
    }

    return(
        <div className="input-container">
            <input 
                ref={ref} 
                type="text" 
            />
            <button onClick={handleClick}>Focus</button>
        </div>
    )
    
}

export default InputFocus