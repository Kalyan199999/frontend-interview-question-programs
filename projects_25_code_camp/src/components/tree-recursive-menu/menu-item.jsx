import MenuList from "./menu-list";
import { FaPlus,FaMinus } from "react-icons/fa";

import { useState } from "react";

const MenuItem = ({item})=>
{
    console.log(item);

    const [showChildren, setShowChildren] = useState(false);

    const toggleChildren  = ()=>{
        setShowChildren(!showChildren);
    }
    
    return(
        <li>
            <div className="flex flex-row justify-between items-center cursor-pointer bg-red-500 h-10 p-2">
                <p>{item.label}</p>

                <div
                    onClick={toggleChildren}
                >
                    {
                        item.children && ( showChildren ? <FaMinus onClick={toggleChildren } />:<FaPlus onClick={toggleChildren } /> )
                    }
                </div>
                
            </div>
            {
                item.children && item.children.length > 0 && showChildren ? <MenuList list={item.children} /> : null
            }
        </li>
    )
}

export default MenuItem;