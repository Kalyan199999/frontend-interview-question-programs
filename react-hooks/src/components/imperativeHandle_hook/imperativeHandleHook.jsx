import { useState , useRef , useImperativeHandle } from "react"
import './style.css'

const FancyInput = ( {ref} )=>
{
    // console.log(ref);
    
    const [ state , setState ] = useState('')
    const inputRef = useRef(null)

    useImperativeHandle( ref , () => ( {
        focus:()=>inputRef.current.focus(),
        clear:()=>inputRef.current.value = ""
    }))

    return(
        <div>

            <input 
                type="text" 
                className="input-imperative"
                placeholder="Type something.........."
                value={state}
                onChange={(e)=>setState(e.target.value)}
                ref={inputRef}
            />

            <p>Typed: <strong>{state}</strong> </p>

        </div>
    )
}

export default FancyInput