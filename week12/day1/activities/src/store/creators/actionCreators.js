import * as actionTypes from "../actions/actionTypes"

export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT,
    }
}

export const addItem = (item) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: item,
    }
}
