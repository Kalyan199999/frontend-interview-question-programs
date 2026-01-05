import { useEffect , useRef } from 'react'

import './style.css'


const Window1 = ()=>
{
    const parent = useRef(null)
    const child = useRef(null)

    useEffect(()=>{
        // console.log(window.scroll(0,300));
        // console.log(parent.current);
        console.log( `Height of parent component is:${parent.current.offsetHeight}`);
        
    } , [])

    const handleClick = ()=>
    {
        // console.log(window.innerHeight);
        // console.log(child.current.offsetHeight);
        // window.scrollTo(0,child.current.offsetHeight+window.innerHeight);
        // console.log(window.screen.availWidth);
        // window.resizeTo( window.screen.availWidth / 2, window.screen.availHeight / 2)
        // window.scrollBy(0, parent.current.offsetHeight+child.current.offsetHeight)
        
    }

    return(
        <div className="window-container flex" ref={parent}>

            <button 
                onClick={()=>handleClick()}
                className='button'
            >scroll</button>

            <div className="child-container bg-red">child-1</div>
            <div className="child-container bg-green">child-2</div>
            <div ref={child} className="child-container bg-blue">child-3</div>

        </div>
    )
}

export default Window1