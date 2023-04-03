import * as api from "../api/photo"

export const uploadAvatar = (req) => async (dispatch) => {
    const res = await api.uploadAvatar(req);
    const data = res.data.user;

    dispatch({type: "add_avatar_to_user", payload: data});
}