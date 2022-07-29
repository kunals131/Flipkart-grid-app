import { actionTypes } from "./constants"

const initialState = {
    loading : false,
    orders : [],


}


const orderReducer = (state=initialState,action)=>{
    switch(action.type) {
        case actionTypes.SET_LOADING : return {...state,loading : action.payload};
        case actionTypes.SET_ALL_ORDERS : return {...state,orders : action.payload};
        case actionTypes.ADD_ORDER : return {...state, orders : [...state.orders,action.payload]};
        default : return state
    }
}

export default orderReducer;