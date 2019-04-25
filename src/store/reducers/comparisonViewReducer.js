import { SET_SELECTED_PROFILE_TYPE, SET_VILLAIN, SET_HERO } from "../types";


const initialState={
    selectedAlignment:null,
    hero: null,
    villain: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_PROFILE_TYPE:
            return {...state, selectedAlignment: action.payload };
        case SET_HERO:
            return {...state, hero: action.payload };
        case SET_VILLAIN:
            return {...state, villain: action.payload };
        default:
            return state;
    }
}