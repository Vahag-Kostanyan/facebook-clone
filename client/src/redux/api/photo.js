import axios from "axios";
const backURL = process.env.REACT_APP_API_URL;

const config = {
    headers: {
        "x-access-token": ""
    }
};


export const uploadAvatar = async (req) => {
    config.headers["x-access-token"] = req.token;
    
    const data = await axios.post(backURL + "/api/photo/uploadAvatar", {avatar: req.avatar}, config);
    return data;
};


export const uploadCoverPhoto = async (req) => {
    config.headers["x-access-token"] = req.token;
    
    const data = await axios.post(backURL + "/api/photo/uploadCoverPhoto", {cover: req.cover}, config);
    return data;
};


export const removeCoverPhoto = async (token) => {
    config.headers["x-access-token"] = token;
    
    const data = await axios.post(backURL + "/api/photo/removeCoverPhoto", {}, config);
    return data;
};


export const AddPost = async (req) => {
    config.headers["x-access-token"] = req.token;
    
    const data = await axios.post(backURL + "/api/photo/addPost", {data: req.data}, config);
    return data;
};