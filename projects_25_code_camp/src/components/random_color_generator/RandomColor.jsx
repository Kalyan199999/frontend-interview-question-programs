import { useState } from 'react'

function RandomColor() 
{
    const [color, setColor] = useState('#daffaae8')

    const generateHexColor = () => 
    {

        const hexa = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        const len = hexa.length;

        let colorGenerated = "#"

        for(let i=0;i<6;i++)
        {
            const idx = Math.floor( Math.random()*len ) 
            colorGenerated += hexa[ idx ]
        }

        setColor(colorGenerated)
    }

    const generateRgbColor = () => 
    {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    const generateRandomColor = () => 
    {
        Math.random() > 0.5 ? generateHexColor() : generateRgbColor()
    }

  return (
    <div 
        className='w-full h-60 text-white flex flex-col items-center p-2'
        // set the background color to the color generated
         style={
            { backgroundColor: color }
        }
    >

        <div className='flex flex-row gap-1'>
            <button 
                className='bg-gray-500 hover:bg-blue-500 outline-none  rounded-xl cursor-pointer p-2'
                onClick={generateHexColor}
            >
                HEX color
            </button>

            <button 
                className='bg-gray-500 hover:bg-blue-500 outline-none  rounded-xl cursor-pointer p-2'
                onClick={generateRgbColor}
            >
                RGB color
            </button>

            <button 
                className='bg-gray-500 hover:bg-blue-500 outline-none  rounded-xl cursor-pointer p-2'
                onClick={generateRandomColor}
            >
                RANDOM color
            </button>

        </div>

        <h1 className='text-4xl'>{color}</h1>
      
    </div>
  )
}

export default RandomColor
