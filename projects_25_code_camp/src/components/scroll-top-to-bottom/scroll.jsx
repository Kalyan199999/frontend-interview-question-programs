
import { useRef } from "react"
import useFetch from "../custom-hooks/fetching"


const Scroll = ()=>
{
    const { data , error , loading } = useFetch("https://dummyjson.com/posts?limit=100")

    const topButton = useRef(null)
    const bottomButton = useRef(null)

    const handleScrollToTop = ()=>
    {
        // window.scroll(
        //     {
        //         top:1500,
        //         // left:0,
        //         behavior:'smooth'
        //     }
        // )

        topButton.current.scrollIntoView({behavior:'smooth'})
    }

    const handleScrollToBottom = ()=>
    {
        bottomButton.current.scrollIntoView({behavior:'smooth'})
    }
    
    if( loading ) return <div>Loading.................</div>

    if( error ) return <h1 className="text-red-500">{error}</h1>

    return(
        <div className="border-2 border-pink-500 p-5">
            {
                    <div className="flex flex-col gap-2 items-center">

                        <h1 className="text-blue-700 text-xl">Scroll top bottom</h1>

                        <button 
                            ref={topButton}
                            onClick={handleScrollToBottom}
                            className="outline-none bg-green-500 text-white p-2 rounded-md"
                        >
                            Scroll Bottom</button>

                        <ul >
                            {
                                data.posts.map( (item)=>{
                                    return(
                                        <li 
                                            key={item.id}
                                            className="p-1 border-2 border-gray-600"
                                        >
                                            {item.title}
                                        </li>
                                    )
                                } )
                            }
                        </ul>

                        <button
                            ref={bottomButton}
                            className="outline-none bg-green-500 text-white p-2 rounded-md"
                            onClick={handleScrollToTop}
                        >Scroll Top</button>

                    </div>
            }
        </div>
    )
}

export default Scroll