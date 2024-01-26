import { ADD_FIELD, INITIALIZE_STATE } from "./constant";

export const addField = (payload) => {
    return {
        type:ADD_FIELD,
        payload
    }
}

export const initalizeState = payload => {
    return {
        type: INITIALIZE_STATE,
        payload
    }
}