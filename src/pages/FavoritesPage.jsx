import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../redux/slices/FavoritesSlice.js";

export const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => (state.favorites.favorites));

    const handleRemove = (id) => {
        dispatch(removeFromFavorites(id));
    };
    // console.log("cписок избранного", favorites);
    return (
        <div className="favorites-page">
            <h2>Избранное</h2>
            {favorites.length === 0 ? (
                <p>У вас нет товаров в избранном.</p>
            ) : (
                <ul>
                    {favorites.map((product) => (
                        <li key={product.id}>
                            <div className='product-item'>
                                <p>{product.name}</p>
                                <button onClick={() => handleRemove(product.id)}>Удалить из избранного</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
