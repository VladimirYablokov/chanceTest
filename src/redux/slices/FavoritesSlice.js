import { createSlice } from '@reduxjs/toolkit';

const getInitialFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: getInitialFavorites(),
    },
    reducers: {
        addToFavorites: (state, action) => {
            if (!state.favorites.some((product) => product.id === action.payload.id)) {
                state.favorites = [...state.favorites, action.payload];
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
            }
            console.log("Текущее состояние избранного:", state.favorites);
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter((product) => product.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
