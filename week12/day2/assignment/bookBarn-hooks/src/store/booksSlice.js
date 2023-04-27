import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    books: null,
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBooks: (state, action) => {
            state.books = [action.payload]
        },
    },
})

export const { addBooks } = booksSlice.actions

export default booksSlice.reducer
