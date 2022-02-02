import { authReducer } from "./authReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  authReducer: authReducer,
});

export default allReducer;
