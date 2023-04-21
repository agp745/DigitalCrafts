import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
}
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        add: (state, action) => {
            state.value += action.payload
        },
        subtract: (state, action) => {
            state.value -= action.payload
        },
    },
})

export const { increment, decrement, add, subtract } = counterSlice.actions

export const asyncAdd = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(add(amount))
    }, 1000)
}

export const asyncSubtract = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(subtract(amount))
    }, 1000)
}

export default counterSlice.reducer
