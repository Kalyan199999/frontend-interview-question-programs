import json from './data.json'
import { useState } from 'react'

function Accordion() {

    const [ openId , setOpenId] = useState( null )

    const handleSingleClick = (id)=>
    {
        setOpenId( openId === id ? null : id )
    }
    
  return (
    <div className='bg-slate-200 flex flex-col items-center gap-1 p-1'>
        <h1>Frequently Asked Question!</h1>
      {
        json.map( (item)=>{
            return (
                <div 
                    key={item.id}
                    className='bg-green-500 text-white w-2/4 p-2 cursor-pointer flex flex-col gap-2'
                >
                    <button 
                        className="bg-green-500 text-white w-full flex justify-between items-center"
                        onClick={ ()=>handleSingleClick(item.id) }
                    >
                        <h1>{item.title}</h1>
                        {
                            openId === item.id ? <h1>-</h1> : <h1>+</h1>
                        }

                    </button>

                    {
                        openId === item.id && 
                        <h1 className='bg-white text-black'>
                            {item.content}
                        </h1>
                    }

                </div>
            )
        } )
      }
    </div>
  )
}

export default Accordion
