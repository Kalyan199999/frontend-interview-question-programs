import { useRef } from "react"

const containers = [
    {
        id:1,
        label:"First Card",
        style:"w-full h-60 text-center text-white bg-green-500"
    },
    {
        id:2,
        label:"Second Card",
        style:"w-full h-60 text-center text-white bg-gray-500"
    },
    {
        id:3,
        label:"Third Card",
        style:"w-full h-60 text-center text-white bg-blue-500"
    },
    {
        id:4,
        label:"Fourth Card",
        style:"w-full h-60 text-center text-white bg-pink-500"
    },
    {
        id:5,
        label:"Fifth Card",
        style:"w-full h-60 text-center text-white bg-black"
    }
]

const ScrollParticularSection = () => 
{
    const ref = useRef(null)

    const handleScrollToSection = ()=>
    {
        const top = ref.current.getBoundingClientRect()

        // console.log(top);

        window.scroll(
            {
                top:top.top,
                behavior:"smooth"
            }
        )
        // console.log(top);
        
    }
    return(
        <div className="flex flex-col gap-3 border-2 border-brown-500 p-4 items-center">

            <h1 className="text-blue-500 text-xl">Scroll to Particular section</h1>

            <button 
                onClick={handleScrollToSection}
                className="outline-none bg-blue-500 p-2 text-white rounded-md"
            >Scroll</button>

            {
                containers.map( (item)=>
                {
                    return(
                        <div
                            key={item.id}
                            className={item.style}
                            ref={item.id === 5 ? ref : null}
                        >
                            {item.label}
                        </div>
                    )
                }
                    
                ) 
            }
        </div>
    )
}

export default ScrollParticularSection