import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    const response = fetch("http://localhost:8080/api/books").then((res) =>
        res.json()
    )
    return response
})

const booksSlice = createSlice({
    name: "books",
    initialState: {
        books: null,
        isLoading: false,
    },
    reducers: {
        addBooks: (state, action) => {
            state.books = [action.payload]
        },
    },
    extraReducers: {
        [fetchBooks.pending]: (state) => {
            state.isLoading = true
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.isLoading = false
            state.books = action.payload
        },
        [fetchBooks.rejected]: (state) => {
            state.isLoading = false
        },
    },
})

export const { addBooks } = booksSlice.actions

export default booksSlice.reducer
