import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SidebarFavorites = () => {
    const favorites = useSelector((state) => state.favorites.favorites);

    return (
        <div className="sidebar-favorites">
            <h3>Избранное</h3>
            <ul>
                {favorites.length === 0 ? (
                    <p>Нет товаров в избранном</p>
                ) : (
                    favorites.slice(0, 5).map((product) => (
                        <li key={product.id}>
                            <div className="product-info">
                                <span>{product.name}</span>
                            </div>
                        </li>
                    ))
                )}
            </ul>
            <Link to="/favorites" className="view-all">
                Смотреть все
            </Link>
        </div>
    );
};
