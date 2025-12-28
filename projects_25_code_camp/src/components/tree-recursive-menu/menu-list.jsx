import MenuItem from './menu-item.jsx'

const MenuList = ( { list = [] })=>
{
    
    return(
        <ul
            className='bg-blue-700 flex flex-col gap-1 text-white w-96 m-4 p-1'
        >
            {
                list.length > 0 ? 
                    list.map( (item , idx)=>{
                       return(  <MenuItem item={item} key={idx} />)
                    }) : null
            }
        </ul>
    )
}

export  default MenuList