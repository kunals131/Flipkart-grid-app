import { createServerInstance } from "../utils/serverInstance";



export const fetchAllProductsAPI = async(token)=>{
    const serverInstance = createServerInstance(token);
    const result  = await serverInstance.get('/product');
    return result;
}


export const fetchAllSellerProductsAPI = async(id,token)=>{
    const serverInstance = createServerInstance(token);
    const result = await serverInstance.get(`/product/sellerProduct/${id}`);
    return result;
}
export const addSellerProductAPI = async(data,token)=>{
    const serverInstance = createServerInstance(token);
    const result = await serverInstance.post(`/product`,data);
    return result;
}

export const editSellerProductAPI = async(updatedData,token)=>{
    const serverInstance = createServerInstance(token);
    const result = await serverInstance.post(`/product/${updatedData._id}`);
    return result;
}