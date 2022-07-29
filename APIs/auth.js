import { createServerInstance } from "../utils/serverInstance";


export const loginUserAPI = async(data)=>{
    const serverInstance = createServerInstance('');
    const result = await serverInstance.post('/auth/login', data);
    return result;
}

export const signUpUserAPI = async(data)=>{
    const serverInstance = createServerInstance('');
    const result = await serverInstance.post('/auth/createUser', data);
    return result;
}

export const checkAuthAPI = async()=>{
    const serverInstance = createServerInstance('');
    const result = await serverInstance.get('/auth/getUser');
    return result;
}