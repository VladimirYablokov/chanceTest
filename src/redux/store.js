import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './slices/FavoritesSlice.js';
import basketReducer from './slices/BasketSlice.js';

const store = configureStore({
    reducer:{
        favorites: favoritesReducer,
        basket: basketReducer,
    },
});

export default store;
