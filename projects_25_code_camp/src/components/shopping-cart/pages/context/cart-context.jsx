import { createContext , useState } from "react";

export const MyCart = createContext(null);

const CartProvider = ({children})=>
{
    const [ cartProducts , setCart ] = useState([]);

    const addToCart = ( product )=>
    {
        let copy = [ ...cartProducts ];
        const exists = copy.filter( (item)=> item.id === product.id );

        if( exists.length === 0 )
        {
            copy.push(product);
            setCart(copy);
        }
    }

    const removeFromCart = ( id )=>
    {
        const filtreredItems = cartProducts.filter( (item)=> item.id !== id)
        setCart(filtreredItems);
    }

    return(
        <MyCart.Provider value={{ cartProducts , addToCart ,removeFromCart }}>
            {children}
        </MyCart.Provider>
    )
}

export default CartProvider;