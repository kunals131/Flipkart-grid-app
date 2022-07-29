import { addSellerProductAPI, editSellerProductAPI, fetchAllSellerProductsAPI } from "../../APIs/products"
import { actionTypes } from "./constants"

export const setProductsLoading = (state)=>{
    return {
        type : actionTypes.SET_LOADING,
        payload : state
    }
}

export const setSellerProducts = (products)=>{
    return {
        type : actionTypes.SET_SELLER_PRODUCTS,
        payload : products
    }
}

export const addSellerProductState = (product)=>{
    return {
        type : actionTypes.ADD_SELLER_PRODUCT,
        payload : product
    }
}
export const editSellerProductState = (updatedData)=>{
    return {
        type : actionTypes.EDIT_SELLER_PRODUCT,
        payload : updatedData
    }
}

export const fetchAllSellerProducts = (id)=>async(dispatch,getState)=>{
 try {
    dispatch(setProductsLoading(true));
    const allProducts = await fetchAllSellerProductsAPI(id);
    dispatch(setSellerProducts(allProducts.data.products));
 }catch(err){
    console.log(err);
 } finally{
    dispatch(setProductsLoading(false));

 }   
}
export const addSellerProduct = (data)=>async(dispatch,getState)=>{
 try {
    dispatch(setProductsLoading(true));
    const addedProduct = await addSellerProductAPI(data);
    dispatch(addSellerProductState(data));
 }catch(err){
    console.log(err);
 } finally{
    dispatch(setProductsLoading(false));
 }   
}

export const editSellerProduct = (data)=>async(dispatch,getState)=>{
    try {
        dispatch(setProductsLoading(true));
        const editedProduct = await editSellerProductAPI(data);
        dispatch(editSellerProductState(data));
    }catch(err){
        console.log(err);
    }finally{
        dispatch(setProductsLoading(false));
    }
}
