const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1,
            }

        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1,
            }

        case "ADD":
            return {
                ...state,
                counter: state.counter + Number(action.payload),
            }

        case "SUBTRACT":
            return {
                ...state,
                counter: state.counter - action.payload,
            }

        default:
            break
    }

    return state
}

export default reducer
