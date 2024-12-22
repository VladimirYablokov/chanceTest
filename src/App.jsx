import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ProductPage} from "./pages/ProductPage.jsx";
import {FavoritesPage} from "./pages/FavoritesPage.jsx";
import {SidebarFavorites} from "./components/SidebarFavorites.jsx";
import {BasketPage} from "./pages/BasketPage.jsx";
import {SidebarBasket} from "./components/SidebarBasket.jsx";
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
