import { useState,useTransition,useEffect } from "react"

const FetchData = ()=>
{
    const [ products , setProducts ] = useState([])
    const [ limit , setLimit ] = useState(5)
    const [isLoading , startTransition ] = useTransition()

    const fetching = async ()=>{
        try 
        {

            const response = await fetch(`https://dummyjson.com/products?limit=${limit}`)
            const data = await response.json()

            setProducts(data.products)
        } 
        catch (error) 
        {
            console.log(error.mesage);
            
        }
    }

    useEffect(()=>{fetching()} , [])

    const handleChange = (e)=>
    {
        const newLimit = e.target.value;
        setLimit(newLimit)

        startTransition( ()=>
        {
            fetching()
        })

    }

    return(
        <div className="data-fetch">
            <input type="number" value={limit} onChange={(e)=>handleChange(e)} />

            {
                isLoading ? <h1>Loading......</h1>:
                <div>
                    {
                         products.map( (item)=>
                        {
                            return(
                                <p key={item.id}>{item.title}</p>
                            )
                        } )
                    }
                </div>
            }
        </div>
    )

}

export default FetchData