import { loginUserAPI, logoutUserAPI, signUpUserAPI } from "../../APIs/auth"
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

export const loginUser = (formData,router)=> async (dispatch,getState)=>{
    try {
        setAuthLoading(true);
        const userData = await loginUserAPI(formData);
        console.log(userData);
        router.push('/');
        setAuthDetails({user : userData.data.user, isLoggedin : true});
    }catch(err) {
        console.log(err);
    } finally {
        setAuthLoading(false);
    }
}

export const logoutUser = (router)=>async(dispatch,getState)=>{
    try {
        setAuthLoading(true);
        const result = await logoutUserAPI();
        setAuthDetails({user : {}, isLoggedin : false});
        if (router.pathname!=='/' && router.pathname!=='/auth') return router.push('/auth');
    }catch(err) {
        console.log(err);
    } finally {
        setAuthLoading(false);
         
    }
}


// export const setUserData = (formData,router)=>async (dispatch,getState)

export const signUpUser = (formData)=>async(dispatch,getState)=>{
    try {
        setAuthLoading(true);
        const result = await signUpUserAPI(formData);
        console.log(result);
    }catch(err) {
        console.log(err);
    } finally {
        setAuthLoading(false);
    }
}