import axios from 'axios'
import { useState,useEffect } from 'react'


const SearchAutoComplete = ()=>
{
    const [ loading , setLoading ] = useState(false)
    const [ data , setData ] = useState([])
    const [ err , setError ] = useState(null)
    const [ name , setName ] = useState("")


    const fetchData = async ()=>
    {
        try 
        {
            setLoading(true)
            const response = await axios.get( `https://dummyjson.com/users` , {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            setData( response.data.users)
            console.log(response.data.users);
            
            setError(null)
            
        } 
        catch (error) 
        {
            setError(error.message)
            
        }
        finally
        {
            setLoading(false)
        }
    }

    useEffect(()=>{fetchData()} , [])


    return(
        <div className='border-2 border-yellow-700 flex flex-col gap-2 p-5'>
            
            <div className='flex flex-row gap-2 justify-center'>
                <input 
                    type="text" 
                    placeholder='Enter user name..'
                    className='outline-none border-2 border-gray-300 p-1 w-3/4 rounded-xl'
                    value={(name)}
                    onChange={(e)=>{setName(e.target.value)}}
                />

                <button 
                    className='outline-none p-2 bg-green-500 hover:bg-green-800 text-white rounded-xl'
                >
                    submit</button>
            </div>

            {
                loading  ? <h1>Loading......</h1> :

                (
                    name.length === 0 ? "" :
                        <div className='flex flex-col gap-1 items-center'>
                                {
                                    data.filter( (user)=> user.firstName.toLowerCase().includes( name.toLowerCase() ) )
                                    .map( (user )=>{
                                        return(
                                            <button
                                                key={user.id}
                                                className='border-2 border-violet-700 p-1 w-1/4'
                                                onClick={()=>setName( user.firstName.toLowerCase() )}
                                            >
                                                {user.firstName}
                                            </button>
                                        )
                                    } )
                                }
                        </div>
                )
            }
        </div>
    )
}

export default SearchAutoComplete