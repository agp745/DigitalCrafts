import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: true,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true
        },
        signup: (state, action) => {
            state.isAuth = true
        },
        signout: (state) => {
            state.isAuth = false
        },
    },
})

export const { login, signup, signout } = authSlice.actions

export default authSlice.reducer
