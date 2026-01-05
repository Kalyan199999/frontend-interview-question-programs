import { Link , useNavigate } from "react-router-dom"
import { useContext } from "react"
import { SearchContext } from '../../context/search-context'

const Navigation = ()=>
{
    const { searchParam , setSearchParam , handleSubmit } = useContext(SearchContext);
    const navigate = useNavigate();

    return(
        <nav className="flex flex-row justify-between items-center p-2 bg-green-400 text-white text-sm rounded-lg">

            <h1>Food Receipes</h1>
            
            <div className="flex flex-row gap-2">
                <input 
                    type="text" 
                    name="search"
                    placeholder="search receips"
                    value={searchParam}
                    onChange={(e)=>setSearchParam(e.target.value)}
                    className="w-60 h-8 rounded-lg p-1 text-black outline-none shadow-xl shadow-green-500 focus:shadow-green-800"
                />

                {
                    !searchParam.trim() ? "" : <button 
                                            className="outline-none w-20 bg-green-500 rounded-lg"
                                            onClick={()=>{
                                                handleSubmit()
                                                navigate('/')
                                            }}
                                        >Search</button>
                }
            </div>

            <ul className="flex flex-row gap-4">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/favourites'}>Favourites</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation