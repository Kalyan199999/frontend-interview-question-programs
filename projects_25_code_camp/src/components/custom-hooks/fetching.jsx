import { useState , useEffect } from "react"

const useFetch = ( url , options = {} )=>
{   
    const [ data , setData ] = useState( null )
    const [ error , setError ] = useState( null )
    const [ loading , setLoading ] = useState( true )

    const fetchData = async ()=>
    {
        try 
        {
            setLoading(true);

            const response = await fetch(url , {...options} )

            if( !response.ok )
            {
                throw new Error( `Something went wrong! ${response.statusText}` )
            }

            const result = await response.json()

            setData( result )

            setError("")
        } 
        catch (error) 
        {
            setError(error.message)
        }
        finally
        {
            setLoading( false )
        }
    }

    useEffect(()=>{ fetchData() } , [url])

    return { data , error , loading };
}

export default useFetch