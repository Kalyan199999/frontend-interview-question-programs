
import { useState } from "react";

const Tabs = ( { tabsContents })=>
{
    console.log(tabsContents);

    const [ currIndex , setIndex ] = useState(0);
    
    return(
        <div className="flex flex-col items-center gap-5 ">

            <div className="flex flex-row gap-1 justify-center">
            {
                // iterate all the tabs in the tabsContents
                tabsContents.map( (item , idx)=>{
                    return(
                        <div 
                            key={item.label}
                            className={`text-white p-2 cursor-pointer hover:bg-violet-500 ${ idx === currIndex ? 'bg-green-700': 'bg-green-400'}`}
                            onClick={()=>setIndex(idx)}
                        
                        > {item.label} </div>
                    )
                })
            }
            </div>

            {
                tabsContents[currIndex] && tabsContents[currIndex].content
            }

        </div>
    )
}

export default Tabs