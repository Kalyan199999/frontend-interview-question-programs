import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Home from './pages/home/home'
import MyCartProducts from './pages/my-cart-products/my-cart'
import Navigation from './pages/navigation/Navigation'

import CartProvider from './pages/context/cart-context'

const Cart = ()=>
{
    return(
        <CartProvider>
            <BrowserRouter>
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/cart" element={<MyCartProducts />}></Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default Cart;