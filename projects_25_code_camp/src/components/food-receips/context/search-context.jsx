import { createContext , useState , useEffect } from "react";

export const SearchContext = createContext( null );

const SearchProvider = ({children})=>
{
    const [ searchParam , setSearchParam ] = useState( "banana" )
    const [ error , setErr ] = useState( "" )
    const [ loading , setLoading ] = useState( false )
    const [ recipes , setRecipes ] = useState( [] )
    const [ recepipeDetails , setReceipeDetails ] = useState( {} )
    const [ favourites , setFavourites] = useState([])

    const handleSubmit = async ()=>
    {
        try 
        {
            setLoading(true)
            const url = "https://forkify-api.herokuapp.com/api/v2/recipes"

            const response = await fetch( `${url}?search=${searchParam}` )
            const data = await response.json()

            if( data?.data?.recipes )
            {
                setRecipes(data.data.recipes)
            }
            setErr("")
            
            setSearchParam("")
        } 
        catch (err) 
        {
            console.log(err);
            setErr(err.message)
        }
        finally
        {
            setLoading(false)
        }
    }

    const handleAddToFavorite  = ( CurrentItem )=>
    {
        let copyFavourites = [ ...favourites ];
        const index = copyFavourites.findIndex( item => item.id === CurrentItem.id )

        if( index === -1 )
        {
            copyFavourites.push( CurrentItem )
        }
        else
        {
            copyFavourites.splice( index , 1 )
        }

        setFavourites( copyFavourites )
    }

    // console.log(favourites);
    

    useEffect(()=>{handleSubmit()} , [])

    return(
        <SearchContext.Provider 
            value={{
                searchParam,
                setSearchParam,
                handleSubmit,
                loading,
                error,
                recipes,
                recepipeDetails, 
                setReceipeDetails,
                favourites,
                handleAddToFavorite,
            }}
        >
            {children}

        </SearchContext.Provider>
    )
}

export default SearchProvider;