import { fetchAllOrderAPI, placeOrderAPI } from "../../APIs/order";
import { setCart } from "../cart/actions";
import { actionTypes } from "./constants";


export const setOrderLoading = (state)=>{
    return {
        type : actionTypes.SET_LOADING,
        payload : state
    }
}

export const addOrder = (data)=>{
    return {
        type : actionTypes.ADD_ORDER,
        payload : data
    }
}

export const editOrder = (updatedData)=>{
    return {
        type : actionTypes.EDIT_ORDER,
        payload : updatedData
    }
}

export const setAllOrders = (orders)=>{
    return {
        type : actionTypes.SET_ALL_ORDERS,
        payload : orders
    }
}

export const placeOrder = (form, setStep)=>async(dispatch,getState)=>{
    const cartItems = getState().cart.items;
    const products = cartItems.map(c=>c._id);
    try {
        dispatch(setOrderLoading(true));
        const result = await placeOrderAPI({...form,productId : products});
        dispatch(addOrder(result.data.order));
        if (setStep) setStep(2);
        dispatch(setCart([]));
    }catch(err) {
        console.log(err);
    }finally {
        dispatch(setOrderLoading(false));
    }
}

export const fetchAllOrders = ()=>async(dispatch,getState)=>{
    try{
        dispatch(setOrderLoading(true));
        const result = await fetchAllOrderAPI();
       dispatch( setAllOrders(result.data.orders));
    }catch(err) {
        console.log(err);
    } finally{
        dispatch(setOrderLoading(false));
    }
}