import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SidebarBasket = () => {
    const basket = useSelector((state) => state.basket.basket);

    return (
        <div className="sidebar-basket">
            <h3>Карзина</h3>
            <ul>
                {basket.length === 0 ? (
                    <p>Нет товаров в корзине</p>
                ) : (
                    basket.slice(0, 5).map((product) => (
                        <li key={product.id}>
                            <div className="product-info">
                                <span>{product.name}</span>
                            </div>
                        </li>
                    ))
                )}
            </ul>
            <Link to="/basket" className="view-all">
                Смотреть все
            </Link>
        </div>
    );
};
