// import axios from "axios";
import * as types  from '../types';

export const setSelectedProfileType = (type) =>dispatch=>{
    dispatch({ type: types.SET_SELECTED_PROFILE_TYPE, payload: type   });
};
