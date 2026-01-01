import { useState , useCallback } from 'react'
import Header from './header'


const CallBacks = ()=>
{
    const [ count , setCount ] = useState(0);

    console.log("call back is rendered!");

    // the useCallback hook is used to memoize a function, which means that it will only re-render 
    // the function if the dependencies change.
    const newFun = useCallback( ()=>{} , [] )

    return(
        <div>
            <h1>use call backs</h1>

            <Header newFun={newFun} />

            <h3>Count:{count}</h3>
            <button onClick={()=>setCount(prev=>prev+1)}>++</button>

        </div>
    )
}


export default CallBacks