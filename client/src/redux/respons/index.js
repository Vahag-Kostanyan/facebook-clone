import { combineReducers } from "redux";
import post from "./post";
import user from "./User";
import { search } from "./search";
export default combineReducers({
     user: user,
     post: post,
     search: search
});