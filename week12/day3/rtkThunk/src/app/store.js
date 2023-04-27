import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"
import usersReducer from "./slices/usersSlice"
import catsReducer from "./slices/catsSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        cats: catsReducer,
    },
})
