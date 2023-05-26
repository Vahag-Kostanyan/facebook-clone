import axios from "axios";
const backURL = process.env.REACT_APP_API_URL

const config = {
    headers: {
        "x-access-token": localStorage.getItem("token")
    }
};

export const UserSearch = async (search) =>  axios.post(backURL + "/api/userSearch", {search},  config);
