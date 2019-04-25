import { SET_SEARCH_RESULT, RESET_SEARCH_RESULT } from "../types";

export default function(state = {}, action) {
    switch (action.type) {
        case RESET_SEARCH_RESULT:
            return {...state, result: [] };
        case SET_SEARCH_RESULT:
            return {...state, result: action.payload };
        default:
            return state;
    }
}