import { useState,useEffect,useRef } from "react";

const Counter = ()=>
{
    const [ value , setValue ] = useState(0);
    const counter = useRef(0)
    
    console.log("re-rendered!");

    useEffect( ()=>{ counter.current = counter.current + 1 }  )
    
    return(
        <div>
            <div className="counter-value">
                <button onClick={()=>{setValue(prev=>prev-1)}}>-</button>
                <h3>Current value:{value}</h3>
                <button onClick={()=>{setValue(prev=>prev+1)}}>+</button>
                <h3>Component re-rendered: {counter.current}</h3>
            </div>

        </div>
    )
}

export default Counter;