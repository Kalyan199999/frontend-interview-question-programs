import { MyCart } from '../context/cart-context'
import { useContext } from 'react'


const Product = ( {item} )=>
{
    // console.log(item);

    const { cartProducts,addToCart,removeFromCart } = useContext(MyCart);
    
    
    return(
        <div className="bg-gray-300 p-5 border-2 rounded-xl flex flex-col gap-2">

            <div className="bg-white rounded-xl">
                <img src={item.thumbnail} alt={item.title} className="object-cover h-full w-full overflow-hidden" />
            </div>

            <div className=" ">
                <h1 className="font-bold text-center">{item.title}</h1>
            </div>

            <div className="flex flex-row justify-center">
                <button 
                    className={`${cartProducts.some( (prod)=>prod.id === item.id ) ? "bg-red-400 hover:bg-red-700":"bg-green-400 hover:bg-green-700"}  p-2 text-white rounded-lg`}
                    onClick={()=>{
                        cartProducts.some( (prod)=>prod.id === item.id ) ?  removeFromCart(item.id): addToCart(item) 
                        }}
                >
                    {
                        cartProducts.some( (prod)=>prod.id === item.id ) ? 'Remove from cart' : 'Add to cart'
                    }
                </button>
            </div>

            {
                
            }
            
        </div>
    )
}

export default Product