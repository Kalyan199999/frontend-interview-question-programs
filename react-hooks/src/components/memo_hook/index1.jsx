import { useState , useMemo } from "react";

const square = (num)=>
{
    let res = Math.pow( num , 2)
    console.log( "Calculation is done!" );
    return res;
}

const MemoHook = ()=>
{
    const [ number , setNumber ] = useState(0);
    const [ counter , setCounter ] = useState(0);

    // const res = square(number)

    // only renders if the number is changed
    const result = useMemo( ()=>square(number) , [number])

    return(
        <>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <h3>The square of {number} is: {result}</h3>

            <h3>counter:{ counter }</h3>
            <button onClick={()=>setCounter(prev=>prev+1)}>couter++</button>

        </>
    )
}

export default MemoHook;