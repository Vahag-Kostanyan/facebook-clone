import axios from "axios";
const backURL = process.env.REACT_APP_API_URL;

export const uploadAvatar = (req) => axios.post(backURL + "/api/photo/uploadAvatar", req);
