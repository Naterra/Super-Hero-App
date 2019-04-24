import { LOAD_CHARACTERS } from "../types";

export default function(state = [], action) {
    switch (action.type) {
        case LOAD_CHARACTERS:
            return [...state, ...action.payload ];
        default:
            return state;
    }
}