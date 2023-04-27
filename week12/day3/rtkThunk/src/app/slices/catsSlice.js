import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getCatPictures } from "../api"

export const fetchCatPictures = createAsyncThunk(
    "cats/fetchCatPictures",
    async () => {
        const response = await getCatPictures()
        return response.data
    }
)

const catsSlice = createSlice({
    name: "cats",
    initialState: {
        isLoading: false,
        cats: [],
    },
    reducers: {},
    extraReducers: {
        [fetchCatPictures.pending]: (state) => {
            state.isLoading = true
        },
        [fetchCatPictures.rejected]: (state) => {
            state.isLoading = false
        },
        [fetchCatPictures.fulfilled]: (state, action) => {
            state.cats = action.payload
            state.isLoading = false
        },
    },
})

export default catsSlice.reducer
