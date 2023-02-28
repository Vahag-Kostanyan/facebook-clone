import * as api  from "../api/user";

export const getUser = () => async (dispatch) => {
    const res  = await api.getUser();
    const data = res.date;
    if(data.status == "error"){
        return data.data;
    }

    dispatch({type: "GET_DATA", payload: data.data})
}