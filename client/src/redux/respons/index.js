import { combineReducers } from "redux";
import photo from "./photo";
import user from "./User";
export default combineReducers({
     user: user,
     photo: photo
})