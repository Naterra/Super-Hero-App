import { combineReducers } from "redux";

import charactersReducer from "./charactersReducer";
import comparisonViewReducer from "./comparisonViewReducer";
import searchReducer from "./searchReducer";


const appReducer = combineReducers({
  comparisonView: comparisonViewReducer,
  search: searchReducer,
  characters: charactersReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    state = initialState;
  }
  if (action.type === "LOG_OUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
