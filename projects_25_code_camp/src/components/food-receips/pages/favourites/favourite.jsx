import {SearchContext} from '../../context/search-context'
import { useContext } from 'react';
import Receipe from '../utils/receipe-item'

const Favourites = ()=>
{
    const {  favourites } = useContext(SearchContext);
    // console.log(favourites);
    

    return(
        <div className="border-2 border-gray-300 w-full rounded-lg">
                {
                    favourites.length > 0 ? 
                        <div className="grid grid-cols-4 gap-3 p-2">
                            {
                                favourites.map( (item)=> <Receipe key={item.id} item={item} />)
                            }
                        </div> 
                        :
                        <div>
                            <span className="text-2xl text-blue-500">No Items found!</span>
                        </div>
                }
            </div>
    )
}

export default Favourites