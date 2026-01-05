import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchProvider from './context/search-context'

import Navigation from './pages/navigate/navigation'
import Home from './pages/home/home'
import Favourites from './pages/favourites/favourite'
import Detail from "./pages/details/details";

const FoodReceipes = () => {
    return (

        <SearchProvider>

            <div className="m-2 flex flex-col gap-2">

                <BrowserRouter>

                    <Navigation />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/favourites' element={<Favourites />} />
                        <Route path='/recipe-item/:id' element={<Detail />} />
                    </Routes>

                </BrowserRouter>
            </div>

        </SearchProvider>
    )
}

export default FoodReceipes;