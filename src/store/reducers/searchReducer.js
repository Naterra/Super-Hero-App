import { SET_SEARCH_RESULT } from "../types";

export default function(state = {}, action) {
    switch (action.type) {
        case SET_SEARCH_RESULT:
            return {...state, result: action.payload };
        default:
            return state;
    }
}