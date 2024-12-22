import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../redux/slices/BasketSlice.js";

export const BasketPage = () => {
    const dispatch = useDispatch();
    const basket = useSelector((state) => (state.basket.basket));

    const handleRemove = (id) => {
        dispatch(removeFromBasket(id));
    };
    return (
        <div className="basket-page">
            <h2>Корзина</h2>
            {basket.length === 0 ? (
                <p>У вас нет товаров в корзине.</p>
            ) : (
                <ul>
                    {basket.map((product) => (
                        <li key={product.id}>
                            <div className='product-item'>
                                <p>{product.name}</p>
                                <button onClick={() => handleRemove(product.id)}>Удалить из карзины</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
