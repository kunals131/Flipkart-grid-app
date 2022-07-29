import axios from 'axios';

export const createServerInstance = (token)=>{
    return axios.create({
        baseURL : `https://flipkart-grid-4.herokuapp.com/api`,
        headers :  {
            auth : token
        },
        withCredentials : true
    });
}