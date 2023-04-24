import * as actionTypes from "./actions/actionTypes"

const initialState = {
    count: 0,
    todo: ["wash dishes", "run"],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }

        case actionTypes.ADD_ITEM:
            return {
                ...state,
                todo: [...state.todo, action.payload],
            }

        default:
            return state
    }
}
