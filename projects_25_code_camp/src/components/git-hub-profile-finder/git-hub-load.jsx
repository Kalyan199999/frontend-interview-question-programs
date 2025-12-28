import { useState , useEffect } from 'react';
import axios from 'axios'

import Profile from './profile.jsx'


const GitHubLoad = ()=>
{
    const [ data , setData ] = useState( null )
    const [err , seterr] = useState( "" )
    const [useName , setUserName] = useState( 'Kalyan199999')

    const fetchData = async ()=>
    {
        try
        {
            const response = await axios.get( `https://api.github.com/users/${useName}`)
            console.log(response.data);
            setData(response.data)
            seterr("")
        }
        catch(err)
        {
            console.log(err)
            seterr(err.message)
        }
    }

    useEffect(()=>{ 
        fetchData()
        setUserName("")
    } , [])

    const handleClick = ()=>
    {
        fetchData()
        setUserName("")
    }

    return(
        <div
            className='flex flex-col gap-2 items-center border-2 border-yellow-500'
        >
            <div className='flex flex-row gap-2'>

                <input 
                    type="text" 
                    className='border-2 border-gray-400 w-60 outline-none rounded-lg p-1'
                    placeholder='Enter git-hub profile'
                    value={useName} 
                    onChange={(e)=>setUserName(e.target.value)} 
                />

                <button
                    className='outline-none bg-green-600 text-white p-1 rounded-lg' 
                    onClick={handleClick}   
                >submit</button>

            </div>

                <Profile user={data} error={err} />
                
            </div>
    )

}

export default GitHubLoad