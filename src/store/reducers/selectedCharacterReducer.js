import { SELECT_CHARACTER } from "../types";

export default function(state = {}, action) {
    switch (action.type) {
        case SELECT_CHARACTER:
            return {...state, ...action.payload };
        default:
            return state;
    }
}