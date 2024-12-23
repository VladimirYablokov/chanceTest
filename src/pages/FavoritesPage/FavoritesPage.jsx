import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../redux/slices/FavoritesSlice.js";
import s from './FavoritesPage.module.sass'
import {Button} from "../../UI/Button/Button.jsx";

export const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => (state.favorites.favorites));

    const handleRemove = (id) => {
        dispatch(removeFromFavorites(id));
    };
    return (
        <div className={s.favoritesPage}>
            <h2>Избранное</h2>
            {favorites.length === 0 ? (
                <p>У вас нет товаров в избранном.</p>
            ) : (
                <ul>
                    {favorites.map((product) => (
                        <li key={product.id}>
                            <div className='product-item'>
                                <p>{product.name}</p>
                                <Button onClick={() => handleRemove(product.id)}>Удалить из избранного</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
