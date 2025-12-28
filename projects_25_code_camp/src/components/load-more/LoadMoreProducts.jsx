import React , { useState , useEffect } from 'react'
import axios from 'axios'


function LoadMoreProducts() 
{
    const [ data , setData ] = useState( [] )
    const [ page , setPage ] = useState( 1 )
    const limit = 12

    const fetchData = async ()=>
    {
        try 
        {
            const response = await axios.get(  `https://dummyjson.com/products?limit=${limit}&skip=${page === 1 ? 0 : (page-1) * limit }` )

            setData( response.data.products)
            console.log(response.data.products);
        } 
        catch (error) 
        {
            console.log("error");
        }
    }

    useEffect( ()=>{fetchData()} , [page])

  return (
    <div className='flex flex-col gap-2 p-1 border border-red-500'>

        <div 
            className='grid grid-cols-4 gap-4'
        >
            {
                data.map( (item)=>{
                    return(
                        <div 
                            key={item.id}
                            className='border-2 border-gray-200 flex flex-col items-center cursor-pointer'
                        >
                            <img src={item.thumbnail} alt="" className='h-44 w-44' />
                            <h1 >{item.title}</h1>

                        </div>
                    )
                } )
            }
        </div>

        <div className='flex flex-col gap-2 items-center'>
            <button 
                className={`border ${page*limit <= 120 ? 'bg-blue-500' : 'bg-gray-500'} w-44 p-2 rounded-2xl text-lg text-white`}
                onClick={()=>setPage(page+1)}
                disabled={page*limit > 120}
            >
                Load more
            </button>

            {
                page*limit > 120 && (
                    <h1 className='text-red-500'>No more products</h1>
                )
            }
        </div>
      
    </div>
  )
}

export default LoadMoreProducts