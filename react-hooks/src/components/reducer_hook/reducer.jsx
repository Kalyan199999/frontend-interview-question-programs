import { useReducer } from "react"

const countReducer = ( state , action ) =>
{
    console.log(state);
    
    switch(action.type)
    {
        case "INCREMENT":
            return state+action.value
        case "DECREMENT":
            return state-action.value
        case "RESET":
            return action.value
        default:
            return state
    }
}

const Reducer = ()=>
{

    const[ count , dispatch ] = useReducer( countReducer , 0 )
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{dispatch({ type:'DECREMENT' , value:5})}}>-</button>
            <button onClick={()=>{dispatch({type:'INCREMENT' , value:5 })}}>+</button>
            <button onClick={()=>{dispatch({type:'RESET' , value:0})}}>reset</button>
        </div>
    )
}

export default Reducer