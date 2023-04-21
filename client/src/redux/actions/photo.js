import * as api from "../api/photo"

export const uploadAvatar = (req) => async (dispatch) => {
    const res = await api.uploadAvatar(req);
    if(res.status != 200) return false;

    const data = res.data.data;

    dispatch({type: "upload_avatar", payload: data});
}

export const uploadCoverPhoto = (req) => async (dispatch) => {
    const res = await api.uploadCoverPhoto(req);
    if(res.status != 200) return false
    const data = res.data.data;
    
    dispatch({type: "upload_cover_photo", payload: data})
}

export const removeCoverPhoto = (token) => async (dispatch) => {
    const res = await api.removeCoverPhoto(token);
    if(res.status != 200) return false
    
    dispatch({type: "remove_cover_photo", payload: "remove"})
}

export const AddPost = (req) => async (dispatch) => {
    const res = await api.AddPost(req);
    if(res.status != 200) return false

    dispatch({type: "add_post", payload: res.data.data})
}