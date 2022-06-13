import { combineReducers } from "redux";
import songReducer from "./songReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	songReducer,
    userReducer
})

export default rootReducer;