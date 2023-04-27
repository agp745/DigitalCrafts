import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getUsersAPI } from "../api"

//thunk
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await getUsersAPI()
    return response.data
})

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
        },
        [fetchUsers.rejected]: (state) => {
            state.isLoading = false
        },
    },
})

export default usersSlice.reducer
