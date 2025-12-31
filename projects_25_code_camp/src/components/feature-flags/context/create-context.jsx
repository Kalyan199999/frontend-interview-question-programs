import { createContext , useEffect, useState } from "react";
import featureFlagsDataServiceCall from '../data.js'

export const FeatureFlagContext = createContext( null );

const FeatureFlagGlobalState = ({children})=>
{
    const [ loading , setLoading ] = useState( false );
    const [ enableFlags , setEnableFlags ] = useState( { } );

    const fetch = async ()=>
    {
        try 
        {
            setLoading( true );

            const res = await featureFlagsDataServiceCall();
            // console.log(res);
            setEnableFlags(res)
        } 
        catch (error) 
        {
            console.log(error);
            
        }
        finally
        {
            setLoading( false );
        }
    }

    useEffect( ()=>{fetch()} , [])

    return(
        <FeatureFlagContext.Provider value={ {loading ,enableFlags} }>
            {children}
        </FeatureFlagContext.Provider>
    )
}

export default FeatureFlagGlobalState;