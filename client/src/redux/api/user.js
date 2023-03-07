import axios from "axios";

const backURL = process.env.REACT_APP_API_URL;


export const getUser = async (token) => {
    const config = {
        headers:{
            "x-access-token": token
        }
      };

    const data = await axios.get(backURL + "/api/getUser", config);
    return data
}


export const SignUp = (userData) => axios.post(backURL + "/api/signup", userData)

export const LogIn = (userData) => axios.post(backURL + "/api/login", userData)