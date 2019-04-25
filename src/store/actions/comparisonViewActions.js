// import axios from "axios";
import * as types  from '../types';

export const setSelectedProfileType = (type) =>dispatch=>{
    dispatch({ type: types.SET_SELECTED_PROFILE_TYPE, payload: type   });
};


export const setHero = (data) =>dispatch=>{
    dispatch({ type: types.SET_HERO, payload: data   });
};

export const setVillain = (data) =>dispatch=>{
    dispatch({ type: types.SET_VILLAIN, payload: data   });
};
