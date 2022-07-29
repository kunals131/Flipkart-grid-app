import { createServerInstance } from "../utils/serverInstance"

export const placeOrderAPI = async(form,token)=>{
    const serverInstance = createServerInstance(token);
    const result = await serverInstance.post('/order',form);
    return result;
}