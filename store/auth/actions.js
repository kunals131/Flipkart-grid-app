import { loginUserAPI, signUpUserAPI } from "../../APIs/auth"
import { actionTypes } from "./constants"

export const setAuthLoading = (state)=>{
    return {
        type : actionTypes.SET_AUTH_LOADING,
        payload : state
    }
}

export const setAuthDetails = (data)=>{
    return {
        type : actionTypes.SET_AUTH_DETAILS,
        payload : data
    }
}

export const loginUser = (formData)=> async (dispatch,getState)=>{
    try {
        const userData = loginUserAPI(formData);
        console.log(userData);
    }catch(err) {
        console.log(err);
    }
}

export const signUpUser = (formData)=>async(dispatch,getState)=>{
    try {
        const result = await signUpUserAPI(formData);
        console.log(result);
    }catch(err) {
        console.log(err);
    }
}