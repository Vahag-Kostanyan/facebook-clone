import axios from "axios";

const backURL = process.env.REACT_APP_API_URL;

const config = {
    headers: {
        "x-access-token": ""
    }
};

export const getUser = async (token) => {
    config.headers["x-access-token"] = token


    const data = await axios.get(backURL + "/api/getUser", config);
    return data
}


export const SignUp = (userData) => axios.post(backURL + "/api/signup", userData)

export const LogIn = (userData) => axios.post(backURL + "/api/login", userData)


export const EditBio = async (req) => {

    config.headers["x-access-token"] = req.token

    const data = await axios.post(backURL + "/api/EditBio", { bio: req.bio }, config);

    return data
}
