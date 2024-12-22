import { createSlice } from '@reduxjs/toolkit';

const getInitialBasket = () => {
    const storedBasket = localStorage.getItem('basket');
    return storedBasket ? JSON.parse(storedBasket) : [];
}

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: getInitialBasket(),
    },
    reducers: {
        addToBasket: (state, action) => {
            if(!state.basket.some((product) => product.id === action.payload.id)) {
                state.basket = [...state.basket, action.payload];
                localStorage.setItem('basket', JSON.stringify(state.basket));
            }
        },
        removeFromBasket: (state, action) => {
            state.basket = state.basket.filter((product) => product.id !== action.payload);
            localStorage.setItem('basket', JSON.stringify(state.basket));
        },
    },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;
export default basketSlice.reducer;