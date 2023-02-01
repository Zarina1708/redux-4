import { types } from "./types"



const initialState = {
    
    result: 0,
}


export default function reducer (state = initialState, action) {
    switch(action.type) {
        case types.SET_RESULT: 
            return {...state, result: action.payload}
        default:
            return state
    } 
}