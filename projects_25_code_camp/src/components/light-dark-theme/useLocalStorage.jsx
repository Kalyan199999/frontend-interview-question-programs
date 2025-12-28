import { useState , useEffect } from 'react'

// custom hook to get and set local storage
export const useLocalStorage = ( key='theme' , defaultValue='light' ) =>
{
    const [ value , setValue ] = useState(
        ()=>{
            let currValue = "";
            try 
            {
                currValue = JSON.parse( localStorage.getItem( key ) ) || String( defaultValue )
            } 
            catch (error) 
            {
                currValue = defaultValue;
            }

            return currValue;
        }
    )

    useEffect( ()=>{
        localStorage.setItem( key , JSON.stringify( value))
    } , [ key , value])

    return [value , setValue];
}