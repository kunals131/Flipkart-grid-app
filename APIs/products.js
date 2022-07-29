import { createServerInstance } from "../utils/serverInstance";



export const fetchAllProductsAPI = async(token)=>{
    const serverInstance = createServerInstance(token);
    const result  = await serverInstance.get('/product');
    return result;
}


