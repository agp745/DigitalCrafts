import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import authReducer from "./authSlice"
import favoriteReducer from "./favoriteSlice"
import booksReducer from "./booksSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        favorites: favoriteReducer,
        books: booksReducer,
    },
})
