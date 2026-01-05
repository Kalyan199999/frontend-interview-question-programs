import { useContext } from "react"
import { SearchContext } from "../../context/search-context"
import Receipe from '../utils/receipe-item'

const Home = ()=>
{
    const { loading,
            error,
            recipes } = useContext(SearchContext)
    
    if( loading ) return <h1>Loading...</h1>

    if( error ) return <h1 className="text-red-500 text-xl">{error}</h1>

    return(
        <>
            <div className="border-2 border-gray-300 w-full rounded-lg">
                {
                    recipes.length > 0 ? 
                        <div className="grid grid-cols-4 gap-3 p-2">
                            {
                                recipes.map( (item)=> <Receipe key={item.id} item={item} />)
                            }
                        </div> 
                        :
                        <div>
                            <span className="text-2xl text-blue-500">No Items found!</span>
                        </div>
                }
            </div>
        </>
    )
}

export default Home