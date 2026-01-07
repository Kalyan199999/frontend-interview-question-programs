import { MyCart } from '../context/cart-context'
import { useContext } from 'react'


const MyCartProducts = ()=>
{
    const { cartProducts , removeFromCart } = useContext( MyCart);

    return(
        <>
            {
                cartProducts.length > 0 ? 
                <div 
                    className="grid grid-cols-3 m-2 gap-2"
                >

                    {
                        cartProducts.map( (item)=>{
                            return(
                                <div key={item.id} className='bg-gray-300 p-5 border-2 rounded-xl flex flex-col gap-2'>
                                    <div className="bg-white rounded-xl">
                                        <img src={item.thumbnail} alt={item.title} className="object-cover h-full w-full overflow-hidden" />
                                    </div>

                                    <div className=" ">
                                        <h1 className="font-bold text-center">{item.title}</h1>
                                    </div>

                                    <div className="flex flex-row justify-center">
                                        <button 
                                            className="bg-red-400 hover:bg-red-700 p-2 text-white rounded-lg"
                                            onClick={()=>{removeFromCart(item.id)}}
                                        >Remove</button>
                                    </div>

                                </div>
                            )
                        })
                    }
                    
            
                </div> :
                <h1>No items are added!</h1>
            }
        </>
    )
}

export default MyCartProducts