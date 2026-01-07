import { useState , useEffect } from 'react'

import Product from '../utils/product'

const Home = ()=>
{
    const [ loading , setLoading ] = useState(false)
    const [ error , setError ] = useState("")
    const [ products , setProducts ] = useState([])

    const getProducts =async ()=>
    {
        try 
        {
            setLoading(true)
            const response = await fetch("https://dummyjson.com/products")
            const data = await response.json()
            setProducts( data.products )
            setError("")
        } 
        catch (err) 
        {
            setError(err.message)
        }
        finally
        {
            setLoading(false)
        }
    }

    useEffect( ()=>{ getProducts() } , [])

    if( loading ) return <h1>Loading...........</h1>

    if( error ) return <h1 className='text-red-500'>Error : { error }</h1>

    return(
        <div className='m-1 grid grid-cols-3 gap-2'>
            {
                products.length > 0 && 
                products.map( (product) => <Product key={ product.id } item={ product } /> )
            }
        </div>
    )
}

export default Home