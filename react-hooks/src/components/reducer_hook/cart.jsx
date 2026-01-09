import { useReducer } from "react"
import './style.css'

const initialState = []

function cartReducer( prevState , action )
{
    switch( action.type )
    {
        case "ADD":
            return [...prevState , {...action.payload , quentity:1}]
        case "REMOVE":
            return prevState.filter( (item)=> item.id !== action.id )
        case "CLEAR":
            return initialState
        default:
            return prevState
    }
}

const CartReducer = ()=>
{
    const [shoppingCart , cartAction ]= useReducer( cartReducer , initialState );

    const addItem = ( item )=>
    {
        cartAction( {type:"ADD" , payload:item})
    }

    const removeItem = (id)=>
    {
        cartAction({type:'REMOVE',id:id})
    }

    const handleClear = ()=>
    {
        cartAction( {type:'CLEAR'})
    }

    const totalCost = shoppingCart.reduce( (acc , item )=> acc + item.price , 0 )

    return(
        <div className="cart">

            <button onClick={()=>{
                addItem({id:Date.now() , name:`Item_${shoppingCart.length+1}` , price:10})}}
            >Add Item</button>

            <button onClick={handleClear}>Clear</button>

            <h2>total cost:{totalCost}</h2>
            
            <div className="cart-items">

                <div className="item">
                            <p>Name</p>
                            <p>Price</p>
                            <p>Quentity</p>
                            <p>Button</p>
                        </div>
                {
                shoppingCart.map( (item )=>{
                    return(
                        <div key={item.id} className="item">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.quentity}</p>
                            <button onClick={()=>removeItem(item.id)}>remove</button>
                        </div>
                    )
                } )
                }
            </div>
            
        </div>
    )
}

export default CartReducer;