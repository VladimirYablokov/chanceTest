import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../../redux/slices/BasketSlice.js";
import s from './BasketPage.module.sass'
import {Button} from "../../UI/Button/Button.jsx";

export const BasketPage = () => {
    const dispatch = useDispatch();
    const basket = useSelector((state) => (state.basket.basket));

    const handleRemove = (id) => {
        dispatch(removeFromBasket(id));
    };
    return (
        <div className={s.basketPage}>
            <h2>Корзина</h2>
            {basket.length === 0 ? (
                <p>У вас нет товаров в корзине.</p>
            ) : (
                <ul>
                    {basket.map((product) => (
                        <li key={product.id}>
                            <div className={s.productItem}>
                                <p>{product.name}</p>
                                <Button onClick={() => handleRemove(product.id)}>Удалить из карзины</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
