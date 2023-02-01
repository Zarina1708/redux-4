import { types } from "./types";




export const setResult = (result) => {

    return {
        type: types.SET_RESULT,
        payload: result
    }
}