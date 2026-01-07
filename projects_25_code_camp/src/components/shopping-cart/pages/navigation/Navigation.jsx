import { Link } from "react-router-dom"

const Navigation = ()=>
{
    return(
        <>
            <nav className="flex flex-row justify-between border-2 border-gray-500 p-2 bg-gray-400 text-white">

                <h1 className="font-bold">My Shopping Cart</h1>

                <ul className="flex flex-row gap-2 font-bold text-xl">
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/cart'>cart</Link></li>
                </ul>

            </nav>
        </>
    )
}

export default Navigation