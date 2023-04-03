import * as api  from "../api/user";


export const getUser = (token) => async (dispatch) => {
    const res  = await api.getUser(token);
    const data = res.data;

    if(data.status == "error"){
        localStorage.removeItem("token")
        window.location.assign("/login");
    }

    dispatch({type: "GET_USER", payload: data.data})
}


export const SignUp = async (userData) => {
    const  res = await api.SignUp(userData);
    const data = res.data;
    return data;
}

export const LogIn = async (userData) => {
    const  res = await api.LogIn(userData);
    const data = res.data;
    if(data.status == "ok"){
        localStorage.setItem("token", data.token)
        window.location.assign("/");
    }

    return data.massage
}