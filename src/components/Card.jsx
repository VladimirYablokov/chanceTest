import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../redux/slices/FavoritesSlice.js';
import { addToBasket } from '../redux/slices/BasketSlice.js';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.favorites.favorites || []);
    const basket = useSelector((state) => state.basket.basket || []);
    
    const memoizedFavorites = useMemo(() => favorites, [favorites]);
    const memoizedBasket = useMemo(() => basket, [basket]);

    const isProductInList = (productId, list) => list.some((item) => item.id === productId);

    const isInFavorites = isProductInList(product.id, memoizedFavorites);
    const isInBasket = isProductInList(product.id, memoizedBasket);

    const handleAddToFavorites = () => dispatch(addToFavorites(product));
    const handleAddToBasket = () => dispatch(addToBasket(product));

    const isOutOfStock = product.quantity === 0;

    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <p>Цена: {product.price_discount || product.price} руб.</p>
            {product.price_discount && <p className="old-price">Старая цена: {product.price} руб.</p>}
            <img
                src={product.image}
                alt={product.name.split(' ')[1]}
            />
            <button
                onClick={handleAddToFavorites}
                disabled={isInFavorites || isOutOfStock}
            >
                {isOutOfStock
                    ? 'Отсутствует'
                    : isInFavorites
                        ? 'В избранном'
                        : 'Добавить в избранное'}
            </button>
            <button
                onClick={handleAddToBasket}
                disabled={isInBasket || isOutOfStock}
            >
                {isOutOfStock
                    ? 'Отсутствует'
                    : isInBasket
                        ? 'В корзине'
                        : 'Добавить в корзину'}
            </button>
        </div>
    );
};

export default ProductCard;
