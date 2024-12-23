import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard} from "../../components/ProductCard/ProductCard.jsx";
import s from './ProductPage.module.sass'


export const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/');
                setProducts(response.data.items);
            } catch (err) {
                console.log('Ошибка загрузки товаров:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <p>Загрузка товаров...</p>;

    return (
        <div className={s.productList}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
