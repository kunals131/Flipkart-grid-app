import { actionTypes } from "./constants"

const initialState = {
    loading : false,
    items : [],
    total : 0

}

const cartReducer = (state=initialState,action)=>{
    switch(action.type) {
        case actionTypes.SET_LOADING : return {...state,loading : action.payload};
        case actionTypes.ADD_ITEMS_TO_CART : return {...state, items : [...state.items,action.payload], total : state.total+action.payload.cost}
        case actionTypes.REMOVE_ITEMS_FROM_CART : return {...state, items : state.items.filter(it=>it._id!==action.payload._id), total : state.total-action.payload.cost}
        case actionTypes.SET_CART : return {...state,items : action.payload}
        default : return state
    }
}

export default cartReducer;