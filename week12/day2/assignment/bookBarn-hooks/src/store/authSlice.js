import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    token: localStorage.getItem('token')
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = localStorage.getItem('token')
            state.isAuth = true
        },
        signup: (state, action) => {
            state.token = localStorage.getItem('token')
            state.isAuth = true
        },
        signout: (state) => {
            localStorage.removeItem('token')
            state.token = null
            state.isAuth = false
        },
    },
})

export const { login, signup, signout } = authSlice.actions

export default authSlice.reducer
