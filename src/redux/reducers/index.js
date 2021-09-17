import { combineReducers,createStore } from "redux";

import userReducer from './test';
import numReducer from "./add";
const allReducers = {
    user: userReducer,
    numRed: numReducer,
}

const rootReducer = combineReducers(allReducers)
export default rootReducer