import React , {useState} from 'react'
import { FaStar } from "react-icons/fa";

function Rating( {numStars = 5} ) 
{
    numStars = parseInt(numStars)

    const [ rating , setRating ] = useState(0)
    const [ hover , setHover ] = useState(0)

    // console.log([...Array(numStars)])

    // cliked the rating
    const handleClick = (idx)=>
    {
        setRating(idx);
    }

    // mouse enterd the rating
    const handleMouseOver = (idx)=>
    {
        setHover(idx)
    }

    // mouse left the rating
    const handleMouseLeave = ()=>
    {
        setHover(rating);  
    }


  return (
    <div className='flex flex-row gap-1 justify-center'>

        <h1>Rating Stars:</h1>
       {
        [...Array(numStars)].map( (_,idx)=>{
            return(
                <FaStar 
                    key={idx}
                    className={`${idx+1 <= hover || idx+1 <= rating ? 'text-yellow-400' : 'text-gray-300'} cursor-pointer`}
                    size={50}
                    onClick={()=>{ handleClick(idx+1) } }
                    onMouseMove={()=>{handleMouseOver(idx+1)}}
                    onMouseLeave={()=>{handleMouseLeave()}}
                />
            )
        } )
       }

    </div>
  )
}

export default Rating
