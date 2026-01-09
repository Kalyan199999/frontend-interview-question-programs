import { useRef } from 'react'
import FancyInput from './imperativeHandleHook'

const ImperativeUsage = ()=>
{
    const fancyInputRef = useRef( null );

    return(
        <div className='imperative-handle'>
            <FancyInput ref={fancyInputRef}/>
            
            <button className="button" onClick={()=>fancyInputRef.current.focus()}>Focus</button>
            <button className="button" onClick={()=>fancyInputRef.current.clear()}>UnFocus</button>
        </div>
    )
}

export default ImperativeUsage