import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
    },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
