import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ProductPage} from "./pages/ProductPage/ProductPage.jsx";
import {FavoritesPage} from "./pages/FavoritesPage/FavoritesPage.jsx";
import {SidebarFavorites} from "./components/SidebarFavorites/SidebarFavorites.jsx";
import {BasketPage} from "./pages/BasketPage/BasketPage.jsx";
import {SidebarBasket} from "./components/SidebarBasket/SidebarBasket.jsx";
import './App.css'

function App() {
  return (
    <>
        <Router>
            <div className="app">
                <SidebarFavorites/>
                <SidebarBasket/>
                <Routes>
                    <Route path="/" element={<ProductPage/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}/>
                    <Route path="/basket" element={<BasketPage/>}/>
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default App
