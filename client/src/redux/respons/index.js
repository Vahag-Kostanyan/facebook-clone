import { combineReducers } from "redux";
import post from "./post";
import user from "./User";
export default combineReducers({
     user: user,
     post: post
})