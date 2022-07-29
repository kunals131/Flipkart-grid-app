
import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducers";
import logger from 'redux-logger'


// Reducers imported

const rootReducer = combineReducers({
    auth : authReducer
});

export default createStore(rootReducer, applyMiddleware(thunk,logger));