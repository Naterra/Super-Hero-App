import { SET_SELECTED_PROFILE_TYPE } from "../types";

const initialState={
    selectedAlignment:null,
    hero: null,
    villian: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_PROFILE_TYPE:
            return {...state, selectedAlignment: action.payload };
        default:
            return state;
    }
}