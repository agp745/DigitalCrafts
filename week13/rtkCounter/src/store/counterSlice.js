import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += Number(action.payload)
        },
        decrementByAmount: (state, action) => {
            state.count -= action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions


export const asyncIncrement = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

export const asyncDecrement = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(decrementByAmount(amount))
    }, 1000)
}

export default counterSlice.reducer