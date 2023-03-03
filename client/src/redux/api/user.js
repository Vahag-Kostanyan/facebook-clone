import axios from "axios";

const backURL = process.env.REACT_APP_API_URL;

console.log(process.env);

export const getUser = () => axios.get(backURL + "/api/users");


export const SignUp = (userData) => axios.post(backURL + "/api/signUp", userData)