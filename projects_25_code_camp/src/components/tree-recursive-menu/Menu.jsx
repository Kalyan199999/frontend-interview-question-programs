import MenuList from './menu-list'

function TreeView( { menu = [] }) {
    
  return <div className='border border-green-500'>
    <MenuList list={menu} />
  </div>
}

export default TreeView