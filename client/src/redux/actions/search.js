import * as api from "../api/search"


export const UserSearch = (search) => async (despatch) => {

    if(search !== ""){
        const res = await api.UserSearch(search);
        if(res.status != 200) return false;
    
        despatch({type: "USER_SEARCH", payload: res.data})
    }else{
        despatch({type: "USER_SEARCH", payload: []})
    }
}