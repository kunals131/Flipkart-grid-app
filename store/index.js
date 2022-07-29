
import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducers";
import logger from 'redux-logger'
import cartReducer from "./cart/reducer";


// Reducers imported

const rootReducer = combineReducers({
    auth : authReducer,
    cart : cartReducer
});

export default createStore(rootReducer, applyMiddleware(thunk,logger));