import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favorites: [],
}

export const favortiesSlice = createSlice({
    name: "favorties",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites = [...state.favorites, action.payload]
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(
                (book) => book.id !== action.payload.id
            )
        },
    },
})

export const { addFavorite, removeFavorite } = favortiesSlice.actions

export default favortiesSlice.reducer
