export default (user = [], action) => {
    switch(action.type){
        case "GET_USER":
            return action.payload;
        case "add_avatar_to_user":
            return action.payload;
        default:
            return user;
    }
}